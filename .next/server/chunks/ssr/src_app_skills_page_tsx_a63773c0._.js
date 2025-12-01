module.exports = {

"[project]/src/app/skills/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SkillsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ParallaxBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ParallaxBackground.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const skillCategories = [
    {
        title: "Core Programming Skills",
        skills: [
            {
                name: "Languages",
                details: "Java, Python, JavaScript, C++ (DSA & Competitive Coding)"
            },
            {
                name: "Problem Solving",
                details: "Data Structures & Algorithms, Competitive Programming (TCS CodeVita)"
            }
        ]
    },
    {
        title: "Web & Full-Stack Development",
        skills: [
            {
                name: "Frontend",
                details: "React, MERN Stack, Modern UI/UX, Animated/Interactive UIs"
            },
            {
                name: "Backend",
                details: "Node.js, Express, API Integrations, System Design"
            },
            {
                name: "Projects",
                details: "Advanced Portfolio Sites, Edutech Platforms (Codenest Academy)"
            }
        ]
    },
    {
        title: "AI, Cloud & DevOps",
        skills: [
            {
                name: "AI/ML",
                details: "Machine Learning Basics, Generative AI, RAG-based Chatbots"
            },
            {
                name: "Cloud",
                details: "AWS, GCP, Oracle Cloud (OCI), Associate-level Certifications"
            },
            {
                name: "DevOps",
                details: "CI/CD Concepts, Deployment (Vercel, Railway)"
            }
        ]
    },
    {
        title: "Tools & Professional",
        skills: [
            {
                name: "Tools",
                details: "VS Code, Git & GitHub"
            },
            {
                name: "Professional",
                details: "Resume Building, Oracle Certified Associate, Technical Writing"
            }
        ]
    }
];
const activeLearning = [
    {
        category: "AI & Machine Learning",
        items: [
            "Building AI-powered applications (ViralClip)",
            "Prompt Engineering & Master Prompt Design",
            "RAG Systems & AI Assistants",
            "Gemini + Genkit Workflows",
            "Generative AI for Video/Metadata",
            "Oracle Generative AI Certification",
            "Geospatial Analysis (ISRO Datasets)"
        ]
    },
    {
        category: "Full-Stack Development",
        items: [
            "Next.js (App Router, SSR/ISR)",
            "Tailwind CSS & Advanced Animations",
            "ShadCN & Custom UI Systems",
            "Supabase (Auth, DB, Edge Functions)",
            "API Design & Serverless Functions",
            "Real-time Features"
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            "Oracle Cloud Infrastructure (OCI)",
            "Modern Deployment Workflows",
            "AI & Cloud Integrations"
        ]
    },
    {
        category: "Software Engineering",
        items: [
            "Unity Fundamentals",
            "Data Structures & Algorithms",
            "Version Control & Project Management",
            "Automated Systems & Pipelines"
        ]
    },
    {
        category: "Design & UX",
        items: [
            "UI/UX Principles",
            "Advanced Animated Interfaces",
            "Visual Brand Systems (Typography, Color Theory)"
        ]
    }
];
const proficiencies = [
    {
        category: "Software Development",
        items: [
            "JavaScript & TypeScript",
            "React Fundamentals",
            "Next.js Patterns",
            "Tailwind CSS",
            "REST & AI API Integrations"
        ]
    },
    {
        category: "AI Product Building",
        items: [
            "End-to-End AI App Design",
            "Architectural Planning",
            "Workflow Automation"
        ]
    },
    {
        category: "Problem Solving",
        items: [
            "Top 12,000 in TCS CodeVita Round 1",
            "Strong Logical & Algorithmic Thinking"
        ]
    },
    {
        category: "Communication",
        items: [
            "Technical Specifications",
            "Feature Descriptions",
            "Prompt Engineering Documentation"
        ]
    },
    {
        category: "Internship Experience",
        items: [
            "Research & Analysis",
            "Team Collaboration",
            "Technical Implementation",
            "Real-world Problem Solving"
        ]
    }
];
function SkillsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background text-foreground overflow-hidden pt-32 pb-24 px-6 md:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ParallaxBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParallaxBackground"], {}, void 0, false, {
                fileName: "[project]/src/app/skills/page.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.2,
                                0.9,
                                0.3,
                                1
                            ]
                        },
                        className: "text-5xl md:text-7xl font-display font-bold mb-16 tracking-tighter",
                        children: "SKILLS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/skills/page.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-24",
                        children: skillCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: index * 0.1,
                                    duration: 0.6
                                },
                                className: "p-8 border border-white/10 bg-black/20 backdrop-blur-sm hover:border-primary/50 transition-colors duration-500 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors",
                                        children: category.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/skills/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: category.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium text-white/90",
                                                        children: skill.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/skills/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-sm leading-relaxed",
                                                        children: skill.details
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/skills/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/skills/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/skills/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/skills/page.tsx",
                                lineNumber: 153,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/skills/page.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-12 h-1 bg-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/skills/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this),
                                    "ACTIVELY DEVELOPING"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/skills/page.tsx",
                                lineNumber: 180,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: activeLearning.map((area, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.95
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: index * 0.05,
                                            duration: 0.5
                                        },
                                        className: "p-6 border-l-2 border-white/10 hover:border-primary bg-gradient-to-br from-white/5 to-transparent transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-4 text-white/90",
                                                children: area.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/skills/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: area.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-muted-foreground flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1.5 w-1 h-1 bg-primary/70 rounded-full shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/skills/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 45
                                                            }, this),
                                                            item
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/skills/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/skills/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/skills/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/skills/page.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/skills/page.tsx",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-12 h-1 bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/skills/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, this),
                                    "PROFICIENCIES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/skills/page.tsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: proficiencies.map((area, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: index * 0.05,
                                            duration: 0.5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold mb-4 text-primary tracking-wide uppercase border-b border-white/10 pb-2 inline-block",
                                                children: area.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/skills/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: area.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-muted-foreground hover:text-white transition-colors duration-300",
                                                        children: item
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/skills/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/skills/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/skills/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/skills/page.tsx",
                                lineNumber: 226,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/skills/page.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/skills/page.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/skills/page.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_skills_page_tsx_a63773c0._.js.map