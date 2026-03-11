import type { Notification } from "./types";

export const mockNotifications: Notification[] = [
  {
    id: "NOTIF-001",
    title: "Critical: Database Server High CPU",
    description:
      "DB-PROD-01 CPU usage has exceeded 95% for over 30 minutes. Acme Corporation affected.",
    timestamp: "10m ago",
    type: "ticket",
    read: false,
    link: "/tickets?ticket=TK-1012",
  },
  {
    id: "NOTIF-002",
    title: "Ticket Escalated: MFA Issue",
    description:
      "TK-1005 escalated to Critical. Multiple Acme Corporation executives unable to authenticate.",
    timestamp: "45m ago",
    type: "ticket_escalation",
    read: false,
    link: "/tickets?ticket=TK-1005",
  },
  {
    id: "NOTIF-003",
    title: "Security Compliance Audit At Risk",
    description:
      "Summit Financial Group — audit project flagged At Risk. 11 tasks remain with 20 days to deadline.",
    timestamp: "2h ago",
    type: "project",
    read: false,
    link: "/projects/PRJ-002",
  },
  {
    id: "NOTIF-004",
    title: "Client Health Alert: Coastal Retail Co",
    description:
      "SLA compliance dropped to 87%. 3 open tickets overdue. Health score changed to at-risk.",
    timestamp: "3h ago",
    type: "health_alert",
    read: false,
    link: "/clients/CLT-005",
  },
  {
    id: "NOTIF-005",
    title: "New Task Assignment",
    description:
      "You've been assigned 'Security hardening and compliance checks' on Cloud Infrastructure Migration.",
    timestamp: "5h ago",
    type: "task_assignment",
    read: false,
    link: "/projects/PRJ-001",
  },
  {
    id: "NOTIF-006",
    title: "Network Upgrade Phase 2 Nearly Complete",
    description:
      "Apex Manufacturing — project at 90% completion. Final documentation under review.",
    timestamp: "8h ago",
    type: "project",
    read: true,
    link: "/projects/PRJ-003",
  },
  {
    id: "NOTIF-007",
    title: "New Team Member Invited",
    description:
      "Priya Sharma has been invited to join the team as an employee. Awaiting acceptance.",
    timestamp: "1d ago",
    type: "team_update",
    read: true,
    link: "/team",
  },
  {
    id: "NOTIF-008",
    title: "Contact Form: Brightpath Education",
    description:
      "New contact form submission from Brightpath Education requesting expanded services.",
    timestamp: "1d ago",
    type: "contact_form",
    read: true,
    link: "/clients/CLT-007",
  },
  {
    id: "NOTIF-009",
    title: "M365 Migration Milestone Reached",
    description:
      "Brightpath Education — all 250 mailboxes migrated. Exchange decommissioning in progress.",
    timestamp: "2d ago",
    type: "project",
    read: true,
    link: "/projects/PRJ-006",
  },
  {
    id: "NOTIF-010",
    title: "Phishing Campaign Blocked",
    description:
      "23 phishing emails purged at Acme Corporation. No users clicked the malicious link.",
    timestamp: "4d ago",
    type: "ticket",
    read: true,
    link: "/tickets?ticket=TK-1020",
  },
  {
    id: "NOTIF-011",
    title: "Client Contract Expiring",
    description:
      "Sterling Legal Partners contract expires in 30 days. Renewal discussion recommended.",
    timestamp: "4h ago",
    type: "system",
    read: false,
    link: "/clients/CLT-006",
  },
  {
    id: "NOTIF-012",
    title: "Monthly Revenue Report Ready",
    description:
      "February revenue report generated. Total MRR: $118,500 across 10 active clients.",
    timestamp: "3d ago",
    type: "system",
    read: true,
    link: "/reports/revenue",
  },
];
