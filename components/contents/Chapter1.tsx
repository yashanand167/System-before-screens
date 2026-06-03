import { motion } from 'motion/react'
import Image from 'next/image'
import QuoteBlock from '@/components/QuoteBlock'


export default function Chapter1() {
    return (
        <div className="flex flex-col">

            {/* Page 1: Chapter Introduction, User Research, & Amazon Example */}
            <div className="h-auto md:h-[340vh] p-4 sm:p-10 md:p-20 pb-28 relative [perspective:2000px]">
                <div className="relative max-w-5xl mx-auto bg-[#FEFEFD] border border-neutral-200 rounded-2xl h-auto md:h-full w-full overflow-hidden p-6 sm:p-10 md:p-12 z-10 shadow-sm">
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
            </div>

            {/* Page 2: Relentless Optimization & AI Fitness App Example */}
            <div className="h-auto md:h-[340vh] p-4 sm:p-10 md:p-20 pb-28 relative [perspective:2000px]">
                <div className="relative max-w-5xl mx-auto bg-[#FEFEFD] border border-neutral-200 rounded-2xl h-auto md:h-full w-full overflow-hidden p-6 sm:p-10 md:p-12 z-10 shadow-sm">
                    <p className="mt-6 text-lg text-neutral-600 leading-relaxed font-light">
                        The core of Amazon's success isn't revolutionary design; it's relentless optimization around core user needs. While their UI evolved slowly, their underlying systems continuously improved on key metrics: faster loading, more relevant recommendations, and easier checkout. This focus on solving real friction points—rather than chasing aesthetic trends—demonstrates how prioritizing user value consistently outperforms superficial redesigns.
                    </p>

                    <section>
                        <div className="flex flex-row items-center justify-center gap-4 mt-16 px-4">
                            <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-neutral-300" />
                            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-600 text-center leading-snug">
                                Problem first, AI second
                            </h2>
                            <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-neutral-300 to-transparent" />
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                Imagine you tell AI to design a dashboard for a fitness app
                            </h3>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                Within seconds you'll get:
                            </p>
                            <ul className="space-y-3 mt-5 text-lg text-neutral-600 font-light leading-relaxed">
                                {[
                                    "Analytics cards",
                                    "Charts",
                                    "Progress indicators",
                                    "Navigation",
                                    "Settings screens"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                                        <span className="text-neutral-900 font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12">
                                <div className="w-full md:w-[350px] shrink-0">
                                    <Image
                                        src="/Image4.png"
                                        alt="AI design"
                                        width={400}
                                        height={400}
                                        unoptimized
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-snug">
                                        Creatives may come up with some crazy ideas, but it doesn't mean they're always right
                                    </h4>
                                    <p className="text-lg text-neutral-600 mt-4 leading-relaxed font-light">
                                        Relying purely on aesthetic novelty without validating real user problems often leads to high-friction products. Empathy, testing, and strategic structure must serve as the design baseline.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 border-t border-neutral-100 pt-8">
                                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                    But what if the user doesn't even need a dashboard in the first place?
                                </h3>
                                <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                    Let's take a real problem like:
                                </p>
                                <div className="my-6 pl-4 border-l-2 border-orange-500 italic text-neutral-800 text-lg sm:text-xl font-instrument">
                                    "User struggling to maintain their consistency"
                                </div>
                                <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                    The actual solution might be <strong className="text-neutral-900 font-semibold">reminders, habit loops, and guidance</strong> via the platform itself, rather than a data-heavy dashboard.
                                </p>
                                <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                    Often, the <strong className="text-orange-500 font-semibold">dashboard was never the problem</strong>—it was simply the default aesthetic solution we fell back on.
                                </p>
                            </div>

                            <div className="mt-12 border-t border-neutral-100 pt-8">
                                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                    Before every <strong className="text-orange-500 font-semibold">AI prompt</strong>, you must ask:
                                </h3>
                                <ol className="mt-8 space-y-6">
                                    {[
                                        { q: "Who has the problem?", desc: "User segment." },
                                        { q: "What are they struggling with?", desc: "Pain point." },
                                        { q: "Why does it happen?", desc: "Root cause." },
                                        { q: "What outcome do they want?", desc: "Desired state." },
                                        { q: "How will success be measured?", desc: "Validation." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex gap-4 items-start">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-mono text-sm font-semibold shrink-0">
                                                {index + 1}
                                            </span>
                                            <div>
                                                <h4 className="text-lg font-semibold text-neutral-900 leading-snug">{item.q}</h4>
                                                <p className="text-base text-neutral-500 mt-1 font-light">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>

                                <QuoteBlock
                                    paragraphs={[
                                        <>Bad designers prompt AI for <strong className="text-orange-600 font-semibold underline decoration-orange-200 underline-offset-4">screens</strong>.</>,
                                        <>Good designers prompt AI with <strong className="text-orange-600 font-semibold underline decoration-orange-200 underline-offset-4">insights</strong>.</>
                                    ]}
                                    highlightText="Great designers discover the problem before writing the prompt."
                                />


                                <div className="flex flex-row items-center justify-center gap-4 mt-16 px-4">
                                    <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-neutral-300" />
                                    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-600 text-center leading-snug">
                                        Designing for human goals, not just aesthetics
                                    </h2>
                                    <div className="w-12 sm:w-24 md:w-40 h-px bg-gradient-to-r from-neutral-300 to-transparent" />
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mt-12 px-2 sm:px-6">
                                    <div className="flex-1 text-left">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                                            Let's consider the example of Spotify
                                        </h3>
                                        <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                            Spotify could effortlessly focus on having one of the most premium-looking designs compared to competitors like <strong>Apple Music</strong> or <strong>YouTube Music</strong>.
                                        </p>
                                        <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                            Instead, it focused on a core human goal:
                                        </p>
                                        <div className="my-6 pl-4 border-l-2 border-emerald-500 italic text-neutral-800 text-lg sm:text-xl font-instrument">
                                            “I want to find and enjoy music I love.”
                                        </div>
                                        <p className="text-lg text-neutral-600 leading-relaxed font-light mt-4">
                                            That goal led to features such as:
                                        </p>
                                        <ul className="space-y-3 mt-5 text-lg text-neutral-600 font-light leading-relaxed">
                                            {[
                                                "Discover Weekly",
                                                "Daily Mixes",
                                                "Personalized recommendations",
                                                "Continue listening",
                                                "Smart playlists"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-lg text-neutral-600 leading-relaxed font-light mt-6">
                                            The visual design supports these experiences, but the real value comes from helping users achieve their goal with less effort.
                                        </p>
                                    </div>

                                    <div className="w-full md:w-[350px] shrink-0">
                                        <Image
                                            src="/Image5.png"
                                            alt="Spotify example"
                                            width={350}
                                            height={350}
                                            unoptimized
                                            className="w-full h-auto rounded-2xl shadow-md border border-neutral-100"
                                        />
                                    </div>
                                </div>

                                <QuoteBlock
                                    paragraphs={[
                                        "Great products are not built from prompts."
                                    ]}
                                    highlightText="They are built from understanding."
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}