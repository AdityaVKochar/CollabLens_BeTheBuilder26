module.exports = [
"[project]/components/elegant-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ElegantButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
function ElegantButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/dashboard",
        className: "block w-full h-full flex items-center justify-center cursor-pointer transition-all duration-400 outline-none overflow-hidden font-bold relative",
        style: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 'clamp(18px, 3vw, 28px)',
            padding: '15px 30px',
            border: '2px solid #56A13E',
            backgroundColor: 'rgba(230, 250, 160, 0.9)',
            color: '#56A13E',
            borderRadius: '30px',
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
            fontWeight: 'bold'
        },
        onMouseEnter: (e)=>{
            const target = e.currentTarget;
            target.style.borderColor = '#2c5a1d';
            target.style.backgroundColor = 'rgba(210, 240, 140, 0.95)';
            const glow = target.querySelector('span:first-child');
            if (glow) {
                glow.style.transform = 'scale(4)';
            }
        },
        onMouseLeave: (e)=>{
            const target = e.currentTarget;
            target.style.borderColor = '#56A13E';
            target.style.backgroundColor = 'rgba(230, 250, 160, 0.9)';
            const glow = target.querySelector('span:first-child');
            if (glow) {
                glow.style.transform = 'scale(0)';
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(86, 161, 62, 0.25) 0%, rgba(86, 161, 62, 0) 70%)',
                    transform: 'scale(0)',
                    transition: 'transform 0.5s ease'
                }
            }, void 0, false, {
                fileName: "[project]/components/elegant-button.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: "Enter Dashboard"
            }, void 0, false, {
                fileName: "[project]/components/elegant-button.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/elegant-button.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_elegant-button_tsx_2ddb797c._.js.map