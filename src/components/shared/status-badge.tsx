"use client";

import { cn } from "@/lib/utils";
import type { TicketStatus, ProjectStatus, ContractStatus } from "@/data/types";

interface StatusBadgeProps {
  status: TicketStatus | ProjectStatus | ContractStatus;
}

const statusStyles: Record<TicketStatus | ProjectStatus | ContractStatus, string> = {
  Open: "bg-error-tint text-error",
  Pending: "bg-warning-tint text-warning",
  Closed: "bg-success-tint text-success",
  "On Track": "bg-success-tint text-success",
  "At Risk": "bg-warning-tint text-warning",
  Delayed: "bg-error-tint text-error",
  active: "bg-success-tint text-success",
  expiring: "bg-warning-tint text-warning",
  expired: "bg-error-tint text-error",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {status}
    </span>
  );
}
