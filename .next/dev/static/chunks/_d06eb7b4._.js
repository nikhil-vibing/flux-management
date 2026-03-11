(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/mock-ai-responses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiResponses",
    ()=>aiResponses
]);
const aiResponses = {
    "open tickets": {
        content: `### Open Tickets Summary

You currently have **8 open tickets** out of 25 total:

| ID | Subject | Priority | Assigned To |
|---|---|---|---|
| TK-1001 | VPN Connection Dropping Intermittently | Critical | Marcus Chen |
| TK-1005 | Multi-Factor Authentication Not Working | Critical | Marcus Chen |
| TK-1012 | Database Server High CPU Usage Alert | Critical | Marcus Chen |
| TK-1003 | New Employee Laptop Setup - Jennifer Walsh | High | Tom Rivera |
| TK-1009 | Software License Activation Failed - Adobe CC | High | Lisa Park |
| TK-1016 | Azure AD Conditional Access Policy Update | High | Marcus Chen |
| TK-1023 | Windows 11 Update Causing Application Crash | High | Tom Rivera |
| TK-1010 | Wi-Fi Dead Zone in East Wing Break Room | Medium | Marcus Chen |

**Key observations:**
- 3 tickets are **Critical** priority and require immediate attention
- **Marcus Chen** has the highest workload with 4 open tickets
- The VPN and MFA issues are impacting multiple users across the organization
- Average age of open tickets is approximately 3 days`,
        source: "Tickets Database"
    },
    "overdue": {
        content: `### Project Status Overview

Here is the current status of all active projects:

| Project | Status | Progress | Due Date |
|---|---|---|---|
| Network Upgrade Phase 2 | On Track | 90% | Feb 20, 2026 |
| Microsoft 365 Migration | On Track | 85% | Feb 25, 2026 |
| Cloud Infrastructure Migration | On Track | 70% | Mar 15, 2026 |
| Disaster Recovery Planning | On Track | 60% | Apr 15, 2026 |
| **Security Compliance Audit** | **At Risk** | **45%** | **Feb 28, 2026** |
| **Employee Portal Redesign** | **Delayed** | **30%** | **Mar 30, 2026** |

**Projects requiring attention:**
- **Security Compliance Audit** is at risk with only 45% completion and 20 days remaining. 11 tasks still pending including critical penetration testing and external auditor fieldwork.
- **Employee Portal Redesign** is delayed at 30% completion. The SSO integration and dashboard development are behind schedule, putting pressure on remaining tasks.

**Recommendation:** Consider reallocating resources from the nearly-complete Network Upgrade project to support the at-risk Security Compliance Audit.`,
        source: "Projects Database"
    },
    "projects": {
        content: `### Project Status Overview

Here is the current status of all active projects:

| Project | Status | Progress | Due Date |
|---|---|---|---|
| Network Upgrade Phase 2 | On Track | 90% | Feb 20, 2026 |
| Microsoft 365 Migration | On Track | 85% | Feb 25, 2026 |
| Cloud Infrastructure Migration | On Track | 70% | Mar 15, 2026 |
| Disaster Recovery Planning | On Track | 60% | Apr 15, 2026 |
| **Security Compliance Audit** | **At Risk** | **45%** | **Feb 28, 2026** |
| **Employee Portal Redesign** | **Delayed** | **30%** | **Mar 30, 2026** |

**Summary:**
- **4 of 6 projects** are on track
- **1 project** is at risk (Security Compliance Audit)
- **1 project** is delayed (Employee Portal Redesign)
- Total tasks across all projects: 120, with 76 completed (63%)
- Two projects are nearing completion this month: Network Upgrade and M365 Migration`,
        source: "Projects Database"
    },
    "expiring": {
        content: `### Expiring & Expired Licenses

**Immediate Action Required:**

| Software | Status | Renewal Date | Licenses | Monthly Cost |
|---|---|---|---|---|
| DocuSign Business Pro | **Expired** | Jan 15, 2026 | 10 | $400 |
| Adobe Creative Cloud | **Expiring Soon** | Feb 28, 2026 | 20 | $1,600 |
| Slack Business+ | **Expiring Soon** | Mar 15, 2026 | 250 | $2,500 |

**Details:**
- **DocuSign** expired 25 days ago. 10 users are affected and cannot send documents for e-signature. Contact Lisa Park to initiate renewal.
- **Adobe CC** expires in 20 days. 15 of 20 licenses are actively in use by the design team. The Q1 rebrand project depends on these licenses.
- **Slack Business+** expires in 34 days. 200 of 250 licenses are in active use. This is a company-wide communication tool.

**Estimated renewal cost:** ~$4,500/month combined for all three services.

**Recommendation:** Prioritize DocuSign renewal immediately as it is already expired. Begin Adobe CC renewal process this week to avoid disruption to the design team.`,
        source: "Software Licenses Database"
    },
    "licenses": {
        content: `### Software License Overview

You have **8 software products** with a combined monthly cost of **$26,450**.

| Software | Licenses Used | Monthly Cost | Status |
|---|---|---|---|
| Microsoft 365 Business Premium | 250/250 | $5,500 | Active |
| Salesforce Sales Cloud | 75/100 | $11,250 | Active |
| CrowdStrike Falcon | 260/275 | $3,850 | Active |
| Slack Business+ | 200/250 | $2,500 | Expiring Soon |
| Adobe Creative Cloud | 15/20 | $1,600 | Expiring Soon |
| Zoom Business | 50/50 | $1,000 | Active |
| DocuSign Business Pro | 10/10 | $400 | Expired |
| Jira Software Cloud | 40/50 | $350 | Active |

**Key insights:**
- **Microsoft 365** is at full capacity (250/250). Any new hires will require additional licenses.
- **Salesforce** has 25 unused licenses - consider downsizing at renewal to save ~$3,750/month.
- **2 products** require renewal attention (Adobe CC and Slack) and **1 is expired** (DocuSign).
- Total annual software spend: approximately **$317,400**.`,
        source: "Software Licenses Database"
    },
    "ticket trends": {
        content: `### Ticket Trends - Last 30 Days

**Volume Summary:**
- Total tickets created: **42**
- Total tickets resolved: **35**
- Average daily tickets: **1.4**
- Current open backlog: **8 tickets**

**Weekly Breakdown:**
| Week | Created | Resolved | Net Change |
|---|---|---|---|
| Jan 12 - Jan 18 | 8 | 9 | -1 |
| Jan 19 - Jan 25 | 10 | 11 | -1 |
| Jan 26 - Feb 1 | 12 | 10 | +2 |
| Feb 2 - Feb 8 | 12 | 5 | +7 |

**Observations:**
- Ticket volume has **increased 50%** in the last two weeks compared to the prior two weeks.
- The most recent week shows a significant gap between created (12) and resolved (5) tickets, growing the backlog.
- **Critical tickets** have spiked with 3 currently open, compared to an average of 1 per week.
- Most tickets originate from **network/connectivity issues** (28%) and **software/application problems** (24%).

**Recommendation:** The increasing backlog suggests the team may need temporary additional support or ticket prioritization review.`,
        source: "Ticket Analytics"
    },
    "month": {
        content: `### Monthly IT Summary - February 2026

**Ticket Metrics:**
- Tickets opened this month: **14**
- Tickets resolved this month: **5**
- Average resolution time: **4h 15m**
- First response time: **18 minutes**

**Top Categories:**
1. Network & Connectivity - 4 tickets
2. Software & Licensing - 3 tickets
3. Security - 3 tickets
4. Hardware - 2 tickets
5. Access & Permissions - 2 tickets

**SLA Performance:**
- Critical tickets responded within 15 min: **100%**
- High priority resolved within 4 hours: **85%**
- Overall SLA compliance: **92%**

**Project Milestones This Month:**
- Network Upgrade Phase 2 expected to complete (Feb 20)
- Microsoft 365 Migration expected to complete (Feb 25)
- Security Compliance Audit deadline (Feb 28) - at risk

**Notable Events:**
- Phishing campaign detected and blocked (23 emails purged)
- Database server CPU spike requiring immediate intervention
- MFA issues affecting executive team`,
        source: "Monthly Analytics"
    },
    "resolution time": {
        content: `### Resolution Time Analysis

**Overall Metrics (Last 30 Days):**
- Average resolution time: **4h 15m**
- Median resolution time: **2h 30m**
- Fastest resolution: **45m** (Password Reset - TK-1011)
- Slowest resolution: **3d** (Monitor Installation - TK-1013)

**By Priority:**
| Priority | Avg Resolution | Target SLA | Met SLA |
|---|---|---|---|
| Critical | 3h 15m | 4h | 100% |
| High | 5h 30m | 8h | 85% |
| Medium | 1d 2h | 24h | 78% |
| Low | 2d 4h | 72h | 100% |

**By Category:**
| Category | Avg Resolution | Ticket Count |
|---|---|---|
| Access & Permissions | 1h 30m | 4 |
| Email & Calendar | 2h 15m | 3 |
| Hardware | 1d 4h | 5 |
| Network | 2h 45m | 6 |
| Security | 3h 15m | 4 |
| Software | 6h 30m | 3 |

**Trends:**
- Resolution times have **improved 12%** compared to the previous 30-day period.
- **Medium priority** tickets are slightly exceeding their 24-hour SLA target. Consider reviewing triage criteria.
- **Network issues** are resolved fastest due to strong monitoring and automated alerting.
- **Software issues** take longest due to dependency on vendor support responses.`,
        source: "Resolution Analytics"
    },
    "network": {
        content: `### Network & Infrastructure Status

**Infrastructure Health:**
| Category | Online | Offline | Total |
|---|---|---|---|
| Workstations | 2 pools | 0 | 2 |
| Servers | 3 | 0 | 3 |
| Printers | 2 | 1 | 3 |
| WiFi APs | 3 | 1 | 4 |

**Current Issues:**
- **HP LaserJet 3rd Floor** (INF-007) - Offline for 2 days. Related to ticket TK-1004 (resolved, may have recurred).
- **WiFi AP-CONF-01** (INF-012) - Offline for 4 hours on 4th floor conference area. May be impacting Teams call quality (TK-1018).
- **Wi-Fi dead zone** identified in east wing break room. New Meraki AP approved and scheduled for installation.

**Network Upgrade Status:**
- Phase 2 is **90% complete** with new Cisco Catalyst 9300 switches deployed on floors 3-5.
- VLAN segmentation fully implemented and tested.
- 802.1X network access control is active.
- Old switches being decommissioned this week.

**Cloud Services:**
| Service | Usage | Status |
|---|---|---|
| Azure | 72% | Active |
| AWS S3 | 45% | Active |
| Google Workspace | 30% | Expiring Soon |
| Cloudflare | 58% | Active |

**Recommendation:** Investigate the offline printer and WiFi AP. The conference area WiFi issue may be related to the Teams call quality complaints.`,
        source: "Infrastructure Monitoring"
    },
    "infrastructure": {
        content: `### Infrastructure Status

**Servers (All in Server Room A):**
| Server | Type | Status | Notes |
|---|---|---|---|
| DB-PROD-01 | HP ProLiant DL380 | Online | High CPU alert active (TK-1012) |
| APP-PROD-01 | HP ProLiant DL380 | Online | Normal operation |
| FS-PROD-01 | HP ProLiant DL360 | Online | 92% disk capacity warning (TK-1017) |

**Key Alerts:**
1. **DB-PROD-01** is experiencing sustained high CPU usage due to a runaway query. Actively being remediated.
2. **FS-PROD-01** is running low on storage. Archival plan awaiting management approval. ~800GB identified for cold storage migration.

**Workstation Fleet:**
- 2 pools of Dell OptiPlex 7090 workstations covering floors 1-5
- All workstations online and reporting
- 15 warehouse workstations affected by Windows update issue (TK-1023)

**Printers:**
- 2 of 3 network printers online
- 3rd floor printer offline (may need physical inspection)

**WiFi Access Points:**
- 3 of 4 Cisco Meraki MR46 APs online
- 4th floor conference AP offline since 4 hours ago

**Upcoming Changes:**
- New WiFi AP installation in east wing break room (approved)
- Conference Room B display replacement expected Feb 10
- 4 new security cameras pending vendor quote`,
        source: "Infrastructure Monitoring"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(portal)/ai-assistant/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAssistantPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Robot.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/PaperPlaneRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Paperclip$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Paperclip.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$ai$2d$responses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-ai-responses.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const suggestedQueries = [
    "Show my open tickets",
    "What projects are overdue?",
    "List expiring licenses",
    "Summarize this month's ticket trends",
    "What's my average resolution time?",
    "Show network infrastructure status"
];
function getAIResponse(message) {
    const lower = message.toLowerCase();
    for (const [key, response] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$ai$2d$responses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiResponses"])){
        const keywords = key.split(",").map((k)=>k.trim().toLowerCase());
        if (keywords.some((kw)=>lower.includes(kw))) {
            return response;
        }
    }
    return {
        content: "I can help you with information about your IT environment. Try asking about your tickets, projects, licenses, or infrastructure status.",
        source: "Flux AI Assistant"
    };
}
function AIAssistantPage() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAssistantPage.useEffect": ()=>{
            scrollToBottom();
        }
    }["AIAssistantPage.useEffect"], [
        messages,
        isTyping
    ]);
    const handleSend = (text)=>{
        const msg = text || input.trim();
        if (!msg) return;
        const userMessage = {
            id: Date.now().toString(),
            role: "user",
            content: msg,
            timestamp: new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit"
            })
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setIsTyping(true);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
        setTimeout(()=>{
            const response = getAIResponse(msg);
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: response.content,
                timestamp: new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit"
                })
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
            setIsTyping(false);
        }, 1200 + Math.random() * 800);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const handleTextareaChange = (e)=>{
        setInput(e.target.value);
        e.target.style.height = "auto";
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
    };
    const hasMessages = messages.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-[calc(100vh-128px)] max-w-[800px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto custom-scrollbar",
                children: !hasMessages ? /* Welcome State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center h-full px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full bg-blue-10 flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Robot"], {
                                size: 28,
                                weight: "light",
                                className: "text-blue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[family-name:var(--font-aptos)] font-bold text-[22px] text-text-primary mb-2",
                            children: "Flux AI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-text-secondary text-center max-w-[480px] mb-6",
                            children: "Ask me anything about your IT environment. I can pull data from your tickets, projects, documents, and tech stack."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[500px] w-full",
                            children: suggestedQueries.map((query)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSend(query),
                                    className: "text-left bg-white border border-ice rounded-full px-4 py-2 text-[13px] text-text-primary hover:bg-blue-10 hover:border-blue/30 transition-all duration-150",
                                    children: query
                                }, query, false, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this) : /* Message Thread */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.25,
                                        ease: [
                                            0.4,
                                            0,
                                            0.2,
                                            1
                                        ]
                                    },
                                    className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                    children: [
                                        msg.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-full bg-blue-10 flex items-center justify-center mr-2 mt-1 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Robot"], {
                                                size: 16,
                                                weight: "light",
                                                className: "text-blue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[${msg.role === "user" ? "70" : "85"}%]`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "bg-blue text-white rounded-3xl rounded-br-sm" : "bg-white border border-ice rounded-3xl rounded-tl-sm"}`,
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[11px] text-text-muted mt-1 ${msg.role === "user" ? "text-right" : ""}`,
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 4
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "flex items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-7 h-7 rounded-full bg-blue-10 flex items-center justify-center mr-2 mt-1 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Robot"], {
                                        size: 16,
                                        weight: "light",
                                        className: "text-blue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-ice-30 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "typing-dot w-1.5 h-1.5 rounded-full bg-navy/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "typing-dot w-1.5 h-1.5 rounded-full bg-navy/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "typing-dot w-1.5 h-1.5 rounded-full bg-navy/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            hasMessages && !isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-2 custom-scrollbar",
                children: [
                    "Show open tickets",
                    "Project status",
                    "Expiring licenses"
                ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSend(q),
                        className: "flex-shrink-0 bg-white border border-ice rounded-full px-3 py-1.5 text-xs text-text-primary hover:bg-blue-10 hover:border-blue/30 transition-all duration-150",
                        children: q
                    }, q, false, {
                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-ice-30 via-ice-30 to-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white border border-ice/40 rounded-3xl shadow-level-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ref: textareaRef,
                                value: input,
                                onChange: handleTextareaChange,
                                onKeyDown: handleKeyDown,
                                placeholder: "Ask about your IT environment...",
                                rows: 1,
                                className: "w-full min-h-[48px] max-h-[120px] resize-none bg-transparent px-4 py-3 pr-24 text-sm text-text-primary placeholder:text-text-muted outline-none rounded-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-2 bottom-2 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-[34px] h-[34px] rounded-full flex items-center justify-center text-text-muted hover:text-blue transition-colors duration-150",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Paperclip$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paperclip"], {
                                            size: 18,
                                            weight: "light"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSend(),
                                        disabled: !input.trim() || isTyping,
                                        className: `w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all duration-150 ${input.trim() && !isTyping ? "bg-blue text-white hover:bg-blue-light active:scale-95" : "bg-ice-30 text-text-muted"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaperPlaneRight"], {
                                            size: 18,
                                            weight: "light"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[11px] text-text-muted mt-2",
                        children: "AI responses are generated from your connected data sources. Always verify critical information."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(AIAssistantPage, "mCxZnmoIvyZSwY1DOXPEvC85jo0=");
_c = AIAssistantPage;
var _c;
__turbopack_context__.k.register(_c, "AIAssistantPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@phosphor-icons/react/dist/defs/PaperPlaneRight.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const a = /* @__PURE__ */ new Map([
    [
        "bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M233.86,110.48,65.8,14.58A20,20,0,0,0,37.15,38.64L67.33,128,37.15,217.36A20,20,0,0,0,56,244a20.1,20.1,0,0,0,9.81-2.58l.09-.06,168-96.07a20,20,0,0,0,0-34.81ZM63.19,215.26,88.61,140H144a12,12,0,0,0,0-24H88.61L63.18,40.72l152.76,87.17Z"
        }))
    ],
    [
        "duotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M227.91,134.86,59.93,231a8,8,0,0,1-11.44-9.67L80,128,48.49,34.72a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,227.91,134.86Z",
            opacity: "0.2"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"
        }))
    ],
    [
        "fill",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z"
        }))
    ],
    [
        "light",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M230.88,115.69l-168-95.88a14,14,0,0,0-20,16.87L73.66,128,42.81,219.33A14,14,0,0,0,56,238a14.15,14.15,0,0,0,6.93-1.83L230.84,140.1a14,14,0,0,0,0-24.41Zm-5.95,14L57,225.73a2,2,0,0,1-2.86-2.42.42.42,0,0,0,0-.1L84.3,134H144a6,6,0,0,0,0-12H84.3L54.17,32.8a.3.3,0,0,0,0-.1,1.87,1.87,0,0,1,.6-2.2A1.85,1.85,0,0,1,57,30.25l168,95.89a1.93,1.93,0,0,1,1,1.74A2,2,0,0,1,224.93,129.66Z"
        }))
    ],
    [
        "regular",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"
        }))
    ],
    [
        "thin",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M229.89,117.43l-168-95.88A12,12,0,0,0,44.7,36l31.08,92L44.71,220A12,12,0,0,0,56,236a12.13,12.13,0,0,0,5.93-1.57l167.94-96.08a12,12,0,0,0,0-20.92Zm-4,14L58,227.47a4,4,0,0,1-5.72-4.83l0-.07L82.87,132H144a4,4,0,0,0,0-8H82.87L52.26,33.37A3.89,3.89,0,0,1,53.44,29,4.13,4.13,0,0,1,56,28a3.88,3.88,0,0,1,1.93.54l168,95.87a4,4,0,0,1,0,7Z"
        }))
    ]
]);
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/csr/PaperPlaneRight.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaperPlaneRight",
    ()=>p,
    "PaperPlaneRightIcon",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/defs/PaperPlaneRight.es.js [app-client] (ecmascript)");
