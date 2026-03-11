"use client";

import type { Ticket } from "@/data/types";
import { X, CircleDashed, Clock, CheckCircle, Paperclip, DownloadSimple } from "@phosphor-icons/react";
import { StatusBadge } from "./status-badge";
import { PriorityIndicator } from "./priority-indicator";
import { AnimatePresence, motion } from "framer-motion";

interface TicketSlideOverProps {
  ticket: Ticket | null;
  onClose: () => void;
}

const eventColors: Record<string, string> = {
  update: "bg-blue",
  resolution: "bg-success",
  pending: "bg-warning",
  system: "bg-silver-dark",
};

const fileTypeColors: Record<string, string> = {
  pdf: "text-error",
  docx: "text-blue",
  xlsx: "text-success",
  image: "text-[#8B5CF6]",
  other: "text-text-muted",
};

export function TicketSlideOver({ ticket, onClose }: TicketSlideOverProps) {
  return (
    <AnimatePresence>
      {ticket && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy/25 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[480px] lg:w-[560px] bg-white shadow-level-4 z-[61] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-ice flex-shrink-0">
              <button
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-ice-30 transition-colors"
              >
                <X size={20} weight="light" className="text-text-secondary" />
              </button>
              <span className="font-mono text-sm font-normal text-navy">
                #{ticket.id}
              </span>
              <div className="flex items-center gap-2">
                <StatusBadge status={ticket.status} />
                <PriorityIndicator priority={ticket.priority} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              {/* Subject */}
              <h2 className="font-[family-name:var(--font-aptos)] font-semibold text-lg text-navy">
                {ticket.subject}
              </h2>
              <p className="text-xs text-text-muted mt-1">
                Created by {ticket.assignedTo.name} &bull; {ticket.created}
              </p>

              <div className="border-t border-ice my-5" />

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted font-medium mb-1">Status</p>
                  <StatusBadge status={ticket.status} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted font-medium mb-1">Priority</p>
                  <PriorityIndicator priority={ticket.priority} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted font-medium mb-1">Assigned To</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy-80 flex items-center justify-center">
                      <span className="text-[10px] text-white font-medium">{ticket.assignedTo.initials}</span>
                    </div>
                    <span className="text-xs text-text-secondary">{ticket.assignedTo.name}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-text-muted font-medium mb-1">Resolution Time</p>
                  <span className="text-xs text-text-primary">{ticket.resolutionTime || "In progress"}</span>
                </div>
              </div>

              {/* Description */}
              <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[15px] text-text-primary mt-6 mb-3">
                Description
              </h3>
              <p className="text-sm text-text-primary leading-relaxed">{ticket.description}</p>

              {/* Activity Timeline */}
              <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[15px] text-text-primary mt-6 mb-3">
                Activity
              </h3>
              <div className="relative ml-[18px] border-l-2 border-ice">
                {ticket.activity.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.2 }}
                    className="relative pl-5 pb-5 last:pb-0"
                  >
                    <div
                      className={`absolute -left-[5px] top-0.5 w-2 h-2 rounded-full ${eventColors[event.type]}`}
                    />
                    <p className="text-[13px] font-medium text-text-primary">{event.title}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">{event.timestamp}</p>
                    {event.note && (
                      <div className="mt-1.5 bg-ice-30 rounded-md px-3.5 py-2.5">
                        <p className="text-[13px] text-text-secondary">{event.note}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Attachments */}
              {ticket.attachments && ticket.attachments.length > 0 && (
                <>
                  <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[15px] text-text-primary mt-6 mb-3">
                    Attachments
                  </h3>
                  <div className="space-y-2">
                    {ticket.attachments.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 border border-ice rounded-md px-3.5 py-2.5 hover:bg-ice-30 transition-colors"
                      >
                        <Paperclip size={16} weight="light" className={fileTypeColors[file.type]} />
                        <span className="text-[13px] text-text-primary flex-1 truncate">{file.name}</span>
                        <span className="text-[11px] text-text-muted">{file.size}</span>
                        <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-ice transition-colors">
                          <DownloadSimple size={16} weight="light" className="text-text-secondary" />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
