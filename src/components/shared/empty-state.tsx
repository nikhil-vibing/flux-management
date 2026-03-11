"use client";

import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-silver-dark [&_svg]:size-16 mb-4">{icon}</div>
      <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary mb-2">
        {title}
      </h3>
      <p className="font-normal text-sm text-text-secondary max-w-xs text-center mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
