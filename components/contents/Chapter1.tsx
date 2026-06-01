import { motion } from 'motion/react'
import Image from 'next/image'

export default function Chapter1() {
    return (
        <div className="h-auto max-w-5xl mx-auto p-4 sm:p-10 md:p-20 pb-28 relative flex flex-col gap-12 [perspective:2000px]">
            
            {/* Page 1: Chapter Introduction, User Research, & Amazon Example */}
            <div className="relative bg-[#FEFEFD] border border-neutral-200 rounded-2xl w-full p-6 sm:p-10 md:p-12 z-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6 select-none">
                    <span className="px-2.5 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[9px] sm:text-xs font-semibold text-orange-500 uppercase tracking-wider font-mono">
                        Chapter 1
                    </span>
                    <span className="text-[10px] sm:text-xs font-normal text-neutral-900 uppercase tracking-wider">
                        Thinking Process
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-6">
                    <div className="text-left max-w-3xl flex-1">
                        <h1 className="text-3xl sm:text-5xl font-instrument italic text-neutral-900 leading-tight">
                            How Product Designers think?
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-600 mt-6 leading-relaxed font-light">
                            AI can generate interfaces in seconds, but what matters is understanding the <strong className="text-neutral-900 font-semibold">target users</strong>, framing the <strong className="text-neutral-900 font-semibold">core problem</strong>, and then solving it with <strong className="text-orange-500 font-bold">empathy, logic, and creativity</strong>. Without this foundation, designs remain beautiful but hollow.
                        </p>
                    </div>
                    <div className="w-full md:w-[350px] shrink-0">
                        <Image
                            src="/Thinking.jpg"
                            alt="Thinking"
                            width={350}
                            height={350}
                            unoptimized
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>

                <div className="mt-12 border-t border-neutral-100 pt-8">
                    <h2 className="text-xl font-semibold text-neutral-800 tracking-tight">In this chapter</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <motion.li 
                            whileHover={{ y: -2 }}
                            className="bg-neutral-50/50 border border-neutral-200/50 p-5 rounded-xl hover:border-orange-200/50 hover:bg-orange-50/5 transition-all duration-300"
                        >
                            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-2">01</span>
                            <span className="text-sm font-medium text-neutral-700 leading-snug">
                                Why user research still matters in the AI era
                            </span>
                        </motion.li>
                        <motion.li 
                            whileHover={{ y: -2 }}
                            className="bg-neutral-50/50 border border-neutral-200/50 p-5 rounded-xl hover:border-orange-200/50 hover:bg-orange-50/5 transition-all duration-300"
                        >
                            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-2">02</span>
                            <span className="text-sm font-medium text-neutral-700 leading-snug">
                                Core framework: Problem first, AI second
                            </span>
                        </motion.li>
                        <motion.li 
                            whileHover={{ y: -2 }}
                            className="bg-neutral-50/50 border border-neutral-200/50 p-5 rounded-xl hover:border-orange-200/50 hover:bg-orange-50/5 transition-all duration-300"
                        >
                            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-2">03</span>
                            <span className="text-sm font-medium text-neutral-700 leading-snug">
                                Designing for human goals, not just aesthetics
                            </span>
                        </motion.li>
                    </ul>
                </div>

                <div className="flex flex-row items-center justify-center gap-4 mt-16 px-4">
                    <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-neutral-300" />
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-600 text-center leading-snug">
                        Why user research still matters in the AI era
                    </h2>
                    <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-neutral-300 to-transparent" />
                </div>

                <section className="mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                        <div className="flex flex-col gap-6 flex-1 text-left">
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                The truth is, AI can generate interfaces in seconds, but understanding the <strong className="text-neutral-900 font-semibold">target users</strong>, defining the <strong className="text-neutral-900 font-semibold">core problem</strong>, and then solving it with empathy, logic, and creativity is what truly matters.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                When we bypass <strong className="text-neutral-900 font-semibold">direct human research</strong>, we build on assumptions. AI tools excel at synthesizing existing patterns, but they cannot step into the real world to observe human frustration, friction, and hidden behaviors.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                Many designers make the mistake of starting with AI-generated solutions before understanding the people they are designing for. This often leads to products that look impressive but fail to solve <strong className="text-orange-500 font-semibold">meaningful human problems</strong>.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                Ultimately, <strong className="text-neutral-900 font-semibold">user research</strong> acts as a filter between unlimited design possibilities and genuine market opportunities.
                            </p>
                        </div>
                        <div className="w-full md:w-[300px] shrink-0">
                            <Image
                                src="/Image1.png"
                                alt="Thinking"
                                width={300}
                                height={300}
                                unoptimized
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className='mt-12 border-t border-neutral-100 pt-8 md:pt-12'>
                        <h1 className='text-xl sm:text-xl md:text-2xl font-semibold text-neutral-900'>Thinking Before Executing & Designing</h1>
                        <div className='mt-6 flex flex-col gap-6'>
                            <Image 
                                src="/Image2.jpg" 
                                alt="think" 
                                width={250} 
                                height={250} 
                                unoptimized
                                className="w-full h-auto rounded-2xl" 
                            />
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                Colors, typography, and <strong className="text-neutral-900 font-semibold">UI systems are secondary</strong>. The early stage of product design is often invisible and non-aesthetic. It includes map-making, asking hard questions, mapping out <strong className="text-neutral-900 font-semibold">user flows</strong>, and challenging baseline assumptions.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                By spending more time defining the <strong className="text-orange-500 font-semibold">problem space</strong>, we ensure that when we finally instruct AI to generate layouts or write code, we are feeding it the right parameters. This rigorous alignment serves as the solid <strong className="text-neutral-900 font-semibold">backbone of a good design outcome</strong>.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                This process of interrogation relentlessly asking <strong className="text-orange-500 font-semibold">why, who, and what if</strong>—is the <strong className="text-neutral-900 font-semibold">main pillar of product design</strong>. Questions structure ideas, build guardrails for decision-making, and prevent us from building systems for the wrong problems. In the AI era where execution is cheap, <strong className="text-neutral-900 font-semibold">critical questioning is a designer's ultimate value-add</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-16 border-t border-neutral-100 pt-8 md:pt-12">
                        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">Amazon is a strong example for this</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                            For years, Amazon's website was criticized for looking cluttered compared to competitors. Yet it consistently outperformed because every design decision prioritized:
                        </p>
                        <ul className="space-y-3 mt-5 text-lg text-neutral-600 font-light leading-relaxed">
                            {[
                                "Finding Products Faster",
                                "Clear product information (specs, reviews, pricing)",
                                "Frictionless checkout",
                                "Personalized recommendations",
                                "Trust signals (ratings, reviews, return policies)"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row mt-8 gap-4">
                        <div className="flex-1">
                            <Image src="/SS1.png" alt="ss1" width={400} height={250} unoptimized className="w-full h-auto rounded-2xl" />
                        </div>
                        <div className="flex-1">
                            <Image src="/SS1.png" alt="ss1" width={400} height={250} unoptimized className="w-full h-auto rounded-2xl" />
                        </div>
                    </div>
                </section>
            </div>

            {/* Page 2: Framing the Problem: How Might We (HMW) Questions */}
            <div className="relative bg-[#FEFEFD] border border-neutral-200 rounded-2xl w-full p-6 sm:p-10 md:p-12 z-10 shadow-sm">
               <h1>They heavily prioritized thinking over aesthetics</h1>
               <p>
                The core of Amazon`s success isn`t revolutionary design; it`s relentless optimization around core user needs. While their UI evolved slowly, their underlying systems continuously improved on key metrics: faster loading, more relevant recommendations, and easier checkout. This focus on solving real friction points—rather than chasing aesthetic trends—demonstrates how prioritizing user value consistently outperforms superficial redesigns.
               </p>
            </div>
            
        </div>
    )
}