"use client";

import { mockClients } from "@/data/mock-clients";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";

const clients = [...mockClients].sort((a, b) => b.slaCompliance - a.slaCompliance);
const avgSla = parseFloat((clients.reduce((s, c) => s + c.slaCompliance, 0) / clients.length).toFixed(1));
const atRiskClients = clients.filter((c) => c.slaCompliance < 90);
const topPerformer = clients[0];

const slaTrend = [
  { month: "Oct", sla: 94.2 },
  { month: "Nov", sla: 95.1 },
  { month: "Dec", sla: 93.8 },
  { month: "Jan", sla: 95.6 },
  { month: "Feb", sla: 96.2 },
  { month: "Mar", sla: avgSla },
];

function getComplianceColor(value: number): { stroke: string; fill: string; label: string; bg: string } {
  if (value >= 95) return { stroke: "#0D7C5F", fill: "#E6F5F0", label: "text-success", bg: "bg-success-tint" };
  if (value >= 90) return { stroke: "#B8860B", fill: "#FDF5E6", label: "text-warning", bg: "bg-warning-tint" };
  return { stroke: "#C53030", fill: "#FDE8E8", label: "text-error", bg: "bg-error-tint" };
}

export function SlaComplianceReport() {
  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <KpiMini label="Average SLA" value={`${avgSla}%`} sub={avgSla >= 95 ? "Excellent" : "Needs attention"} accent={avgSla >= 95} />
        <KpiMini label="At-Risk Clients" value={String(atRiskClients.length)} sub="below 90%" accent={false} />
        <KpiMini label="Best Performer" value={topPerformer.companyName} sub={`${topPerformer.slaCompliance}%`} accent />
        <KpiMini label="Total Clients" value={String(clients.length)} sub="monitored" accent />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radial gauges */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
            Client SLA Compliance
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {clients.slice(0, 6).map((client) => (
              <SlaGauge key={client.id} name={client.companyName} value={client.slaCompliance} />
            ))}
          </div>
        </div>

        {/* SLA trend line */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
            SLA Trend (6 months)
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={slaTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEEF2" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
              <YAxis domain={[88, 100]} tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}%`} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                formatter={(value) => [`${value}%`, "SLA"]}
                labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
              />
              <Line type="monotone" dataKey="sla" stroke="#0D7C5F" strokeWidth={2.5} dot={{ r: 4, fill: "#0D7C5F", strokeWidth: 2, stroke: "#fff" }} />
              {/* Target line */}
              <Line type="monotone" dataKey={() => 95} stroke="#C53030" strokeWidth={1} strokeDasharray="6 4" dot={false} name="Target (95%)" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-success" />
              <span className="text-[11px] text-text-secondary">Actual SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-px border-t border-dashed border-error" />
              <span className="text-[11px] text-text-secondary">95% Target</span>
            </div>
          </div>
        </div>
      </div>

      {/* All clients compliance bars */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
          All Clients Compliance
        </h3>
        <div className="space-y-3">
          {clients.map((c) => {
            const colors = getComplianceColor(c.slaCompliance);
            return (
              <div key={c.id} className="flex items-center gap-4">
                <span className="text-[13px] font-medium text-text-primary min-w-[160px] truncate">{c.companyName}</span>
                <div className="flex-1 h-2.5 bg-ice-30 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${c.slaCompliance}%`, backgroundColor: colors.stroke }}
                  />
                </div>
                <span className={cn("text-[13px] font-semibold w-14 text-right", colors.label)}>
                  {c.slaCompliance}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
            SLA Compliance Details
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-ice">
                <Th>Client</Th>
                <Th>Industry</Th>
                <Th>SLA Compliance</Th>
                <Th>Open Tickets</Th>
                <Th>Active Projects</Th>
                <Th>Health</Th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => {
                const colors = getComplianceColor(c.slaCompliance);
                return (
                  <tr key={c.id} className="border-t border-ice hover:bg-ice-30/50 transition-colors">
                    <td className="px-6 py-3 text-[13px] font-medium text-text-primary">{c.companyName}</td>
                    <td className="px-4 py-3 text-[13px] text-text-secondary">{c.industry}</td>
                    <td className="px-4 py-3">
                      <span className={cn("inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold", colors.label, colors.bg)}>
                        {c.slaCompliance}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] font-semibold text-text-primary">{c.openTickets}</td>
                    <td className="px-4 py-3 text-[13px] text-text-secondary">{c.activeProjects}</td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium capitalize",
                        c.healthScore === "healthy" ? "text-success bg-success-tint" : "text-warning bg-warning-tint"
                      )}>
                        {c.healthScore}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SlaGauge({ name, value }: { name: string; value: number }) {
  const colors = getComplianceColor(value);
  const data = [
    { name: "value", value },
    { name: "empty", value: 100 - value },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[80px] h-[80px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={28}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              <Cell fill={colors.stroke} />
              <Cell fill="#F4F5F7" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("font-[family-name:var(--font-aptos)] font-bold text-sm", colors.label)}>
            {value}%
          </span>
        </div>
      </div>
      <p className="text-[11px] text-text-secondary mt-1.5 text-center leading-tight max-w-[80px] truncate">
        {name}
      </p>
    </div>
  );
}

function KpiMini({ label, value, sub, accent }: { label: string; value: string; sub: string; accent: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-5">
      <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-text-muted">{label}</p>
      <p className="font-[family-name:var(--font-aptos)] font-bold text-xl text-text-primary mt-1">{value}</p>
      <p className={cn("text-[12px] font-medium mt-0.5", accent ? "text-success" : "text-warning")}>{sub}</p>
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
