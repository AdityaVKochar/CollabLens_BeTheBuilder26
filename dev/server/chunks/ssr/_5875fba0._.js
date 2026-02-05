module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/carousel-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselCard",
    ()=>CarouselCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "carousel-card group absolute",
        style: {
            width: `${width}px`,
            height: `${height}px`,
            transformStyle: "preserve-3d",
            transform: `rotateY(${360 / quantity * index}deg) translateZ(${translateZ}px)`,
            backfaceVisibility: "visible"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("card-content relative h-full w-full rounded-md border border-white/20 transition-all duration-300", canFlip && "group-hover:[transform:rotateY(180deg)] group-hover:shadow-[0px_0px_20px_1px_#ffbb763f] group-hover:border-white/45"),
            style: {
                transformStyle: "preserve-3d"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardFrontFace, {
                    item: item,
                    index: index,
                    colors: colors,
                    roleImage: roleImages[role]
                }, void 0, false, {
                    fileName: "[project]/components/carousel-card.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBackSimple, {
                    canFlip: canFlip,
                    colors: colors
                }, void 0, false, {
                    fileName: "[project]/components/carousel-card.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBackDetailed, {
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
// Front face component - shows the image and basic info
function CardFrontFace({ item, index, colors, roleImage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-front absolute h-full w-full overflow-hidden rounded-md",
        style: {
            backgroundColor: colors.primary,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: roleImage,
                alt: item.title || `Carousel image ${index + 1}`,
                className: "absolute h-full w-full object-cover object-center",
                crossOrigin: "anonymous"
            }, void 0, false, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex h-full w-full flex-col justify-between p-2.5",
                style: {
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                },
                children: [
                    item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-md bg-black/60 p-2.5 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] backdrop-blur-sm",
                        style: {
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[11px] text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "w-1/2",
                                        children: item.title || "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/components/carousel-card.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            item.footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
// Simple back face - animated gradient with floating circles
function CardBackSimple({ canFlip, colors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("card-back absolute flex h-full w-full items-center justify-center overflow-hidden rounded-md", canFlip && "group-hover:opacity-0"),
        style: {
            backgroundColor: colors.primary,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transition: "opacity 0.3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute h-[160%] w-40 animate-[border-spin_5s_linear_infinite] bg-gradient-to-r ${colors.gradient}`
            }, void 0, false, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex h-[99%] w-[99%] flex-col items-center justify-center gap-6 rounded-md",
                style: {
                    backgroundColor: colors.primary
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-2 top-4 h-[90px] w-[90px] animate-[floating_2.6s_linear_infinite] rounded-full blur-[15px]",
                        style: {
                            backgroundColor: colors.accent
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-[50px] top-0 h-[150px] w-[150px] animate-[floating_2.6s_linear_infinite_-800ms] rounded-full blur-[15px]",
                        style: {
                            backgroundColor: colors.secondary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
// Detailed back face - shows content when front card flips
function CardBackDetailed({ item, canFlip, colors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("card-back-detail absolute flex h-full w-full items-center justify-center overflow-hidden rounded-md opacity-0", canFlip && "group-hover:opacity-100"),
        style: {
            backgroundColor: colors.primary,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transition: "opacity 0.3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute h-[160%] w-40 animate-[border-spin_5s_linear_infinite] bg-gradient-to-r ${colors.gradient}`
            }, void 0, false, {
                fileName: "[project]/components/carousel-card.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex h-[99%] w-[99%] flex-col justify-between overflow-hidden rounded-md p-4",
                style: {
                    backgroundColor: colors.primary
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute left-2 top-4 h-[90px] w-[90px] animate-[floating_2.6s_linear_infinite] rounded-full opacity-30 blur-[15px]",
                        style: {
                            backgroundColor: colors.accent
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "circle absolute right-0 top-0 h-[150px] w-[150px] animate-[floating_2.6s_linear_infinite_-800ms] rounded-full opacity-30 blur-[15px]",
                        style: {
                            backgroundColor: colors.secondary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/carousel-card.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-white",
                                children: item.backContent?.heading || item.title || "Details"
                            }, void 0, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] leading-relaxed text-white/70",
                                children: item.backContent?.description || "Hover to explore more about this item."
                            }, void 0, false, {
                                fileName: "[project]/components/carousel-card.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            item.backContent?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex gap-3",
                                children: item.backContent.stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    item.backContent?.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-wrap gap-1",
                        children: item.backContent.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                ;
                            },
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
}),
"[project]/components/rotating-carousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotatingCarousel",
    ()=>RotatingCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carousel$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/carousel-card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function RotatingCarousel({ items, width = 190, height = 254, sensitivity = 0.15, className }) {
    // Shuffle items on mount
    const [shuffledItems, setShuffledItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(items);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (items.length > 0) {
            const shuffled = [
                ...items
            ].sort(()=>Math.random() - 0.5);
            setShuffledItems(shuffled);
        }
    }, [
        items
    ]);
    const quantity = shuffledItems.length || 1;
    const translateZ = width + height;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use refs for animation state to avoid re-renders
    const targetRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentRotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track if carousel has stopped spinning
    const [isStopped, setIsStopped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSettling, setIsSettling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentAngle, setCurrentAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const lastScrollTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasSnapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lerp = (start, end, factor)=>{
            return start + (end - start) * factor;
        };
        const animate = ()=>{
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
        };
        animationFrame.current = requestAnimationFrame(animate);
        return ()=>{
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [
        anglePerCard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleWheel = (e)=>{
            e.preventDefault();
            setIsStopped(false);
            setIsSettling(false);
            lastScrollTime.current = Date.now();
            hasSnapped.current = false;
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            targetRotation.current += delta * sensitivity;
        };
        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel, {
                passive: false
            });
        }
        return ()=>{
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
    }, [
        sensitivity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: carouselRef,
            className: "absolute z-10 will-change-transform",
            style: {
                "--translateZ": `${translateZ}px`,
                width: `${width}px`,
                height: `${height}px`,
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(-3deg) rotateY(0deg)`
            },
            children: shuffledItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carousel$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselCard"], {
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
                    lineNumber: 188,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/rotating-carousel.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/rotating-carousel.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/useCollabLensData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollabLensData",
    ()=>useCollabLensData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useCollabLensData = ()=>{
    const [figures, setFigures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timeline, setTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [repository, setRepository] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRepoData = async (repoUrl)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/repo-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    repoUrl
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to fetch repository data");
            }
            setFigures(data.figures || []);
            setTimeline(data.timeline || []);
            setRepository(data.repository);
            if (data.figures && data.figures.length > 0) {
                assignRoles(data.figures, data.timeline || []);
            }
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally{
            setLoading(false);
        }
    };
    /* ---------- ROLE LOGIC ---------- */ const assignRoles = (figures, timeline)=>{
        if (!figures || figures.length === 0) {
            setRoles({});
            return;
        }
        const used = new Set();
        const newRoles = {};
        // Helper to get next available figure for a role
        const getAvailable = ()=>figures.filter((u)=>!used.has(u.username));
        // Forge: highest additions + commits
        const forgeCandidate = [
            ...figures
        ].sort((a, b)=>b.additions + b.totalCommits - (a.additions + a.totalCommits))[0];
        if (forgeCandidate) {
            newRoles.forge = forgeCandidate;
            used.add(forgeCandidate.username);
        }
        // Compass: most active weeks
        const compassCandidate = getAvailable().sort((a, b)=>b.activeWeeks - a.activeWeeks)[0];
        if (compassCandidate) {
            newRoles.compass = compassCandidate;
            used.add(compassCandidate.username);
        }
        // Sentinel: highest deletion ratio
        const sentinelCandidate = getAvailable().sort((a, b)=>b.deletions / (b.additions || 1) - a.deletions / (a.additions || 1))[0];
        if (sentinelCandidate) {
            newRoles.sentinel = sentinelCandidate;
            used.add(sentinelCandidate.username);
        }
        // Catalyst: burst score (most commits in timeline)
        const burstScore = (username)=>timeline.filter((c)=>c.username === username).length;
        const catalystCandidate = getAvailable().sort((a, b)=>burstScore(b.username) - burstScore(a.username))[0];
        if (catalystCandidate) {
            newRoles.catalyst = catalystCandidate;
            used.add(catalystCandidate.username);
        }
        // Anchor: longest contribution span
        const anchorScore = (username)=>{
            const commits = timeline.filter((c)=>c.username === username).map((c)=>new Date(c.date).getTime()).sort((a, b)=>a - b);
            if (!commits.length) return 0;
            return commits[commits.length - 1] - commits[0];
        };
        const anchorCandidate = getAvailable().sort((a, b)=>anchorScore(b.username) - anchorScore(a.username))[0];
        if (anchorCandidate) {
            newRoles.anchor = anchorCandidate;
            used.add(anchorCandidate.username);
        }
        // Parasite: lowest overall contribution
        const parasiteCandidate = getAvailable().sort((a, b)=>a.totalCommits + a.activeWeeks + a.additions - (b.totalCommits + b.activeWeeks + b.additions))[0];
        if (parasiteCandidate) {
            newRoles.parasite = parasiteCandidate;
            used.add(parasiteCandidate.username);
        }
        // Common: remaining contributors
        newRoles.common = figures.filter((u)=>!used.has(u.username));
        setRoles(newRoles);
    };
    return {
        fetchRepoData,
        figures,
        timeline,
        roles,
        loading,
        error,
        repository
    };
};
}),
"[project]/data/carousel-items.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "carouselItems",
    ()=>carouselItems
]);
const carouselItems = [
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=300&fit=crop",
        title: "Mountain Peak",
        subtitle: "Nature",
        badge: "Featured",
        footer: "Discover heights",
        role: "forge",
        backContent: {
            heading: "Mountain Peak Expedition",
            description: "Experience breathtaking views from summit. Perfect for experienced hikers seeking adventure.",
            stats: [
                {
                    label: "Altitude",
                    value: "4,200m"
                },
                {
                    label: "Duration",
                    value: "3 Days"
                }
            ],
            tags: [
                "Hiking",
                "Adventure",
                "Photography"
            ],
            ctaText: "Book Expedition"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=300&fit=crop",
        title: "Forest Trail",
        subtitle: "Adventure",
        badge: "Popular",
        footer: "Into the wild",
        role: "compass",
        backContent: {
            heading: "Forest Trail Journey",
            description: "Immerse yourself in ancient woodlands with guided nature walks.",
            stats: [
                {
                    label: "Distance",
                    value: "12km"
                },
                {
                    label: "Difficulty",
                    value: "Easy"
                }
            ],
            tags: [
                "Nature",
                "Walking",
                "Wildlife"
            ],
            ctaText: "Explore Trail"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=300&fit=crop",
        title: "Woodland",
        subtitle: "Calm",
        badge: "New",
        footer: "Find your peace",
        role: "sentinel",
        backContent: {
            heading: "Woodland Retreat",
            description: "A peaceful escape into nature. Perfect for meditation and relaxation.",
            stats: [
                {
                    label: "Area",
                    value: "500 acres"
                },
                {
                    label: "Rating",
                    value: "4.9"
                }
            ],
            tags: [
                "Relaxation",
                "Meditation",
                "Quiet"
            ],
            ctaText: "Reserve Spot"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200&h=300&fit=crop",
        title: "Waterfall",
        subtitle: "Wonder",
        badge: "Trending",
        footer: "Nature's power",
        role: "catalyst",
        backContent: {
            heading: "Majestic Waterfall",
            description: "Witness raw power of nature at this stunning 200ft cascade.",
            stats: [
                {
                    label: "Height",
                    value: "200ft"
                },
                {
                    label: "Best Time",
                    value: "Spring"
                }
            ],
            tags: [
                "Scenic",
                "Photography",
                "Nature"
            ],
            ctaText: "Plan Visit"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=300&fit=crop",
        title: "Lake View",
        subtitle: "Serenity",
        badge: "Editor's Pick",
        footer: "Peaceful waters",
        role: "anchor",
        backContent: {
            heading: "Serene Lake View",
            description: "Crystal clear waters surrounded by mountains. Ideal for kayaking.",
            stats: [
                {
                    label: "Depth",
                    value: "45m"
                },
                {
                    label: "Temp",
                    value: "18°C"
                }
            ],
            tags: [
                "Water Sports",
                "Fishing",
                "Camping"
            ],
            ctaText: "Book Stay"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=300&fit=crop",
        title: "Misty Hills",
        subtitle: "Mystery",
        badge: "Featured",
        footer: "Beyond the fog",
        role: "parasite",
        backContent: {
            heading: "Misty Hills Trek",
            description: "Explore mysterious landscape shrouded in morning mist.",
            stats: [
                {
                    label: "Elevation",
                    value: "1,800m"
                },
                {
                    label: "Trail",
                    value: "8km"
                }
            ],
            tags: [
                "Mystery",
                "Trekking",
                "Sunrise"
            ],
            ctaText: "Join Trek"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200&h=300&fit=crop",
        title: "Green Valley",
        subtitle: "Fresh",
        badge: "New",
        footer: "Breathe deep",
        role: "common",
        backContent: {
            heading: "Green Valley Paradise",
            description: "Lush meadows and fresh mountain air await your arrival.",
            stats: [
                {
                    label: "Size",
                    value: "2,000 acres"
                },
                {
                    label: "Climate",
                    value: "Mild"
                }
            ],
            tags: [
                "Picnic",
                "Family",
                "Nature"
            ],
            ctaText: "Discover More"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=300&fit=crop",
        title: "Golden Fields",
        subtitle: "Warmth",
        badge: "Popular",
        footer: "Summer dreams",
        role: "common",
        backContent: {
            heading: "Golden Fields Farm",
            description: "Experience rural life among golden wheat fields at sunset.",
            stats: [
                {
                    label: "Season",
                    value: "Summer"
                },
                {
                    label: "Tours",
                    value: "Daily"
                }
            ],
            tags: [
                "Farm",
                "Sunset",
                "Rural"
            ],
            ctaText: "Book Tour"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop",
        title: "Desert Dunes",
        subtitle: "Adventure",
        badge: "New",
        footer: "Endless sands",
        role: "common",
        backContent: {
            heading: "Desert Dunes Safari",
            description: "Experience the majesty of endless sand dunes under starlit skies.",
            stats: [
                {
                    label: "Area",
                    value: "50km²"
                },
                {
                    label: "Best Season",
                    value: "Winter"
                }
            ],
            tags: [
                "Desert",
                "Adventure",
                "Photography"
            ],
            ctaText: "Book Safari"
        }
    },
    {
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=200&h=300&fit=crop",
        title: "Coastal Cliffs",
        subtitle: "Dramatic",
        badge: "Featured",
        footer: "Ocean's edge",
        role: "common",
        backContent: {
            heading: "Coastal Cliffs Adventure",
            description: "Dramatic cliffs meeting the ocean. Perfect for coastal photography and hiking.",
            stats: [
                {
                    label: "Height",
                    value: "300m"
                },
                {
                    label: "Trail Length",
                    value: "15km"
                }
            ],
            tags: [
                "Coastal",
                "Hiking",
                "Photography"
            ],
            ctaText: "Explore Cliffs"
        }
    }
];
}),
"[project]/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rotating$2d$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rotating-carousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCollabLensData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/useCollabLensData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$carousel$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/carousel-items.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$commit$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCommit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js [app-ssr] (ecmascript) <export default as GitCommit>");
"use client";
;
;
;
;
;
;
// Role descriptions for each contributor type
const roleDescriptions = {
    forge: {
        heading: "The Forge",
        description: "The primary builder who adds the most code and commits. They drive the project forward with consistent contributions."
    },
    compass: {
        heading: "The Compass",
        description: "Consistently active over time. They provide stability and direction to the project through steady engagement."
    },
    sentinel: {
        heading: "The Sentinel",
        description: "Focused on code quality and cleanup. They remove more code than they add, refining and optimizing the codebase."
    },
    catalyst: {
        heading: "The Catalyst",
        description: "Makes bursts of high-activity contributions. They spark momentum with concentrated periods of work."
    },
    anchor: {
        heading: "The Anchor",
        description: "Has the longest span of contributions. They provide long-term stability and institutional knowledge."
    },
    parasite: {
        heading: "The Parasite",
        description: "Minimal contribution relative to others. May need more engagement or support to contribute effectively."
    },
    common: {
        heading: "Contributor",
        description: "A valuable team member contributing to the project's success."
    }
};
function transformFiguresToCarouselItems(roles, figures) {
    const items = [];
    const roleOrder = [
        {
            key: "forge",
            role: "forge"
        },
        {
            key: "compass",
            role: "compass"
        },
        {
            key: "sentinel",
            role: "sentinel"
        },
        {
            key: "catalyst",
            role: "catalyst"
        },
        {
            key: "anchor",
            role: "anchor"
        },
        {
            key: "parasite",
            role: "parasite"
        }
    ];
    roleOrder.forEach(({ key, role })=>{
        const figure = roles[key];
        if (figure && role) {
            const roleInfo = roleDescriptions[role];
            if (!roleInfo) return; // Skip if role description not found
            items.push({
                image: `https://github.com/${figure.username}.png`,
                title: figure.username,
                subtitle: roleInfo.heading,
                badge: role.charAt(0).toUpperCase() + role.slice(1),
                footer: `${figure.totalCommits} commits`,
                role: role,
                backContent: {
                    heading: roleInfo.heading,
                    description: roleInfo.description,
                    stats: [
                        {
                            label: "Commits",
                            value: figure.totalCommits.toString()
                        },
                        {
                            label: "Active Weeks",
                            value: figure.activeWeeks.toString()
                        },
                        {
                            label: "Additions",
                            value: `+${figure.additions.toLocaleString()}`
                        },
                        {
                            label: "Deletions",
                            value: `-${figure.deletions.toLocaleString()}`
                        }
                    ],
                    tags: [
                        "GitHub",
                        "Contributor"
                    ],
                    ctaText: `View @${figure.username}`
                }
            });
        }
    });
    // Add common contributors
    if (roles.common && roles.common.length > 0) {
        roles.common.forEach((figure)=>{
            const roleInfo = roleDescriptions.common;
            items.push({
                image: `https://github.com/${figure.username}.png`,
                title: figure.username,
                subtitle: roleInfo.heading,
                badge: "Contributor",
                footer: `${figure.totalCommits} commits`,
                role: "common",
                backContent: {
                    heading: roleInfo.heading,
                    description: roleInfo.description,
                    stats: [
                        {
                            label: "Commits",
                            value: figure.totalCommits.toString()
                        },
                        {
                            label: "Active Weeks",
                            value: figure.activeWeeks.toString()
                        },
                        {
                            label: "Additions",
                            value: `+${figure.additions.toLocaleString()}`
                        },
                        {
                            label: "Deletions",
                            value: `-${figure.deletions.toLocaleString()}`
                        }
                    ],
                    tags: [
                        "GitHub",
                        "Contributor"
                    ],
                    ctaText: `View @${figure.username}`
                }
            });
        });
    }
    return items;
}
function DashboardPage() {
    const [repoUrl, setRepoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [hasSearched, setHasSearched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { fetchRepoData, figures, timeline, roles, loading, error, repository } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useCollabLensData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCollabLensData"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!repoUrl.trim()) return;
        setHasSearched(true);
        await fetchRepoData(repoUrl);
    };
    const carouselData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (figures.length > 0 && Object.keys(roles).length > 0) {
            // Store timeline and figures data in localStorage for contributor pages
            if (timeline.length > 0) {
                localStorage.setItem("allCommits", JSON.stringify(timeline));
                // Store individual stats for each contributor
                figures.forEach((figure)=>{
                    const role = Object.entries(roles).find(([key, value])=>{
                        if (Array.isArray(value)) {
                            return value.some((f)=>f.username === figure.username);
                        }
                        return value?.username === figure.username;
                    });
                    localStorage.setItem(`stats_${figure.username}`, JSON.stringify({
                        totalCommits: figure.totalCommits,
                        additions: figure.additions,
                        deletions: figure.deletions,
                        activeWeeks: figure.activeWeeks,
                        role: role ? role[0].charAt(0).toUpperCase() + role[0].slice(1) : "Contributor"
                    }));
                });
            }
            return transformFiguresToCarouselItems(roles, figures);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$carousel$2d$items$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselItems"] // Default placeholder data
        ;
    }, [
        figures,
        roles,
        timeline
    ]);
    // Show input form if no data has been fetched yet
    if (!hasSearched) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-8 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
                                children: "CollabLens"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Analyze your GitHub repository and discover contributor roles"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "w-full max-w-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                            className: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: repoUrl,
                                            onChange: (e)=>setRepoUrl(e.target.value),
                                            placeholder: "https://github.com/owner/repo",
                                            className: "h-14 w-full rounded-xl border border-border bg-card pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-[#56A13E] focus:outline-none focus:ring-2 focus:ring-[#56A13E]/20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading || !repoUrl.trim(),
                                    className: "h-14 rounded-xl bg-[#56A13E] px-8 font-semibold text-white transition-colors hover:bg-[#4a8f35] disabled:cursor-not-allowed disabled:opacity-50",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-5 w-5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this),
                                            "Analyzing Repository..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this) : "Analyze Repository"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Enter a public GitHub repository URL to analyze contributor patterns"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this);
    }
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-12 w-12 animate-spin text-[#56A13E]"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-lg text-muted-foreground",
                    children: "Analyzing repository..."
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted-foreground",
                    children: "This may take a moment for large repositories"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    // Show error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-12 w-12 text-destructive"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-lg font-semibold text-foreground",
                    children: "Something went wrong"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-center text-sm text-muted-foreground",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setHasSearched(false),
                    className: "mt-6 rounded-xl bg-[#56A13E] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#4a8f35]",
                    children: "Try Again"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, this);
    }
    // Show carousel with data
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen w-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-0 z-20 flex items-center justify-between bg-background/80 px-6 py-4 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-foreground",
                                children: repository || "Repository Analysis"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex items-center gap-4 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            figures.length,
                                            " contributors"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$commit$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCommit$3e$__["GitCommit"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            timeline.length,
                                            " commits"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setHasSearched(false);
                            setRepoUrl("");
                        },
                        className: "rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
                        children: "Analyze Another"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rotating$2d$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotatingCarousel"], {
                items: carouselData,
                width: 190,
                height: 254,
                sensitivity: 0.3
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Scroll to rotate the carousel and hover on cards to see contributor details"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_5875fba0._.js.map