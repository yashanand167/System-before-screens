"use client";
import React from "react";
import Image from "next/image";
import { ArrowDownToLine, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";


const DESIGN_QUOTES = [
    {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
        role: "Co-Founder, Apple"
    },
    {
        quote: "AI will not replace designers, but designers who use AI will replace those who don't.",
        author: "Thinking Beyond Canvas",
        role: "Core Philosophy"
    },
    {
        quote: "The system is the product. The interface is just a window into the system.",
        author: "Don Norman",
        role: "Author, The Design of Everyday Things"
    },
    {
        quote: "Good design makes a product useful, understandable, aesthetic, and unobtrusive.",
        author: "Dieter Rams",
        role: "Legendary Industrial Designer"
    }
];

interface PagesContentProps {
    onStartOpening?: () => void;
}

export default function PagesContent({ onStartOpening }: PagesContentProps) {

    return (
        <div>
            <div className="flex justify-between items-center bg-[#FEFEFD] border-b border-neutral-100/60 px-4 py-3 sm:px-6 sm:py-4">
                <button
                    onClick={() => onStartOpening?.()}
                    className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-orange-500 tracking-wider uppercase hover:text-orange-600 transition-colors duration-300 cursor-pointer group"
                >
                    <span>Start Reading</span>
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
                <div className="flex gap-1.5 items-center">
                    <p className="text-[10px] sm:text-xs text-gray-500">Scroll to continue</p>
                    <ArrowDownToLine className="text-gray-500" size={11} />
                </div>
            </div>
            <main className="flex flex-col p-5 sm:p-10 pt-0 mt-4">
                <div className="w-fit px-2.5 py-0.5 bg-orange-500/10 rounded-full">
                    <span className="text-[9px] sm:text-xs font-semibold text-orange-500 uppercase tracking-wider">
                        Total 5 Chapters
                    </span>
                </div>
                <div className="mt-3">
                    <h1 className="text-2xl sm:text-5xl md:text-6xl font-instrument italic text-orange-500 leading-tight">THINKING BEYOND CANVAS</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-4 mt-4">
                        <p className="text-base sm:text-2xl md:text-3xl font-medium text-gray-600">AI for Product Designers</p>
                        <motion.a
                            href="https://www.yashanand.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200/60 bg-white/90 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.08),0_0_12px_rgba(249,115,22,0.04)] hover:border-orange-200/80 transition-all duration-300 cursor-pointer group"
                        >
                            <Image
                                src="/profile.png"
                                alt="Yash Anand"
                                width={20}
                                height={20}
                                className="rounded-full object-cover ring-2 ring-neutral-100 group-hover:ring-orange-100 transition-all duration-300"
                            />
                            <span className="text-[10px] sm:text-xs font-medium text-neutral-500 tracking-tight select-none">
                                Crafted by <span className="text-neutral-800 font-semibold group-hover:text-orange-500 transition-colors duration-300">Yash Anand</span>
                            </span>
                        </motion.a>
                    </div>


                    <div className="mt-6 text-sm sm:text-lg text-gray-500 max-w-lg leading-relaxed">
                        <p>A practical handbook on designing products in the age of intelligence systems</p>
                    </div>

                    <div className="mt-4 text-xs sm:text-md text-gray-400 max-w-lg leading-relaxed">
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

                    <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-12 w-full">
                        {DESIGN_QUOTES.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative w-full aspect-square flex flex-col justify-between p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border border-neutral-200/60 bg-gradient-to-tr from-neutral-50 via-white to-orange-50/20 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.06)] hover:border-orange-200/50 transition-all duration-500 overflow-hidden cursor-pointer group"
                                whileHover={{ y: -6 }}
                                layout
                            >
                                {/* Decorative Quote Icon Background */}
                                <div className="absolute right-4 top-4 sm:right-6 sm:top-6 text-neutral-100/70 group-hover:text-orange-100/50 group-hover:scale-110 transition-all duration-500 select-none">
                                    <Quote className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24" strokeWidth={0.5} />
                                </div>

                                {/* Top row */}
                                <div className="relative z-10">
                                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform duration-300">
                                        <Quote className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" />
                                    </div>
                                </div>

                                {/* Middle - Quote Text */}
                                <div className="relative z-10 flex-grow flex items-center my-2 sm:my-6">
                                    <p className="text-[10px] leading-snug sm:text-lg sm:leading-relaxed md:text-xl font-instrument italic text-neutral-800">
                                        “{item.quote}”
                                    </p>
                                </div>

                                {/* Bottom - Author */}
                                <div className="relative z-10 flex flex-col">
                                    <span className="text-[10px] sm:text-sm font-semibold text-neutral-800 tracking-tight">
                                        {item.author}
                                    </span>
                                    <span className="text-[8px] sm:text-xs text-neutral-400 font-light mt-0.5">
                                        {item.role}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center mt-2 pb-24">
                <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onStartOpening?.()}
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