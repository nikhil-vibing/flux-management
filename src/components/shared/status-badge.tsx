"use client";

import { cn } from "@/lib/utils";
import type { TicketStatus, ProjectStatus } from "@/data/types";

interface StatusBadgeProps {
  status: TicketStatus | ProjectStatus;
}

const statusStyles: Record<TicketStatus | ProjectStatus, string> = {
  Open: "bg-error-tint text-error",
  Pending: "bg-warning-tint text-warning",
  Closed: "bg-success-tint text-success",
  "On Track": "bg-success-tint text-success",
  "At Risk": "bg-warning-tint text-warning",
  Delayed: "bg-error-tint text-error",
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
