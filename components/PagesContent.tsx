"use client";
import React from "react";
import Image from "next/image";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { motion } from "motion/react";


export default function PagesContent() {
    return (
        <div>
            <div className="flex justify-end gap-2 items-center bg-[#FEFEFD] border-b border-neutral-100/60 p-5">
                <p className="text-sm text-gray-600">Scroll to continue</p>
                <ArrowDownToLine className="text-gray-600" size={15} />
            </div>
            <main className="flex flex-col p-5 sm:p-10 pt-0">
                <div className="w-fit p-2 bg-orange-500/10 rounded-2xl">
                    <h1 className="text-orange-500">Total 5 Chapters</h1>
                </div>
                <div className="">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-instrument italic text-orange-500 leading-tight">THINKING BEYOND CANVAS</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-4 mt-6">
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600">AI for Product Designers</p>
                        <motion.a
                            href="https://www.yashanand.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neutral-200/60 bg-white/90 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.08),0_0_12px_rgba(249,115,22,0.04)] hover:border-orange-200/80 transition-all duration-300 cursor-pointer group"
                        >
                            <Image
                                src="/profile.png"
                                alt="Yash Anand"
                                width={24}
                                height={24}
                                className="rounded-full object-cover ring-2 ring-neutral-100 group-hover:ring-orange-100 transition-all duration-300"
                            />
                            <span className="text-xs font-medium text-neutral-500 tracking-tight select-none">
                                Crafted by <span className="text-neutral-800 font-semibold group-hover:text-orange-500 transition-colors duration-300">Yash Anand</span>
                            </span>
                        </motion.a>
                    </div>


                    <div className="mt-10 text-lg text-gray-500 max-w-lg">
                        <p>A practical handbook on designing products in the age of intelligence systems</p>
                    </div>

                    <div className="mt-10 text-md text-gray-500 max-w-lg">
                        <p>This handbook explores how AI is transforming the product design process. The skills we need to build, and the mindsets that will shape the future</p>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full mt-16 pb-6">
                    <div className="relative w-full max-w-4xl aspect-[3/2] overflow-hidden rounded-2xl transition-all duration-500 ease-out group">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent z-10" />
                        <Image
                            src="/cover.png"
                            alt="Thinking Beyond Canvas Cover"
                            fill
                            className="object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                            priority
                        />
                    </div>
                </div>

            </main>

            <section className="bg-gradient-to-br from-orange-500 via-orange-500 to-amber-600 py-20 px-6 sm:px-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-instrument italic text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
                            Why this exists?
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-12">
                        <div className="max-w-md">
                            <h2 className="text-3xl sm:text-4xl font-instrument italic text-[#2E0F00] tracking-tight leading-tight">
                                Most Designers use AI as a shortcut
                            </h2>
                            <p className="mt-6 text-lg text-white/95 leading-relaxed font-light">
                                This handbook explores a better approach where AI amplifies thinking, systems, research, and creativity instead of replacing them.
                            </p>
                            <p className="mt-4 text-base text-white/80 leading-relaxed font-light">
                                <span className="text-white font-semibold underline decoration-white/30 decoration-2 underline-offset-4">It's a shift</span> from using AI for quick mockups to leveraging it as a cognitive partner—one that challenges assumptions, uncovers patterns, and expands creative possibilities.
                            </p>
                        </div>

                        <div className="relative pl-8 py-1 min-w-[240px]">
                            {/* Track line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20 rounded-full" />
                            {/* Glow indicator line */}
                            <div className="absolute left-0 top-6 h-12 w-[2px] bg-gradient-to-b from-white to-white/0 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                            
                            <h3 className="text-xs font-semibold tracking-widest text-white/60 uppercase">Chapters</h3>
                            <ul className="mt-6 space-y-4">
                                <li className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">01</span>
                                    <span className="text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform duration-300">Thinking</span>
                                </li>
                                <li className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">02</span>
                                    <span className="text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform duration-300">Research</span>
                                </li>
                                <li className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">03</span>
                                    <span className="text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform duration-300">Systems</span>
                                </li>
                                <li className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">04</span>
                                    <span className="text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform duration-300">Workflows</span>
                                </li>
                                <li className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">05</span>
                                    <span className="text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform duration-300">Prompting & Judgement</span>
                                </li>
                                <li className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">06</span>
                                    <span className="text-sm font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform duration-300">Future</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 pb-20 px-6 sm:px-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-instrument italic text-orange-500 leading-tight">
                            Some Designer Notes
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {/* Card 1: Wide (2 columns) */}
                        <div className="md:col-span-2 bg-[#FAF9F5] border border-neutral-200/60 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-orange-500/20 group">
                            <div>
                                <span className="text-[10px] font-mono text-orange-500 font-semibold tracking-widest uppercase">01 / Design Philosophy</span>
                                <h3 className="text-2xl font-instrument italic text-neutral-800 mt-4 leading-tight">AI as a Cognitive Partner</h3>
                                <p className="text-neutral-500 text-sm mt-3 leading-relaxed font-light">
                                    The most powerful use of generative AI isn't producing mockups faster; it's using it as a sparring partner to challenge assumptions, stress-test logic, and uncover hidden edge cases.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4 bg-white border border-neutral-100 p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.01)] group-hover:border-orange-100 transition-colors duration-300">
                                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                <p className="text-[11px] font-mono text-neutral-500">Active Sparring Mode: Stress-testing user flows...</p>
                            </div>
                        </div>

                        {/* Card 2: Tall (1 column, 2 rows) - Dark Mode Accent */}
                        <div className="md:row-span-2 bg-neutral-905 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-neutral-700/60 group bg-neutral-900">
                            <div>
                                <span className="text-[10px] font-mono text-orange-400 font-semibold tracking-widest uppercase">02 / The Medium</span>
                                <h3 className="text-2xl font-instrument italic text-white mt-4 leading-tight">The Prompt is the New Sketch</h3>
                                <p className="text-neutral-400 text-sm mt-3 leading-relaxed font-light">
                                    Words have become the initial interface of design. Precision in language is now as critical as precision in pixels. Prompting is drafting the DNA of a system.
                                </p>
                            </div>
                            <div className="mt-8 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 font-mono text-[10px] text-neutral-400 space-y-2 group-hover:border-orange-500/20 transition-colors duration-300">
                                <div className="flex items-center gap-1.5 pb-2 border-b border-neutral-800/60">
                                    <span className="w-2 h-2 rounded-full bg-neutral-700" />
                                    <span className="w-2 h-2 rounded-full bg-neutral-700" />
                                    <span className="w-2 h-2 rounded-full bg-neutral-700" />
                                </div>
                                <p className="text-orange-400">system_prompt.md</p>
                                <p className="text-neutral-400 leading-normal">"Create an adaptive dashboard that adjusts information density based on user attention..."</p>
                            </div>
                        </div>

                        {/* Card 3: Standard (1 column) */}
                        <div className="bg-[#FAF9F5] border border-neutral-200/60 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-orange-500/20 group">
                            <div>
                                <span className="text-[10px] font-mono text-orange-500 font-semibold tracking-widest uppercase">03 / Interaction</span>
                                <h3 className="text-xl font-instrument italic text-neutral-800 mt-4 leading-tight">Probabilistic UI</h3>
                                <p className="text-neutral-500 text-sm mt-3 leading-relaxed font-light">
                                    Traditional UI is deterministic. AI UI is probabilistic. We must design layouts that scale dynamically based on AI confidence.
                                </p>
                            </div>
                            <div className="mt-6 space-y-2">
                                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                                    <span>Confidence Score</span>
                                    <span className="text-orange-500 font-semibold">94.2%</span>
                                </div>
                                <div className="h-1.5 w-full bg-neutral-200/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: '94.2%' }} />
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Standard (1 column) */}
                        <div className="bg-[#FAF9F5] border border-neutral-200/60 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-orange-500/20 group">
                            <div>
                                <span className="text-[10px] font-mono text-orange-500 font-semibold tracking-widest uppercase">04 / Value Shift</span>
                                <h3 className="text-xl font-instrument italic text-neutral-800 mt-4 leading-tight">Curate, Don't Create</h3>
                                <p className="text-neutral-500 text-sm mt-3 leading-relaxed font-light">
                                    When generation cost drops to zero, the value of curation skyrockets. Taste and critical restraint are a designer's superpowers.
                                </p>
                            </div>
                            <div className="mt-6 flex items-center justify-between border-t border-neutral-200/40 pt-4">
                                <span className="text-[10px] font-mono text-neutral-400">Generated Variations</span>
                                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-white border border-neutral-200/60 rounded text-neutral-700">12,490</span>
                            </div>
                        </div>

                        {/* Card 5: Wide Banner (3 columns) */}
                        <div className="md:col-span-3 bg-[#FAF9F5] border border-neutral-200/60 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-orange-500/20 group">
                            <div>
                                <span className="text-[10px] font-mono text-orange-500 font-semibold tracking-widest uppercase">05 / Human Hybrid</span>
                                <h3 className="text-2xl font-instrument italic text-neutral-800 mt-4 leading-tight">Human-in-the-Loop Integration</h3>
                                <p className="text-neutral-500 text-sm mt-3 leading-relaxed font-light max-w-2xl">
                                    The best products are built at the intersection of human intuition and algorithmic speed. UI controls must provide user steering mechanisms to govern AI behaviors.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-200/40 pt-6">
                                <div className="bg-white p-4 rounded-2xl border border-neutral-100 text-center">
                                    <p className="text-[10px] font-mono text-neutral-400 uppercase">Human Input</p>
                                    <p className="text-sm font-semibold text-neutral-800 mt-1">Intuition & Taste</p>
                                </div>
                                <div className="bg-white p-4 rounded-2xl border border-neutral-100 text-center">
                                    <p className="text-[10px] font-mono text-neutral-400 uppercase">AI Coprocessor</p>
                                    <p className="text-sm font-semibold text-neutral-800 mt-1">Mass Parallelism</p>
                                </div>
                                <div className="bg-white p-4 rounded-2xl border border-neutral-100 text-center">
                                    <p className="text-[10px] font-mono text-orange-500 uppercase">Result</p>
                                    <p className="text-sm font-semibold text-orange-500 mt-1">Steerable UI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center mt-2 pb-24">
                <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm tracking-wide uppercase shadow-[0_4px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.45)] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Gradient Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
                <p className="text-xs text-neutral-400 mt-4 font-light select-none">
                    Start reading the handbook now. No signup required.
                </p>
            </div>

        </div>
    )
}