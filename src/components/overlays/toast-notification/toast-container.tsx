"use client";

import { useToastStore } from "@/stores/toast-store";
import type { Toast, ToastType } from "@/stores/toast-store";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, Warning, Info, XCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const config: Record<ToastType, { icon: React.ReactNode; border: string; bg: string; color: string }> = {
  success: {
    icon: <CheckCircle size={20} weight="light" />,
    border: "border-l-success",
    bg: "bg-success-tint",
    color: "text-success",
  },
  warning: {
    icon: <Warning size={20} weight="light" />,
    border: "border-l-warning",
    bg: "bg-warning-tint",
    color: "text-warning",
  },
  danger: {
    icon: <XCircle size={20} weight="light" />,
    border: "border-l-error",
    bg: "bg-error-tint",
    color: "text-error",
  },
  info: {
    icon: <Info size={20} weight="light" />,
    border: "border-l-blue",
    bg: "bg-blue-10",
    color: "text-blue",
  },
};

function ToastItem({ toast }: { toast: Toast }) {
  const removeToast = useToastStore((s) => s.removeToast);
  const [paused, setPaused] = useState(false);
  const duration = toast.duration ?? 5000;
  const c = config[toast.type];

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => removeToast(toast.id), duration);
    return () => clearTimeout(timer);
  }, [toast.id, duration, paused, removeToast]);

  return (
    <motion.div
      layout
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`relative w-[360px] bg-white rounded-2xl shadow-level-3 border-l-4 ${c.border} p-3.5 overflow-hidden`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-full ${c.bg} ${c.color} flex items-center justify-center flex-shrink-0`}>
          {c.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-text-primary">{toast.title}</p>
          {toast.description && (
            <p className="text-xs text-text-secondary mt-0.5 line-clamp-2">{toast.description}</p>
          )}
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-text-muted hover:text-text-secondary flex-shrink-0"
        >
          <X size={16} weight="light" />
        </button>
      </div>
      {/* Progress bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 ${c.color.replace("text-", "bg-")}`}
        initial={{ width: "100%" }}
        animate={{ width: paused ? undefined : "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />
    </motion.div>
  );
}

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <div className="fixed top-6 right-6 z-[55] flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
