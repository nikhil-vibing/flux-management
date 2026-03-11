export const aiResponses: Record<string, { content: string; source: string }> = {
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
    source: "Tickets Database",
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
    source: "Projects Database",
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
    source: "Projects Database",
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
    source: "Software Licenses Database",
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
    source: "Software Licenses Database",
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
    source: "Ticket Analytics",
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
    source: "Monthly Analytics",
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
    source: "Resolution Analytics",
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
    source: "Infrastructure Monitoring",
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
    source: "Infrastructure Monitoring",
  },
};
