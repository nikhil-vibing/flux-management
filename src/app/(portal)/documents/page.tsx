"use client";

import { useState, useMemo } from "react";
import {
  FolderSimple,
  FilePdf,
  FileDoc,
  FileXls,
  Image,
  File,
  CaretRight,
  DownloadSimple,
  ArrowSquareOut,
  GridFour,
  ListBullets,
  MagnifyingGlass,
  FolderOpen,
} from "@phosphor-icons/react";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { mockDocuments, folderTree } from "@/data/mock-documents";
import type { Document, FolderNode } from "@/data/types";

const fileIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  pdf: { icon: <FilePdf size={24} weight="light" />, color: "text-error" },
  docx: { icon: <FileDoc size={24} weight="light" />, color: "text-blue" },
  xlsx: { icon: <FileXls size={24} weight="light" />, color: "text-success" },
  image: { icon: <Image size={24} weight="light" />, color: "text-[#8B5CF6]" },
  other: { icon: <File size={24} weight="light" />, color: "text-text-muted" },
};

function FolderTreeItem({
  node,
  activePath,
  onSelect,
  depth = 0,
}: {
  node: FolderNode;
  activePath: string;
  onSelect: (path: string) => void;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  const isActive = activePath === node.path;

  return (
    <div>
      <button
        onClick={() => {
          onSelect(node.path);
          if (hasChildren) setExpanded((p) => !p);
        }}
        className={`flex items-center gap-2 w-full h-9 rounded-lg px-2 text-left transition-colors duration-150 ${
          isActive ? "bg-blue-10 text-blue font-medium" : "text-text-primary hover:bg-ice-30"
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {hasChildren && (
          <CaretRight
            size={14}
            weight="light"
            className={`text-text-muted transition-transform duration-150 flex-shrink-0 ${expanded ? "rotate-90" : ""}`}
          />
        )}
        <FolderSimple size={18} weight="light" className={isActive ? "text-blue" : "text-text-secondary"} />
        <span className="text-[13px] truncate">{node.name}</span>
      </button>
      {hasChildren && expanded && (
        <div>
          {node.children!.map((child) => (
            <FolderTreeItem
              key={child.path}
              node={child}
              activePath={activePath}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DocumentsPage() {
  const [activePath, setActivePath] = useState("/");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let docs = mockDocuments;
    if (activePath !== "/") {
      docs = docs.filter((d) => d.folder === activePath || d.folder.startsWith(activePath + "/"));
    }
    if (search) {
      const q = search.toLowerCase();
      docs = docs.filter((d) => d.name.toLowerCase().includes(q));
    }
    return docs;
  }, [activePath, search]);

  const breadcrumbs = useMemo(() => {
    if (activePath === "/") return [{ label: "All Documents", path: "/" }];
    const parts = activePath.split("/").filter(Boolean);
    const crumbs = [{ label: "All Documents", path: "/" }];
    let acc = "";
    for (const part of parts) {
      acc += "/" + part;
      crumbs.push({ label: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), path: acc });
    }
    return crumbs;
  }, [activePath]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Documents"
        subtitle="Access your shared files and resources"
        actions={
          <div className="flex items-center gap-2">
            <div className="relative">
              <MagnifyingGlass size={16} weight="light" className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search files..."
                className="h-9 w-48 bg-white border border-ice rounded-lg pl-9 pr-3 text-[13px] focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none transition-colors"
              />
            </div>
            <div className="flex rounded-lg border border-ice overflow-hidden">
              {[
                { mode: "list" as const, icon: <ListBullets size={16} weight="light" /> },
                { mode: "grid" as const, icon: <GridFour size={16} weight="light" /> },
              ].map((v) => (
                <button
                  key={v.mode}
                  onClick={() => setViewMode(v.mode)}
                  className={`w-8 h-8 flex items-center justify-center transition-colors duration-150 ${
                    viewMode === v.mode ? "bg-blue-10 text-blue" : "text-text-muted hover:bg-ice-30"
                  }`}
                >
                  {v.icon}
                </button>
              ))}
            </div>
          </div>
        }
      />

      <div className="flex gap-6">
        {/* Folder Tree - Desktop */}
        <div className="hidden lg:block w-60 flex-shrink-0 sticky top-20 self-start">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[15px] mb-3">Folders</h3>
          <FolderTreeItem node={folderTree} activePath={activePath} onSelect={setActivePath} />
        </div>

        {/* Mobile folder dropdown */}
        <div className="lg:hidden w-full">
          <select
            value={activePath}
            onChange={(e) => setActivePath(e.target.value)}
            className="w-full h-10 bg-white border border-ice rounded-lg px-3 text-[13px] mb-4"
          >
            <option value="/">All Documents</option>
            <option value="/contracts">Contracts</option>
            <option value="/reports">Reports</option>
            <option value="/reports/monthly">Reports → Monthly</option>
            <option value="/reports/quarterly">Reports → Quarterly</option>
            <option value="/policies">Policies</option>
            <option value="/network-diagrams">Network Diagrams</option>
            <option value="/invoices">Invoices</option>
          </select>
        </div>

        {/* File Area */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="hidden lg:flex items-center gap-1 mb-4">
            {breadcrumbs.map((crumb, i) => (
              <div key={crumb.path} className="flex items-center gap-1">
                {i > 0 && <CaretRight size={14} weight="light" className="text-text-muted" />}
                <button
                  onClick={() => setActivePath(crumb.path)}
                  className={`text-[13px] ${
                    i === breadcrumbs.length - 1 ? "text-text-primary font-medium" : "text-text-muted hover:underline"
                  }`}
                >
                  {crumb.label}
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              icon={<FolderOpen size={64} weight="light" />}
              title="No documents in this folder"
              description="Your shared documents and files will be accessible here."
            />
          ) : viewMode === "list" ? (
            <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ice-30 h-11">
                    <th className="w-10 px-4" />
                    <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">File Name</th>
                    <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted w-[120px] hidden md:table-cell">Category</th>
                    <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted w-[130px] hidden sm:table-cell">Modified</th>
                    <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted w-[80px] hidden sm:table-cell">Size</th>
                    <th className="px-4 w-[80px]" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((doc) => {
                    const fi = fileIcons[doc.type];
                    return (
                      <tr key={doc.id} className="h-[52px] border-b border-ice last:border-0 hover:bg-blue-10/50 transition-colors duration-150">
                        <td className="px-4"><span className={fi.color}>{fi.icon}</span></td>
                        <td className="px-4 text-sm text-text-primary">{doc.name}</td>
                        <td className="px-4 hidden md:table-cell">
                          <span className="text-[11px] text-text-secondary bg-ice-30 px-2 py-0.5 rounded-full">{doc.category}</span>
                        </td>
                        <td className="px-4 text-xs text-text-secondary hidden sm:table-cell">{doc.modified}</td>
                        <td className="px-4 text-xs text-text-muted hidden sm:table-cell">{doc.size}</td>
                        <td className="px-4">
                          <div className="flex items-center gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-ice-30 transition-colors duration-150 text-text-muted hover:text-blue">
                              <DownloadSimple size={16} weight="light" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-ice-30 transition-colors duration-150 text-text-muted hover:text-blue">
                              <ArrowSquareOut size={16} weight="light" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((doc) => {
                const fi = fileIcons[doc.type];
                return (
                  <div
                    key={doc.id}
                    className="group bg-white rounded-2xl shadow-level-1 p-4 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <div className="h-20 bg-ice-30 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <span className={`${fi.color} text-4xl`}>{fi.icon}</span>
                      <div className="absolute inset-0 bg-navy/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        <DownloadSimple size={24} weight="light" className="text-white" />
                      </div>
                    </div>
                    <p className="text-[13px] font-medium text-text-primary mt-3 line-clamp-2">{doc.name}</p>
                    <p className="text-[11px] text-text-muted mt-1">{doc.size} &bull; {doc.modified}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
