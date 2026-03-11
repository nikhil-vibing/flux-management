"use client";

import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Palette,
  Camera,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react";
import { PageHeader } from "@/components/shared/page-header";

type SettingsTab = "profile" | "notifications" | "security" | "appearance";

const tabs: { id: SettingsTab; label: string; icon: React.ReactNode }[] = [
  { id: "profile", label: "Profile", icon: <User size={18} weight="light" /> },
  { id: "notifications", label: "Notifications", icon: <Bell size={18} weight="light" /> },
  { id: "security", label: "Security", icon: <Lock size={18} weight="light" /> },
  { id: "appearance", label: "Appearance", icon: <Palette size={18} weight="light" /> },
];

function ProfileTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-navy-80 flex items-center justify-center text-white font-[family-name:var(--font-aptos)] font-semibold text-xl">
            SM
          </div>
          <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center shadow-level-1">
            <Camera size={14} weight="light" />
          </button>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-lg text-text-primary">Sarah Mitchell</h3>
          <p className="text-sm text-text-secondary">IT Director</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: "Full Name", value: "Sarah Mitchell" },
          { label: "Email", value: "sarah.mitchell@company.com" },
          { label: "Role", value: "IT Director" },
          { label: "Company", value: "Acme Corporation" },
          { label: "Phone", value: "+1 (555) 123-4567" },
          { label: "Timezone", value: "Eastern Time (ET)" },
        ].map((field) => (
          <div key={field.label}>
            <label className="block text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted mb-1.5">
              {field.label}
            </label>
            <input
              defaultValue={field.value}
              className="w-full h-10 bg-white border border-ice rounded-xl px-3 text-sm text-text-primary focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="h-10 px-5 bg-blue hover:bg-blue-light text-white text-sm font-medium rounded-lg transition-colors duration-150">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function NotificationsTab() {
  const categories = [
    { label: "Ticket Updates", description: "When tickets are created, updated, or resolved", email: true, push: true },
    { label: "Project Milestones", description: "When project milestones are reached", email: true, push: false },
    { label: "Document Uploads", description: "When new documents are shared with you", email: false, push: true },
    { label: "System Alerts", description: "Infrastructure and service status changes", email: true, push: true },
    { label: "Weekly Summary", description: "Digest of weekly activity and metrics", email: true, push: false },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-text-secondary">Choose how you want to be notified about activity.</p>
      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat.label} className="flex items-center justify-between p-4 bg-white border border-ice/50 rounded-2xl">
            <div>
              <p className="text-sm font-medium text-text-primary">{cat.label}</p>
              <p className="text-xs text-text-muted mt-0.5">{cat.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked={cat.email} className="w-4 h-4 rounded border-ice text-blue focus:ring-blue" />
                <span className="text-xs text-text-secondary">Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked={cat.push} className="w-4 h-4 rounded border-ice text-blue focus:ring-blue" />
                <span className="text-xs text-text-secondary">Push</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityTab() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary mb-3">Change Password</h3>
        <div className="space-y-3 max-w-md">
          {["Current Password", "New Password", "Confirm New Password"].map((label) => (
            <div key={label}>
              <label className="block text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted mb-1.5">
                {label}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-10 bg-white border border-ice rounded-xl px-3 pr-10 text-sm text-text-primary focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary"
                >
                  {showPassword ? <EyeSlash size={16} weight="light" /> : <Eye size={16} weight="light" />}
                </button>
              </div>
            </div>
          ))}
          <button className="h-10 px-5 bg-blue hover:bg-blue-light text-white text-sm font-medium rounded-lg transition-colors duration-150">
            Update Password
          </button>
        </div>
      </div>

      <div className="border-t border-ice pt-6">
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary mb-3">Two-Factor Authentication</h3>
        <p className="text-sm text-text-secondary mb-3">Add an extra layer of security to your account.</p>
        <button className="h-10 px-5 bg-ice-30 hover:bg-ice text-text-primary text-sm font-medium rounded-lg border border-ice transition-colors duration-150">
          Enable 2FA
        </button>
      </div>

      <div className="border-t border-ice pt-6">
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary mb-3">Active Sessions</h3>
        <div className="space-y-2">
          {[
            { device: "MacBook Pro - Chrome", location: "New York, US", current: true },
            { device: "iPhone 15 - Safari", location: "New York, US", current: false },
          ].map((session) => (
            <div key={session.device} className="flex items-center justify-between p-3 bg-white border border-ice/50 rounded-2xl">
              <div>
                <p className="text-sm text-text-primary">{session.device}</p>
                <p className="text-xs text-text-muted">{session.location}</p>
              </div>
              {session.current ? (
                <span className="text-xs text-success font-medium">Current</span>
              ) : (
                <button className="text-xs text-error hover:underline">Revoke</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppearanceTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary mb-3">Theme</h3>
        <div className="flex gap-3">
          {[
            { label: "Light", active: true },
            { label: "Dark", active: false },
            { label: "System", active: false },
          ].map((theme) => (
            <button
              key={theme.label}
              className={`h-10 px-5 rounded-xl text-sm font-medium border transition-colors duration-150 ${
                theme.active
                  ? "bg-blue-10 border-blue text-blue"
                  : "bg-white border-ice text-text-secondary hover:bg-ice-30"
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary mb-3">Sidebar</h3>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-ice text-blue focus:ring-blue" />
          <span className="text-sm text-text-primary">Auto-collapse sidebar on smaller screens</span>
        </label>
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary mb-3">Density</h3>
        <div className="flex gap-3">
          {["Comfortable", "Compact"].map((density) => (
            <button
              key={density}
              className={`h-10 px-5 rounded-xl text-sm font-medium border transition-colors duration-150 ${
                density === "Comfortable"
                  ? "bg-blue-10 border-blue text-blue"
                  : "bg-white border-ice text-text-secondary hover:bg-ice-30"
              }`}
            >
              {density}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Manage your account and preferences" />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab Navigation */}
        <div className="md:w-52 flex-shrink-0">
          <nav className="flex md:flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 w-full text-left ${
                  activeTab === tab.id
                    ? "bg-blue-10 text-blue"
                    : "text-text-secondary hover:bg-ice-30"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "notifications" && <NotificationsTab />}
          {activeTab === "security" && <SecurityTab />}
          {activeTab === "appearance" && <AppearanceTab />}
        </div>
      </div>
    </div>
  );
}
