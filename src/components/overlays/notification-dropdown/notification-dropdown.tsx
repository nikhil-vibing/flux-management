"use client";

import { useNotificationStore } from "@/stores/notification-store";
import {
  TicketIcon,
  KanbanIcon,
  GearSixIcon,
  BellIcon,
  UsersThreeIcon,
  WarningIcon,
  BuildingsIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import type { Notification } from "@/data/types";
import { useRef, useEffect } from "react";

interface NotificationDropdownProps {
  open: boolean;
  onClose: () => void;
}

const tabs = [
  { key: "all" as const, label: "All" },
  { key: "tickets" as const, label: "Tickets" },
  { key: "projects" as const, label: "Projects" },
  { key: "system" as const, label: "System" },
];

function NotificationIcon({ type }: { type: Notification["type"] }) {
  const config: Record<string, { icon: React.ReactNode; bg: string; color: string }> = {
    ticket: { icon: <TicketIcon size={18} weight="light" />, bg: "bg-blue-10", color: "text-blue" },
    ticket_escalation: { icon: <WarningIcon size={18} weight="light" />, bg: "bg-error/10", color: "text-error" },
    project: { icon: <KanbanIcon size={18} weight="light" />, bg: "bg-success-tint", color: "text-success" },
    system: { icon: <GearSixIcon size={18} weight="light" />, bg: "bg-ice-30", color: "text-text-secondary" },
    task_assignment: { icon: <KanbanIcon size={18} weight="light" />, bg: "bg-blue-10", color: "text-blue" },
    contact_form: { icon: <BuildingsIcon size={18} weight="light" />, bg: "bg-blue-10", color: "text-blue" },
    health_alert: { icon: <WarningIcon size={18} weight="light" />, bg: "bg-warning/10", color: "text-warning" },
    team_update: { icon: <UsersThreeIcon size={18} weight="light" />, bg: "bg-success-tint", color: "text-success" },
  };

  const c = config[type] || config.system;

  return (
    <div className={`w-9 h-9 rounded-full ${c.bg} ${c.color} flex items-center justify-center flex-shrink-0`}>
      {c.icon}
    </div>
  );
}

export function NotificationDropdown({ open, onClose }: NotificationDropdownProps) {
  const { notifications, activeTab, setActiveTab, markAsRead, markAllAsRead, unreadCount } =
    useNotificationStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  const filtered =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => {
          if (activeTab === "tickets") return n.type === "ticket" || n.type === "ticket_escalation";
          if (activeTab === "projects") return n.type === "project" || n.type === "task_assignment";
          return n.type === "system" || n.type === "health_alert" || n.type === "team_update" || n.type === "contact_form";
        });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full right-0 mt-2 w-[400px] max-h-[520px] bg-white rounded-2xl shadow-level-3 border border-ice/40 z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-ice">
            <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-base text-navy">
              Notifications
            </h3>
            {unreadCount() > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-blue hover:underline"
              >
                Mark all read
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-ice">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 text-xs font-medium py-2 border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "text-blue border-blue"
                    : "text-text-secondary border-transparent hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center py-12">
                <BellIcon size={48} weight="light" className="text-silver-dark mb-2" />
                <p className="text-sm text-text-muted">No notifications</p>
              </div>
            ) : (
              filtered.map((n) => (
                <button
                  key={n.id}
                  onClick={() => markAsRead(n.id)}
                  className="relative flex items-start gap-3 w-full px-5 py-3.5 border-b border-ice-30 hover:bg-ice-30 transition-colors text-left"
                >
                  {!n.read && (
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue" />
                  )}
                  <NotificationIcon type={n.type} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-[13px] ${n.read ? "text-text-secondary" : "text-text-primary font-medium"} truncate`}>
                      {n.title}
                    </p>
                    <p className="text-xs text-text-muted line-clamp-2 mt-0.5">
                      {n.description}
                    </p>
                  </div>
                  <span className="text-[11px] text-text-muted whitespace-nowrap flex-shrink-0">
                    {n.timestamp}
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-ice px-3 py-3 text-center">
            <button className="text-[13px] font-medium text-blue hover:underline">
              View all notifications
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
