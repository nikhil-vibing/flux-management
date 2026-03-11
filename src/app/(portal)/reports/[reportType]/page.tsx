"use client";

import { useParams, useRouter } from "next/navigation";
import { CaretLeftIcon } from "@phosphor-icons/react";
import { RevenueReport } from "./revenue-report";
import { TeamPerformanceReport } from "./team-performance-report";
import { SlaComplianceReport } from "./sla-compliance-report";
import { TicketAnalyticsReport } from "./ticket-analytics-report";

const reportConfigs: Record<string, { title: string; description: string }> = {
  revenue: { title: "Revenue Report", description: "Monthly revenue breakdown by client" },
  "team-performance": { title: "Team Performance", description: "Team utilization and productivity metrics" },
  "sla-compliance": { title: "SLA Compliance", description: "SLA adherence across all clients" },
  "ticket-analytics": { title: "Ticket Analytics", description: "Resolution times and ticket trends" },
};

export default function ReportDetailPage() {
  const params = useParams();
  const router = useRouter();
  const reportType = params.reportType as string;
  const config = reportConfigs[reportType];

  if (!config) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-text-muted">Report not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => router.push("/reports")}
        className="flex items-center gap-1 text-sm text-text-secondary hover:text-blue transition-colors"
      >
        <CaretLeftIcon size={16} weight="light" /> Back to Reports
      </button>

      <div>
        <h1 className="font-[family-name:var(--font-aptos)] font-bold text-[24px] tracking-[-0.02em] text-text-primary">
          {config.title}
        </h1>
        <p className="text-sm text-text-secondary mt-0.5">{config.description}</p>
      </div>

      {reportType === "revenue" && <RevenueReport />}
      {reportType === "team-performance" && <TeamPerformanceReport />}
      {reportType === "sla-compliance" && <SlaComplianceReport />}
      {reportType === "ticket-analytics" && <TicketAnalyticsReport />}
    </div>
  );
}
