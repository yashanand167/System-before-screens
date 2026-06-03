import Image from "next/image"
import { motion } from 'motion/react'
import QuoteBlock from "@/components/QuoteBlock"


export default function Chapter2() {
    return (
        <div className="flex flex-col">

            {/* Page 1: Chapter Introduction, User Research, & Amazon Example */}
            <div className="h-auto md:h-[340vh] p-4 sm:p-10 md:p-20 pb-28 relative [perspective:2000px]">
                <div className="relative max-w-5xl mx-auto bg-[#FEFEFD] border border-neutral-200 rounded-2xl h-auto md:h-full w-full overflow-hidden p-6 sm:p-10 md:p-12 z-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 select-none">
                        <span className="px-2.5 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[9px] sm:text-xs font-semibold text-orange-500 uppercase tracking-wider font-mono">
                            Chapter 2
                        </span>
                        <span className="text-[10px] sm:text-xs font-normal text-neutral-900 uppercase tracking-wider">
                            Research
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-6">
                        <div className="text-left max-w-3xl flex-1">
                            <h1 className="text-3xl sm:text-5xl font-instrument italic text-neutral-900 leading-tight">
                                The Research Foundation
                            </h1>
                            <p className="text-lg sm:text-xl text-neutral-600 mt-6 leading-relaxed font-light">
                                The second stage of product design process lies in research. It includes competitor analysis, user research and user interviews. It helps in understanding the problem space deeply and in forming a solid foundation for the design process.
                            </p>
                        </div>

                    </div>
                    <div>
                        <h1>In this Chapter</h1>
                        <div className="flex flex-row gap-10">
                            <div>
                                <h1>Research Process</h1>
                            </div>

                            <div>
                                <h1>AI as a research accelerator</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 mt-16 px-4">
                        <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-neutral-300" />
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-600 text-center leading-snug">
                            Research Process
                        </h2>
                        <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-neutral-300 to-transparent" />
                    </div>

                    <section>
                        <div className="flex flex-row items-center gap-4 mt-16 px-4">
                            <h1 className="text-xl sm:text-3xl text-neutral-900 leading-tight">Why Research Matters</h1>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-neutral-300" />
                        </div>

                        <div className="mt-10 flex flex-col gap-6">
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                Many designers jump straight into Figma. A problem appears, ideas start flowing, and screens are simply designed for aesthetics and a premium look.
                            </p>

                            <div className="my-6 pl-4 border-l-2 border-orange-500 italic text-neutral-800 text-lg sm:text-xl font-instrument">
                                “The issue is that beautiful interfaces do not guarantee useful products.”
                            </div>

                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                <strong>Research is what separates assumptions from evidence.</strong>
                            </p>

                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                Without research, every design decision is essentially a guess. The colors may look great, the spacing may be perfect, and the animations may feel smooth, but if the solution doesn’t address a real user problem, the product fails regardless of how polished it looks.
                            </p>

                            <div className="mt-8 border-t border-neutral-100 pt-8">
                                <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
                                    Research helps designers understand:
                                </h3>
                                <ul className="space-y-3 mt-5 text-lg text-neutral-600 font-light leading-relaxed">
                                    {[
                                        "Who their users are",
                                        "What problems users face",
                                        "Why those problems exist",
                                        "How users currently solve them",
                                        "What opportunities competitors have missed"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                When designers invest time in understanding the problem space first, they reduce the risk of building features nobody needs.
                            </p>

                            <QuoteBlock
                                paragraphs={[
                                    "The goal of research is not to validate your ideas."
                                ]}
                                highlightText="The goal is to discover whether your ideas are worth pursuing at all."
                            />

                            <section className="mt-16 border-t border-neutral-100 pt-12">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
                                    The Ideal Research Workflow
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                    Before we jump into making use of AI, we must master the manual flow to understand the nuance of where AI can act as a force multiplier, rather than a crutch.
                                </p>

                                <div className="mt-10 relative pl-6 border-l border-neutral-200 space-y-12">
                                    {[
                                        {
                                            step: "1",
                                            title: "Define the Research Goals",
                                            subtitle: "What do you need to learn?",
                                            desc: "Clearly frame the questions you seek answers to. Without focus, research becomes aimless data gathering. You must define what knowledge you are missing about your users' actions or motivations before choosing how to collect it.",
                                            examples: ["“Understand why users abandon carts at payment”", "“Find out how users decide which podcast to listen to”"]
                                        },
                                        {
                                            step: "2",
                                            title: "Formulate the Hypothesis",
                                            subtitle: "What do you assume is happening?",
                                            desc: "Write down your baseline assumptions so they can be explicitly validated or debunked by real evidence. Hypotheses keep research honest; they force you to acknowledge your biases before entering the field.",
                                            examples: ["“Users abandon carts because they feel delivery estimates are too slow”"]
                                        },
                                        {
                                            step: "3",
                                            title: "Conduct Competitor Analysis",
                                            subtitle: "What have others built, and where are the gaps?",
                                            desc: "Analyze existing competitor offerings to benchmark industry standards. Map out their user journeys, feature sets, and friction points. This helps establish baseline user expectations and locates market opportunities that others have missed.",
                                            examples: ["“Audit checkout flows of 3 top competitors”", "“Analyze bad reviews of competitor apps on the App Store”"]
                                        },
                                        {
                                            step: "4",
                                            title: "Select the Right Methodology",
                                            subtitle: "How will you find the answers?",
                                            desc: "Choose tools that match your questions: qualitative user interviews for 'why' questions, usability testing for 'where they struggle' questions, and analytics for 'what they do'. Using the wrong method yields misleading feedback that can derail design sprints.",
                                        },
                                        {
                                            step: "5",
                                            title: "Conduct & Observe",
                                            subtitle: "Watch behaviors, don't just listen to opinions.",
                                            desc: "Observe real users interacting with solutions. Pay attention to hesitation, confusion, and silent friction points. What users do is always more honest than what they say, as people are notoriously bad at predicting their own behavior.",
                                        },
                                        {
                                            step: "6",
                                            title: "Synthesize & Extract Insights",
                                            subtitle: "Turn raw data into actionable opportunities.",
                                            desc: "Group observations to discover patterns. Translate user frustrations into clear opportunity statements ('How Might We') that define the design directives. Synthesis is where research turns into design strategy, bridging the gap between data and execution.",
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="relative">
                                            {/* Stepper node dot */}
                                            <span className="absolute -left-[31px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white" />
                                            
                                            <div className="flex flex-col gap-2">
                                                <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest font-mono">
                                                    Step 0{item.step}
                                                </span>
                                                <h4 className="text-xl font-semibold text-neutral-900 leading-snug">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm font-medium text-neutral-500 italic">
                                                    {item.subtitle}
                                                </p>
                                                <p className="text-base text-neutral-600 font-light leading-relaxed mt-1">
                                                    {item.desc}
                                                </p>
                                                {item.examples && (
                                                    <div className="mt-3 flex flex-col gap-2 bg-neutral-50/50 border border-neutral-100 p-4 rounded-xl">
                                                        <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">Examples</span>
                                                        <ul className="space-y-1.5">
                                                            {item.examples.map((ex, idx) => (
                                                                <li key={idx} className="text-sm text-neutral-600 font-mono italic">
                                                                    {ex}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>

             {/* Page 2: AI as a Research Accelerator */}
             <div id="ch2-p2" className="h-auto md:h-[340vh] p-4 sm:p-10 md:p-20 pb-28 relative [perspective:2000px]">
                <div className="relative max-w-5xl mx-auto bg-[#FEFEFD] border border-neutral-200 rounded-2xl h-auto md:h-full w-full overflow-hidden p-6 sm:p-10 md:p-12 z-10 shadow-sm">
                    
                    <div className="flex items-center gap-3 mb-6 select-none">
                        <span className="px-2.5 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[9px] sm:text-xs font-semibold text-orange-500 uppercase tracking-wider font-mono">
                            Chapter 2
                        </span>
                        <span className="text-[10px] sm:text-xs font-normal text-neutral-900 uppercase tracking-wider">
                            AI & Research
                        </span>
                    </div>

                    <div id="ch2-t2" className="flex flex-row items-center justify-center gap-4 mt-16 px-4">
                        <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-neutral-300" />
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-600 text-center leading-snug">
                            AI as a research accelerator
                        </h2>
                        <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-neutral-300 to-transparent" />
                    </div>

                    <section className="mt-8 flex flex-col gap-8">
                        <p className="text-lg text-neutral-600 leading-relaxed font-light">
                            AI is not a replacement for human conversations. However, it can dramatically reduce the time it takes to analyze them. It functions as a cognitive partner—helping us synthesize transcripts, discover hidden user patterns, and brainstorm initial hypotheses.
                        </p>

                        {/* Comparison Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="border border-neutral-200/60 bg-neutral-50/50 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2 mb-4">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                    What AI is Excellent At
                                </h3>
                                <ul className="space-y-3 text-base text-neutral-600 font-light leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-neutral-900">•</span>
                                        <span><strong>Synthesizing Transcripts:</strong> Summarizing hours of user interviews in seconds to identify recurring issues.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-neutral-900">•</span>
                                        <span><strong>Pattern Detection:</strong> Analyzing hundreds of qualitative feedback comments for hidden themes.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-neutral-900">•</span>
                                        <span><strong>Roleplay Generation:</strong> Simulating user demographics to practice and refine interview guides.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-neutral-200/60 bg-neutral-50/50 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2 mb-4">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                    Where AI Fails
                                </h3>
                                <ul className="space-y-3 text-base text-neutral-600 font-light leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-neutral-900">•</span>
                                        <span><strong>Empathy & Feeling:</strong> Feeling the user's emotional context, distress, or micro-frustrations.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-neutral-900">•</span>
                                        <span><strong>Non-Verbal Cues:</strong> Reading subtle body language, sighs, hesitations, or eye movements.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-neutral-900">•</span>
                                        <span><strong>Contextual Observation:</strong> Stepping into a user's real physical environment to witness friction.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Interactive UI Mockup: AI Prompt & Analysis */}
                        <div className="mt-12 border border-neutral-200/60 rounded-3xl p-6 bg-[#FAF9F6] relative overflow-hidden shadow-sm">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                            
                            <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-400 mb-6">AI Research Assistant UI</h4>
                            
                            {/* Mock Prompt Box */}
                            <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                                    <span className="text-xs font-mono text-neutral-500">SYSTEM PROMPT: DESIGN RESEARCH ACCELERATION</span>
                                </div>
                                <div className="text-sm text-neutral-700 font-mono leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                    "Analyze these 15 interview transcripts for checkout friction. Extract the top 3 pain points, prioritize by recurrence, and list raw quote segments."
                                </div>
                            </div>

                            {/* Mock Response Box */}
                            <div className="mt-6 bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-semibold text-neutral-700">ACCELERATED INSIGHTS</span>
                                    </div>
                                    <span className="text-[10px] font-mono bg-neutral-100 px-2 py-0.5 rounded text-neutral-400">Time: 1.4s</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="border-l-2 border-orange-500 pl-3">
                                        <h5 className="text-sm font-semibold text-neutral-900">1. Extra shipping fees shown too late (Recurrence: 12/15)</h5>
                                        <p className="text-xs text-neutral-500 italic mt-1">"I got all the way to payment and then shipping doubled. I closed the tab."</p>
                                    </div>
                                    <div className="border-l-2 border-orange-500 pl-3">
                                        <h5 className="text-sm font-semibold text-neutral-900">2. Address autocomplete failing on mobile (Recurrence: 9/15)</h5>
                                        <p className="text-xs text-neutral-500 italic mt-1">"Tapping my zip code didn't bring up the correct city. Typing manually on screen is tedious."</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* More Contents */}
                        <div className="mt-12 border-t border-neutral-100 pt-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                The Prompt Blueprint for Synthesis
                            </h3>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                When prompting AI to accelerate research synthesis, generic prompts yield generic answers. To get deep, structural insights, you must instruct the model with explicit guardrails:
                            </p>
                            <ul className="space-y-4 mt-6 text-lg text-neutral-600 font-light leading-relaxed">
                                {[
                                    {
                                        title: "Contextual Anchoring",
                                        desc: "Explain the target audience and business model. AI needs to know if it's looking at an enterprise B2B user or a consumer gaming user to correctly weigh friction points."
                                    },
                                    {
                                        title: "Explicit Quote Association",
                                        desc: "Always instruct the model to attach a raw user quote to every extracted theme. This keeps the data grounded in real user vocabulary and prevents the AI from hallucinating assumptions."
                                    },
                                    {
                                        title: "Verbatim Strictness",
                                        desc: "Explicitly restrict the AI from introducing outside terminology. It should only categorize and label the problems directly stated by the interviewees."
                                    }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                                        <div>
                                            <strong className="text-neutral-950 font-semibold block">{item.title}</strong>
                                            <span className="text-neutral-600 text-base">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Good vs Bad Prompt Comparison */}
                        <div className="mt-12 border-t border-neutral-100 pt-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                Prompt Comparison: Bad vs. Good
                            </h3>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                How you phrase your instruction determines whether AI returns generic noise or rigorous evidence. Look at the difference in prompting for the same research task:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {/* Bad Prompt Card */}
                                <div className="border border-red-200/60 bg-red-500/[0.02] p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-red-500/10 px-3 py-1 rounded-bl-xl text-red-600 text-[10px] font-mono font-semibold uppercase">
                                        Bad Prompt
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                        <span className="text-xs font-mono text-neutral-500">LAZY & UNSTRUCTURED</span>
                                    </div>
                                    <div className="text-sm text-neutral-700 font-mono leading-relaxed bg-white p-4 rounded-xl border border-red-100 shadow-sm min-h-[140px]">
                                        "Read these transcripts from our user interviews and tell me what product features we should build to fix the checkout page."
                                    </div>
                                    <div className="text-xs text-neutral-500 leading-relaxed">
                                        <strong>Why it fails:</strong>
                                        <ul className="list-disc pl-4 mt-2 space-y-1">
                                            <li>Asks the AI to speculate on features rather than analyze raw user behaviors.</li>
                                            <li>No context, constraints, or sorting guidelines are provided.</li>
                                            <li>Prone to hallucination and generic "industry standard" suggestions.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Good Prompt Card */}
                                <div className="border border-emerald-200/60 bg-emerald-500/[0.02] p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-emerald-500/10 px-3 py-1 rounded-bl-xl text-emerald-600 text-[10px] font-mono font-semibold uppercase">
                                        Good Prompt
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-mono text-neutral-500">RIGOROUS & ANCHORED</span>
                                    </div>
                                    <div className="text-sm text-neutral-700 font-mono leading-relaxed bg-white p-4 rounded-xl border border-emerald-100 shadow-sm min-h-[140px]">
                                        "Act as a UX research analyst. Analyze the 10 attached user interview transcripts for our mobile grocery app. Identify the top 3 checkout friction points. For each point: 1. Label the issue, 2. Provide a verbatim quote, 3. List the recurrence count. Do not suggest new features."
                                    </div>
                                    <div className="text-xs text-neutral-500 leading-relaxed">
                                        <strong>Why it succeeds:</strong>
                                        <ul className="list-disc pl-4 mt-2 space-y-1">
                                            <li>Forces the AI to act as an analyst rather than a product manager.</li>
                                            <li>Strict formatting output prevents conversational bloat.</li>
                                            <li>Anchored to actual quotes and counts, eliminating guess work and hallucination.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Example 2: Drafting Interview Guides */}
                            <div className="mt-12 pt-8 border-t border-neutral-100/60">
                                <h4 className="text-lg font-semibold text-neutral-900 tracking-tight">
                                    Example 2: Drafting User Interview Guides
                                </h4>
                                <p className="text-base text-neutral-500 font-light mt-2">
                                    When preparing for user research, asking the wrong questions leads to biased user opinions rather than factual observations:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    {/* Bad Prompt Card */}
                                    <div className="border border-red-200/60 bg-red-500/[0.01] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-red-500/10 px-3 py-1 rounded-bl-xl text-red-600 text-[10px] font-mono font-semibold uppercase">
                                            Bad Prompt
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                                <span className="text-[11px] font-mono text-neutral-400">LEADING & GENERIC</span>
                                            </div>
                                            <div className="text-sm text-neutral-700 font-mono leading-relaxed bg-white p-4 rounded-xl border border-red-100/60 shadow-sm min-h-[140px]">
                                                "Write a list of questions to ask users about how they save money, and if they would use an automated savings feature on our new fintech app."
                                            </div>
                                        </div>
                                        <div className="text-xs text-neutral-500 leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                                            <strong>Why it fails:</strong>
                                            <ul className="list-disc pl-4 mt-2 space-y-1">
                                                <li>Encourages leading questions (e.g. "Would you use X?") which gathers hypothetical opinions rather than real behaviors.</li>
                                                <li>Lacks targeting parameters or interview methodologies.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Good Prompt Card */}
                                    <div className="border border-emerald-200/60 bg-emerald-500/[0.01] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-emerald-500/10 px-3 py-1 rounded-bl-xl text-emerald-600 text-[10px] font-mono font-semibold uppercase">
                                            Good Prompt
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                                <span className="text-[11px] font-mono text-neutral-400">BEHAVIORAL & CONSTRAINED</span>
                                            </div>
                                            <div className="text-sm text-neutral-700 font-mono leading-relaxed bg-white p-4 rounded-xl border border-emerald-100/60 shadow-sm min-h-[140px]">
                                                "Act as a UX research coordinator. Design a semi-structured interview script (10 questions max) targeting young professionals. Focus on uncovering past money-saving habits over the last 30 days. Do not ask leading or hypothetical questions. Prompt them to tell stories of actual decisions."
                                            </div>
                                        </div>
                                        <div className="text-xs text-neutral-500 leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                                            <strong>Why it succeeds:</strong>
                                            <ul className="list-disc pl-4 mt-2 space-y-1">
                                                <li>Bans hypothetical speculation; anchors queries to real, past savings events.</li>
                                                <li>Limits script scope and defines exact target user persona behavior.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-neutral-100 pt-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                Why Good Prompting Matters
                            </h3>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                Ultimately, prompting is not about syntax; it is about setting boundaries for the AI. By using clear roles, explicit constraints, and factual anchors, we transform AI from a conversational guesser into a highly precise research accelerator that supports, rather than replaces, human critical thinking.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}