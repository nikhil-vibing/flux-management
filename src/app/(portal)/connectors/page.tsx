"use client";

import {
  Headset,
  RocketLaunch,
  Shield,
  Cloud,
  ArrowsClockwise,
  CheckCircle,
  WarningCircle,
  Plugs,
} from "@phosphor-icons/react";
import { PageHeader } from "@/components/shared/page-header";

const connectors = [
  {
    id: "atera",
    name: "Atera",
    description: "IT management and monitoring platform",
    icon: Headset,
    status: "connected" as const,
    lastSync: "2 minutes ago",
    metrics: "47 tickets this month \u2022 12 open",
  },
  {
    id: "planner",
    name: "Microsoft Planner",
    description: "Task and project management",
    icon: RocketLaunch,
    status: "connected" as const,
    lastSync: "5 minutes ago",
    metrics: "5 active plans \u2022 23 tasks",
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    description: "Document management and collaboration",
    icon: Shield,
    status: "connected" as const,
    lastSync: "10 minutes ago",
    metrics: "156 documents \u2022 8 folders",
  },
  {
    id: "azure",
    name: "Azure AD",
    description: "Identity and access management",
    icon: Cloud,
    status: "connected" as const,
    lastSync: "1 minute ago",
    metrics: "48 users \u2022 12 groups",
  },
  {
    id: "intune",
    name: "Microsoft Intune",
    description: "Device management and compliance",
    icon: Shield,
    status: "disconnected" as const,
    lastSync: "3 hours ago",
    metrics: "Requires re-authentication",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    description: "Communication and collaboration",
    icon: RocketLaunch,
    status: "connected" as const,
    lastSync: "8 minutes ago",
    metrics: "15 channels \u2022 32 active users",
  },
];

export default function ConnectorsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Connectors"
        subtitle="Manage your external service integrations"
        actions={
          <button className="flex items-center gap-2 h-9 px-4 bg-blue hover:bg-blue-light text-white text-sm font-medium rounded-xl transition-colors duration-150">
            <Plugs size={16} weight="light" />
            Add Connector
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {connectors.map((connector) => {
          const Icon = connector.icon;
          const isConnected = connector.status === "connected";

          return (
            <div
              key={connector.id}
              className={`bg-white rounded-2xl shadow-level-1 p-6 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border ${
                isConnected ? "border-ice/40" : "border-error/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-blue-10">
                  <Icon size={22} weight="light" className="text-blue" />
                </div>
                <div className="flex items-center gap-1.5">
                  {isConnected ? (
                    <CheckCircle size={16} weight="fill" className="text-success" />
                  ) : (
                    <WarningCircle size={16} weight="fill" className="text-error" />
                  )}
                  <span className={`text-xs font-medium ${isConnected ? "text-success" : "text-error"}`}>
                    {isConnected ? "Connected" : "Disconnected"}
                  </span>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary">
                {connector.name}
              </h3>
              <p className="text-[13px] text-text-secondary mt-0.5">
                {connector.description}
              </p>

              <div className="mt-3 pt-3 border-t border-ice">
                <p className="text-xs text-text-muted">{connector.metrics}</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-text-muted">
                  <ArrowsClockwise size={12} weight="light" />
                  <span className="text-[11px]">Synced {connector.lastSync}</span>
                </div>
              </div>

              {!isConnected && (
                <button className="w-full mt-3 h-8 bg-blue-10 text-blue text-xs font-medium rounded-xl hover:bg-blue/10 transition-colors duration-150">
                  Reconnect
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
