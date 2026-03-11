"use client";

import { type ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-7">
      <div>
        <h1 className="font-[family-name:var(--font-aptos)] font-bold text-[28px] tracking-[-0.02em] leading-tight text-text-primary">
          {title}
        </h1>
        <p className="font-normal text-[15px] text-text-secondary mt-1">
          {subtitle}
        </p>
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
