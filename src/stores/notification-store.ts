import { create } from "zustand";
import type { Notification } from "@/data/types";
import { mockNotifications } from "@/data/mock-notifications";

interface NotificationState {
  notifications: Notification[];
  isOpen: boolean;
  activeTab: "all" | "tickets" | "projects" | "system";
  setOpen: (open: boolean) => void;
  setActiveTab: (tab: "all" | "tickets" | "projects" | "system") => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  unreadCount: () => number;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: mockNotifications,
  isOpen: false,
  activeTab: "all",
  setOpen: (open) => set({ isOpen: open }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
    })),
  unreadCount: () => get().notifications.filter((n) => !n.read).length,
}));
