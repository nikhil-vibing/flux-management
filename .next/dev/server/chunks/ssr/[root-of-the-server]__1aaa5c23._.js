module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/stores/sidebar-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSidebarStore",
    ()=>useSidebarStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useSidebarStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isExpanded: true,
        isMobileOpen: false,
        toggleExpanded: ()=>set((state)=>({
                    isExpanded: !state.isExpanded
                })),
        setMobileOpen: (open)=>set({
                isMobileOpen: open
            })
    }));
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript) <export * as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Provider, {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Root, {
        "data-slot": "tooltip",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Trigger, {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Content, {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Arrow, {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/tooltip.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/layout/sidebar/sidebar-nav-item.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarNavItem",
    ()=>SidebarNavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SidebarNavItem({ href, Icon, label, collapsed }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = pathname === href || pathname.startsWith(href + "/");
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `
        group relative flex items-center gap-3 rounded-md mx-2 px-3 py-2 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isActive ? "bg-navy-80 border-l-[3px] border-l-blue" : "border-l-[3px] border-l-transparent hover:bg-navy-95"}
        ${collapsed ? "justify-center mx-1 px-0 py-2.5" : ""}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `flex-shrink-0 transition-colors duration-150 ${isActive ? "text-white" : "text-text-on-dark-muted group-hover:text-white"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 22,
                    weight: isActive ? "fill" : "light"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-[13px] leading-5 tracking-[0.01em] transition-colors duration-150 ${isActive ? "text-white font-semibold" : "text-text-on-dark-muted font-medium group-hover:text-white"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
    if (collapsed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
            delayDuration: 200,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    side: "right",
                    sideOffset: 8,
                    className: "bg-navy text-white text-xs font-medium px-2.5 py-1.5 rounded-md border-0 shadow-level-2",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/sidebar/sidebar-nav-item.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return content;
}
}),
"[project]/src/components/shared/flux-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FluxLogo",
    ()=>FluxLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FluxLogo({ size = 32, className = "text-white" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 36 36",
        fill: "none",
        className: `${className} flex-shrink-0`,
        children: [
            0,
            45,
            90,
            135,
            180,
            225,
            270,
            315
        ].map((angle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 3.5 C 7 5.5, 2 15, 6 21 C 10 27, 20 33, 28 27",
                stroke: "currentColor",
                strokeWidth: "1.3",
                strokeLinecap: "round",
                fill: "none",
                transform: `rotate(${angle} 18 18)`
            }, angle, false, {
                fileName: "[project]/src/components/shared/flux-logo.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/flux-logo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/sidebar/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$sidebar$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/sidebar-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar/sidebar-nav-item.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$House$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/House.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Ticket.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Kanban.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Folder$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Folder.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Circuitry$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Circuitry.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Robot.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Gear$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Gear.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Question$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Question.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$X$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/X.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CaretLeft$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/CaretLeft.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Plugs$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Plugs.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$SignOut$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/SignOut.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$flux$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/flux-logo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const mainNav = [
    {
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$House$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["House"],
        label: "Dashboard"
    },
    {
        href: "/helpdesk",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ticket"],
        label: "Tickets"
    },
    {
        href: "/projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kanban"],
        label: "Projects"
    },
    {
        href: "/documents",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Folder$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Folder"],
        label: "Documents"
    }
];
const toolsNav = [
    {
        href: "/tech-stack",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Circuitry$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Circuitry"],
        label: "Tech Stack"
    },
    {
        href: "/connectors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Plugs$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugs"],
        label: "Connectors"
    },
    {
        href: "/ai-assistant",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Robot"],
        label: "AI Assistant"
    }
];
const accountNav = [
    {
        href: "/settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Gear$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Gear"],
        label: "Settings"
    },
    {
        href: "/help",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Question$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Question"],
        label: "Help & Support"
    }
];
function Sidebar() {
    const { isExpanded, isMobileOpen, setMobileOpen, toggleExpanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$sidebar$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const showLabels = isExpanded || isMobileOpen;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: [
            isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-navy/40 z-40 lg:hidden",
                onClick: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `
          fixed top-0 left-0 h-screen z-40 flex flex-col bg-gradient-to-b from-navy via-navy to-navy-95
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isMobileOpen ? "translate-x-0 w-[280px] shadow-level-3" : "-translate-x-full lg:translate-x-0"}
          ${isExpanded ? "lg:w-[260px]" : "lg:w-[72px]"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-14 px-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2.5 ${!showLabels ? "justify-center w-full" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$flux$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FluxLogo"], {
                                        size: showLabels ? 32 : 28,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-[family-name:var(--font-aptos)] font-bold text-sm tracking-[0.15em] text-white",
                                                children: "FLUX"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] tracking-[0.2em] text-text-on-dark-muted",
                                                children: "TECHNOLOGIES"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileOpen(false),
                                className: "lg:hidden text-text-on-dark-muted hover:text-white p-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$X$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X"], {
                                    size: 20,
                                    weight: "light"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 border-t border-white/8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 py-3 overflow-y-auto custom-scrollbar",
                        children: [
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-5 mb-1.5 block text-[10px] font-medium tracking-[0.1em] uppercase text-text-on-dark-muted",
                                children: "Main"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: mainNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarNavItem"], {
                                        href: item.href,
                                        Icon: item.icon,
                                        label: item.label,
                                        collapsed: !showLabels
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-5 mt-5 mb-1.5 block text-[10px] font-medium tracking-[0.1em] uppercase text-text-on-dark-muted",
                                children: "Tools"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            !showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-4 my-3 border-t border-white/8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 118,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: toolsNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarNavItem"], {
                                        href: item.href,
                                        Icon: item.icon,
                                        label: item.label,
                                        collapsed: !showLabels
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-5 mt-5 mb-1.5 block text-[10px] font-medium tracking-[0.1em] uppercase text-text-on-dark-muted",
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            !showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-4 my-3 border-t border-white/8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 136,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: accountNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarNavItem"], {
                                        href: item.href,
                                        Icon: item.icon,
                                        label: item.label,
                                        collapsed: !showLabels
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block mx-4 border-t border-white/8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleExpanded,
                        className: "hidden lg:flex items-center justify-center h-10 mx-2 mb-1 rounded-md text-text-on-dark-muted hover:text-white hover:bg-navy-95 transition-colors duration-150",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CaretLeft$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaretLeft"], {
                            size: 18,
                            weight: "light",
                            className: `transition-transform duration-300 ${!isExpanded ? "rotate-180" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 border-t border-white/8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-3 px-4 py-3 ${!showLabels ? "justify-center" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-navy-80 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-[family-name:var(--font-aptos)] font-semibold text-xs text-white",
                                    children: "SM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[13px] font-medium text-white truncate",
                                        children: "Sarah Mitchell"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-text-on-dark-muted truncate",
                                        children: "IT Director"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-text-on-dark-muted hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$SignOut$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignOut"], {
                                    size: 18,
                                    weight: "light"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/sidebar/sidebar.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/mock-notifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockNotifications",
    ()=>mockNotifications
]);
const mockNotifications = [
    {
        id: "NOTIF-001",
        title: "Critical: Database Server High CPU",
        description: "DB-PROD-01 CPU usage has exceeded 95% for over 30 minutes. Immediate attention required.",
        timestamp: "10m ago",
        type: "ticket",
        read: false,
        link: "/tickets/TK-1012"
    },
    {
        id: "NOTIF-002",
        title: "MFA Issue Affecting Executives",
        description: "Multiple executives unable to authenticate. Temporary bypass codes issued. Investigation in progress.",
        timestamp: "45m ago",
        type: "ticket",
        read: false,
        link: "/tickets/TK-1005"
    },
    {
        id: "NOTIF-003",
        title: "Security Compliance Audit At Risk",
        description: "The Security Compliance Audit project is now flagged as At Risk. 11 tasks remain with only 20 days until deadline.",
        timestamp: "2h ago",
        type: "project",
        read: false,
        link: "/projects/PRJ-002"
    },
    {
        id: "NOTIF-004",
        title: "Adobe CC Licenses Expiring Feb 28",
        description: "20 Adobe Creative Cloud licenses expire in 20 days. Renewal quote requested from vendor.",
        timestamp: "3h ago",
        type: "system",
        read: false,
        link: "/tech-stack"
    },
    {
        id: "NOTIF-005",
        title: "Windows Update Causing App Crashes",
        description: "KB5034765 is breaking the inventory management app on 15 warehouse workstations. Workaround deployed.",
        timestamp: "5h ago",
        type: "ticket",
        read: false,
        link: "/tickets/TK-1023"
    },
    {
        id: "NOTIF-006",
        title: "Network Upgrade Phase 2 Nearly Complete",
        description: "Project is at 90% completion. Final documentation under review. On track for Feb 20 deadline.",
        timestamp: "8h ago",
        type: "project",
        read: true,
        link: "/projects/PRJ-003"
    },
    {
        id: "NOTIF-007",
        title: "File Server Disk Space Warning",
        description: "FS-PROD-01 is at 92% capacity. Archival plan submitted for management approval.",
        timestamp: "1d ago",
        type: "system",
        read: true,
        link: "/tickets/TK-1017"
    },
    {
        id: "NOTIF-008",
        title: "Slack License Renewal Due Mar 15",
        description: "Slack Business+ subscription renews in 34 days. Current usage: 200 of 250 licenses.",
        timestamp: "1d ago",
        type: "system",
        read: true,
        link: "/tech-stack"
    },
    {
        id: "NOTIF-009",
        title: "M365 Migration Milestone Reached",
        description: "All 250 mailboxes successfully migrated to Exchange Online. On-premises Exchange decommissioning in progress.",
        timestamp: "2d ago",
        type: "project",
        read: true,
        link: "/projects/PRJ-006"
    },
    {
        id: "NOTIF-010",
        title: "Phishing Campaign Blocked",
        description: "23 phishing emails purged from Exchange. No users clicked the malicious link. Sender domain blocked.",
        timestamp: "4d ago",
        type: "ticket",
        read: true,
        link: "/tickets/TK-1020"
    },
    {
        id: "NOTIF-011",
        title: "WiFi Access Point Offline",
        description: "AP-CONF-01 on the 4th floor conference area has been offline for 4 hours. May affect meeting connectivity.",
        timestamp: "4h ago",
        type: "system",
        read: false,
        link: "/tech-stack"
    },
    {
        id: "NOTIF-012",
        title: "DocuSign License Expired",
        description: "DocuSign Business Pro subscription expired on Jan 15, 2026. 10 licenses affected. Contact Lisa Park for renewal.",
        timestamp: "3d ago",
        type: "system",
        read: true,
        link: "/tech-stack"
    }
];
}),
"[project]/src/stores/notification-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotificationStore",
    ()=>useNotificationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-notifications.ts [app-ssr] (ecmascript)");
;
;
const useNotificationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        notifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotifications"],
        isOpen: false,
        activeTab: "all",
        setOpen: (open)=>set({
                isOpen: open
            }),
        setActiveTab: (tab)=>set({
                activeTab: tab
            }),
        markAsRead: (id)=>set((state)=>({
                    notifications: state.notifications.map((n)=>n.id === id ? {
                            ...n,
                            read: true
                        } : n)
                })),
        markAllAsRead: ()=>set((state)=>({
                    notifications: state.notifications.map((n)=>({
                            ...n,
                            read: true
                        }))
                })),
        unreadCount: ()=>get().notifications.filter((n)=>!n.read).length
    }));
}),
"[project]/src/components/layout/top-bar/top-bar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$sidebar$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/sidebar-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$notification$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/notification-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/MagnifyingGlass.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bell$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Bell.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$List$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/List.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CaretRight$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/CaretRight.es.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const routeLabels = {
    "/dashboard": "Dashboard",
    "/helpdesk": "Tickets",
    "/projects": "Projects",
    "/documents": "Documents",
    "/tech-stack": "Tech Stack",
    "/connectors": "Connectors",
    "/ai-assistant": "AI Assistant",
    "/settings": "Settings",
    "/help": "Help & Support"
};
function TopBar({ onSearchClick, onNotificationClick, onUserClick }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { setMobileOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$sidebar$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const unreadCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$notification$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])((s)=>s.unreadCount);
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs = segments.map((seg, i)=>{
        const path = "/" + segments.slice(0, i + 1).join("/");
        const label = routeLabels[path] || seg.replace(/[-[\]]/g, " ").replace(/\b\w/g, (c)=>c.toUpperCase());
        return {
            label,
            path,
            isLast: i === segments.length - 1
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 flex items-center h-[60px] bg-white/80 backdrop-blur-xl border-b border-ice/60 px-4 md:px-6 lg:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(true),
                        className: "lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-ice-30 transition-colors duration-150",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$List$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                            size: 22,
                            weight: "light",
                            className: "text-text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden sm:flex items-center gap-1 min-w-0",
                        children: breadcrumbs.map((crumb, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CaretRight$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaretRight"], {
                                        size: 14,
                                        weight: "light",
                                        className: "text-text-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[13px] truncate ${crumb.isLast ? "text-text-primary font-medium" : "text-text-muted hover:text-blue cursor-pointer"}`,
                                        children: crumb.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, crumb.path, true, {
                                fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex flex-1 justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSearchClick,
                    className: "flex items-center gap-2 h-9 px-4 rounded-full bg-white/60 border border-ice/80 hover:border-blue/30 hover:bg-white/80 shadow-level-1 transition-all duration-300",
                    style: {
                        width: 420,
                        maxWidth: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MagnifyingGlass"], {
                            size: 16,
                            weight: "light",
                            className: "text-text-muted"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[13px] text-text-muted flex-1 text-left",
                            children: "Search anything..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "text-[11px] text-text-muted bg-white px-1.5 py-0.5 rounded border border-ice",
                            children: "⌘K"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 ml-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSearchClick,
                        className: "md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-ice-30 transition-colors duration-150",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MagnifyingGlass"], {
                            size: 20,
                            weight: "light",
                            className: "text-text-secondary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNotificationClick,
                        className: "relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-ice-30 transition-colors duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bell$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bell"], {
                                size: 20,
                                weight: "light",
                                className: "text-text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            unreadCount() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onUserClick,
                        className: "flex items-center justify-center w-[34px] h-[34px] rounded-full bg-navy-80 text-white text-xs font-medium hover:ring-2 hover:ring-blue-10 transition-all duration-150",
                        children: "SM"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/top-bar/top-bar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileBottomBar",
    ()=>MobileBottomBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$House$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/House.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Ticket.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Kanban.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Folder$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Folder.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$DotsThreeOutline$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/DotsThreeOutline.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Circuitry$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Circuitry.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Robot.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Gear$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Gear.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Question$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Question.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Plugs$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Plugs.es.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const tabs = [
    {
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$House$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["House"],
        label: "Dashboard"
    },
    {
        href: "/helpdesk",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ticket"],
        label: "Tickets"
    },
    {
        href: "/projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kanban"],
        label: "Projects"
    },
    {
        href: "/documents",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Folder$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Folder"],
        label: "Documents"
    }
];
const moreItems = [
    {
        href: "/tech-stack",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Circuitry$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Circuitry"],
        label: "Tech Stack"
    },
    {
        href: "/connectors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Plugs$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugs"],
        label: "Connectors"
    },
    {
        href: "/ai-assistant",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Robot$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Robot"],
        label: "AI Assistant"
    },
    {
        href: "/settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Gear$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Gear"],
        label: "Settings"
    },
    {
        href: "/help",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Question$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Question"],
        label: "Help & Support"
    }
];
function MobileBottomBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showMore, setShowMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMoreActive = moreItems.some((item)=>pathname === item.href || pathname.startsWith(item.href + "/"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-navy/30 z-50",
                        onClick: ()=>setShowMore(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-level-3 z-50 pb-[env(safe-area-inset-bottom)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center pt-3 pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-1 rounded-full bg-ice"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-4 space-y-1",
                                children: moreItems.map((item)=>{
                                    const Icon = item.icon;
                                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>setShowMore(false),
                                        className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150 ${isActive ? "bg-blue-10 text-blue" : "text-text-primary hover:bg-ice-30"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 22,
                                                weight: isActive ? "fill" : "light"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-medium",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t border-ice z-40 md:hidden pb-[env(safe-area-inset-bottom)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-around h-14",
                    children: [
                        tabs.map((tab)=>{
                            const Icon = tab.icon;
                            const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: tab.href,
                                className: `flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-150 ${isActive ? "text-blue" : "text-text-muted"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 22,
                                        weight: isActive ? "fill" : "light"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-medium",
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.href, true, {
                                fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowMore(true),
                            className: `flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-150 ${isMoreActive ? "text-blue" : "text-text-muted"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$DotsThreeOutline$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotsThreeOutline"], {
                                    size: 22,
                                    weight: "light"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-medium",
                                    children: "More"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/data/mock-tickets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockTickets",
    ()=>mockTickets
]);
const mockTickets = [
    {
        id: "TK-1001",
        subject: "VPN Connection Dropping Intermittently",
        status: "Open",
        priority: "Critical",
        created: "Feb 7, 2026",
        updated: "2h ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "Multiple employees in the sales department are reporting intermittent VPN disconnections when working remotely. The issue seems to occur every 15-20 minutes and requires a full reconnect. This is severely impacting productivity for remote workers.",
        activity: [
            {
                id: "a1-1",
                title: "Ticket created by Sarah Mitchell",
                timestamp: "Feb 7, 2026 9:15 AM",
                type: "system"
            },
            {
                id: "a1-2",
                title: "Assigned to Marcus Chen",
                timestamp: "Feb 7, 2026 9:20 AM",
                type: "update",
                note: "Escalated to network team for investigation."
            },
            {
                id: "a1-3",
                title: "VPN gateway logs collected",
                timestamp: "Feb 7, 2026 11:30 AM",
                type: "update",
                note: "Identified potential MTU mismatch on the VPN concentrator. Testing fix."
            },
            {
                id: "a1-4",
                title: "Firmware update scheduled",
                timestamp: "Feb 8, 2026 2:00 PM",
                type: "pending",
                note: "VPN appliance firmware update scheduled for tonight's maintenance window."
            }
        ],
        attachments: [
            {
                name: "vpn-error-logs.pdf",
                type: "pdf",
                size: "1.2 MB"
            },
            {
                name: "network-topology.image",
                type: "image",
                size: "340 KB"
            }
        ]
    },
    {
        id: "TK-1002",
        subject: "Outlook Calendar Sync Issue",
        status: "Pending",
        priority: "Medium",
        created: "Feb 5, 2026",
        updated: "1d ago",
        assignedTo: {
            name: "Lisa Park",
            initials: "LP"
        },
        description: "Calendar events created on mobile devices are not syncing to the Outlook desktop client. The issue affects approximately 12 users in the marketing department. Restarting Outlook temporarily resolves the problem but it recurs within a few hours.",
        activity: [
            {
                id: "a2-1",
                title: "Ticket created by David Brooks",
                timestamp: "Feb 5, 2026 10:00 AM",
                type: "system"
            },
            {
                id: "a2-2",
                title: "Assigned to Lisa Park",
                timestamp: "Feb 5, 2026 10:15 AM",
                type: "update"
            },
            {
                id: "a2-3",
                title: "Waiting on Microsoft Support response",
                timestamp: "Feb 6, 2026 3:45 PM",
                type: "pending",
                note: "Escalated to Microsoft 365 support. Ticket reference: MS-2026-44821."
            }
        ]
    },
    {
        id: "TK-1003",
        subject: "New Employee Laptop Setup - Jennifer Walsh",
        status: "Open",
        priority: "High",
        created: "Feb 6, 2026",
        updated: "4h ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "New hire Jennifer Walsh starts on Feb 10. Need a fully configured laptop with standard software suite, VPN access, email account, and department-specific applications for the finance team.",
        activity: [
            {
                id: "a3-1",
                title: "Ticket created by HR System",
                timestamp: "Feb 6, 2026 8:00 AM",
                type: "system"
            },
            {
                id: "a3-2",
                title: "Assigned to Tom Rivera",
                timestamp: "Feb 6, 2026 8:30 AM",
                type: "update",
                note: "Dell Latitude 5540 allocated from inventory. Beginning imaging."
            },
            {
                id: "a3-3",
                title: "OS imaging complete",
                timestamp: "Feb 7, 2026 11:00 AM",
                type: "update",
                note: "Windows 11 Enterprise deployed. Installing M365 suite and finance tools."
            }
        ],
        attachments: [
            {
                name: "new-hire-checklist.pdf",
                type: "pdf",
                size: "85 KB"
            }
        ]
    },
    {
        id: "TK-1004",
        subject: "Printer on 3rd Floor Not Responding",
        status: "Closed",
        priority: "Low",
        created: "Jan 30, 2026",
        updated: "3d ago",
        assignedTo: {
            name: "Carlos Mendez",
            initials: "CM"
        },
        description: "The HP LaserJet Pro on the 3rd floor east wing is not accepting print jobs. Users are getting a 'printer offline' error. The printer display shows it is online and ready.",
        resolutionTime: "4h 30m",
        activity: [
            {
                id: "a4-1",
                title: "Ticket created by Anna Kowalski",
                timestamp: "Jan 30, 2026 2:00 PM",
                type: "system"
            },
            {
                id: "a4-2",
                title: "Assigned to Carlos Mendez",
                timestamp: "Jan 30, 2026 2:10 PM",
                type: "update"
            },
            {
                id: "a4-3",
                title: "Print spooler cleared and driver reinstalled",
                timestamp: "Jan 30, 2026 4:30 PM",
                type: "update",
                note: "Cleared corrupted print spooler on the print server. Reinstalled network driver."
            },
            {
                id: "a4-4",
                title: "Ticket resolved",
                timestamp: "Jan 30, 2026 6:30 PM",
                type: "resolution",
                note: "Printer is fully operational. Root cause was a corrupted driver update pushed last week."
            }
        ]
    },
    {
        id: "TK-1005",
        subject: "Multi-Factor Authentication Not Working",
        status: "Open",
        priority: "Critical",
        created: "Feb 8, 2026",
        updated: "30m ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "Several executives are unable to complete MFA verification when logging into corporate applications. The Microsoft Authenticator app is not generating valid codes. This is blocking access to critical business systems.",
        activity: [
            {
                id: "a5-1",
                title: "Ticket created by Robert Klein",
                timestamp: "Feb 8, 2026 7:45 AM",
                type: "system"
            },
            {
                id: "a5-2",
                title: "Priority escalated to Critical",
                timestamp: "Feb 8, 2026 7:50 AM",
                type: "update",
                note: "CEO and CFO affected. Immediate attention required."
            },
            {
                id: "a5-3",
                title: "Temporary bypass codes issued",
                timestamp: "Feb 8, 2026 8:15 AM",
                type: "update",
                note: "Issued temporary bypass codes to affected users. Investigating Azure AD MFA service."
            }
        ]
    },
    {
        id: "TK-1006",
        subject: "Shared Drive Permissions Error - Marketing Folder",
        status: "Closed",
        priority: "Medium",
        created: "Jan 28, 2026",
        updated: "5d ago",
        assignedTo: {
            name: "Lisa Park",
            initials: "LP"
        },
        description: "The marketing team lost access to their shared drive folder after last weekend's server maintenance. They are getting 'Access Denied' errors when trying to open files in the Q1 Campaign folder.",
        resolutionTime: "2h 15m",
        activity: [
            {
                id: "a6-1",
                title: "Ticket created by Michelle Torres",
                timestamp: "Jan 28, 2026 9:00 AM",
                type: "system"
            },
            {
                id: "a6-2",
                title: "Assigned to Lisa Park",
                timestamp: "Jan 28, 2026 9:10 AM",
                type: "update"
            },
            {
                id: "a6-3",
                title: "Permissions restored",
                timestamp: "Jan 28, 2026 11:15 AM",
                type: "resolution",
                note: "AD group membership was reset during maintenance. Restored marketing-team security group permissions to the shared folder."
            }
        ]
    },
    {
        id: "TK-1007",
        subject: "Email Attachment Size Limit Increase Request",
        status: "Closed",
        priority: "Low",
        created: "Jan 25, 2026",
        updated: "1w ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "The design team frequently needs to send large files (50-100MB) via email. Current limit is 25MB. Requesting an increase to 50MB or an alternative solution for large file sharing.",
        resolutionTime: "1d 4h",
        activity: [
            {
                id: "a7-1",
                title: "Ticket created by James Whitfield",
                timestamp: "Jan 25, 2026 11:00 AM",
                type: "system"
            },
            {
                id: "a7-2",
                title: "Assigned to Tom Rivera",
                timestamp: "Jan 25, 2026 11:30 AM",
                type: "update"
            },
            {
                id: "a7-3",
                title: "SharePoint file sharing enabled",
                timestamp: "Jan 26, 2026 2:00 PM",
                type: "update",
                note: "Instead of increasing email limits, configured OneDrive/SharePoint sharing links for large files. Provided training documentation."
            },
            {
                id: "a7-4",
                title: "Ticket resolved",
                timestamp: "Jan 26, 2026 3:00 PM",
                type: "resolution",
                note: "Design team trained on using SharePoint links for large file sharing. No email limit change needed."
            }
        ],
        attachments: [
            {
                name: "file-sharing-guide.pdf",
                type: "pdf",
                size: "520 KB"
            }
        ]
    },
    {
        id: "TK-1008",
        subject: "Zoom Meeting Room Display Offline - Conf Room B",
        status: "Pending",
        priority: "Medium",
        created: "Feb 4, 2026",
        updated: "2d ago",
        assignedTo: {
            name: "Carlos Mendez",
            initials: "CM"
        },
        description: "The Zoom Room display in Conference Room B on the 2nd floor has been showing a black screen since Monday. The iPad controller is responsive but the main display will not turn on. Multiple departments use this room for client presentations.",
        activity: [
            {
                id: "a8-1",
                title: "Ticket created by Rachel Green",
                timestamp: "Feb 4, 2026 10:30 AM",
                type: "system"
            },
            {
                id: "a8-2",
                title: "Assigned to Carlos Mendez",
                timestamp: "Feb 4, 2026 10:45 AM",
                type: "update",
                note: "Checked HDMI cable and power connections. Display hardware may be faulty."
            },
            {
                id: "a8-3",
                title: "Replacement display ordered",
                timestamp: "Feb 5, 2026 9:00 AM",
                type: "pending",
                note: "Samsung 65\" display ordered. Expected delivery Feb 10. Temporary display moved from storage."
            }
        ]
    },
    {
        id: "TK-1009",
        subject: "Software License Activation Failed - Adobe CC",
        status: "Open",
        priority: "High",
        created: "Feb 7, 2026",
        updated: "6h ago",
        assignedTo: {
            name: "Lisa Park",
            initials: "LP"
        },
        description: "Five new Adobe Creative Cloud licenses purchased for the design team are failing to activate. Users receive error code 213:19 when attempting to sign in. This is blocking the team from starting work on the Q1 rebrand project.",
        activity: [
            {
                id: "a9-1",
                title: "Ticket created by Diana Foster",
                timestamp: "Feb 7, 2026 1:00 PM",
                type: "system"
            },
            {
                id: "a9-2",
                title: "Assigned to Lisa Park",
                timestamp: "Feb 7, 2026 1:15 PM",
                type: "update",
                note: "Verified license purchase in Adobe Admin Console. Licenses show as assigned but not activated."
            },
            {
                id: "a9-3",
                title: "Adobe support case opened",
                timestamp: "Feb 7, 2026 3:30 PM",
                type: "update",
                note: "Opened case with Adobe Enterprise Support. Ref: ADO-2026-11547."
            }
        ],
        attachments: [
            {
                name: "adobe-error-screenshot.image",
                type: "image",
                size: "245 KB"
            },
            {
                name: "license-purchase-receipt.pdf",
                type: "pdf",
                size: "102 KB"
            }
        ]
    },
    {
        id: "TK-1010",
        subject: "Wi-Fi Dead Zone in East Wing Break Room",
        status: "Open",
        priority: "Medium",
        created: "Feb 3, 2026",
        updated: "1d ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "Employees report extremely weak or no Wi-Fi signal in the east wing break room area. Signal strength drops from 4 bars to 0-1 bars when entering the space. This area was recently renovated with new walls that may be blocking the signal.",
        activity: [
            {
                id: "a10-1",
                title: "Ticket created by Kevin O'Brien",
                timestamp: "Feb 3, 2026 12:00 PM",
                type: "system"
            },
            {
                id: "a10-2",
                title: "Assigned to Marcus Chen",
                timestamp: "Feb 3, 2026 12:30 PM",
                type: "update"
            },
            {
                id: "a10-3",
                title: "Site survey conducted",
                timestamp: "Feb 5, 2026 10:00 AM",
                type: "update",
                note: "Wireless site survey confirms dead zone. New drywall has metal mesh backing blocking signal. Recommending additional WAP installation."
            },
            {
                id: "a10-4",
                title: "New access point procurement approved",
                timestamp: "Feb 7, 2026 9:00 AM",
                type: "update",
                note: "Budget approved for a Cisco Meraki MR46 access point. Installation scheduled for next week."
            }
        ],
        attachments: [
            {
                name: "wifi-heatmap.image",
                type: "image",
                size: "1.8 MB"
            }
        ]
    },
    {
        id: "TK-1011",
        subject: "Password Reset - Executive Account Locked",
        status: "Closed",
        priority: "High",
        created: "Feb 6, 2026",
        updated: "2d ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "VP of Operations account locked after multiple failed login attempts. The user suspects someone else may have been trying to access the account. Security review requested along with password reset.",
        resolutionTime: "45m",
        activity: [
            {
                id: "a11-1",
                title: "Ticket created by Patricia Hoffman",
                timestamp: "Feb 6, 2026 8:30 AM",
                type: "system"
            },
            {
                id: "a11-2",
                title: "Priority escalated to High",
                timestamp: "Feb 6, 2026 8:32 AM",
                type: "update",
                note: "Executive account - fast-tracked for immediate resolution."
            },
            {
                id: "a11-3",
                title: "Security audit completed",
                timestamp: "Feb 6, 2026 9:00 AM",
                type: "update",
                note: "Reviewed sign-in logs. Failed attempts originated from user's home IP - likely fat-finger password entry. No suspicious activity detected."
            },
            {
                id: "a11-4",
                title: "Ticket resolved",
                timestamp: "Feb 6, 2026 9:15 AM",
                type: "resolution",
                note: "Account unlocked. Password reset via secure link. MFA re-verified. No evidence of unauthorized access attempts."
            }
        ]
    },
    {
        id: "TK-1012",
        subject: "Database Server High CPU Usage Alert",
        status: "Open",
        priority: "Critical",
        created: "Feb 8, 2026",
        updated: "1h ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "Monitoring system flagged sustained CPU usage above 95% on the primary SQL database server (DB-PROD-01). Application response times have increased significantly. Users are experiencing timeouts when accessing the CRM system.",
        activity: [
            {
                id: "a12-1",
                title: "Alert triggered by monitoring system",
                timestamp: "Feb 8, 2026 6:00 AM",
                type: "system"
            },
            {
                id: "a12-2",
                title: "Assigned to Marcus Chen",
                timestamp: "Feb 8, 2026 6:05 AM",
                type: "update",
                note: "Auto-assigned based on on-call rotation. Investigating immediately."
            },
            {
                id: "a12-3",
                title: "Runaway query identified",
                timestamp: "Feb 8, 2026 6:45 AM",
                type: "update",
                note: "Identified a poorly optimized report query running against the production database. Query has been consuming resources for 4 hours. Killing the process and optimizing."
            }
        ],
        attachments: [
            {
                name: "cpu-usage-graph.image",
                type: "image",
                size: "180 KB"
            },
            {
                name: "query-execution-plan.pdf",
                type: "pdf",
                size: "95 KB"
            }
        ]
    },
    {
        id: "TK-1013",
        subject: "Request for Additional Monitor - Accounting Dept",
        status: "Closed",
        priority: "Low",
        created: "Jan 22, 2026",
        updated: "2w ago",
        assignedTo: {
            name: "Carlos Mendez",
            initials: "CM"
        },
        description: "Three accountants in the finance department are requesting dual monitor setups to improve productivity during tax season. They currently have single 24-inch monitors.",
        resolutionTime: "3d",
        activity: [
            {
                id: "a13-1",
                title: "Ticket created by Greg Simmons",
                timestamp: "Jan 22, 2026 3:00 PM",
                type: "system"
            },
            {
                id: "a13-2",
                title: "Assigned to Carlos Mendez",
                timestamp: "Jan 22, 2026 3:30 PM",
                type: "update",
                note: "Checking inventory for available monitors."
            },
            {
                id: "a13-3",
                title: "Monitors installed",
                timestamp: "Jan 25, 2026 11:00 AM",
                type: "resolution",
                note: "Installed three Dell 27\" monitors with adjustable arms. All setups tested and confirmed working. Users trained on multi-display settings."
            }
        ]
    },
    {
        id: "TK-1014",
        subject: "Salesforce Integration Error with Email System",
        status: "Pending",
        priority: "High",
        created: "Feb 2, 2026",
        updated: "3d ago",
        assignedTo: {
            name: "Lisa Park",
            initials: "LP"
        },
        description: "The Salesforce-to-Outlook email integration is failing to log sent emails to contact records. The connector shows authenticated but sync operations return a 403 error. Sales team is manually logging communications which is inefficient.",
        activity: [
            {
                id: "a14-1",
                title: "Ticket created by Mark Johnson",
                timestamp: "Feb 2, 2026 4:00 PM",
                type: "system"
            },
            {
                id: "a14-2",
                title: "Assigned to Lisa Park",
                timestamp: "Feb 2, 2026 4:20 PM",
                type: "update"
            },
            {
                id: "a14-3",
                title: "API permissions reviewed",
                timestamp: "Feb 3, 2026 10:00 AM",
                type: "update",
                note: "Found that recent Salesforce API version update changed permission requirements. Need to update OAuth scopes."
            },
            {
                id: "a14-4",
                title: "Awaiting Salesforce admin approval",
                timestamp: "Feb 5, 2026 2:00 PM",
                type: "pending",
                note: "Submitted request to Salesforce admin for updated API permissions. Waiting for approval from vendor side."
            }
        ]
    },
    {
        id: "TK-1015",
        subject: "Laptop Keyboard Malfunction - Sticky Keys",
        status: "Closed",
        priority: "Medium",
        created: "Jan 27, 2026",
        updated: "1w ago",
        assignedTo: {
            name: "Carlos Mendez",
            initials: "CM"
        },
        description: "User reports multiple keys on their Dell Latitude laptop are sticking or not registering keypresses. The 'E', 'R', and spacebar are particularly affected. User suspects liquid damage from a coffee spill last week.",
        resolutionTime: "1d 2h",
        activity: [
            {
                id: "a15-1",
                title: "Ticket created by Amy Chen",
                timestamp: "Jan 27, 2026 9:30 AM",
                type: "system"
            },
            {
                id: "a15-2",
                title: "Assigned to Carlos Mendez",
                timestamp: "Jan 27, 2026 9:45 AM",
                type: "update",
                note: "External USB keyboard provided as temporary workaround."
            },
            {
                id: "a15-3",
                title: "Keyboard replacement completed",
                timestamp: "Jan 28, 2026 11:30 AM",
                type: "resolution",
                note: "Replaced internal keyboard module. Tested all keys. Laptop returned to user in full working condition."
            }
        ]
    },
    {
        id: "TK-1016",
        subject: "Azure AD Conditional Access Policy Update",
        status: "Open",
        priority: "High",
        created: "Feb 7, 2026",
        updated: "8h ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "Need to implement new conditional access policies in Azure AD to enforce MFA for all external access and block legacy authentication protocols. This is required for upcoming SOC 2 compliance audit.",
        activity: [
            {
                id: "a16-1",
                title: "Ticket created by Security Team",
                timestamp: "Feb 7, 2026 10:00 AM",
                type: "system"
            },
            {
                id: "a16-2",
                title: "Assigned to Marcus Chen",
                timestamp: "Feb 7, 2026 10:15 AM",
                type: "update",
                note: "Reviewing current conditional access policies and drafting new policy set."
            },
            {
                id: "a16-3",
                title: "Draft policies created in report-only mode",
                timestamp: "Feb 8, 2026 9:00 AM",
                type: "update",
                note: "Created 4 new conditional access policies in report-only mode. Monitoring impact for 48 hours before enforcement."
            }
        ],
        attachments: [
            {
                name: "ca-policy-matrix.xlsx",
                type: "xlsx",
                size: "48 KB"
            },
            {
                name: "soc2-requirements.pdf",
                type: "pdf",
                size: "2.1 MB"
            }
        ]
    },
    {
        id: "TK-1017",
        subject: "File Server Running Low on Disk Space",
        status: "Pending",
        priority: "High",
        created: "Feb 1, 2026",
        updated: "4d ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "Primary file server (FS-PROD-01) is at 92% disk capacity. Current growth rate suggests the drive will be full within 2 weeks. Need to either expand storage or archive old files to cold storage.",
        activity: [
            {
                id: "a17-1",
                title: "Alert triggered by monitoring system",
                timestamp: "Feb 1, 2026 7:00 AM",
                type: "system"
            },
            {
                id: "a17-2",
                title: "Assigned to Tom Rivera",
                timestamp: "Feb 1, 2026 8:00 AM",
                type: "update",
                note: "Analyzing disk usage patterns and identifying files for archival."
            },
            {
                id: "a17-3",
                title: "Archival plan submitted for approval",
                timestamp: "Feb 3, 2026 2:00 PM",
                type: "pending",
                note: "Identified 800GB of files older than 2 years for archival to Azure Blob Storage. Awaiting management approval to proceed."
            }
        ],
        attachments: [
            {
                name: "disk-usage-report.xlsx",
                type: "xlsx",
                size: "320 KB"
            }
        ]
    },
    {
        id: "TK-1018",
        subject: "Teams Phone System Call Quality Issues",
        status: "Open",
        priority: "Medium",
        created: "Feb 6, 2026",
        updated: "1d ago",
        assignedTo: {
            name: "Lisa Park",
            initials: "LP"
        },
        description: "Users on the 4th floor are experiencing choppy audio and dropped calls when using Microsoft Teams Phone. The issue seems to primarily affect external calls. Internal calls between Teams users work fine.",
        activity: [
            {
                id: "a18-1",
                title: "Ticket created by Laura Diaz",
                timestamp: "Feb 6, 2026 2:30 PM",
                type: "system"
            },
            {
                id: "a18-2",
                title: "Assigned to Lisa Park",
                timestamp: "Feb 6, 2026 2:45 PM",
                type: "update"
            },
            {
                id: "a18-3",
                title: "QoS analysis initiated",
                timestamp: "Feb 7, 2026 9:00 AM",
                type: "update",
                note: "Running network quality of service analysis on 4th floor network segment. Suspect QoS policies may not be properly configured on the switch."
            }
        ]
    },
    {
        id: "TK-1019",
        subject: "Backup Job Failed - Weekend Full Backup",
        status: "Closed",
        priority: "Critical",
        created: "Feb 3, 2026",
        updated: "5d ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "The weekend full backup job for the production environment failed at 3:47 AM on Sunday. Veeam reported insufficient space on the backup repository. This leaves a gap in our backup chain that needs to be addressed immediately.",
        resolutionTime: "6h",
        activity: [
            {
                id: "a19-1",
                title: "Alert triggered by Veeam Backup",
                timestamp: "Feb 3, 2026 3:47 AM",
                type: "system"
            },
            {
                id: "a19-2",
                title: "Assigned to Tom Rivera",
                timestamp: "Feb 3, 2026 7:00 AM",
                type: "update",
                note: "Investigating backup repository storage. Old restore points consuming excessive space."
            },
            {
                id: "a19-3",
                title: "Repository cleaned and backup re-run",
                timestamp: "Feb 3, 2026 10:00 AM",
                type: "update",
                note: "Removed expired restore points freeing 2.4TB. Adjusted retention policy from 60 to 45 days. Re-running full backup."
            },
            {
                id: "a19-4",
                title: "Ticket resolved",
                timestamp: "Feb 3, 2026 1:47 PM",
                type: "resolution",
                note: "Full backup completed successfully. Backup chain integrity verified. Monitoring storage growth for next cycle."
            }
        ],
        attachments: [
            {
                name: "veeam-backup-report.pdf",
                type: "pdf",
                size: "156 KB"
            }
        ]
    },
    {
        id: "TK-1020",
        subject: "Phishing Email Reported - Fake Invoice",
        status: "Closed",
        priority: "Critical",
        created: "Feb 4, 2026",
        updated: "4d ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "An employee in accounts payable reported receiving a convincing phishing email disguised as an invoice from a known vendor. The email contained a malicious link. Employee did not click the link. Need to check if other employees received the same email.",
        resolutionTime: "3h 15m",
        activity: [
            {
                id: "a20-1",
                title: "Ticket created by Security Alert System",
                timestamp: "Feb 4, 2026 11:00 AM",
                type: "system"
            },
            {
                id: "a20-2",
                title: "Priority set to Critical",
                timestamp: "Feb 4, 2026 11:02 AM",
                type: "update",
                note: "Potential company-wide phishing campaign. Initiating threat investigation."
            },
            {
                id: "a20-3",
                title: "Email trace completed",
                timestamp: "Feb 4, 2026 12:30 PM",
                type: "update",
                note: "Found 23 instances of the same phishing email across the organization. Purged all instances from Exchange Online. No users clicked the malicious link."
            },
            {
                id: "a20-4",
                title: "Ticket resolved",
                timestamp: "Feb 4, 2026 2:15 PM",
                type: "resolution",
                note: "All phishing emails purged. Sender domain blocked. Transport rule created to quarantine future emails from this domain. Security awareness reminder sent to all staff."
            }
        ],
        attachments: [
            {
                name: "phishing-email-sample.image",
                type: "image",
                size: "410 KB"
            }
        ]
    },
    {
        id: "TK-1021",
        subject: "Slow Internet Speeds - Entire Office",
        status: "Closed",
        priority: "High",
        created: "Jan 29, 2026",
        updated: "1w ago",
        assignedTo: {
            name: "Marcus Chen",
            initials: "MC"
        },
        description: "Widespread reports of slow internet speeds throughout the office. Speed tests showing 15 Mbps down when we should be getting 500 Mbps. Issue started this morning and is affecting all floors.",
        resolutionTime: "2h 45m",
        activity: [
            {
                id: "a21-1",
                title: "Ticket created by Multiple Users",
                timestamp: "Jan 29, 2026 10:00 AM",
                type: "system"
            },
            {
                id: "a21-2",
                title: "Assigned to Marcus Chen",
                timestamp: "Jan 29, 2026 10:10 AM",
                type: "update",
                note: "ISP contacted. Checking internal network for issues."
            },
            {
                id: "a21-3",
                title: "ISP confirmed upstream issue",
                timestamp: "Jan 29, 2026 11:30 AM",
                type: "update",
                note: "ISP confirmed a fiber cut 2 miles from our building. Traffic rerouted through backup path with reduced bandwidth."
            },
            {
                id: "a21-4",
                title: "Ticket resolved",
                timestamp: "Jan 29, 2026 12:45 PM",
                type: "resolution",
                note: "ISP completed fiber repair. Speeds restored to full 500 Mbps. Verified across all floors."
            }
        ]
    },
    {
        id: "TK-1022",
        subject: "New Security Camera Installation Request",
        status: "Pending",
        priority: "Medium",
        created: "Jan 31, 2026",
        updated: "6d ago",
        assignedTo: {
            name: "Carlos Mendez",
            initials: "CM"
        },
        description: "Facilities management has requested installation of 4 new IP security cameras in the newly expanded parking garage. Cameras need to integrate with the existing Milestone XProtect VMS system.",
        activity: [
            {
                id: "a22-1",
                title: "Ticket created by Facilities Manager",
                timestamp: "Jan 31, 2026 1:00 PM",
                type: "system"
            },
            {
                id: "a22-2",
                title: "Assigned to Carlos Mendez",
                timestamp: "Jan 31, 2026 1:30 PM",
                type: "update",
                note: "Surveyed parking garage for optimal camera placement. Need to run 4 Cat6 cables."
            },
            {
                id: "a22-3",
                title: "Awaiting vendor quote",
                timestamp: "Feb 3, 2026 10:00 AM",
                type: "pending",
                note: "Requested quotes from two vendors for Axis P3245-V cameras and installation labor."
            }
        ]
    },
    {
        id: "TK-1023",
        subject: "Windows 11 Update Causing Application Crash",
        status: "Open",
        priority: "High",
        created: "Feb 8, 2026",
        updated: "3h ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "After the latest Windows 11 cumulative update (KB5034765), the custom inventory management application crashes on startup. 15 warehouse employees are affected and cannot process shipments.",
        activity: [
            {
                id: "a23-1",
                title: "Ticket created by Warehouse Manager",
                timestamp: "Feb 8, 2026 7:00 AM",
                type: "system"
            },
            {
                id: "a23-2",
                title: "Assigned to Tom Rivera",
                timestamp: "Feb 8, 2026 7:15 AM",
                type: "update",
                note: "Confirmed issue is reproducible. The update appears to break a .NET Framework dependency used by the app."
            },
            {
                id: "a23-3",
                title: "Workaround deployed",
                timestamp: "Feb 8, 2026 9:30 AM",
                type: "update",
                note: "Rolled back KB5034765 on affected machines via WSUS. Application functioning normally. Blocking this update from deploying to warehouse workstations."
            }
        ]
    },
    {
        id: "TK-1024",
        subject: "OneDrive Sync Errors on Multiple Machines",
        status: "Open",
        priority: "Medium",
        created: "Feb 5, 2026",
        updated: "12h ago",
        assignedTo: {
            name: "Lisa Park",
            initials: "LP"
        },
        description: "Eight users across different departments are reporting OneDrive sync conflicts and errors. Files show as 'sync pending' indefinitely. Some users have lost recent changes to shared documents.",
        activity: [
            {
                id: "a24-1",
                title: "Ticket created by IT Help Desk",
                timestamp: "Feb 5, 2026 11:00 AM",
                type: "system"
            },
            {
                id: "a24-2",
                title: "Assigned to Lisa Park",
                timestamp: "Feb 5, 2026 11:15 AM",
                type: "update"
            },
            {
                id: "a24-3",
                title: "Root cause analysis in progress",
                timestamp: "Feb 6, 2026 2:00 PM",
                type: "update",
                note: "Identified that a recent Group Policy change is conflicting with OneDrive Known Folder Move settings. Testing GPO rollback on pilot machines."
            },
            {
                id: "a24-4",
                title: "GPO fix deployed to pilot group",
                timestamp: "Feb 7, 2026 10:00 AM",
                type: "update",
                note: "Corrected Group Policy settings deployed to 3 test machines. Monitoring sync behavior for 24 hours before wider rollout."
            }
        ]
    },
    {
        id: "TK-1025",
        subject: "Conference Room Booking System Down",
        status: "Closed",
        priority: "Medium",
        created: "Jan 26, 2026",
        updated: "2w ago",
        assignedTo: {
            name: "Tom Rivera",
            initials: "TR"
        },
        description: "The Robin conference room booking system is displaying 'Service Unavailable' on all room tablets and the web portal. Employees cannot book or check room availability.",
        resolutionTime: "1h 30m",
        activity: [
            {
                id: "a25-1",
                title: "Ticket created by Office Manager",
                timestamp: "Jan 26, 2026 8:00 AM",
                type: "system"
            },
            {
                id: "a25-2",
                title: "Assigned to Tom Rivera",
                timestamp: "Jan 26, 2026 8:10 AM",
                type: "update",
                note: "Robin cloud service status page shows ongoing incident. Issue is on vendor side."
            },
            {
                id: "a25-3",
                title: "Ticket resolved",
                timestamp: "Jan 26, 2026 9:30 AM",
                type: "resolution",
                note: "Robin resolved their cloud infrastructure issue. All room tablets and web portal are back online. Verified booking functionality across all 12 conference rooms."
            }
        ]
    }
];
}),
"[project]/src/data/mock-projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockProjects",
    ()=>mockProjects
]);
const mockProjects = [
    {
        id: "PRJ-001",
        name: "Cloud Infrastructure Migration",
        status: "On Track",
        progress: 70,
        tasksCompleted: 14,
        totalTasks: 20,
        dueDate: "Mar 15, 2026",
        startDate: "Nov 1, 2025",
        description: "Migrate all on-premises workloads to Azure cloud infrastructure, including virtual machines, databases, and file storage. This project encompasses the full lift-and-shift plus optimization of existing systems to cloud-native services.",
        category: "Infrastructure",
        assignees: [
            {
                name: "Marcus Chen",
                initials: "MC",
                role: "Project Lead"
            },
            {
                name: "Tom Rivera",
                initials: "TR",
                role: "Cloud Architect"
            },
            {
                name: "Priya Sharma",
                initials: "PS",
                role: "DevOps Engineer"
            },
            {
                name: "Jake Morrison",
                initials: "JM",
                role: "Systems Engineer"
            }
        ],
        tasks: [
            {
                id: "PRJ-001-T01",
                name: "Assess current infrastructure inventory",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Nov 15, 2025"
            },
            {
                id: "PRJ-001-T02",
                name: "Design Azure landing zone architecture",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Nov 30, 2025"
            },
            {
                id: "PRJ-001-T03",
                name: "Set up Azure subscriptions and governance",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Dec 10, 2025"
            },
            {
                id: "PRJ-001-T04",
                name: "Configure networking and VPN connectivity",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Dec 20, 2025"
            },
            {
                id: "PRJ-001-T05",
                name: "Migrate development environment VMs",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Jan 5, 2026"
            },
            {
                id: "PRJ-001-T06",
                name: "Migrate staging environment VMs",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Jan 15, 2026"
            },
            {
                id: "PRJ-001-T07",
                name: "Migrate SQL databases to Azure SQL",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Jan 20, 2026"
            },
            {
                id: "PRJ-001-T08",
                name: "Set up Azure Backup and recovery",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Jan 25, 2026"
            },
            {
                id: "PRJ-001-T09",
                name: "Configure monitoring and alerting (Azure Monitor)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Jan 28, 2026"
            },
            {
                id: "PRJ-001-T10",
                name: "Migrate file shares to Azure Files",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Feb 1, 2026"
            },
            {
                id: "PRJ-001-T11",
                name: "Migrate production web servers",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Feb 5, 2026"
            },
            {
                id: "PRJ-001-T12",
                name: "Migrate production application servers",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Feb 8, 2026"
            },
            {
                id: "PRJ-001-T13",
                name: "Configure Azure AD integration",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 10, 2026"
            },
            {
                id: "PRJ-001-T14",
                name: "Migrate production databases",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Feb 12, 2026"
            },
            {
                id: "PRJ-001-T15",
                name: "Performance testing in Azure environment",
                status: "In Progress",
                priority: "High",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Feb 20, 2026"
            },
            {
                id: "PRJ-001-T16",
                name: "Security hardening and compliance checks",
                status: "In Progress",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 25, 2026"
            },
            {
                id: "PRJ-001-T17",
                name: "User acceptance testing",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Mar 1, 2026"
            },
            {
                id: "PRJ-001-T18",
                name: "DNS cutover and traffic migration",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Mar 5, 2026"
            },
            {
                id: "PRJ-001-T19",
                name: "Decommission on-premises servers",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Mar 10, 2026"
            },
            {
                id: "PRJ-001-T20",
                name: "Project documentation and handover",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Mar 15, 2026"
            }
        ]
    },
    {
        id: "PRJ-002",
        name: "Security Compliance Audit",
        status: "At Risk",
        progress: 45,
        tasksCompleted: 9,
        totalTasks: 20,
        dueDate: "Feb 28, 2026",
        startDate: "Dec 1, 2025",
        description: "Comprehensive security audit to achieve SOC 2 Type II compliance. Includes policy review, control testing, vulnerability assessments, and documentation of all security processes. External auditor engagement scheduled for late February.",
        category: "Security & Compliance",
        assignees: [
            {
                name: "Marcus Chen",
                initials: "MC",
                role: "Security Lead"
            },
            {
                name: "Lisa Park",
                initials: "LP",
                role: "Compliance Analyst"
            },
            {
                name: "Rebecca Foster",
                initials: "RF",
                role: "Security Engineer"
            }
        ],
        tasks: [
            {
                id: "PRJ-002-T01",
                name: "Define audit scope and objectives",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Dec 10, 2025"
            },
            {
                id: "PRJ-002-T02",
                name: "Inventory all systems in scope",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Dec 15, 2025"
            },
            {
                id: "PRJ-002-T03",
                name: "Review and update security policies",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Dec 20, 2025"
            },
            {
                id: "PRJ-002-T04",
                name: "Document access control procedures",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Jan 3, 2026"
            },
            {
                id: "PRJ-002-T05",
                name: "Conduct vulnerability scan - internal network",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Rebecca Foster",
                    initials: "RF"
                },
                dueDate: "Jan 8, 2026"
            },
            {
                id: "PRJ-002-T06",
                name: "Conduct vulnerability scan - external perimeter",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Rebecca Foster",
                    initials: "RF"
                },
                dueDate: "Jan 10, 2026"
            },
            {
                id: "PRJ-002-T07",
                name: "Remediate critical vulnerabilities",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Rebecca Foster",
                    initials: "RF"
                },
                dueDate: "Jan 20, 2026"
            },
            {
                id: "PRJ-002-T08",
                name: "Review incident response procedures",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Jan 22, 2026"
            },
            {
                id: "PRJ-002-T09",
                name: "Test backup and disaster recovery processes",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Jan 28, 2026"
            },
            {
                id: "PRJ-002-T10",
                name: "Document change management procedures",
                status: "In Progress",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 5, 2026"
            },
            {
                id: "PRJ-002-T11",
                name: "Review encryption standards and implementation",
                status: "In Progress",
                priority: "Critical",
                assignee: {
                    name: "Rebecca Foster",
                    initials: "RF"
                },
                dueDate: "Feb 8, 2026"
            },
            {
                id: "PRJ-002-T12",
                name: "Conduct penetration testing",
                status: "In Progress",
                priority: "Critical",
                assignee: {
                    name: "Rebecca Foster",
                    initials: "RF"
                },
                dueDate: "Feb 12, 2026"
            },
            {
                id: "PRJ-002-T13",
                name: "Employee security awareness training",
                status: "In Progress",
                priority: "Medium",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 14, 2026"
            },
            {
                id: "PRJ-002-T14",
                name: "Review vendor management security",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 16, 2026"
            },
            {
                id: "PRJ-002-T15",
                name: "Compile evidence collection binder",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 18, 2026"
            },
            {
                id: "PRJ-002-T16",
                name: "Remediate penetration test findings",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Rebecca Foster",
                    initials: "RF"
                },
                dueDate: "Feb 20, 2026"
            },
            {
                id: "PRJ-002-T17",
                name: "Pre-audit internal review",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 22, 2026"
            },
            {
                id: "PRJ-002-T18",
                name: "External auditor kickoff meeting",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 24, 2026"
            },
            {
                id: "PRJ-002-T19",
                name: "Support external audit fieldwork",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 26, 2026"
            },
            {
                id: "PRJ-002-T20",
                name: "Address audit findings and final report",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 28, 2026"
            }
        ]
    },
    {
        id: "PRJ-003",
        name: "Network Upgrade Phase 2",
        status: "On Track",
        progress: 90,
        tasksCompleted: 18,
        totalTasks: 20,
        dueDate: "Feb 20, 2026",
        startDate: "Oct 15, 2025",
        description: "Phase 2 of the network infrastructure upgrade covering floors 3-5. Includes replacement of all edge switches with Cisco Catalyst 9300 series, new fiber backbone, and implementation of network segmentation with VLANs for improved security.",
        category: "Infrastructure",
        assignees: [
            {
                name: "Marcus Chen",
                initials: "MC",
                role: "Network Architect"
            },
            {
                name: "Carlos Mendez",
                initials: "CM",
                role: "Network Technician"
            },
            {
                name: "Jake Morrison",
                initials: "JM",
                role: "Cable Technician"
            }
        ],
        tasks: [
            {
                id: "PRJ-003-T01",
                name: "Survey floors 3-5 network infrastructure",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Oct 25, 2025"
            },
            {
                id: "PRJ-003-T02",
                name: "Design VLAN segmentation plan",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Nov 1, 2025"
            },
            {
                id: "PRJ-003-T03",
                name: "Order Cisco Catalyst 9300 switches",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Nov 5, 2025"
            },
            {
                id: "PRJ-003-T04",
                name: "Run fiber backbone between floors",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Nov 20, 2025"
            },
            {
                id: "PRJ-003-T05",
                name: "Install switches on 3rd floor",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Dec 1, 2025"
            },
            {
                id: "PRJ-003-T06",
                name: "Configure VLANs on 3rd floor switches",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Dec 5, 2025"
            },
            {
                id: "PRJ-003-T07",
                name: "Migrate 3rd floor users to new switches",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Dec 10, 2025"
            },
            {
                id: "PRJ-003-T08",
                name: "Install switches on 4th floor",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Dec 18, 2025"
            },
            {
                id: "PRJ-003-T09",
                name: "Configure VLANs on 4th floor switches",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Dec 22, 2025"
            },
            {
                id: "PRJ-003-T10",
                name: "Migrate 4th floor users to new switches",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Jan 5, 2026"
            },
            {
                id: "PRJ-003-T11",
                name: "Install switches on 5th floor",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Jan 12, 2026"
            },
            {
                id: "PRJ-003-T12",
                name: "Configure VLANs on 5th floor switches",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Jan 15, 2026"
            },
            {
                id: "PRJ-003-T13",
                name: "Migrate 5th floor users to new switches",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Jan 20, 2026"
            },
            {
                id: "PRJ-003-T14",
                name: "Configure inter-VLAN routing",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Jan 25, 2026"
            },
            {
                id: "PRJ-003-T15",
                name: "Implement network access control (802.1X)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Jan 30, 2026"
            },
            {
                id: "PRJ-003-T16",
                name: "Configure SNMP monitoring for new switches",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Feb 2, 2026"
            },
            {
                id: "PRJ-003-T17",
                name: "Performance and throughput testing",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Jake Morrison",
                    initials: "JM"
                },
                dueDate: "Feb 5, 2026"
            },
            {
                id: "PRJ-003-T18",
                name: "Security testing on new network segments",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 8, 2026"
            },
            {
                id: "PRJ-003-T19",
                name: "Decommission old switches and cabling",
                status: "In Progress",
                priority: "Low",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Feb 15, 2026"
            },
            {
                id: "PRJ-003-T20",
                name: "Final documentation and network diagrams",
                status: "Review",
                priority: "Medium",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 20, 2026"
            }
        ]
    },
    {
        id: "PRJ-004",
        name: "Employee Portal Redesign",
        status: "Delayed",
        progress: 30,
        tasksCompleted: 6,
        totalTasks: 20,
        dueDate: "Mar 30, 2026",
        startDate: "Nov 15, 2025",
        description: "Complete redesign of the internal employee portal using modern web technologies. The new portal will feature a responsive design, self-service IT capabilities, knowledge base, and integration with HR and IT ticketing systems.",
        category: "Software Development",
        assignees: [
            {
                name: "Lisa Park",
                initials: "LP",
                role: "Project Manager"
            },
            {
                name: "Daniel Kim",
                initials: "DK",
                role: "Frontend Developer"
            },
            {
                name: "Sophie Laurent",
                initials: "SL",
                role: "UX Designer"
            },
            {
                name: "Priya Sharma",
                initials: "PS",
                role: "Backend Developer"
            }
        ],
        tasks: [
            {
                id: "PRJ-004-T01",
                name: "Gather requirements from stakeholders",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Nov 25, 2025"
            },
            {
                id: "PRJ-004-T02",
                name: "User research and persona development",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Sophie Laurent",
                    initials: "SL"
                },
                dueDate: "Dec 5, 2025"
            },
            {
                id: "PRJ-004-T03",
                name: "Create wireframes and user flows",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Sophie Laurent",
                    initials: "SL"
                },
                dueDate: "Dec 15, 2025"
            },
            {
                id: "PRJ-004-T04",
                name: "Design system and component library",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Sophie Laurent",
                    initials: "SL"
                },
                dueDate: "Jan 5, 2026"
            },
            {
                id: "PRJ-004-T05",
                name: "Set up development environment and CI/CD",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                dueDate: "Jan 10, 2026"
            },
            {
                id: "PRJ-004-T06",
                name: "Design API architecture",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Jan 15, 2026"
            },
            {
                id: "PRJ-004-T07",
                name: "Build authentication and SSO integration",
                status: "In Progress",
                priority: "Critical",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Feb 1, 2026"
            },
            {
                id: "PRJ-004-T08",
                name: "Develop dashboard and home page",
                status: "In Progress",
                priority: "High",
                assignee: {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                dueDate: "Feb 10, 2026"
            },
            {
                id: "PRJ-004-T09",
                name: "Build IT ticket submission module",
                status: "In Progress",
                priority: "High",
                assignee: {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                dueDate: "Feb 15, 2026"
            },
            {
                id: "PRJ-004-T10",
                name: "Develop knowledge base system",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Feb 20, 2026"
            },
            {
                id: "PRJ-004-T11",
                name: "Build self-service password reset",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                dueDate: "Feb 25, 2026"
            },
            {
                id: "PRJ-004-T12",
                name: "Integrate with HR system API",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Mar 1, 2026"
            },
            {
                id: "PRJ-004-T13",
                name: "Build employee directory feature",
                status: "To Do",
                priority: "Low",
                assignee: {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                dueDate: "Mar 5, 2026"
            },
            {
                id: "PRJ-004-T14",
                name: "Develop notifications and alerts system",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Mar 8, 2026"
            },
            {
                id: "PRJ-004-T15",
                name: "Build admin panel and content management",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Daniel Kim",
                    initials: "DK"
                },
                dueDate: "Mar 10, 2026"
            },
            {
                id: "PRJ-004-T16",
                name: "Mobile responsive optimization",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Sophie Laurent",
                    initials: "SL"
                },
                dueDate: "Mar 15, 2026"
            },
            {
                id: "PRJ-004-T17",
                name: "Accessibility audit and fixes (WCAG 2.1)",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Sophie Laurent",
                    initials: "SL"
                },
                dueDate: "Mar 18, 2026"
            },
            {
                id: "PRJ-004-T18",
                name: "Integration testing",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Mar 22, 2026"
            },
            {
                id: "PRJ-004-T19",
                name: "User acceptance testing",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Mar 26, 2026"
            },
            {
                id: "PRJ-004-T20",
                name: "Production deployment and launch",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Mar 30, 2026"
            }
        ]
    },
    {
        id: "PRJ-005",
        name: "Disaster Recovery Planning",
        status: "On Track",
        progress: 60,
        tasksCompleted: 12,
        totalTasks: 20,
        dueDate: "Apr 15, 2026",
        startDate: "Dec 1, 2025",
        description: "Develop and test a comprehensive disaster recovery plan covering all critical business systems. Includes defining RTOs and RPOs, establishing failover procedures, and conducting tabletop exercises and live DR tests.",
        category: "Security & Compliance",
        assignees: [
            {
                name: "Tom Rivera",
                initials: "TR",
                role: "DR Lead"
            },
            {
                name: "Marcus Chen",
                initials: "MC",
                role: "Infrastructure Advisor"
            },
            {
                name: "Lisa Park",
                initials: "LP",
                role: "Documentation Lead"
            }
        ],
        tasks: [
            {
                id: "PRJ-005-T01",
                name: "Identify critical business systems",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Dec 10, 2025"
            },
            {
                id: "PRJ-005-T02",
                name: "Define RTO and RPO for each system",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Dec 18, 2025"
            },
            {
                id: "PRJ-005-T03",
                name: "Assess current backup infrastructure",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Dec 22, 2025"
            },
            {
                id: "PRJ-005-T04",
                name: "Document current recovery procedures",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Jan 5, 2026"
            },
            {
                id: "PRJ-005-T05",
                name: "Design Azure Site Recovery configuration",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Jan 12, 2026"
            },
            {
                id: "PRJ-005-T06",
                name: "Configure replication for Tier 1 systems",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Jan 20, 2026"
            },
            {
                id: "PRJ-005-T07",
                name: "Configure replication for Tier 2 systems",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Jan 28, 2026"
            },
            {
                id: "PRJ-005-T08",
                name: "Set up DR site networking",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Feb 1, 2026"
            },
            {
                id: "PRJ-005-T09",
                name: "Write runbook for email system failover",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 3, 2026"
            },
            {
                id: "PRJ-005-T10",
                name: "Write runbook for database failover",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 5, 2026"
            },
            {
                id: "PRJ-005-T11",
                name: "Write runbook for application failover",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 8, 2026"
            },
            {
                id: "PRJ-005-T12",
                name: "Write runbook for network failover",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Feb 10, 2026"
            },
            {
                id: "PRJ-005-T13",
                name: "Conduct tabletop DR exercise",
                status: "In Progress",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Feb 20, 2026"
            },
            {
                id: "PRJ-005-T14",
                name: "Address findings from tabletop exercise",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Feb 28, 2026"
            },
            {
                id: "PRJ-005-T15",
                name: "Live DR test - Tier 1 systems",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Mar 10, 2026"
            },
            {
                id: "PRJ-005-T16",
                name: "Live DR test - Tier 2 systems",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Marcus Chen",
                    initials: "MC"
                },
                dueDate: "Mar 18, 2026"
            },
            {
                id: "PRJ-005-T17",
                name: "Document lessons learned from DR tests",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Mar 25, 2026"
            },
            {
                id: "PRJ-005-T18",
                name: "Finalize DR plan documentation",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Apr 1, 2026"
            },
            {
                id: "PRJ-005-T19",
                name: "Train IT staff on DR procedures",
                status: "To Do",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Apr 8, 2026"
            },
            {
                id: "PRJ-005-T20",
                name: "Management review and sign-off",
                status: "To Do",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Apr 15, 2026"
            }
        ]
    },
    {
        id: "PRJ-006",
        name: "Microsoft 365 Migration",
        status: "On Track",
        progress: 85,
        tasksCompleted: 17,
        totalTasks: 20,
        dueDate: "Feb 25, 2026",
        startDate: "Oct 1, 2025",
        description: "Migrate from on-premises Exchange and SharePoint to Microsoft 365 cloud services. Includes email migration, SharePoint Online setup, Teams deployment, and OneDrive rollout for all 250 employees.",
        category: "Cloud Services",
        assignees: [
            {
                name: "Lisa Park",
                initials: "LP",
                role: "Migration Lead"
            },
            {
                name: "Tom Rivera",
                initials: "TR",
                role: "Exchange Specialist"
            },
            {
                name: "Carlos Mendez",
                initials: "CM",
                role: "Desktop Support"
            },
            {
                name: "Priya Sharma",
                initials: "PS",
                role: "SharePoint Specialist"
            }
        ],
        tasks: [
            {
                id: "PRJ-006-T01",
                name: "Assess current Exchange environment",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Oct 10, 2025"
            },
            {
                id: "PRJ-006-T02",
                name: "Plan Microsoft 365 tenant configuration",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Oct 18, 2025"
            },
            {
                id: "PRJ-006-T03",
                name: "Configure Azure AD Connect and sync",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Oct 25, 2025"
            },
            {
                id: "PRJ-006-T04",
                name: "Set up Exchange Online and hybrid mode",
                status: "Complete",
                priority: "Critical",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Nov 5, 2025"
            },
            {
                id: "PRJ-006-T05",
                name: "Migrate pilot group mailboxes (25 users)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Nov 15, 2025"
            },
            {
                id: "PRJ-006-T06",
                name: "Configure SharePoint Online sites",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Nov 20, 2025"
            },
            {
                id: "PRJ-006-T07",
                name: "Migrate SharePoint content libraries",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Priya Sharma",
                    initials: "PS"
                },
                dueDate: "Dec 1, 2025"
            },
            {
                id: "PRJ-006-T08",
                name: "Deploy Microsoft Teams organization-wide",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Dec 10, 2025"
            },
            {
                id: "PRJ-006-T09",
                name: "Migrate batch 2 mailboxes (75 users)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Dec 20, 2025"
            },
            {
                id: "PRJ-006-T10",
                name: "Migrate batch 3 mailboxes (75 users)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Jan 8, 2026"
            },
            {
                id: "PRJ-006-T11",
                name: "Migrate batch 4 mailboxes (75 users)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Jan 20, 2026"
            },
            {
                id: "PRJ-006-T12",
                name: "Configure OneDrive Known Folder Move",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Jan 25, 2026"
            },
            {
                id: "PRJ-006-T13",
                name: "Deploy OneDrive sync client to all machines",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Jan 30, 2026"
            },
            {
                id: "PRJ-006-T14",
                name: "Configure DLP and retention policies",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 3, 2026"
            },
            {
                id: "PRJ-006-T15",
                name: "Set up Teams Phone System",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 5, 2026"
            },
            {
                id: "PRJ-006-T16",
                name: "Employee training sessions (5 sessions)",
                status: "Complete",
                priority: "High",
                assignee: {
                    name: "Carlos Mendez",
                    initials: "CM"
                },
                dueDate: "Feb 8, 2026"
            },
            {
                id: "PRJ-006-T17",
                name: "Migrate remaining shared mailboxes",
                status: "Complete",
                priority: "Medium",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Feb 10, 2026"
            },
            {
                id: "PRJ-006-T18",
                name: "Decommission on-premises Exchange",
                status: "In Progress",
                priority: "High",
                assignee: {
                    name: "Tom Rivera",
                    initials: "TR"
                },
                dueDate: "Feb 18, 2026"
            },
            {
                id: "PRJ-006-T19",
                name: "Post-migration validation and testing",
                status: "Review",
                priority: "Critical",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 22, 2026"
            },
            {
                id: "PRJ-006-T20",
                name: "Project closeout and documentation",
                status: "To Do",
                priority: "Medium",
                assignee: {
                    name: "Lisa Park",
                    initials: "LP"
                },
                dueDate: "Feb 25, 2026"
            }
        ]
    }
];
}),
"[project]/src/data/mock-documents.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "folderTree",
    ()=>folderTree,
    "mockDocuments",
    ()=>mockDocuments
]);
const folderTree = {
    name: "All Documents",
    path: "/",
    children: [
        {
            name: "Contracts",
            path: "/contracts"
        },
        {
            name: "Reports",
            path: "/reports",
            children: [
                {
                    name: "Monthly",
                    path: "/reports/monthly"
                },
                {
                    name: "Quarterly",
                    path: "/reports/quarterly"
                }
            ]
        },
        {
            name: "Policies",
            path: "/policies"
        },
        {
            name: "Network Diagrams",
            path: "/network-diagrams"
        },
        {
            name: "Invoices",
            path: "/invoices"
        }
    ]
};
const mockDocuments = [
    // Contracts
    {
        id: "DOC-001",
        name: "Master Service Level Agreement 2026",
        type: "pdf",
        category: "Contracts",
        folder: "/contracts",
        modified: "Jan 10, 2026",
        size: "2.4 MB"
    },
    {
        id: "DOC-002",
        name: "Managed IT Services Contract",
        type: "pdf",
        category: "Contracts",
        folder: "/contracts",
        modified: "Dec 15, 2025",
        size: "1.8 MB"
    },
    {
        id: "DOC-003",
        name: "Non-Disclosure Agreement - Vendor Partners",
        type: "pdf",
        category: "Contracts",
        folder: "/contracts",
        modified: "Nov 20, 2025",
        size: "540 KB"
    },
    {
        id: "DOC-004",
        name: "Cloud Services Agreement - Azure",
        type: "pdf",
        category: "Contracts",
        folder: "/contracts",
        modified: "Jan 5, 2026",
        size: "3.1 MB"
    },
    {
        id: "DOC-005",
        name: "Software Licensing Agreement - Microsoft EA",
        type: "pdf",
        category: "Contracts",
        folder: "/contracts",
        modified: "Oct 30, 2025",
        size: "1.2 MB"
    },
    // Reports > Monthly
    {
        id: "DOC-006",
        name: "IT Operations Report - October 2025",
        type: "pdf",
        category: "Reports",
        folder: "/reports/monthly",
        modified: "Nov 3, 2025",
        size: "4.5 MB"
    },
    {
        id: "DOC-007",
        name: "IT Operations Report - November 2025",
        type: "pdf",
        category: "Reports",
        folder: "/reports/monthly",
        modified: "Dec 2, 2025",
        size: "4.8 MB"
    },
    {
        id: "DOC-008",
        name: "IT Operations Report - December 2025",
        type: "pdf",
        category: "Reports",
        folder: "/reports/monthly",
        modified: "Jan 3, 2026",
        size: "5.1 MB"
    },
    {
        id: "DOC-009",
        name: "IT Operations Report - January 2026",
        type: "pdf",
        category: "Reports",
        folder: "/reports/monthly",
        modified: "Feb 3, 2026",
        size: "4.9 MB"
    },
    // Reports > Quarterly
    {
        id: "DOC-010",
        name: "Quarterly Business Review - Q3 2025",
        type: "pdf",
        category: "Reports",
        folder: "/reports/quarterly",
        modified: "Oct 15, 2025",
        size: "8.2 MB"
    },
    {
        id: "DOC-011",
        name: "Quarterly Business Review - Q4 2025",
        type: "pdf",
        category: "Reports",
        folder: "/reports/quarterly",
        modified: "Jan 12, 2026",
        size: "9.1 MB"
    },
    // Policies
    {
        id: "DOC-012",
        name: "IT Security Policy",
        type: "pdf",
        category: "Policies",
        folder: "/policies",
        modified: "Jan 15, 2026",
        size: "1.6 MB"
    },
    {
        id: "DOC-013",
        name: "Acceptable Use Policy",
        type: "pdf",
        category: "Policies",
        folder: "/policies",
        modified: "Dec 10, 2025",
        size: "890 KB"
    },
    {
        id: "DOC-014",
        name: "Data Classification and Handling Policy",
        type: "docx",
        category: "Policies",
        folder: "/policies",
        modified: "Jan 20, 2026",
        size: "720 KB"
    },
    {
        id: "DOC-015",
        name: "Incident Response Plan",
        type: "pdf",
        category: "Policies",
        folder: "/policies",
        modified: "Feb 1, 2026",
        size: "2.3 MB"
    },
    {
        id: "DOC-016",
        name: "Remote Work IT Guidelines",
        type: "docx",
        category: "Policies",
        folder: "/policies",
        modified: "Nov 28, 2025",
        size: "510 KB"
    },
    {
        id: "DOC-017",
        name: "Password and Authentication Policy",
        type: "pdf",
        category: "Policies",
        folder: "/policies",
        modified: "Jan 8, 2026",
        size: "640 KB"
    },
    // Network Diagrams
    {
        id: "DOC-018",
        name: "Corporate Network Topology - Main Office",
        type: "image",
        category: "Network Diagrams",
        folder: "/network-diagrams",
        modified: "Feb 5, 2026",
        size: "3.8 MB"
    },
    {
        id: "DOC-019",
        name: "VLAN Segmentation Diagram",
        type: "image",
        category: "Network Diagrams",
        folder: "/network-diagrams",
        modified: "Jan 30, 2026",
        size: "2.1 MB"
    },
    {
        id: "DOC-020",
        name: "Azure Cloud Architecture Diagram",
        type: "image",
        category: "Network Diagrams",
        folder: "/network-diagrams",
        modified: "Feb 2, 2026",
        size: "4.5 MB"
    },
    {
        id: "DOC-021",
        name: "Disaster Recovery Network Failover Diagram",
        type: "image",
        category: "Network Diagrams",
        folder: "/network-diagrams",
        modified: "Jan 25, 2026",
        size: "2.9 MB"
    },
    // Invoices
    {
        id: "DOC-022",
        name: "Invoice - Microsoft Licensing - Oct 2025",
        type: "xlsx",
        category: "Invoices",
        folder: "/invoices",
        modified: "Oct 28, 2025",
        size: "145 KB"
    },
    {
        id: "DOC-023",
        name: "Invoice - Microsoft Licensing - Nov 2025",
        type: "xlsx",
        category: "Invoices",
        folder: "/invoices",
        modified: "Nov 27, 2025",
        size: "148 KB"
    },
    {
        id: "DOC-024",
        name: "Invoice - Microsoft Licensing - Dec 2025",
        type: "xlsx",
        category: "Invoices",
        folder: "/invoices",
        modified: "Dec 29, 2025",
        size: "152 KB"
    },
    {
        id: "DOC-025",
        name: "Invoice - Azure Cloud Services - Q4 2025",
        type: "pdf",
        category: "Invoices",
        folder: "/invoices",
        modified: "Jan 5, 2026",
        size: "320 KB"
    },
    {
        id: "DOC-026",
        name: "Invoice - Cisco Hardware Purchase",
        type: "pdf",
        category: "Invoices",
        folder: "/invoices",
        modified: "Nov 10, 2025",
        size: "210 KB"
    },
    {
        id: "DOC-027",
        name: "Invoice - Adobe Creative Cloud - Jan 2026",
        type: "xlsx",
        category: "Invoices",
        folder: "/invoices",
        modified: "Jan 28, 2026",
        size: "98 KB"
    }
];
}),
"[project]/src/components/overlays/command-palette/command-palette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/MagnifyingGlass.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Ticket.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Kanban.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FolderOpen$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/FolderOpen.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$SquaresFour$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/SquaresFour.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$tickets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-tickets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$documents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-documents.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const pages = [
    {
        id: "p1",
        title: "Dashboard",
        subtitle: "Home",
        type: "page",
        href: "/dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$SquaresFour$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SquaresFour"], {
            size: 18,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
            lineNumber: 26,
            columnNumber: 93
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "p2",
        title: "Helpdesk",
        subtitle: "Support tickets",
        type: "page",
        href: "/helpdesk",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ticket"], {
            size: 18,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
            lineNumber: 27,
            columnNumber: 102
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "p3",
        title: "Projects",
        subtitle: "Active projects",
        type: "page",
        href: "/projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kanban"], {
            size: 18,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
            lineNumber: 28,
            columnNumber: 102
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "p4",
        title: "Documents",
        subtitle: "Shared files",
        type: "page",
        href: "/documents",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FolderOpen$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FolderOpen"], {
            size: 18,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
            lineNumber: 29,
            columnNumber: 101
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function CommandPalette({ open, onClose }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const getResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!query.trim()) {
            return pages;
        }
        const q = query.toLowerCase();
        const results = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$tickets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockTickets"].filter((t)=>t.id.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q)).slice(0, 5).forEach((t)=>results.push({
                id: t.id,
                title: `#${t.id}`,
                subtitle: t.subject,
                type: "ticket",
                href: `/helpdesk?ticket=${t.id}`,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ticket"], {
                    size: 18,
                    weight: "light"
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProjects"].filter((p)=>p.name.toLowerCase().includes(q)).slice(0, 3).forEach((p)=>results.push({
                id: p.id,
                title: p.name,
                subtitle: `${p.progress}% complete`,
                type: "project",
                href: `/projects/${p.id}`,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kanban"], {
                    size: 18,
                    weight: "light"
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$documents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDocuments"].filter((d)=>d.name.toLowerCase().includes(q)).slice(0, 3).forEach((d)=>results.push({
                id: d.id,
                title: d.name,
                subtitle: d.folder,
                type: "document",
                href: "/documents",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$FolderOpen$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FolderOpen"], {
                    size: 18,
                    weight: "light"
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this)
            }));
        pages.filter((p)=>p.title.toLowerCase().includes(q)).forEach((p)=>results.push(p));
        return results;
    }, [
        query
    ]);
    const results = getResults();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedIndex(0);
    }, [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) {
            setQuery("");
            setSelectedIndex(0);
        }
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                if (open) onClose();
                else onClose(); // parent manages toggle
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        open,
        onClose
    ]);
    const handleSelect = (result)=>{
        router.push(result.href);
        onClose();
    };
    const handleKeyDown = (e)=>{
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((i)=>Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((i)=>Math.max(i - 1, 0));
        } else if (e.key === "Enter" && results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
        } else if (e.key === "Escape") {
            onClose();
        }
    };
    const grouped = results.reduce((acc, r)=>{
        if (!acc[r.type]) acc[r.type] = [];
        acc[r.type].push(r);
        return acc;
    }, {});
    const typeLabels = {
        ticket: "Tickets",
        project: "Projects",
        document: "Documents",
        page: "Pages"
    };
    let flatIndex = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "fixed inset-0 bg-navy/30 backdrop-blur-sm z-[60]",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.97
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.97
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[600px] max-h-[480px] bg-white/95 backdrop-blur-xl border border-ice/40 rounded-3xl shadow-level-4 z-[60] overflow-hidden flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-5 h-14 border-b border-ice",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MagnifyingGlass"], {
                                    size: 20,
                                    weight: "light",
                                    className: "text-blue flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    placeholder: "Search tickets, projects, documents...",
                                    className: "flex-1 text-base bg-transparent outline-none placeholder:text-silver-dark text-text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "text-[11px] text-text-muted bg-ice-30 px-1.5 py-0.5 rounded",
                                    children: "ESC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto custom-scrollbar",
                            children: results.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-text-muted",
                                        children: [
                                            "No results for “",
                                            query,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-text-muted mt-1",
                                        children: "Try searching for ticket numbers, project names, or file names"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                lineNumber: 191,
                                columnNumber: 17
                            }, this) : Object.entries(grouped).map(([type, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted",
                                                children: typeLabels[type] || type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                                lineNumber: 203,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this),
                                        items.map((item)=>{
                                            const currentIndex = flatIndex++;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSelect(item),
                                                onMouseEnter: ()=>setSelectedIndex(currentIndex),
                                                className: `flex items-center gap-3 w-full px-4 h-11 text-left transition-colors ${selectedIndex === currentIndex ? "bg-blue-10" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-secondary flex-shrink-0",
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-text-primary truncate",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-text-muted ml-auto truncate",
                                                        children: item.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                                lineNumber: 210,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    ]
                                }, type, true, {
                                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                                    lineNumber: 201,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/overlays/command-palette/command-palette.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationDropdown",
    ()=>NotificationDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$notification$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/notification-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Ticket.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Kanban.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GearSix$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/GearSix.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bell$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Bell.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const tabs = [
    {
        key: "all",
        label: "All"
    },
    {
        key: "tickets",
        label: "Tickets"
    },
    {
        key: "projects",
        label: "Projects"
    },
    {
        key: "system",
        label: "System"
    }
];
function NotificationIcon({ type }) {
    const config = {
        ticket: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Ticket$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ticket"], {
                size: 18,
                weight: "light"
            }, void 0, false, {
                fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                lineNumber: 23,
                columnNumber: 21
            }, this),
            bg: "bg-blue-10",
            color: "text-blue"
        },
        project: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Kanban$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kanban"], {
                size: 18,
                weight: "light"
            }, void 0, false, {
                fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                lineNumber: 24,
                columnNumber: 22
            }, this),
            bg: "bg-success-tint",
            color: "text-success"
        },
        system: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GearSix$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GearSix"], {
                size: 18,
                weight: "light"
            }, void 0, false, {
                fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                lineNumber: 25,
                columnNumber: 21
            }, this),
            bg: "bg-ice-30",
            color: "text-text-secondary"
        }
    }[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-9 h-9 rounded-full ${config.bg} ${config.color} flex items-center justify-center flex-shrink-0`,
        children: config.icon
    }, void 0, false, {
        fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function NotificationDropdown({ open, onClose }) {
    const { notifications, activeTab, setActiveTab, markAsRead, markAllAsRead, unreadCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$notification$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) onClose();
        };
        if (open) document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, [
        open,
        onClose
    ]);
    const filtered = activeTab === "all" ? notifications : notifications.filter((n)=>{
        if (activeTab === "tickets") return n.type === "ticket";
        if (activeTab === "projects") return n.type === "project";
        return n.type === "system";
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: {
                opacity: 0,
                y: -4
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.15
            },
            className: "absolute top-full right-0 mt-2 w-[400px] max-h-[520px] bg-white rounded-2xl shadow-level-3 border border-ice/40 z-50 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-b border-ice",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-[family-name:var(--font-aptos)] font-semibold text-base text-navy",
                            children: "Notifications"
                        }, void 0, false, {
                            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        unreadCount() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: markAllAsRead,
                            className: "text-xs text-blue hover:underline",
                            children: "Mark all read"
                        }, void 0, false, {
                            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-ice",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.key),
                            className: `flex-1 text-xs font-medium py-2 border-b-2 transition-colors ${activeTab === tab.key ? "text-blue border-blue" : "text-text-secondary border-transparent hover:text-text-primary"}`,
                            children: tab.label
                        }, tab.key, false, {
                            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                            lineNumber: 86,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto custom-scrollbar",
                    children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Bell$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bell"], {
                                size: 48,
                                weight: "light",
                                className: "text-silver-dark mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-text-muted",
                                children: "No notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                        lineNumber: 103,
                        columnNumber: 15
                    }, this) : filtered.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>markAsRead(n.id),
                            className: "relative flex items-start gap-3 w-full px-5 py-3.5 border-b border-ice-30 hover:bg-ice-30 transition-colors text-left",
                            children: [
                                !n.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                    lineNumber: 115,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationIcon, {
                                    type: n.type
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                    lineNumber: 117,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[13px] ${n.read ? "text-text-secondary" : "text-text-primary font-medium"} truncate`,
                                            children: n.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-text-muted line-clamp-2 mt-0.5",
                                            children: n.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                    lineNumber: 118,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-text-muted whitespace-nowrap flex-shrink-0",
                                    children: n.timestamp
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                                    lineNumber: 126,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, n.id, true, {
                            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                            lineNumber: 109,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-ice px-3 py-3 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-[13px] font-medium text-blue hover:underline",
                        children: "View all notifications"
                    }, void 0, false, {
                        fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
            lineNumber: 60,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/overlays/user-dropdown/user-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDropdown",
    ()=>UserDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GearSix$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/GearSix.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Question$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Question.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$SignOut$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/SignOut.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function UserDropdown({ open, onClose }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) onClose();
        };
        if (open) document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, [
        open,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: {
                opacity: 0,
                y: -4
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.15
            },
            className: "absolute top-full right-0 mt-2 w-[220px] bg-white rounded-2xl shadow-level-3 border border-ice/40 z-50 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 border-b border-ice",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-navy-80 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-[family-name:var(--font-aptos)] font-semibold text-sm text-white",
                                    children: "SM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-text-primary truncate",
                                        children: "Sarah Mitchell"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-text-muted truncate",
                                        children: "sarah@acmecorp.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-1",
                    children: [
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$GearSix$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GearSix"], {
                                size: 18,
                                weight: "light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                lineNumber: 52,
                                columnNumber: 23
                            }, this),
                            label: "Account Settings",
                            danger: false
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Question$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Question"], {
                                size: 18,
                                weight: "light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                lineNumber: 53,
                                columnNumber: 23
                            }, this),
                            label: "Help & Support",
                            danger: false
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$SignOut$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignOut"], {
                                size: 18,
                                weight: "light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                lineNumber: 54,
                                columnNumber: 23
                            }, this),
                            label: "Sign Out",
                            danger: true
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex items-center gap-2.5 w-full px-4 h-10 text-left transition-colors hover:bg-ice-30 ${item.danger ? "text-error" : "text-text-primary"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: item.danger ? "text-error" : "text-text-secondary",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[13px]",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
            lineNumber: 26,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/overlays/user-dropdown/user-dropdown.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/stores/toast-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToastStore",
    ()=>useToastStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useToastStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        toasts: [],
        addToast: (toast)=>{
            const id = Math.random().toString(36).substring(2, 9);
            set((state)=>({
                    toasts: [
                        {
                            ...toast,
                            id
                        },
                        ...state.toasts
                    ].slice(0, 3)
                }));
        },
        removeToast: (id)=>set((state)=>({
                    toasts: state.toasts.filter((t)=>t.id !== id)
                }))
    }));
}),
"[project]/src/components/overlays/toast-notification/toast-container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/toast-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$X$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/X.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Warning$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Warning.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Info$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Info.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$XCircle$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/XCircle.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const config = {
    success: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckCircle"], {
            size: 20,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
            lineNumber: 11,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        border: "border-l-success",
        bg: "bg-success-tint",
        color: "text-success"
    },
    warning: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Warning$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Warning"], {
            size: 20,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        border: "border-l-warning",
        bg: "bg-warning-tint",
        color: "text-warning"
    },
    danger: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$XCircle$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XCircle"], {
            size: 20,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
            lineNumber: 23,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        border: "border-l-error",
        bg: "bg-error-tint",
        color: "text-error"
    },
    info: {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Info$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"], {
            size: 20,
            weight: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        border: "border-l-blue",
        bg: "bg-blue-10",
        color: "text-blue"
    }
};
function ToastItem({ toast }) {
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToastStore"])((s)=>s.removeToast);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const duration = toast.duration ?? 5000;
    const c = config[toast.type];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (paused) return;
        const timer = setTimeout(()=>removeToast(toast.id), duration);
        return ()=>clearTimeout(timer);
    }, [
        toast.id,
        duration,
        paused,
        removeToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            x: "100%",
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            opacity: 0,
            y: -8
        },
        transition: {
            duration: 0.25,
            ease: "easeOut"
        },
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        className: `relative w-[360px] bg-white rounded-2xl shadow-level-3 border-l-4 ${c.border} p-3.5 overflow-hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-8 h-8 rounded-full ${c.bg} ${c.color} flex items-center justify-center flex-shrink-0`,
                        children: c.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] font-semibold text-text-primary",
                                children: toast.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            toast.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-text-secondary mt-0.5 line-clamp-2",
                                children: toast.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>removeToast(toast.id),
                        className: "text-text-muted hover:text-text-secondary flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$X$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X"], {
                            size: 16,
                            weight: "light"
                        }, void 0, false, {
                            fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `absolute bottom-0 left-0 h-1 ${c.color.replace("text-", "bg-")}`,
                initial: {
                    width: "100%"
                },
                animate: {
                    width: paused ? undefined : "0%"
                },
                transition: {
                    duration: duration / 1000,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function ToastContainer() {
    const toasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToastStore"])((s)=>s.toasts);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-6 right-6 z-[55] flex flex-col gap-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "popLayout",
            children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastItem, {
                    toast: toast
                }, toast.id, false, {
                    fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/overlays/toast-notification/toast-container.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/portal-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalLayout",
    ()=>PortalLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$top$2d$bar$2f$top$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/top-bar/top-bar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$bottom$2d$bar$2f$mobile$2d$bottom$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/mobile-bottom-bar/mobile-bottom-bar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$command$2d$palette$2f$command$2d$palette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/overlays/command-palette/command-palette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$notification$2d$dropdown$2f$notification$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/overlays/notification-dropdown/notification-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$user$2d$dropdown$2f$user$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/overlays/user-dropdown/user-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$toast$2d$notification$2f$toast$2d$container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/overlays/toast-notification/toast-container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$sidebar$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/sidebar-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function PortalLayout({ children }) {
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifOpen, setNotifOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userOpen, setUserOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isExpanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$sidebar$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    // Global ⌘K handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setSearchOpen((prev)=>!prev);
            }
            if (e.key === "Escape") {
                setSearchOpen(false);
                setNotifOpen(false);
                setUserOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, []);
    const handleNotifClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setNotifOpen((p)=>!p);
        setUserOpen(false);
    }, []);
    const handleUserClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUserOpen((p)=>!p);
        setNotifOpen(false);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F5F6F8]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/portal-layout.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? "lg:ml-[260px]" : "lg:ml-[72px]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$top$2d$bar$2f$top$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TopBar"], {
                                onSearchClick: ()=>setSearchOpen(true),
                                onNotificationClick: handleNotifClick,
                                onUserClick: handleUserClick
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/portal-layout.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-4 md:right-6 lg:right-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$notification$2d$dropdown$2f$notification$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationDropdown"], {
                                        open: notifOpen,
                                        onClose: ()=>setNotifOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/portal-layout.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/portal-layout.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/portal-layout.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-4 md:right-6 lg:right-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$user$2d$dropdown$2f$user$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserDropdown"], {
                                        open: userOpen,
                                        onClose: ()=>setUserOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/portal-layout.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/portal-layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/portal-layout.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/portal-layout.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "px-4 md:px-6 lg:px-10 py-8 max-w-[1200px] mx-auto pb-24 md:pb-8 animate-page-in",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/portal-layout.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/portal-layout.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$bottom$2d$bar$2f$mobile$2d$bottom$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileBottomBar"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/portal-layout.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$command$2d$palette$2f$command$2d$palette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandPalette"], {
                open: searchOpen,
                onClose: ()=>setSearchOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/portal-layout.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overlays$2f$toast$2d$notification$2f$toast$2d$container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/portal-layout.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/portal-layout.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1aaa5c23._.js.map