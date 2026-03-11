"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SquaresFourIcon,
  BuildingsIcon,
  TicketIcon,
  KanbanIcon,
  DotsThreeOutlineIcon,
  UsersThreeIcon,
  ChartLineIcon,
  PlugIcon,
  RobotIcon,
  GearSixIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const tabs = [
  { href: "/dashboard", icon: SquaresFourIcon, label: "Dashboard" },
  { href: "/clients", icon: BuildingsIcon, label: "Clients" },
  { href: "/tickets", icon: TicketIcon, label: "Tickets" },
  { href: "/projects", icon: KanbanIcon, label: "Projects" },
];

const moreItems = [
  { href: "/team", icon: UsersThreeIcon, label: "Team" },
  { href: "/reports", icon: ChartLineIcon, label: "Reports" },
  { href: "/connectors", icon: PlugIcon, label: "Connectors" },
  { href: "/ai-assistant", icon: RobotIcon, label: "AI Assistant" },
  { href: "/settings", icon: GearSixIcon, label: "Settings" },
];

export function MobileBottomBar() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const isMoreActive = moreItems.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );

  return (
    <>
      {/* More bottom sheet */}
      {showMore && (
        <>
          <div
            className="fixed inset-0 bg-navy/30 z-50"
            onClick={() => setShowMore(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-level-3 z-50 pb-[env(safe-area-inset-bottom)]">
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-ice" />
            </div>
            <div className="px-4 pb-4 space-y-1">
              {moreItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setShowMore(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 ${
                      isActive
                        ? "bg-blue-10 text-blue"
                        : "text-text-primary hover:bg-ice-30"
                    }`}
                  >
                    <Icon size={22} weight={isActive ? "fill" : "light"} />
                    <span className="text-[14px] font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-ice z-40 md:hidden pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-14">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-150 ${
                  isActive ? "text-blue" : "text-text-muted"
                }`}
              >
                <Icon size={22} weight={isActive ? "fill" : "light"} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setShowMore(true)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-150 ${
              isMoreActive ? "text-blue" : "text-text-muted"
            }`}
          >
            <DotsThreeOutlineIcon size={22} weight="light" />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}
