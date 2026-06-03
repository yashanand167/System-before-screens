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
                                            desc: "Clearly frame the questions you seek answers to. Without focus, research becomes aimless data gathering.",
                                            examples: ["“Understand why users abandon carts at payment”", "“Find out how users decide which podcast to listen to”"]
                                        },
                                        {
                                            step: "2",
                                            title: "Formulate the Hypothesis",
                                            subtitle: "What do you assume is happening?",
                                            desc: "Write down your baseline assumptions so they can be explicitly validated or debunked by real evidence.",
                                            examples: ["“Users abandon carts because they feel delivery estimates are too slow”"]
                                        },
                                        {
                                            step: "3",
                                            title: "Select the Right Methodology",
                                            subtitle: "How will you find the answers?",
                                            desc: "Choose tools that match your questions: qualitative user interviews for 'why' questions, usability testing for 'where they struggle' questions, and analytics for 'what they do'.",
                                        },
                                        {
                                            step: "4",
                                            title: "Conduct & Observe",
                                            subtitle: "Watch behaviors, don't just listen to opinions.",
                                            desc: "Observe real users interacting with solutions. Pay attention to hesitation, confusion, and silent friction points. What they do is always more honest than what they say.",
                                        },
                                        {
                                            step: "5",
                                            title: "Synthesize & Extract Insights",
                                            subtitle: "Turn raw data into actionable opportunities.",
                                            desc: "Group observations to discover patterns. Translate user frustrations into clear opportunity statements ('How Might We') that define the design directives.",
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


        </div>
    )
}