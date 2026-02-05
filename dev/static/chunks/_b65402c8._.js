(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/carousel-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselCard",
    ()=>CarouselCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
// Role color mappings
const roleColors = {
    forge: {
        primary: "#FF6B35",
        secondary: "#FF8C42",
        accent: "#FFA559",
        gradient: "from-[#FF6B35] to-[#FF8C42]"
    },
    compass: {
        primary: "#4ECDC4",
        secondary: "#44A3AA",
        accent: "#95E1D3",
        gradient: "from-[#4ECDC4] to-[#44A3AA]"
    },
    sentinel: {
        primary: "#95E1D3",
        secondary: "#78C4B8",
        accent: "#B8F3E0",
        gradient: "from-[#95E1D3] to-[#78C4B8]"
    },
    catalyst: {
        primary: "#F38181",
        secondary: "#E85A5A",
        accent: "#F8B195",
        gradient: "from-[#F38181] to-[#E85A5A]"
    },
    anchor: {
        primary: "#AA96DA",
        secondary: "#8B7AB8",
        accent: "#C8B6DB",
        gradient: "from-[#AA96DA] to-[#8B7AB8]"
    },
    parasite: {
        primary: "#FCBAD3",
        secondary: "#F8A5C2",
        accent: "#FFD6E0",
        gradient: "from-[#FCBAD3] to-[#F8A5C2]"
    },
    common: {
        primary: "#A8DADC",
        secondary: "#457B9D",
        accent: "#F1FAEE",
        gradient: "from-[#A8DADC] to-[#457B9D]"
    }
};
// Role image mappings
const roleImages = {
    forge: "/images/Forge.png",
    compass: "/images/Compass.png",
    sentinel: "/images/Sentinel.png",
    catalyst: "/images/Catalyst.png",
    anchor: "/images/Anchor.png",
    parasite: "/images/Parasite.png",
    common: "/images/Common.png"
};
function CarouselCard({ item, index, isSettling, isInFront, width, height, translateZ, quantity, role = "common" }) {
    const canFlip = isSettling && isInFront;
    const colors = roleColors[role];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "carousel-card group absolute",
        style: {
            width: `${width}px`,
            height: `${height}px`,
            transformStyle: "preserve-3d",
            transform: `rotateY(${360 / quantity * index}deg) translateZ(${translateZ}px)`,
            backfaceVisibility: "visible"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("card-content relative h-full w-full rounded-md border border-white/20 transition-all duration-300", canFlip && "group-hover:[transform:rotateY(180deg)] group-hover:shadow-[0px_0px_20px_1px_#ffbb763f] group-hover:border-white/45"),
            style: {
                transformStyle: "preserve-3d"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardFrontFace, {
                    item: item,
                    index: index,
                    colors: colors,
                    roleImage: roleImages[role]
                }, void 0, false, {
                    fileName: "[project]/components/carousel-card.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBackSimple, {
                    canFlip: canFlip,
                    colors: colors
                }, void 0, false, {
                    fileName: "[project]/components/carousel-card.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBackDetailed, {
                    item: item,
                    canFlip: canFlip,
                    colors: colors
                }, void 0, false, {
                    fileName: "[project]/components/carousel-card.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/carousel-card.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/carousel-card.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = CarouselCard;
// Front face component - shows the image and basic info
function CardFrontFace({ item, index, colors, roleImage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-front absolute h-full w-full overflow-hidden rounded-md",
        style: {
            backgroundColor: colors.primary,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: roleImage,
                alt: item.title || `Carousel image ${index + 1}`,
                className: "absolute h-full w-full object-cover object-center",
                crossOrigin: "anonymous"
            }, void 0, false, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex h-full w-full flex-col justify-between p-2.5",
                style: {
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                },
                children: [
                    item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-fit rounded-[10px] bg-black/30 px-2.5 py-0.5 text-xs text-white backdrop-blur-sm",
                        style: {
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                        },
                        children: item.badge
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-md bg-black/60 p-2.5 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] backdrop-blur-sm",
                        style: {
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[11px] text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "w-1/2",
                                        children: item.title || "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/components/carousel-card.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "w-1/2 text-right",
                                        children: item.subtitle || "Subtitle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/carousel-card.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            item.footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[8px] text-white/50",
                                children: item.footer
                            }, void 0, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/carousel-card.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c1 = CardFrontFace;
// Simple back face - animated gradient with floating circles
function CardBackSimple({ canFlip, colors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("card-back absolute flex h-full w-full items-center justify-center overflow-hidden rounded-md", canFlip && "group-hover:opacity-0"),
        style: {
            backgroundColor: colors.primary,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transition: "opacity 0.3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute h-[160%] w-40 animate-[border-spin_5s_linear_infinite] bg-gradient-to-r ${colors.gradient}`
            }, void 0, false, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex h-[99%] w-[99%] flex-col items-center justify-center gap-6 rounded-md",
                style: {
                    backgroundColor: colors.primary
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-2 top-4 h-[90px] w-[90px] animate-[floating_2.6s_linear_infinite] rounded-full blur-[15px]",
                        style: {
                            backgroundColor: colors.accent
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-[50px] top-0 h-[150px] w-[150px] animate-[floating_2.6s_linear_infinite_-800ms] rounded-full blur-[15px]",
                        style: {
                            backgroundColor: colors.secondary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-[160px] top-[-80px] h-[30px] w-[30px] animate-[floating_2.6s_linear_infinite_-1800ms] rounded-full blur-[15px]",
                        style: {
                            backgroundColor: colors.primary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/carousel-card.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_c2 = CardBackSimple;
// Detailed back face - shows content when front card flips
function CardBackDetailed({ item, canFlip, colors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("card-back-detail absolute flex h-full w-full items-center justify-center overflow-hidden rounded-md opacity-0", canFlip && "group-hover:opacity-100"),
        style: {
            backgroundColor: colors.primary,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transition: "opacity 0.3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute h-[160%] w-40 animate-[border-spin_5s_linear_infinite] bg-gradient-to-r ${colors.gradient}`
            }, void 0, false, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex h-[99%] w-[99%] flex-col justify-between overflow-hidden rounded-md p-4",
                style: {
                    backgroundColor: colors.primary
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-2 top-4 h-[90px] w-[90px] animate-[floating_2.6s_linear_infinite] rounded-full opacity-30 blur-[15px]",
                        style: {
                            backgroundColor: colors.accent
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute right-0 top-0 h-[150px] w-[150px] animate-[floating_2.6s_linear_infinite_-800ms] rounded-full opacity-30 blur-[15px]",
                        style: {
                            backgroundColor: colors.secondary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-white",
                                children: item.backContent?.heading || item.title || "Details"
                            }, void 0, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] leading-relaxed text-white/70",
                                children: item.backContent?.description || "Hover to explore more about this item."
                            }, void 0, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            item.backContent?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex gap-3",
                                children: item.backContent.stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold",
                                                style: {
                                                    color: colors.accent
                                                },
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/carousel-card.tsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] text-white/50",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/carousel-card.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/carousel-card.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    item.backContent?.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-wrap gap-1",
                        children: item.backContent.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-white/10 px-2 py-0.5 text-[8px] text-white/70",
                                children: tag
                            }, i, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `w-full rounded-md bg-gradient-to-r ${colors.gradient} py-1.5 text-[10px] font-medium text-white transition-opacity hover:opacity-90`,
                            children: item.backContent?.ctaText || "Learn More"
                        }, void 0, false, {
                            fileName: "[project]/components/carousel-card.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/carousel-card.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_c3 = CardBackDetailed;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CarouselCard");
__turbopack_context__.k.register(_c1, "CardFrontFace");
__turbopack_context__.k.register(_c2, "CardBackSimple");
__turbopack_context__.k.register(_c3, "CardBackDetailed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rotating-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotatingCarousel",
    ()=>RotatingCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carousel$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/carousel-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RotatingCarousel({ items, width = 190, height = 254, sensitivity = 0.15, className }) {
    _s();
    // Shuffle items on mount
    const [shuffledItems, setShuffledItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingCarousel.useEffect": ()=>{
            const shuffled = [
                ...items
            ].sort({
                "RotatingCarousel.useEffect.shuffled": ()=>Math.random() - 0.5
            }["RotatingCarousel.useEffect.shuffled"]);
            setShuffledItems(shuffled);
        }
    }["RotatingCarousel.useEffect"], [
        items
    ]);
    const quantity = shuffledItems.length;
    const translateZ = width + height;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use refs for animation state to avoid re-renders
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track if carousel has stopped spinning
    const [isStopped, setIsStopped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSettling, setIsSettling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentAngle, setCurrentAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const lastScrollTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasSnapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Calculate the angle per card
    const anglePerCard = 360 / quantity;
    // Check if a card is facing the front (within threshold)
    const isCardInFront = (cardIndex)=>{
        const cardAngle = 360 / quantity * cardIndex;
        let normalizedRotation = currentAngle % 360;
        if (normalizedRotation < 0) normalizedRotation += 360;
        let effectiveAngle = (cardAngle + normalizedRotation) % 360;
        if (effectiveAngle < 0) effectiveAngle += 360;
        return effectiveAngle < 45 || effectiveAngle > 315;
    };
    // Function to snap to nearest card
    const snapToNearestCard = ()=>{
        let normalizedRotation = currentRotation.current % 360;
        if (normalizedRotation < 0) normalizedRotation += 360;
        const closestCardIndex = Math.round(normalizedRotation / anglePerCard);
        const snappedAngle = closestCardIndex * anglePerCard;
        const fullTurns = Math.floor(currentRotation.current / 360);
        targetRotation.current = fullTurns * 360 + snappedAngle;
        if (Math.abs(targetRotation.current - currentRotation.current) > 180) {
            if (targetRotation.current > currentRotation.current) {
                targetRotation.current -= 360;
            } else {
                targetRotation.current += 360;
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingCarousel.useEffect": ()=>{
            const lerp = {
                "RotatingCarousel.useEffect.lerp": (start, end, factor)=>{
                    return start + (end - start) * factor;
                }
            }["RotatingCarousel.useEffect.lerp"];
            const animate = {
                "RotatingCarousel.useEffect.animate": ()=>{
                    const prevRotation = currentRotation.current;
                    currentRotation.current = lerp(currentRotation.current, targetRotation.current, 0.08);
                    const rotationDelta = Math.abs(currentRotation.current - prevRotation);
                    const isNearlyStationary = rotationDelta < 0.05;
                    const timeSinceScroll = Date.now() - lastScrollTime.current;
                    if (isNearlyStationary && timeSinceScroll > 200 && !hasSnapped.current) {
                        hasSnapped.current = true;
                        snapToNearestCard();
                        setIsSettling(true);
                    }
                    const distanceToTarget = Math.abs(currentRotation.current - targetRotation.current);
                    if (distanceToTarget < 0.1 && timeSinceScroll > 300) {
                        setIsStopped(true);
                    }
                    if (distanceToTarget < 15 && hasSnapped.current) {
                        setIsSettling(true);
                    }
                    setCurrentAngle(currentRotation.current);
                    if (carouselRef.current) {
                        carouselRef.current.style.transform = `perspective(1000px) rotateX(-3deg) rotateY(${currentRotation.current}deg)`;
                    }
                    animationFrame.current = requestAnimationFrame(animate);
                }
            }["RotatingCarousel.useEffect.animate"];
            animationFrame.current = requestAnimationFrame(animate);
            return ({
                "RotatingCarousel.useEffect": ()=>{
                    if (animationFrame.current) {
                        cancelAnimationFrame(animationFrame.current);
                    }
                }
            })["RotatingCarousel.useEffect"];
        }
    }["RotatingCarousel.useEffect"], [
        anglePerCard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingCarousel.useEffect": ()=>{
            const handleWheel = {
                "RotatingCarousel.useEffect.handleWheel": (e)=>{
                    e.preventDefault();
                    setIsStopped(false);
                    setIsSettling(false);
                    lastScrollTime.current = Date.now();
                    hasSnapped.current = false;
                    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                    targetRotation.current += delta * sensitivity;
                }
            }["RotatingCarousel.useEffect.handleWheel"];
            const container = containerRef.current;
            if (container) {
                container.addEventListener("wheel", handleWheel, {
                    passive: false
                });
            }
            return ({
                "RotatingCarousel.useEffect": ()=>{
                    if (container) {
                        container.removeEventListener("wheel", handleWheel);
                    }
                }
            })["RotatingCarousel.useEffect"];
        }
    }["RotatingCarousel.useEffect"], [
        sensitivity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: carouselRef,
            className: "absolute z-10 will-change-transform",
            style: {
                "--translateZ": `${translateZ}px`,
                width: `${width}px`,
                height: `${height}px`,
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(-3deg) rotateY(0deg)`
            },
            children: shuffledItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carousel$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselCard"], {
                    item: item,
                    index: index,
                    isSettling: isSettling,
                    isInFront: isCardInFront(index),
                    width: width,
                    height: height,
                    translateZ: translateZ,
                    quantity: quantity,
                    role: item.role
                }, `${item.title}-${index}`, false, {
                    fileName: "[project]/components/rotating-carousel.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/rotating-carousel.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/rotating-carousel.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_s(RotatingCarousel, "5/SQ07nK/Ty7gmYljeI0cfs9UYc=");
_c = RotatingCarousel;
var _c;
__turbopack_context__.k.register(_c, "RotatingCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b65402c8._.js.map