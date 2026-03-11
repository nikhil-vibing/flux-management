module.exports = [
"[project]/src/data/mock-ai-responses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/(portal)/ai-assistant/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAssistantPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Robot.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PaperPlaneTilt$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/PaperPlaneTilt.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$ai$2d$responses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-ai-responses.ts [app-ssr] (ecmascript)");
"use client";
;
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
    for (const [key, response] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$ai$2d$responses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiResponses"])){
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
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
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
        // Simulate AI response delay
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-[calc(100vh-128px)] max-w-[800px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto custom-scrollbar",
                children: !hasMessages ? /* Welcome State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center h-full px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full bg-royal-wash flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Robot"], {
                                size: 28,
                                className: "text-royal-blue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[family-name:var(--font-dm-sans)] font-bold text-[22px] text-navy-core mb-2",
                            children: "Flux AI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-text-secondary text-center max-w-[480px] mb-6",
                            children: "Ask me anything about your IT environment. I can pull data from your tickets, projects, documents, and tech stack."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[500px] w-full",
                            children: suggestedQueries.map((query)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSend(query),
                                    className: "text-left bg-white border border-cloud-silver rounded-full px-4 py-2 text-[13px] text-text-primary hover:bg-royal-wash hover:border-royal-blue/30 transition-all duration-150",
                                    children: query
                                }, query, false, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this) : /* Message Thread */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                    children: [
                                        msg.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-full bg-royal-wash flex items-center justify-center mr-2 mt-1 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Robot"], {
                                                size: 16,
                                                className: "text-royal-blue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[${msg.role === "user" ? "70" : "85"}%]`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "bg-royal-blue text-white rounded-2xl rounded-br-sm" : "bg-white border border-cloud-silver rounded-2xl rounded-tl-sm"}`,
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[11px] text-text-tertiary mt-1 ${msg.role === "user" ? "text-right" : ""}`,
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-7 h-7 rounded-full bg-royal-wash flex items-center justify-center mr-2 mt-1 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Robot"], {
                                        size: 16,
                                        className: "text-royal-blue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-silver-light rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "typing-dot w-1.5 h-1.5 rounded-full bg-navy-core/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "typing-dot w-1.5 h-1.5 rounded-full bg-navy-core/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "typing-dot w-1.5 h-1.5 rounded-full bg-navy-core/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 162,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            hasMessages && !isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-2 custom-scrollbar",
                children: [
                    "Show open tickets",
                    "Project status",
                    "Expiring licenses"
                ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSend(q),
                        className: "flex-shrink-0 bg-white border border-cloud-silver rounded-full px-3 py-1.5 text-xs text-text-primary hover:bg-royal-wash hover:border-royal-blue/30 transition-all",
                        children: q
                    }, q, false, {
                        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-silver-light via-silver-light to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-white border border-cloud-silver rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            ref: textareaRef,
                            value: input,
                            onChange: handleTextareaChange,
                            onKeyDown: handleKeyDown,
                            placeholder: "Ask about your IT environment...",
                            rows: 1,
                            className: "w-full min-h-[48px] max-h-[120px] resize-none bg-transparent px-4 py-3 pr-14 text-sm text-text-primary placeholder:text-silver-dark outline-none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSend(),
                            disabled: !input.trim() || isTyping,
                            className: `absolute right-2 bottom-2 w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all ${input.trim() && !isTyping ? "bg-royal-blue text-white hover:bg-royal-light active:scale-90" : "bg-silver-light text-silver-dark"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$PaperPlaneTilt$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaperPlaneTilt"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(portal)/ai-assistant/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/@phosphor-icons/react/dist/defs/PaperPlaneTilt.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const e = /* @__PURE__ */ new Map([
    [
        "bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z"
        }))
    ],
    [
        "duotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
            opacity: "0.2"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"
        }))
    ],
    [
        "fill",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"
        }))
    ],
    [
        "light",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z"
        }))
    ],
    [
        "regular",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"
        }))
    ],
    [
        "thin",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
            d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z"
        }))
    ]
]);
;
}),
"[project]/node_modules/@phosphor-icons/react/dist/csr/PaperPlaneTilt.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaperPlaneTilt",
    ()=>m,
    "PaperPlaneTiltIcon",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$PaperPlaneTilt$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/defs/PaperPlaneTilt.es.js [app-ssr] (ecmascript)");
;
;
;
const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((o, r)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$IconBase$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: r,
        ...o,
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$PaperPlaneTilt$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
a.displayName = "PaperPlaneTiltIcon";
const m = a;
;
}),
];

//# sourceMappingURL=_908f6423._.js.map