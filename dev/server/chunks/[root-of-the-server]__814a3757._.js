module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/repo-data/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
/* ============================
   TOKEN (OPTIONAL)
============================ */ const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
/*
Helper to build headers.
If token exists → authenticated requests
If not → unauthenticated fallback (60/hr)
*/ function getHeaders() {
    const headers = {
        "Accept": "application/vnd.github.v3+json"
    };
    if (GITHUB_TOKEN) {
        headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
    }
    return headers;
}
/* ============================
   FETCH COMMITS WITH PAGINATION
============================ */ async function fetchAllCommits(owner, repo) {
    let allCommits = [];
    let page = 1;
    let hasMore = true;
    while(hasMore){
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=${page}`, {
            headers: getHeaders()
        });
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();
        // Fetch detailed stats for each commit (including additions/deletions)
        const detailedCommits = await Promise.all(data.map(async (commit)=>{
            try {
                const detailResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}`, {
                    headers: getHeaders()
                });
                if (detailResponse.ok) {
                    const detail = await detailResponse.json();
                    return {
                        ...commit,
                        stats: detail.stats
                    };
                }
            } catch (e) {
                // If detail fetch fails, return commit without stats
                console.warn(`Failed to fetch stats for commit ${commit.sha}`);
            }
            return commit;
        }));
        allCommits.push(...detailedCommits);
        // Continue if we got a full page of results
        if (data.length < 100) {
            hasMore = false;
        } else {
            page++;
        }
    }
    return allCommits;
}
/* ============================
   DERIVE CONTRIBUTOR DATA FROM COMMITS
============================ */ function deriveContributorStats(commits) {
    const contributorMap = new Map();
    commits.forEach((commit)=>{
        const username = commit.author?.login ?? "Unknown";
        const date = new Date(commit.commit.author.date);
        const additions = commit.stats?.additions ?? 0;
        const deletions = commit.stats?.deletions ?? 0;
        if (!contributorMap.has(username)) {
            contributorMap.set(username, {
                username,
                totalCommits: 0,
                additions: 0,
                deletions: 0,
                firstCommit: date,
                lastCommit: date,
                commitDates: new Set()
            });
        }
        const contributor = contributorMap.get(username);
        contributor.totalCommits++;
        contributor.additions += additions;
        contributor.deletions += deletions;
        if (date < contributor.firstCommit) contributor.firstCommit = date;
        if (date > contributor.lastCommit) contributor.lastCommit = date;
        // Track unique weeks for active weeks calculation
        const weekKey = `${date.getFullYear()}-W${Math.floor(date.getTime() / (7 * 24 * 60 * 60 * 1000))}`;
        contributor.commitDates.add(weekKey);
    });
    return Array.from(contributorMap.values()).map((contributor)=>({
            username: contributor.username,
            totalCommits: contributor.totalCommits,
            activeWeeks: contributor.commitDates.size,
            additions: contributor.additions,
            deletions: contributor.deletions
        }));
}
/* ============================
   VALIDATE GITHUB URL
============================ */ function extractRepo(repoUrl) {
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return null;
    return {
        owner: match[1],
        repo: match[2]
    };
}
async function POST(req) {
    try {
        const { repoUrl } = await req.json();
        if (!repoUrl) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Repo URL required"
            }, {
                status: 400
            });
        }
        const extracted = extractRepo(repoUrl);
        if (!extracted) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid GitHub repository URL"
            }, {
                status: 400
            });
        }
        const { owner, repo } = extracted;
        /* ---------- FETCH DATA ---------- */ const rawCommits = await fetchAllCommits(owner, repo);
        /* ---------- CLEAN TIMELINE ---------- */ const timeline = rawCommits.map((commit)=>({
                username: commit.author?.login ?? "Unknown",
                authorName: commit.commit.author.name,
                message: commit.commit.message,
                date: commit.commit.author.date,
                commitUrl: commit.html_url
            }));
        /* ---------- DERIVE FIGURES FROM COMMITS ---------- */ const figures = deriveContributorStats(rawCommits);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            repository: `${owner}/${repo}`,
            timeline,
            figures,
            usingAuthToken: Boolean(GITHUB_TOKEN) // helpful debug flag
        });
    } catch (error) {
        /* ---------- RATE LIMIT HANDLING ---------- */ if (error.message?.includes("403")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "GitHub API rate limit exceeded. Try later or add a token."
            }, {
                status: 403
            });
        }
        console.error(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__814a3757._.js.map