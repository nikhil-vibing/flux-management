"use client";

import { useState } from "react";
import { mockTickets } from "@/data/mock-tickets";
import { mockClients } from "@/data/mock-clients";
import { ticketActivity30Days } from "@/data/mock-chart-data";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar,
} from "recharts";
import { cn } from "@/lib/utils";

type TimeRange = "7d" | "30d";

const openTickets = mockTickets.filter((t) => t.status === "Open").length;
const pendingTickets = mockTickets.filter((t) => t.status === "Pending").length;
const closedTickets = mockTickets.filter((t) => t.status === "Closed").length;
const totalTickets = mockTickets.length;

const criticalCount = mockTickets.filter((t) => t.priority === "Critical").length;
const highCount = mockTickets.filter((t) => t.priority === "High").length;
const mediumCount = mockTickets.filter((t) => t.priority === "Medium").length;
const lowCount = mockTickets.filter((t) => t.priority === "Low").length;

const statusData = [
  { name: "Open", value: openTickets, color: "#15549D" },
  { name: "Pending", value: pendingTickets, color: "#B8860B" },
  { name: "Closed", value: closedTickets, color: "#0D7C5F" },
];

const priorityData = [
  { name: "Critical", count: criticalCount, color: "#C53030" },
  { name: "High", count: highCount, color: "#B8860B" },
  { name: "Medium", count: mediumCount, color: "#15549D" },
  { name: "Low", count: lowCount, color: "#8896A6" },
];

const clientTickets = mockClients
  .map((c) => ({
    name: c.companyName.length > 14 ? c.companyName.slice(0, 14) + "..." : c.companyName,
    fullName: c.companyName,
    tickets: c.openTickets,
  }))
  .filter((c) => c.tickets > 0)
  .sort((a, b) => b.tickets - a.tickets);

const resolutionByPriority = [
  { priority: "Critical", avg: "1.8h", target: "2h", met: true },
  { priority: "High", avg: "3.2h", target: "4h", met: true },
  { priority: "Medium", avg: "6.5h", target: "8h", met: true },
  { priority: "Low", avg: "14h", target: "24h", met: true },
];

