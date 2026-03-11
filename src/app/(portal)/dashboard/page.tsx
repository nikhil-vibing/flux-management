"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CircleDashed, Clock, Timer, Kanban, ArrowsClockwise,
  CalendarBlank, CalendarCheck, Headset, Shield, CaretRight, ArrowRight,
  Plus, Export, RocketLaunch,
} from "@phosphor-icons/react";
import {
  ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Line, CartesianGrid, Legend,
} from "recharts";
import { KpiCard } from "@/components/shared/kpi-card";
import { StatusBadge } from "@/components/shared/status-badge";
import { PriorityIndicator } from "@/components/shared/priority-indicator";
import { TicketSlideOver } from "@/components/shared/ticket-slide-over";
import { mockTickets } from "@/data/mock-tickets";
import { mockProjects } from "@/data/mock-projects";
import { ticketActivity7Days, ticketActivity30Days, ticketActivity90Days } from "@/data/mock-chart-data";
import type { Ticket } from "@/data/types";

type ChartRange = "7d" | "30d" | "90d";
const chartDataMap: Record<ChartRange, typeof ticketActivity7Days> = {
  "7d": ticketActivity7Days,
  "30d": ticketActivity30Days,
  "90d": ticketActivity90Days,
};
const chartLabels: Record<ChartRange, string> = { "7d": "7 Days", "30d": "30 Days", "90d": "90 Days" };

const statusDotColor: Record<string, string> = {
  "On Track": "bg-success",
  "At Risk": "bg-warning",
  Delayed: "bg-error",
};

const todayFormatted = new Date().toLocaleDateString("en-US", {
  weekday: "long", year: "numeric", month: "long", day: "numeric",
});

