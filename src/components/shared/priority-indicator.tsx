"use client";

import { ArrowUp, ArrowDown, Equals } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { TicketPriority } from "@/data/types";

interface PriorityIndicatorProps {
  priority: TicketPriority;
}

const priorityConfig: Record<
  TicketPriority,
  { icon: typeof ArrowUp; colorClass: string; label: string }
> = {
  Critical: { icon: ArrowUp, colorClass: "text-error", label: "Critical" },
  High: { icon: ArrowUp, colorClass: "text-warning", label: "High" },
  Medium: { icon: Equals, colorClass: "text-blue", label: "Medium" },
  Low: { icon: ArrowDown, colorClass: "text-text-muted", label: "Low" },
};

export function PriorityIndicator({ priority }: PriorityIndicatorProps) {
  const config = priorityConfig[priority];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-1.5">
      <Icon size={14} weight="light" className={cn(config.colorClass)} />
      <span
        className={cn(
          "font-normal text-xs",
          config.colorClass
        )}
      >
        {config.label}
      </span>
    </div>
  );
}