export function TicketAnalyticsReport() {
  const [range, setRange] = useState<TimeRange>("30d");
  const trendData = ticketActivity30Days.slice(range === "7d" ? -7 : 0);

  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <KpiMini label="Total Tickets" value={String(totalTickets)} color="text-text-primary" />
        <KpiMini label="Open" value={String(openTickets)} color="text-blue" />
        <KpiMini label="Pending" value={String(pendingTickets)} color="text-warning" />
        <KpiMini label="Closed" value={String(closedTickets)} color="text-success" />
      </div>

      {/* Trend area chart */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
            Ticket Activity Trend
          </h3>
          <div className="flex gap-1 bg-ice-30 rounded-lg p-0.5">
            {(["7d", "30d"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={cn(
                  "px-3 py-1 text-[11px] font-medium rounded-md transition-colors",
                  range === r ? "bg-white text-text-primary shadow-sm" : "text-text-muted hover:text-text-secondary"
                )}
              >
                {r === "7d" ? "7 Days" : "30 Days"}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="openGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#15549D" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#15549D" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="pendingGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B8860B" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#B8860B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="closedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0D7C5F" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#0D7C5F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECEEF2" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
              labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
            />
            <Area type="monotone" dataKey="open" stroke="#15549D" strokeWidth={2} fill="url(#openGrad)" name="Open" />
            <Area type="monotone" dataKey="pending" stroke="#B8860B" strokeWidth={2} fill="url(#pendingGrad)" name="Pending" />
            <Area type="monotone" dataKey="closed" stroke="#0D7C5F" strokeWidth={2} fill="url(#closedGrad)" name="Closed" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-2">
          <Legend color="bg-blue" label="Open" />
          <Legend color="bg-warning" label="Pending" />
          <Legend color="bg-success" label="Closed" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Status pie */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-4">
            Status Distribution
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative w-[140px] h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={42}
                    outerRadius={65}
                    paddingAngle={3}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {statusData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-[family-name:var(--font-aptos)] font-bold text-lg text-navy">{totalTickets}</span>
                <span className="text-[10px] text-text-muted">Total</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              {statusData.map((s) => (
                <div key={s.name} className="text-center">
                  <p className="text-[13px] font-semibold text-text-primary">{s.value}</p>
                  <p className="text-[10px] text-text-muted">{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Priority breakdown */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
            Priority Breakdown
          </h3>
          <div className="space-y-3.5">
            {priorityData.map((p) => (
              <div key={p.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-[13px] text-text-primary font-medium">{p.name}</span>
                  </div>
                  <span className="text-[13px] font-semibold text-text-primary">{p.count}</span>
                </div>
                <div className="h-2 bg-ice-30 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(p.count / totalTickets) * 100}%`, backgroundColor: p.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tickets by client */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-4">
            Open Tickets by Client
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={clientTickets} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <XAxis type="number" tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: "#4A5568" }} axisLine={false} tickLine={false} width={110} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                formatter={(value) => [Number(value), "Tickets"]}
                labelFormatter={(_, payload) => payload?.[0]?.payload?.fullName ?? ""}
                labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
              />
              <Bar dataKey="tickets" fill="#15549D" radius={[0, 4, 4, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resolution time table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
            Average Resolution Times
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-ice">
                <Th>Priority</Th>
                <Th>Avg Resolution</Th>
                <Th>Target</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {resolutionByPriority.map((r) => (
                <tr key={r.priority} className="border-t border-ice hover:bg-ice-30/50 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-2 h-2 rounded-full",
                        r.priority === "Critical" ? "bg-error" :
                        r.priority === "High" ? "bg-warning" :
                        r.priority === "Medium" ? "bg-blue" : "bg-text-muted"
                      )} />
                      <span className="text-[13px] font-medium text-text-primary">{r.priority}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-[13px] font-semibold text-text-primary">{r.avg}</td>
                  <td className="px-4 py-3.5 text-[13px] text-text-secondary">{r.target}</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium text-success bg-success-tint">
                      Within Target
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent tickets table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
            Recent Tickets
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-ice">
                <Th>ID</Th>
                <Th>Subject</Th>
                <Th>Client</Th>
                <Th>Priority</Th>
                <Th>Status</Th>
                <Th>Assigned To</Th>
              </tr>
            </thead>
            <tbody>
              {mockTickets.slice(0, 8).map((t) => (
                <tr key={t.id} className="border-t border-ice hover:bg-ice-30/50 transition-colors">
                  <td className="px-6 py-3 text-[13px] font-medium text-blue">{t.id}</td>
                  <td className="px-4 py-3 text-[13px] text-text-primary max-w-[250px] truncate">{t.subject}</td>
                  <td className="px-4 py-3 text-[13px] text-text-secondary">{t.clientName}</td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium",
                      t.priority === "Critical" ? "text-error bg-error-tint" :
                      t.priority === "High" ? "text-warning bg-warning-tint" :
                      t.priority === "Medium" ? "text-blue bg-blue-10" : "text-text-muted bg-ice-30"
                    )}>
                      {t.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium",
                      t.status === "Open" ? "text-blue bg-blue-10" :
                      t.status === "Pending" ? "text-warning bg-warning-tint" : "text-success bg-success-tint"
                    )}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-text-secondary">{t.assignedTo.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiMini({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-5">
      <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-text-muted">{label}</p>
      <p className={cn("font-[family-name:var(--font-aptos)] font-bold text-2xl mt-1", color)}>{value}</p>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={cn("w-2.5 h-2.5 rounded-sm", color)} />
      <span className="text-[11px] text-text-secondary">{label}</span>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left text-[11px] uppercase tracking-[0.08em] font-medium text-text-muted px-6 py-3 first:pl-6">
      {children}
    </th>
  );
}
