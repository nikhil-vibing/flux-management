"use client";

import {
  Ticket,
  BookOpen,
  ChatCircleText,
  Envelope,
  Phone,
  MagnifyingGlass,
  CaretRight,
  Headset,
  Question,
  Lightbulb,
  Shield,
} from "@phosphor-icons/react";
import { PageHeader } from "@/components/shared/page-header";
import { useState } from "react";

const categories = [
  {
    icon: Ticket,
    title: "Tickets & Support",
    description: "Learn how to create, manage, and track support tickets",
    articles: 12,
  },
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Quick start guides and onboarding resources",
    articles: 8,
  },
  {
    icon: Lightbulb,
    title: "Best Practices",
    description: "Tips and recommendations for your IT environment",
    articles: 15,
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security policies, compliance guides, and best practices",
    articles: 10,
  },
  {
    icon: Question,
    title: "FAQ",
    description: "Frequently asked questions and quick answers",
    articles: 20,
  },
  {
    icon: ChatCircleText,
    title: "API & Integrations",
    description: "Documentation for connectors and API usage",
    articles: 6,
  },
];

export default function HelpPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <PageHeader title="Help & Support" subtitle="Find answers and get assistance" />

      {/* Search */}
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <MagnifyingGlass size={20} weight="light" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search help articles..."
            className="w-full h-13 bg-white border border-ice/50 rounded-2xl shadow-level-1 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-blue focus:ring-2 focus:ring-blue-10 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-blue-10 mb-3">
                <Icon size={22} weight="light" className="text-blue" />
              </div>
              <h3 className="font-[family-name:var(--font-aptos)] font-semibold text-[17px] text-text-primary group-hover:text-blue transition-colors">
                {cat.title}
              </h3>
              <p className="text-[13px] text-text-secondary mt-1">{cat.description}</p>
              <div className="flex items-center gap-1 mt-3 text-xs text-text-muted">
                <span>{cat.articles} articles</span>
                <CaretRight size={12} weight="light" className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow-level-1 border border-ice/40 p-7">
        <h2 className="font-[family-name:var(--font-aptos)] font-semibold text-[22px] text-text-primary mb-4">
          Need more help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 border border-ice/50 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-blue-10 flex items-center justify-center flex-shrink-0">
              <Headset size={18} weight="light" className="text-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Live Chat</p>
              <p className="text-xs text-text-muted mt-0.5">Available Mon-Fri, 9am-5pm ET</p>
              <button className="text-xs text-blue font-medium mt-2 hover:underline">Start Chat</button>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 border border-ice/50 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-blue-10 flex items-center justify-center flex-shrink-0">
              <Envelope size={18} weight="light" className="text-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Email Support</p>
              <p className="text-xs text-text-muted mt-0.5">support@fluxtech.com</p>
              <button className="text-xs text-blue font-medium mt-2 hover:underline">Send Email</button>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 border border-ice/50 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-blue-10 flex items-center justify-center flex-shrink-0">
              <Phone size={18} weight="light" className="text-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">Phone Support</p>
              <p className="text-xs text-text-muted mt-0.5">+1 (800) 555-FLUX</p>
              <button className="text-xs text-blue font-medium mt-2 hover:underline">Call Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
