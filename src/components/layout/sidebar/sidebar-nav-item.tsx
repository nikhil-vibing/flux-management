"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { IconProps } from "@phosphor-icons/react";

interface SidebarNavItemProps {
  href: string;
  Icon: React.ComponentType<IconProps>;
  label: string;
  collapsed: boolean;
}

export function SidebarNavItem({ href, Icon, label, collapsed }: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  const content = (
    <Link
      href={href}
      className={`
        group relative flex items-center gap-3 rounded-md mx-2 px-3 py-2 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isActive
          ? "bg-navy-80 border-l-[3px] border-l-blue"
          : "border-l-[3px] border-l-transparent hover:bg-navy-95"
        }
        ${collapsed ? "justify-center mx-1 px-0 py-2.5" : ""}
      `}
    >
      <span
        className={`flex-shrink-0 transition-colors duration-150 ${
          isActive ? "text-white" : "text-text-on-dark-muted group-hover:text-white"
        }`}
      >
        <Icon size={22} weight={isActive ? "fill" : "light"} />
      </span>
      {!collapsed && (
        <span
          className={`text-[13px] leading-5 tracking-[0.01em] transition-colors duration-150 ${
            isActive
              ? "text-white font-semibold"
              : "text-text-on-dark-muted font-medium group-hover:text-white"
          }`}
        >
          {label}
        </span>
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={8}
          className="bg-navy text-white text-xs font-medium px-2.5 py-1.5 rounded-md border-0 shadow-level-2"
        >
          {label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
}
