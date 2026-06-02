import Image from "next/image"
import { motion } from 'motion/react'

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

                        <div className="mt-10">
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                In the age of AI-powered design tools, it’s easy to think that deep research is becoming obsolete. After all, AI can generate hundreds of design options in seconds. However, this speed makes research more critical than ever, not less.
                            </p>

                            <p>Research provide that evidence</p>
                        </div>
                    </section>
                </div>
            </div>


        </div>
    )
}