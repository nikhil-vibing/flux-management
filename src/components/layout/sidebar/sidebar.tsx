"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { SidebarNavItem } from "./sidebar-nav-item";
import {
  House,
  Ticket,
  Kanban,
  Folder,
  Circuitry,
  Robot,
  Gear,
  Question,
  X,
  CaretLeft,
  Plugs,
  SignOut,
} from "@phosphor-icons/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FluxLogo } from "@/components/shared/flux-logo";

const mainNav = [
  { href: "/dashboard", icon: House, label: "Dashboard" },
  { href: "/helpdesk", icon: Ticket, label: "Tickets" },
  { href: "/projects", icon: Kanban, label: "Projects" },
  { href: "/documents", icon: Folder, label: "Documents" },
];

const toolsNav = [
  { href: "/tech-stack", icon: Circuitry, label: "Tech Stack" },
  { href: "/connectors", icon: Plugs, label: "Connectors" },
  { href: "/ai-assistant", icon: Robot, label: "AI Assistant" },
];

const accountNav = [
  { href: "/settings", icon: Gear, label: "Settings" },
  { href: "/help", icon: Question, label: "Help & Support" },
];

export function Sidebar() {
  const { isExpanded, isMobileOpen, setMobileOpen, toggleExpanded } = useSidebarStore();
  const showLabels = isExpanded || isMobileOpen;

  return (
    <TooltipProvider>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-navy/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen z-40 flex flex-col bg-gradient-to-b from-navy via-navy to-navy-95
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isMobileOpen
            ? "translate-x-0 w-[280px] shadow-level-3"
            : "-translate-x-full lg:translate-x-0"
          }
          ${isExpanded ? "lg:w-[260px]" : "lg:w-[72px]"}
        `}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between h-14 px-5">
          <div className={`flex items-center gap-2.5 ${!showLabels ? "justify-center w-full" : ""}`}>
            <FluxLogo size={showLabels ? 32 : 28} className="text-white" />
            {showLabels && (
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-aptos)] font-bold text-sm tracking-[0.15em] text-white">
                  FLUX
                </span>
                <span className="text-[9px] tracking-[0.2em] text-text-on-dark-muted">
                  TECHNOLOGIES
                </span>
              </div>
            )}
          </div>
          {/* Mobile close button */}
          {isMobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-text-on-dark-muted hover:text-white p-1"
            >
              <X size={20} weight="light" />
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="mx-4 border-t border-white/8" />

        {/* Main Navigation */}
        <nav className="flex-1 py-3 overflow-y-auto custom-scrollbar">
          {showLabels && (
            <span className="px-5 mb-1.5 block text-[10px] font-medium tracking-[0.1em] uppercase text-text-on-dark-muted">
              Main
            </span>
          )}
          <div className="space-y-0.5">
            {mainNav.map((item) => (
              <SidebarNavItem
                key={item.href}
                href={item.href}
                Icon={item.icon}
                label={item.label}
                collapsed={!showLabels}
              />
            ))}
          </div>

          {showLabels && (
            <span className="px-5 mt-5 mb-1.5 block text-[10px] font-medium tracking-[0.1em] uppercase text-text-on-dark-muted">
              Tools
            </span>
          )}
          {!showLabels && <div className="mx-4 my-3 border-t border-white/8" />}
          <div className="space-y-0.5">
            {toolsNav.map((item) => (
              <SidebarNavItem
                key={item.href}
                href={item.href}
                Icon={item.icon}
                label={item.label}
                collapsed={!showLabels}
              />
            ))}
          </div>

          {showLabels && (
            <span className="px-5 mt-5 mb-1.5 block text-[10px] font-medium tracking-[0.1em] uppercase text-text-on-dark-muted">
              Account
            </span>
          )}
          {!showLabels && <div className="mx-4 my-3 border-t border-white/8" />}
          <div className="space-y-0.5">
            {accountNav.map((item) => (
              <SidebarNavItem
                key={item.href}
                href={item.href}
                Icon={item.icon}
                label={item.label}
                collapsed={!showLabels}
              />
            ))}
          </div>
        </nav>

        {/* Collapse Button (desktop only) */}
        <div className="hidden lg:block mx-4 border-t border-white/8" />
        <button
          onClick={toggleExpanded}
          className="hidden lg:flex items-center justify-center h-10 mx-2 mb-1 rounded-md text-text-on-dark-muted hover:text-white hover:bg-navy-95 transition-colors duration-150"
        >
          <CaretLeft
            size={18}
            weight="light"
            className={`transition-transform duration-300 ${!isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* User Block */}
        <div className="mx-4 border-t border-white/8" />
        <div
          className={`flex items-center gap-3 px-4 py-3 ${
            !showLabels ? "justify-center" : ""
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-navy-80 flex items-center justify-center flex-shrink-0">
            <span className="font-[family-name:var(--font-aptos)] font-semibold text-xs text-white">
              SM
            </span>
          </div>
          {showLabels && (
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[13px] font-medium text-white truncate">
                Sarah Mitchell
              </span>
              <span className="text-[11px] text-text-on-dark-muted truncate">IT Director</span>
            </div>
          )}
          {showLabels && (
            <button className="text-text-on-dark-muted hover:text-white transition-colors">
              <SignOut size={18} weight="light" />
            </button>
          )}
        </div>
      </aside>
    </TooltipProvider>
  );
}
