import type { Notification } from "./types";

export const mockNotifications: Notification[] = [
  {
    id: "NOTIF-001",
    title: "Critical: Database Server High CPU",
    description:
      "DB-PROD-01 CPU usage has exceeded 95% for over 30 minutes. Immediate attention required.",
    timestamp: "10m ago",
    type: "ticket",
    read: false,
    link: "/tickets/TK-1012",
  },
  {
    id: "NOTIF-002",
    title: "MFA Issue Affecting Executives",
    description:
      "Multiple executives unable to authenticate. Temporary bypass codes issued. Investigation in progress.",
    timestamp: "45m ago",
    type: "ticket",
    read: false,
    link: "/tickets/TK-1005",
  },
  {
    id: "NOTIF-003",
    title: "Security Compliance Audit At Risk",
    description:
      "The Security Compliance Audit project is now flagged as At Risk. 11 tasks remain with only 20 days until deadline.",
    timestamp: "2h ago",
    type: "project",
    read: false,
    link: "/projects/PRJ-002",
  },
  {
    id: "NOTIF-004",
    title: "Adobe CC Licenses Expiring Feb 28",
    description:
      "20 Adobe Creative Cloud licenses expire in 20 days. Renewal quote requested from vendor.",
    timestamp: "3h ago",
    type: "system",
    read: false,
    link: "/tech-stack",
  },
  {
    id: "NOTIF-005",
    title: "Windows Update Causing App Crashes",
    description:
      "KB5034765 is breaking the inventory management app on 15 warehouse workstations. Workaround deployed.",
    timestamp: "5h ago",
    type: "ticket",
    read: false,
    link: "/tickets/TK-1023",
  },
  {
    id: "NOTIF-006",
    title: "Network Upgrade Phase 2 Nearly Complete",
    description:
      "Project is at 90% completion. Final documentation under review. On track for Feb 20 deadline.",
    timestamp: "8h ago",
    type: "project",
    read: true,
    link: "/projects/PRJ-003",
  },
  {
    id: "NOTIF-007",
    title: "File Server Disk Space Warning",
    description:
      "FS-PROD-01 is at 92% capacity. Archival plan submitted for management approval.",
    timestamp: "1d ago",
    type: "system",
    read: true,
    link: "/tickets/TK-1017",
  },
  {
    id: "NOTIF-008",
    title: "Slack License Renewal Due Mar 15",
    description:
      "Slack Business+ subscription renews in 34 days. Current usage: 200 of 250 licenses.",
    timestamp: "1d ago",
    type: "system",
    read: true,
    link: "/tech-stack",
  },
  {
    id: "NOTIF-009",
    title: "M365 Migration Milestone Reached",
    description:
      "All 250 mailboxes successfully migrated to Exchange Online. On-premises Exchange decommissioning in progress.",
    timestamp: "2d ago",
    type: "project",
    read: true,
    link: "/projects/PRJ-006",
  },
  {
    id: "NOTIF-010",
    title: "Phishing Campaign Blocked",
    description:
      "23 phishing emails purged from Exchange. No users clicked the malicious link. Sender domain blocked.",
    timestamp: "4d ago",
    type: "ticket",
    read: true,
    link: "/tickets/TK-1020",
  },
  {
    id: "NOTIF-011",
    title: "WiFi Access Point Offline",
    description:
      "AP-CONF-01 on the 4th floor conference area has been offline for 4 hours. May affect meeting connectivity.",
    timestamp: "4h ago",
    type: "system",
    read: false,
    link: "/tech-stack",
  },
  {
    id: "NOTIF-012",
    title: "DocuSign License Expired",
    description:
      "DocuSign Business Pro subscription expired on Jan 15, 2026. 10 licenses affected. Contact Lisa Park for renewal.",
    timestamp: "3d ago",
    type: "system",
    read: true,
    link: "/tech-stack",
  },
];
