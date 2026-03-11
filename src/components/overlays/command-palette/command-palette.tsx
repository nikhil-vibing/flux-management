"use client";

import { useEffect, useState, useCallback } from "react";
import { MagnifyingGlassIcon, TicketIcon, KanbanIcon, SquaresFourIcon, BuildingsIcon, UsersThreeIcon, ChartLineIcon, PlugIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { mockTickets } from "@/data/mock-tickets";
import { mockProjects } from "@/data/mock-projects";
import { AnimatePresence, motion } from "framer-motion";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: "ticket" | "project" | "client" | "page";
  href: string;
  icon: React.ReactNode;
}

const pages: SearchResult[] = [
  { id: "p1", title: "Dashboard", subtitle: "Overview", type: "page", href: "/dashboard", icon: <SquaresFourIcon size={18} weight="light" /> },
  { id: "p2", title: "Clients", subtitle: "Client management", type: "page", href: "/clients", icon: <BuildingsIcon size={18} weight="light" /> },
  { id: "p3", title: "Tickets", subtitle: "All tickets", type: "page", href: "/tickets", icon: <TicketIcon size={18} weight="light" /> },
  { id: "p4", title: "Projects", subtitle: "All projects", type: "page", href: "/projects", icon: <KanbanIcon size={18} weight="light" /> },
  { id: "p5", title: "Team", subtitle: "Team members", type: "page", href: "/team", icon: <UsersThreeIcon size={18} weight="light" /> },
  { id: "p6", title: "Reports", subtitle: "Analytics & reports", type: "page", href: "/reports", icon: <ChartLineIcon size={18} weight="light" /> },
  { id: "p7", title: "Connectors", subtitle: "External integrations", type: "page", href: "/connectors", icon: <PlugIcon size={18} weight="light" /> },
];

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const getResults = useCallback((): SearchResult[] => {
    if (!query.trim()) {
      return pages;
    }
    const q = query.toLowerCase();
    const results: SearchResult[] = [];

    mockTickets
      .filter((t) => t.id.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q))
      .slice(0, 5)
      .forEach((t) =>
        results.push({
          id: t.id,
          title: `#${t.id}`,
          subtitle: t.subject,
          type: "ticket",
          href: `/tickets?ticket=${t.id}`,
          icon: <TicketIcon size={18} weight="light" />,
        })
      );

    mockProjects
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 3)
      .forEach((p) =>
        results.push({
          id: p.id,
          title: p.name,
          subtitle: `${p.progress}% complete`,
          type: "project",
          href: `/projects/${p.id}`,
          icon: <KanbanIcon size={18} weight="light" />,
        })
      );

    pages.filter((p) => p.title.toLowerCase().includes(q)).forEach((p) => results.push(p));

    return results;
  }, [query]);

  const results = getResults();

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
        else onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleSelect = (result: SearchResult) => {
    router.push(result.href);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const grouped = results.reduce(
    (acc, r) => {
      if (!acc[r.type]) acc[r.type] = [];
      acc[r.type].push(r);
      return acc;
    },
    {} as Record<string, SearchResult[]>
  );

  const typeLabels: Record<string, string> = {
    ticket: "Tickets",
    project: "Projects",
    client: "Clients",
    page: "Pages",
  };

  let flatIndex = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-navy/30 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[600px] max-h-[480px] bg-white/95 backdrop-blur-xl border border-ice/40 rounded-3xl shadow-level-4 z-[60] overflow-hidden flex flex-col"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 h-14 border-b border-ice">
              <MagnifyingGlassIcon size={20} weight="light" className="text-blue flex-shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search tickets, projects, clients..."
                className="flex-1 text-base bg-transparent outline-none placeholder:text-silver-dark text-text-primary"
              />
              <kbd className="text-[11px] text-text-muted bg-ice-30 px-1.5 py-0.5 rounded">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {results.length === 0 ? (
                <div className="flex flex-col items-center py-12">
                  <p className="text-sm text-text-muted">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Try searching for ticket numbers, project names, or client names
                  </p>
                </div>
              ) : (
                Object.entries(grouped).map(([type, items]) => (
                  <div key={type}>
                    <div className="px-4 py-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">
                        {typeLabels[type] || type}
                      </span>
                    </div>
                    {items.map((item) => {
                      const currentIndex = flatIndex++;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(currentIndex)}
                          className={`flex items-center gap-3 w-full px-4 h-11 text-left transition-colors ${
                            selectedIndex === currentIndex ? "bg-blue-10" : ""
                          }`}
                        >
                          <span className="text-text-secondary flex-shrink-0">{item.icon}</span>
                          <span className="text-sm text-text-primary truncate">{item.title}</span>
                          <span className="text-xs text-text-muted ml-auto truncate">
                            {item.subtitle}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
