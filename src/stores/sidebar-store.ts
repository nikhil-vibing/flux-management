import { create } from "zustand";

interface SidebarState {
  isExpanded: boolean;
  isMobileOpen: boolean;
  toggleExpanded: () => void;
  setMobileOpen: (open: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded: true,
  isMobileOpen: false,
  toggleExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),
  setMobileOpen: (open) => set({ isMobileOpen: open }),
}));
