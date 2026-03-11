"use client";

import { mockClients } from "@/data/mock-clients";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid,
} from "recharts";
import { cn } from "@/lib/utils";

const clients = [...mockClients].sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);
const totalRevenue = clients.reduce((s, c) => s + c.monthlyRevenue, 0);
const topClient = clients[0];

const trendData = [
  { month: "Oct", revenue: 98000 },
  { month: "Nov", revenue: 105000 },
  { month: "Dec", revenue: 95000 },
  { month: "Jan", revenue: 112000 },
  { month: "Feb", revenue: 118500 },
  { month: "Mar", revenue: totalRevenue },
];

const healthColor: Record<string, string> = {
  healthy: "text-success bg-success-tint",
  "at-risk": "text-warning bg-warning-tint",
  critical: "text-error bg-error-tint",
};

export function RevenueReport() {
  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KpiMini label="Total Monthly Revenue" value={`$${totalRevenue.toLocaleString()}`} trend="+8.2%" />
        <KpiMini label="Active Clients" value={String(clients.length)} trend={`${clients.filter(c => c.contractStatus === "active").length} active`} />
        <KpiMini label="Top Client" value={topClient.companyName} trend={`$${topClient.monthlyRevenue.toLocaleString()}/mo`} />
      </div>

      {/* Two charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by client - horizontal bars */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
            Revenue by Client
          </h3>
          <div className="space-y-3">
            {clients.map((client) => {
              const pct = (client.monthlyRevenue / topClient.monthlyRevenue) * 100;
              return (
                <div key={client.id} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[13px] text-text-primary font-medium truncate max-w-[180px]">
                      {client.companyName}
                    </span>
                    <span className="text-[13px] font-semibold text-text-primary">
                      ${client.monthlyRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2.5 bg-ice-30 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue to-blue-light transition-all duration-700 ease-out"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue trend - area chart */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
            Revenue Trend (6 months)
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#15549D" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#15549D" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEEF2" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
                labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#15549D" strokeWidth={2.5} fill="url(#revenueGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Client revenue table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
            Client Revenue Details
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-ice">
                <Th>Client</Th>
                <Th>Industry</Th>
                <Th>Monthly Revenue</Th>
                <Th>Share</Th>
                <Th>Contract</Th>
                <Th>Health</Th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-t border-ice hover:bg-ice-30/50 transition-colors">
                  <td className="px-6 py-3 text-[13px] font-medium text-text-primary">{c.companyName}</td>
                  <td className="px-4 py-3 text-[13px] text-text-secondary">{c.industry}</td>
                  <td className="px-4 py-3 text-[13px] font-semibold text-text-primary">${c.monthlyRevenue.toLocaleString()}</td>
                  <td className="px-4 py-3 text-[13px] text-text-secondary">{((c.monthlyRevenue / totalRevenue) * 100).toFixed(1)}%</td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium capitalize",
                      c.contractStatus === "active" ? "text-success bg-success-tint" : "text-warning bg-warning-tint"
                    )}>
                      {c.contractStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn("inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium capitalize", healthColor[c.healthScore])}>
                      {c.healthScore}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiMini({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-5">
      <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-text-muted">{label}</p>
      <p className="font-[family-name:var(--font-aptos)] font-bold text-xl text-text-primary mt-1">{value}</p>
      <p className="text-[12px] text-success font-medium mt-0.5">{trend}</p>
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