;
;
;
const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((o, r)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: r,
        ...o,
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
a.displayName = "PaperPlaneRightIcon";
const p = a;
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/defs/Paperclip.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const e = /* @__PURE__ */ new Map([
    [
        "bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M212.48,136.49l-82.06,82a60,60,0,0,1-84.85-84.88l98.16-97.89a40,40,0,0,1,56.56,56.59l-.17.16-95.8,92.22a12,12,0,1,1-16.64-17.3l95.71-92.12a16,16,0,0,0-22.7-22.56L62.53,150.57a36,36,0,0,0,50.93,50.91l82.06-82a12,12,0,0,1,17,17Z"
        }))
    ],
    [
        "duotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M180.75,104.75,204,128l-82.06,81.94a48,48,0,0,1-67.88-67.88L153.37,41.37a32,32,0,0,1,45.26,45.26Z",
            opacity: "0.2"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"
        }))
    ],
    [
        "fill",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,50.34a8,8,0,0,0-11.32,0L87.09,143A24,24,0,1,0,121,177l49.32-50.32a8,8,0,1,1,11.42,11.2l-49.37,50.38a40,40,0,1,1-56.62-56.51L143,63.09A24,24,0,1,1,177,97L109.71,165.6a8,8,0,1,1-11.42-11.2L165.6,85.71a8,8,0,0,0,.06-11.37Z"
        }))
    ],
    [
        "light",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M208.25,123.76a6,6,0,0,1,0,8.49l-82.06,82a54,54,0,0,1-76.36-76.39L149.1,37.14a38,38,0,1,1,53.77,53.72L103.59,191.54a22,22,0,1,1-31.15-31.09l83.28-84.67a6,6,0,0,1,8.56,8.42L81,168.91a10,10,0,1,0,14.11,14.18L194.35,82.4a26,26,0,1,0-36.74-36.8L58.33,146.28a42,42,0,1,0,59.37,59.44l82.06-82A6,6,0,0,1,208.25,123.76Z"
        }))
    ],
    [
        "regular",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"
        }))
    ],
    [
        "thin",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M206.83,125.17a4,4,0,0,1,0,5.66l-82.06,82a52,52,0,0,1-73.54-73.55L150.52,38.55a36,36,0,1,1,50.94,50.9l-99.3,100.69a20,20,0,1,1-28.3-28.27l83.29-84.68a4,4,0,1,1,5.7,5.61L79.54,167.5a12,12,0,1,0,16.95,17L195.78,83.81A28,28,0,1,0,156.2,44.18L56.91,144.87a44,44,0,1,0,62.21,62.26l82-82A4,4,0,0,1,206.83,125.17Z"
        }))
    ]
]);
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/csr/Paperclip.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paperclip",
    ()=>m,
    "PaperclipIcon",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$Paperclip$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/defs/Paperclip.es.js [app-client] (ecmascript)");
;
;
;
const o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((r, a)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: a,
        ...r,
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$Paperclip$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
o.displayName = "PaperclipIcon";
const m = o;
;
}),
]);

//# sourceMappingURL=_d06eb7b4._.js.map