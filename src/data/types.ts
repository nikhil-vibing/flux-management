export type TicketStatus = "Open" | "Pending" | "Closed";
export type TicketPriority = "Critical" | "High" | "Medium" | "Low";
export type ProjectStatus = "On Track" | "At Risk" | "Delayed";
export type TaskStatus = "To Do" | "In Progress" | "Review" | "Complete";

export interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: TicketPriority;
  created: string;
  updated: string;
  assignedTo: { name: string; initials: string };
  description: string;
  resolutionTime?: string;
  activity: ActivityEvent[];
  attachments?: Attachment[];
}

export interface ActivityEvent {
  id: string;
  title: string;
  timestamp: string;
  type: "update" | "resolution" | "pending" | "system";
  note?: string;
}

export interface Attachment {
  name: string;
  type: "pdf" | "docx" | "xlsx" | "image" | "other";
  size: string;
}

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  progress: number;
  tasksCompleted: number;
  totalTasks: number;
  dueDate: string;
  startDate: string;
  description: string;
  category: string;
  assignees: { name: string; initials: string; role: string }[];
  tasks: ProjectTask[];
}

export interface ProjectTask {
  id: string;
  name: string;
  status: TaskStatus;
  priority: TicketPriority;
  assignee: { name: string; initials: string };
  dueDate: string;
}

export interface Document {
  id: string;
  name: string;
  type: "pdf" | "docx" | "xlsx" | "image" | "other";
  category: string;
  folder: string;
  modified: string;
  size: string;
}

export interface FolderNode {
  name: string;
  path: string;
  children?: FolderNode[];
}

export interface SoftwareItem {
  id: string;
  name: string;
  icon: string;
  licenseCount: string;
  costPerMonth: string;
  renewalDate: string;
  status: "Active" | "Expiring Soon" | "Expired";
  billingCycle: string;
  adminContact: string;
}

export interface InfrastructureItem {
  id: string;
  name: string;
  type: "monitor" | "server" | "printer" | "wifi";
  location: string;
  status: "Online" | "Offline";
  lastSeen: string;
}

export interface CloudService {
  id: string;
  name: string;
  provider: string;
  tier: string;
  usage: number;
  status: "Active" | "Expiring Soon" | "Expired";
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "ticket" | "project" | "system";
  read: boolean;
  link?: string;
}

export interface AIMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  richContent?: {
    type: "table" | "chart" | "reference";
    data: Record<string, unknown>;
  };
}

export interface ConnectorService {
  name: string;
  icon: string;
  status: "Connected" | "Disconnected";
  lastSynced: string;
  summary: string;
}
