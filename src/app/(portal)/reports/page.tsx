"use client";

import { useRouter } from "next/navigation";
import {
  CurrencyDollarIcon,
  UsersThreeIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@phosphor-icons/react";

const reportTypes = [
  {
    title: "Revenue Report",
    description: "Monthly revenue breakdown by client",
    icon: CurrencyDollarIcon,
    iconBg: "bg-success-tint",
    iconColor: "text-success",
    href: "/reports/revenue",
  },
  {
    title: "Team Performance",
    description: "Team utilization and productivity metrics",
    icon: UsersThreeIcon,
    iconBg: "bg-blue-10",
    iconColor: "text-blue",
    href: "/reports/team-performance",
  },
  {
    title: "SLA Compliance",
    description: "SLA adherence across all clients",
    icon: ShieldCheckIcon,
    iconBg: "bg-blue-10",
    iconColor: "text-blue",
    href: "/reports/sla-compliance",
  },
  {
    title: "Ticket Analytics",
    description: "Resolution times and ticket trends",
    icon: ClockIcon,
    iconBg: "bg-error-tint",
    iconColor: "text-error",
    href: "/reports/ticket-analytics",
  },
] as const;

export default function ReportsPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-aptos)]">Reports</h1>
        <p className="text-sm text-text-muted mt-1">Analytics and insights</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
          <div
            key={report.href}
            onClick={() => router.push(report.href)}
            className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-xl ${report.iconBg} flex items-center justify-center mb-4`}>
              <report.icon size={24} className={report.iconColor} weight="duotone" />
            </div>
            <h2 className="font-semibold text-base">{report.title}</h2>
            <p className="text-sm text-text-muted mt-1">{report.description}</p>
            <span className="text-xs text-blue mt-3 inline-block">View Report &rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
