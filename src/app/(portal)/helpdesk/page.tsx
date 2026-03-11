"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CircleDashed,
  Clock,
  CheckCircle,
  Timer,
  MagnifyingGlass,
  Funnel,
  CaretLeft,
  CaretRight,
  PaperPlaneTilt,
  Rows,
  GridFour,
  DownloadSimple,
} from "@phosphor-icons/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { mockTickets } from "@/data/mock-tickets";
import { ticketActivity7Days } from "@/data/mock-chart-data";
import { KpiCard } from "@/components/shared/kpi-card";
import { StatusBadge } from "@/components/shared/status-badge";
import { PriorityIndicator } from "@/components/shared/priority-indicator";
import { TicketSlideOver } from "@/components/shared/ticket-slide-over";
import { PageHeader } from "@/components/shared/page-header";
import type { Ticket, TicketStatus, TicketPriority } from "@/data/types";

const ITEMS_PER_PAGE = 10;

// Generate 30-day trend data
const trendData30Days = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 1, 9);
  d.setDate(d.getDate() - 29 + i);
  return {
    date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    count: Math.floor(Math.random() * 8) + 3,
  };
});

export default function HelpdeskPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | TicketStatus>("all");
  const [priorityFilter, setPriorityFilter] = useState<"all" | TicketPriority>("all");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [sortBy, setSortBy] = useState("newest");

  const filtered = useMemo(() => {
    let result = [...mockTickets];
    if (statusFilter !== "all") result = result.filter((t) => t.status === statusFilter);
    if (priorityFilter !== "all") result = result.filter((t) => t.priority === priorityFilter);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) => t.id.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q)
      );
    }
    if (sortBy === "oldest") result.reverse();
    return result;
  }, [statusFilter, priorityFilter, search, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const openCount = mockTickets.filter((t) => t.status === "Open").length;
  const pendingCount = mockTickets.filter((t) => t.status === "Pending").length;
  const closedCount = mockTickets.filter((t) => t.status === "Closed").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Helpdesk"
        subtitle="Monitor and manage your support tickets"
        actions={
          <button className="flex items-center gap-2 h-10 px-4 bg-blue text-white text-[13px] font-medium rounded-lg hover:bg-blue-light transition-colors active:scale-[0.98]">
            <PaperPlaneTilt size={16} weight="light" />
            New Ticket Request
          </button>
        }
      />

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          icon={<CircleDashed size={20} weight="light" />}
          value={String(openCount)}
          label="Open Tickets"
          iconBgClass="bg-error-tint"
          iconColorClass="text-error"
          index={0}
        />
        <KpiCard
          icon={<Clock size={20} weight="light" />}
          value={String(pendingCount)}
          label="Pending Tickets"
          iconBgClass="bg-warning-tint"
          iconColorClass="text-warning"
          index={1}
        />
        <KpiCard
          icon={<CheckCircle size={20} weight="light" />}
          value={String(closedCount)}
          label="Closed This Month"
          iconBgClass="bg-success-tint"
          iconColorClass="text-success"
          index={2}
        />
        <KpiCard
          icon={<Timer size={20} weight="light" />}
          value="4.2h"
          label="Avg Resolution"
          iconBgClass="bg-blue-10"
          iconColorClass="text-blue"
          index={3}
        />
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-xs font-medium text-text-secondary mb-1">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value as "all" | TicketStatus); setPage(1); }}
            className="h-10 w-40 bg-white border border-ice rounded-lg px-3 text-[13px] text-text-primary focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="Open">Open</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-text-secondary mb-1">Priority</label>
          <select
            value={priorityFilter}
            onChange={(e) => { setPriorityFilter(e.target.value as "all" | TicketPriority); setPage(1); }}
            className="h-10 w-40 bg-white border border-ice rounded-lg px-3 text-[13px] text-text-primary focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none"
          >
            <option value="all">All Priorities</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="flex-1" />
        {searchOpen ? (
          <div className="relative">
            <MagnifyingGlass size={16} weight="light" className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              autoFocus
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              onBlur={() => !search && setSearchOpen(false)}
              placeholder="Search tickets..."
              className="h-10 w-60 bg-white border border-ice rounded-lg pl-9 pr-3 text-[13px] focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none"
            />
          </div>
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-ice-30 transition-colors"
          >
            <MagnifyingGlass size={18} weight="light" className="text-text-secondary" />
          </button>
        )}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-10 bg-white border border-ice rounded-lg px-3 text-[13px] text-text-secondary focus:border-blue outline-none"
        >
          <option value="newest">Sort: Newest</option>
          <option value="oldest">Sort: Oldest</option>
        </select>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] mb-4">7-Day Ticket Activity</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ticketActivity7Days} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F2F5" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#7A8DA0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#7A8DA0" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
                itemStyle={{ color: "rgba(255,255,255,0.8)" }}
                labelStyle={{ color: "#fff", fontWeight: 600 }}
              />
              <Bar dataKey="open" stackId="a" fill="#CC3333" radius={[0, 0, 0, 0]} name="Open" />
              <Bar dataKey="pending" stackId="a" fill="#D4880F" name="Pending" />
              <Bar dataKey="closed" stackId="a" fill="#0D9C5C" radius={[3, 3, 0, 0]} name="Closed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] mb-4">30-Day Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={trendData30Days}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#15549D" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#15549D" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F2F5" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#7A8DA0" }} axisLine={false} tickLine={false} interval={4} />
              <YAxis tick={{ fontSize: 11, fill: "#7A8DA0" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
                labelStyle={{ color: "#fff", fontWeight: 600 }}
              />
              <Area type="monotone" dataKey="count" stroke="#15549D" strokeWidth={2} fill="url(#areaGrad)" name="Tickets" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ticket Table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px]">All Tickets</h3>
            <span className="text-xs font-medium text-text-secondary bg-ice-30 px-2.5 py-0.5 rounded-full">
              {filtered.length} tickets
            </span>
          </div>
          <button className="flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-text-primary transition-colors">
            <DownloadSimple size={16} weight="light" />
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-ice-30 h-11">
                {["Ticket #", "Subject", "Status", "Priority", "Created", "Updated", "Assigned To"].map((h) => (
                  <th key={h} className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map((ticket) => (
                <tr
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`h-[52px] border-b border-ice-30 cursor-pointer transition-colors ${
                    selectedTicket?.id === ticket.id ? "bg-blue-10 border-l-[3px] border-l-blue" : "hover:bg-blue-10"
                  }`}
                >
                  <td className="px-4">
                    <span className="font-mono text-xs text-blue">
                      #{ticket.id}
                    </span>
                  </td>
                  <td className="px-4 text-[13px] text-text-primary max-w-[200px] truncate">{ticket.subject}</td>
                  <td className="px-4"><StatusBadge status={ticket.status} /></td>
                  <td className="px-4"><PriorityIndicator priority={ticket.priority} /></td>
                  <td className="px-4 text-xs text-text-secondary">{ticket.created}</td>
                  <td className="px-4 text-xs text-text-muted">{ticket.updated}</td>
                  <td className="px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-navy-80 flex items-center justify-center">
                        <span className="text-[9px] text-white font-medium">{ticket.assignedTo.initials}</span>
                      </div>
                      <span className="text-xs text-text-secondary">{ticket.assignedTo.name}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-ice-30">
          <span className="text-[13px] text-text-muted">
            Showing {(page - 1) * ITEMS_PER_PAGE + 1}-{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} tickets
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-ice hover:bg-ice-30 disabled:opacity-40 transition-colors"
            >
              <CaretLeft size={14} weight="light" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors ${
                  p === page ? "bg-blue text-white" : "text-text-secondary hover:bg-ice-30"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-ice hover:bg-ice-30 disabled:opacity-40 transition-colors"
            >
              <CaretRight size={14} weight="light" />
            </button>
          </div>
        </div>
      </div>

      <TicketSlideOver ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
    </div>
  );
}
