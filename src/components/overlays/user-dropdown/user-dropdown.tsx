"use client";

import { GearSix, Question, SignOut } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface UserDropdownProps {
  open: boolean;
  onClose: () => void;
}

export function UserDropdown({ open, onClose }: UserDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full right-0 mt-2 w-[220px] bg-white rounded-2xl shadow-level-3 border border-ice/40 z-50 overflow-hidden"
        >
          {/* User Info */}
          <div className="px-4 py-3 border-b border-ice">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-80 flex items-center justify-center flex-shrink-0">
                <span className="font-[family-name:var(--font-aptos)] font-semibold text-sm text-white">
                  SM
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">Sarah Mitchell</p>
                <p className="text-xs text-text-muted truncate">sarah@acmecorp.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {[
              { icon: <GearSix size={18} weight="light" />, label: "Account Settings", danger: false },
              { icon: <Question size={18} weight="light" />, label: "Help & Support", danger: false },
              { icon: <SignOut size={18} weight="light" />, label: "Sign Out", danger: true },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2.5 w-full px-4 h-10 text-left transition-colors hover:bg-ice-30 ${
                  item.danger ? "text-error" : "text-text-primary"
                }`}
              >
                <span className={item.danger ? "text-error" : "text-text-secondary"}>
                  {item.icon}
                </span>
                <span className="text-[13px]">{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
