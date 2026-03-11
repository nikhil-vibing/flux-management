"use client";

import { mockTeamMembers } from "@/data/mock-team";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";
import { cn } from "@/lib/utils";

const activeMembers = mockTeamMembers.filter((m) => m.status === "active");
const avgUtilization = Math.round(activeMembers.reduce((s, m) => s + m.utilization, 0) / activeMembers.length);
const totalResolved = activeMembers.reduce((s, m) => s + m.ticketsResolved, 0);
const totalCompleted = activeMembers.reduce((s, m) => s + m.tasksCompleted, 0);

const radarData = activeMembers.map((m) => ({
  name: m.name.split(" ")[0],
  utilization: m.utilization,
  tickets: Math.min(m.ticketsResolved * 1.5, 100),
  tasks: Math.min(m.tasksCompleted / 2, 100),
}));

const productivityData = activeMembers.map((m) => ({
  name: m.name.split(" ")[0],
  resolved: m.ticketsResolved,
  completed: m.tasksCompleted,
}));

export function TeamPerformanceReport() {
  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <KpiMini label="Team Members" value={String(activeMembers.length)} sub="active" />
        <KpiMini label="Avg Utilization" value={`${avgUtilization}%`} sub={avgUtilization > 75 ? "High" : "Normal"} />
        <KpiMini label="Tickets Resolved" value={String(totalResolved)} sub="all time" />
        <KpiMini label="Tasks Completed" value={String(totalCompleted)} sub="all time" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar chart - team skills */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-4">
            Team Utilization Radar
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="#ECEEF2" />
              <PolarAngleAxis dataKey="name" tick={{ fontSize: 11, fill: "#4A5568" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "#8896A6" }} axisLine={false} />
              <Radar name="Utilization" dataKey="utilization" stroke="#15549D" fill="#15549D" fillOpacity={0.15} strokeWidth={2} />
              <Radar name="Ticket Score" dataKey="tickets" stroke="#0D7C5F" fill="#0D7C5F" fillOpacity={0.1} strokeWidth={2} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
              />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-2">
            <Legend color="bg-blue" label="Utilization %" />
            <Legend color="bg-success" label="Ticket Score" />
          </div>
        </div>

        {/* Stacked bar - productivity breakdown */}
        <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-4">
            Productivity Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={productivityData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEEF2" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#8896A6" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: "#002B4D", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
              />
              <Bar dataKey="resolved" name="Tickets Resolved" fill="#15549D" radius={[0, 0, 0, 0]} stackId="a" />
              <Bar dataKey="completed" name="Tasks Completed" fill="#1A6BC4" radius={[4, 4, 0, 0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-2">
            <Legend color="bg-blue" label="Tickets Resolved" />
            <Legend color="bg-blue-light" label="Tasks Completed" />
          </div>
        </div>
      </div>

      {/* Utilization bars */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6">
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-5">
          Individual Utilization
        </h3>
        <div className="space-y-4">
          {activeMembers.map((m) => (
            <div key={m.id} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-navy-80 flex items-center justify-center shrink-0">
                <span className="text-[9px] text-white font-medium">{m.initials}</span>
              </div>
              <div className="min-w-[120px]">
                <p className="text-[13px] font-medium text-text-primary">{m.name}</p>
                <p className="text-[11px] text-text-muted capitalize">{m.role.replace("-", " ")}</p>
              </div>
              <div className="flex-1 h-3 bg-ice-30 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-700 ease-out",
                    m.utilization >= 85 ? "bg-gradient-to-r from-warning to-error" :
                    m.utilization >= 60 ? "bg-gradient-to-r from-blue to-blue-light" :
                    "bg-gradient-to-r from-success to-success"
                  )}
                  style={{ width: `${m.utilization}%` }}
                />
              </div>
              <span className="text-[13px] font-semibold text-text-primary w-10 text-right">{m.utilization}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
            Member Performance Details
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-ice">
                <Th>Member</Th>
                <Th>Role</Th>
                <Th>Active Tasks</Th>
                <Th>Tickets Resolved</Th>
                <Th>Tasks Completed</Th>
                <Th>Avg Resolution</Th>
                <Th>Last Active</Th>
              </tr>
            </thead>
            <tbody>
              {activeMembers.map((m) => (
                <tr key={m.id} className="border-t border-ice hover:bg-ice-30/50 transition-colors">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-navy-80 flex items-center justify-center">
                        <span className="text-[8px] text-white font-medium">{m.initials}</span>
                      </div>
                      <span className="text-[13px] font-medium text-text-primary">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-text-secondary capitalize">{m.role.replace("-", " ")}</td>
                  <td className="px-4 py-3 text-[13px] font-semibold text-text-primary">{m.activeTasks}</td>
                  <td className="px-4 py-3 text-[13px] font-semibold text-text-primary">{m.ticketsResolved}</td>
                  <td className="px-4 py-3 text-[13px] font-semibold text-text-primary">{m.tasksCompleted}</td>
                  <td className="px-4 py-3 text-[13px] text-text-secondary">{m.avgResolutionTime}</td>
                  <td className="px-4 py-3 text-[13px] text-text-muted">{m.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiMini({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-5">
      <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-text-muted">{label}</p>
      <p className="font-[family-name:var(--font-aptos)] font-bold text-xl text-text-primary mt-1">{value}</p>
      <p className="text-[12px] text-text-muted mt-0.5">{sub}</p>
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