export default function DashboardPage() {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [chartRange, setChartRange] = useState<ChartRange>("7d");
  const [syncing, setSyncing] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 500);
  };

  const recentTickets = mockTickets.slice(0, 5);
  const activeProjects = mockProjects.filter((p) => p.status !== "Delayed" || p.progress > 0);
  const dueTodayCount = mockTickets.filter((t) => t.status === "Open" && (t.priority === "Critical" || t.priority === "High")).length;

  return (
    <div className="space-y-8">
      {/* Zone A: Greeting + Metrics */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="font-[family-name:var(--font-aptos)] font-bold text-[28px] leading-9 tracking-[-0.02em] text-text-primary">
            Good morning, Sarah
          </h1>
          <p className="text-sm text-text-secondary mt-0.5">
            Here&apos;s your IT environment overview
          </p>
        </div>
        <div className="flex items-center gap-3 text-text-muted">
          <div className="flex items-center gap-1.5">
            <CalendarBlank size={16} weight="light" />
            <span className="text-xs">{todayFormatted}</span>
          </div>
          <button
            onClick={handleSync}
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-blue transition-colors duration-150"
          >
            <ArrowsClockwise
              size={14}
              weight="light"
              className={syncing ? "animate-spin" : ""}
            />
            Last synced: 2 min ago
          </button>
        </div>
      </div>

      {/* Metric Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <KpiCard
          icon={<CircleDashed size={20} weight="light" />}
          value="12"
          label="Open Tickets"
          trend={{ value: "3", direction: "up", sentiment: "negative" }}
          iconBgClass="bg-error-tint"
          iconColorClass="text-error"
          onClick={() => router.push("/helpdesk?status=open")}
          index={0}
        />
        <KpiCard
          icon={<Clock size={20} weight="light" />}
          value="8"
          label="Pending Tickets"
          trend={{ value: "2", direction: "down", sentiment: "positive" }}
          iconBgClass="bg-warning-tint"
          iconColorClass="text-warning"
          onClick={() => router.push("/helpdesk?status=pending")}
          index={1}
        />
        <KpiCard
          icon={<CalendarCheck size={20} weight="light" />}
          value={String(dueTodayCount)}
          label="Due Today"
          trend={{ value: "1", direction: "up", sentiment: "negative" }}
          iconBgClass="bg-blue-10"
          iconColorClass="text-blue"
          onClick={() => router.push("/helpdesk?status=open")}
          index={2}
        />
        <KpiCard
          icon={<Timer size={20} weight="light" />}
          value="4.2h"
          label="Avg Resolution"
          trend={{ value: "0.8h", direction: "down", sentiment: "positive" }}
          iconBgClass="bg-blue-10"
          iconColorClass="text-blue"
          index={3}
        />
        <KpiCard
          icon={<Kanban size={20} weight="light" />}
          value="5"
          label="Active Projects"
          iconBgClass="bg-success-tint"
          iconColorClass="text-success"
          onClick={() => router.push("/projects")}
          index={4}
        />
      </div>

      {/* Zone B: Ticket Activity Chart */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-[family-name:var(--font-aptos)] font-semibold text-[24px] leading-[32px] tracking-[-0.02em] text-text-primary">
            Ticket Activity
          </h2>
          <div className="flex items-center rounded-lg border border-ice/60 overflow-hidden shadow-level-1">
            {(["7d", "30d", "90d"] as ChartRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setChartRange(range)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                  chartRange === range
                    ? "bg-navy text-white"
                    : "text-text-secondary hover:bg-ice-30"
                }`}
              >
                {chartLabels[range]}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={240}>
          <ComposedChart data={chartDataMap[chartRange]} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECEEF2" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "#8896A6" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#8896A6" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#002B4D",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#A3B8CC", marginBottom: "4px" }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => (
                <span className="text-xs text-text-muted capitalize">
                  {value}
                </span>
              )}
            />
            <Bar dataKey="open" stackId="tickets" fill="#C53030" radius={[0, 0, 0, 0]} barSize={24} />
            <Bar dataKey="pending" stackId="tickets" fill="#B8860B" radius={[0, 0, 0, 0]} barSize={24} />
            <Bar dataKey="closed" stackId="tickets" fill="#0D7C5F" radius={[2, 2, 0, 0]} barSize={24} />
            <Line type="monotone" dataKey="total" stroke="#15549D" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>

        <div className="flex justify-end mt-3">
          <button
            onClick={() => router.push("/helpdesk")}
            className="flex items-center gap-1 text-xs font-medium text-blue hover:underline"
          >
            View all tickets <CaretRight size={12} weight="light" />
          </button>
        </div>
      </div>

      {/* Zone B: Recent Tickets Table */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[family-name:var(--font-aptos)] font-semibold text-[24px] leading-[32px] tracking-[-0.02em] text-text-primary">
            Recent Tickets
          </h2>
          <button
            onClick={() => router.push("/helpdesk")}
            className="flex items-center gap-1 text-xs font-medium text-blue hover:underline"
          >
            View all <CaretRight size={12} weight="light" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ice">
                {["Ticket #", "Subject", "Status", "Priority", "Updated"].map((h) => (
                  <th
                    key={h}
                    className="pb-2 pr-4 text-[11px] uppercase tracking-[0.08em] text-text-muted font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTickets.map((ticket) => (
                <motion.tr
                  key={ticket.id}
                  whileHover={{ backgroundColor: "rgba(232,240,250,0.4)" }}
                  onClick={() => setSelectedTicket(ticket)}
                  className="border-b border-ice last:border-0 cursor-pointer transition-colors"
                >
                  <td className="py-3 pr-4">
                    <span className="font-mono text-sm text-blue">
                      #{ticket.id}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-sm text-text-primary max-w-[260px] truncate">
                    {ticket.subject}
                  </td>
                  <td className="py-3 pr-4">
                    <StatusBadge status={ticket.status} />
                  </td>
                  <td className="py-3 pr-4">
                    <PriorityIndicator priority={ticket.priority} />
                  </td>
                  <td className="py-3 text-xs text-text-muted whitespace-nowrap">
                    {ticket.updated}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Zone C: Active Projects */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[family-name:var(--font-aptos)] font-semibold text-[24px] leading-[32px] tracking-[-0.02em] text-text-primary">
            Active Projects
          </h2>
          <button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-1 text-xs font-medium text-blue hover:underline"
          >
            View all <CaretRight size={12} weight="light" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] border border-ice/50 rounded-2xl p-5 bg-white shrink-0 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              <p className="font-[family-name:var(--font-aptos)] font-semibold text-sm text-text-primary truncate">
                {project.name}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className={`w-2 h-2 rounded-full ${statusDotColor[project.status]}`} />
                <span className="text-xs text-text-secondary">
                  {project.status}
                </span>
              </div>
              <div className="mt-3 w-full bg-ice-50 rounded-full h-1.5">
                <div
                  className="bg-blue h-1.5 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <span className="text-xs text-text-muted">
                  {project.tasksCompleted}/{project.totalTasks} tasks
                </span>
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <CalendarBlank size={12} weight="light" />
                  {project.dueDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone D: Connected Services */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[family-name:var(--font-aptos)] font-semibold text-[24px] leading-[32px] tracking-[-0.02em] text-text-primary">
            Connected Services
          </h2>
          <button
            onClick={() => router.push("/connectors")}
            className="flex items-center gap-1 text-xs font-medium text-blue hover:underline"
          >
            Manage <ArrowRight size={12} weight="light" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Atera", icon: Headset, summary: "47 tickets this month \u2022 12 open" },
            { name: "Microsoft Planner", icon: RocketLaunch, summary: "5 active plans \u2022 23 tasks" },
            { name: "SharePoint", icon: Shield, summary: "156 documents \u2022 8 folders" },
          ].map((service) => (
            <div
              key={service.name}
              className="flex items-start gap-3 border border-ice/50 rounded-2xl p-5 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-10 shrink-0">
                <service.icon size={18} weight="light" className="text-blue" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm text-text-primary">
                  {service.name}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span className="text-xs text-success font-medium">
                    Connected
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-1.5">
                  {service.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone E: Quick Actions Floating Bar */}
      <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-2 bg-navy/95 backdrop-blur-xl px-5 py-3 rounded-full shadow-level-4">
          <button
            onClick={() => router.push("/helpdesk")}
            className="flex items-center gap-2 bg-blue hover:bg-blue-light text-white text-xs font-medium px-4 py-2 rounded-full transition-colors duration-150"
          >
            <Plus size={14} weight="light" />
            New Ticket
          </button>
          <button className="flex items-center gap-2 text-text-on-dark-muted hover:text-white text-xs font-medium px-3 py-2 rounded-full transition-colors duration-150">
            <Export size={14} weight="light" />
            Export
          </button>
          <button
            onClick={() => router.push("/ai-assistant")}
            className="flex items-center gap-2 text-text-on-dark-muted hover:text-white text-xs font-medium px-3 py-2 rounded-full transition-colors duration-150"
          >
            <RocketLaunch size={14} weight="light" />
            AI Assistant
          </button>
        </div>
      </div>

      {/* Ticket SlideOver */}
      <TicketSlideOver ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
    </div>
  );
}
