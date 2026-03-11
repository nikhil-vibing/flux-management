"use client";

import { useState } from "react";
import {
  Circuitry,
  Monitor,
  HardDrives,
  Printer,
  WifiHigh,
  Cloud,
  CaretDown,
  Desktop,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { mockSoftware, mockInfrastructure, mockCloudServices } from "@/data/mock-tech-stack";
import { motion, AnimatePresence } from "framer-motion";

const infraIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor size={24} weight="light" />,
  server: <HardDrives size={24} weight="light" />,
  printer: <Printer size={24} weight="light" />,
  wifi: <WifiHigh size={24} weight="light" />,
};

function AccordionSection({
  icon,
  title,
  count,
  defaultOpen = true,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 overflow-hidden">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center w-full h-14 px-5 hover:bg-ice-30/50 transition-colors duration-150"
      >
        <div className="w-1 h-full bg-blue mr-4 rounded-r" />
        <span className="text-blue mr-3">{icon}</span>
        <span className="font-[family-name:var(--font-aptos)] font-semibold text-base text-text-primary">
          {title}
        </span>
        <span className="ml-3 text-xs font-medium text-text-secondary bg-ice-30 px-2.5 py-0.5 rounded-full">
          {count}
        </span>
        <CaretDown
          size={18}
          weight="light"
          className={`ml-auto text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TechStackPage() {
  const totalSoftware = mockSoftware.length;
  const activeSubs = mockSoftware.filter((s) => s.status === "Active").length;
  const expiringSoon = mockSoftware.filter((s) => s.status === "Expiring Soon").length;
  const totalInfra = mockInfrastructure.length;
  const monthlyCost = mockSoftware.reduce((acc, s) => acc + parseFloat(s.costPerMonth.replace("$", "").replace(",", "")), 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tech Stack"
        subtitle="Your technology infrastructure and subscriptions"
      />

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          icon={<Desktop size={20} weight="light" />}
          value={String(totalSoftware)}
          label="Total Software"
          iconBgClass="bg-blue-10"
          iconColorClass="text-blue"
          index={0}
        />
        <KpiCard
          icon={<Circuitry size={20} weight="light" />}
          value={String(activeSubs)}
          label="Active Subscriptions"
          trend={expiringSoon > 0 ? { value: `${expiringSoon} expiring soon`, direction: "up", sentiment: "negative" } : undefined}
          iconBgClass="bg-success-tint"
          iconColorClass="text-success"
          index={1}
        />
        <KpiCard
          icon={<HardDrives size={20} weight="light" />}
          value={String(totalInfra)}
          label="Infrastructure"
          iconBgClass="bg-warning-tint"
          iconColorClass="text-warning"
          index={2}
        />
        <KpiCard
          icon={<CurrencyDollar size={20} weight="light" />}
          value={`$${monthlyCost.toLocaleString()}`}
          label="Monthly Cost"
          iconBgClass="bg-blue-10"
          iconColorClass="text-blue"
          index={3}
        />
      </div>

      {/* Software & Subscriptions */}
      <AccordionSection icon={<Desktop size={20} weight="light" />} title="Software & Subscriptions" count={mockSoftware.length}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-ice-30 h-11">
                <th className="px-5 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">Software</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden md:table-cell">Licenses</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden sm:table-cell">Cost/Month</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden lg:table-cell">Renewal</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockSoftware.map((item) => (
                <tr
                  key={item.id}
                  className={`h-[52px] border-b border-ice last:border-0 hover:bg-blue-10/50 transition-colors duration-150 cursor-pointer ${
                    item.status === "Expiring Soon" ? "border-l-[3px] border-l-warning" : ""
                  }`}
                >
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[10px] bg-ice-30 flex items-center justify-center flex-shrink-0">
                        <Desktop size={16} weight="light" className="text-text-muted" />
                      </div>
                      <span className="text-sm font-medium text-text-primary">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 text-[13px] text-text-secondary hidden md:table-cell">{item.licenseCount}</td>
                  <td className="px-4 text-[13px] text-text-secondary hidden sm:table-cell">{item.costPerMonth}</td>
                  <td className="px-4 text-[13px] text-text-secondary hidden lg:table-cell">{item.renewalDate}</td>
                  <td className="px-4">
                    <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${
                      item.status === "Active" ? "bg-success-tint text-success" :
                      item.status === "Expiring Soon" ? "bg-warning-tint text-warning" :
                      "bg-error-tint text-error"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionSection>

      {/* Infrastructure */}
      <AccordionSection icon={<HardDrives size={20} weight="light" />} title="Infrastructure" count={mockInfrastructure.length}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-ice-30 h-11">
                <th className="px-5 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">Device</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden md:table-cell">Location</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">Status</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden sm:table-cell">Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {mockInfrastructure.map((item) => (
                <tr
                  key={item.id}
                  className={`h-[52px] border-b border-ice last:border-0 hover:bg-blue-10/50 transition-colors duration-150 ${
                    item.status === "Offline" ? "bg-error-tint/30" : ""
                  }`}
                >
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      <span className="text-text-muted">{infraIcons[item.type]}</span>
                      <span className="text-sm text-text-primary">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 text-[13px] text-text-secondary hidden md:table-cell">{item.location}</td>
                  <td className="px-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.status === "Online" ? "bg-success" : "bg-error"}`} />
                      <span className={`text-xs ${item.status === "Online" ? "text-success" : "text-error"}`}>
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className={`px-4 text-xs hidden sm:table-cell ${item.status === "Offline" ? "text-error" : "text-text-muted"}`}>
                    {item.lastSeen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionSection>

      {/* Cloud Services */}
      <AccordionSection icon={<Cloud size={20} weight="light" />} title="Cloud Services" count={mockCloudServices.length}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-ice-30 h-11">
                <th className="px-5 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">Service</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden md:table-cell">Tier</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted hidden sm:table-cell">Usage</th>
                <th className="px-4 text-left text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockCloudServices.map((item) => (
                <tr key={item.id} className="h-[52px] border-b border-ice last:border-0 hover:bg-blue-10/50 transition-colors duration-150">
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      <Cloud size={24} weight="light" className="text-text-muted" />
                      <div>
                        <span className="text-sm text-text-primary block">{item.name}</span>
                        <span className="text-[11px] text-text-muted">{item.provider}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 text-[13px] text-text-secondary hidden md:table-cell">{item.tier}</td>
                  <td className="px-4 hidden sm:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-ice-50 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue transition-all duration-300"
                          style={{ width: `${item.usage}%` }}
                        />
                      </div>
                      <span className="text-xs text-text-muted">{item.usage}%</span>
                    </div>
                  </td>
                  <td className="px-4">
                    <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${
                      item.status === "Active" ? "bg-success-tint text-success" :
                      item.status === "Expiring Soon" ? "bg-warning-tint text-warning" :
                      "bg-error-tint text-error"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionSection>
    </div>
  );
}
