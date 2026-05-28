"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, MotionValue, useTransform, useSpring, useScroll } from "motion/react";
import { StepForward } from 'lucide-react'
import PagesContent from "./PagesContent";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SPRING_CONFIG = { stiffness: 300, damping: 30 };

export const Landing = () => {
    const [isOpening, setIsOpening] = useState(false);
    const router = useRouter();

    const startOpening = () => {
        setIsOpening(true);

        setTimeout(() => {
            router.push("/pages");
        }, 2000);
    }

    return (
        <div className="h-auto md:h-[340vh] p-4 sm:p-10 md:p-20 pb-28 relative [perspective:2000px]">
            {/* The page behind the cover (revealed as the cover opens) */}
            {isOpening && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="absolute inset-4 sm:inset-10 md:inset-20 max-w-5xl mx-auto bg-[#FEFEFD] border border-neutral-200 rounded-2xl z-0 flex flex-col items-center justify-center shadow-inner"
                >
                    <div className="text-center p-8 max-w-md">
                        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500/80 mb-2">Chapter 01</h2>
                        <h1 className="text-4xl font-instrument italic text-neutral-800 leading-tight">Thinking</h1>
                        <p className="text-xs text-neutral-400 font-light mt-6 tracking-widest uppercase animate-pulse">Opening pages...</p>
                    </div>
                </motion.div>
            )}

            <motion.div 
                animate={isOpening ? { 
                    rotateY: -110, 
                    scale: 0.95, 
                    x: "-15%", 
                    opacity: 0,
                    z: -100
                } : { 
                    rotateY: 0, 
                    scale: 1, 
                    x: 0, 
                    opacity: 1,
                    z: 0
                }}
                transition={{ duration: 1.6, ease: [0.645, 0.045, 0.355, 1] }}
                style={{ transformOrigin: "left center" }}
                className="relative max-w-5xl mx-auto bg-[#FEFEFD] border border-neutral-200 rounded-2xl h-auto md:h-full w-full overflow-hidden pl-8 md:pl-12 z-10"
            >
                {/* Book spine binding (black) */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-r border-neutral-800/80 z-20 flex flex-col justify-between items-center py-12 select-none shadow-[inset_-1px_0_4px_rgba(0,0,0,0.5)]">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-amber-500/25 to-transparent" />

                    {/* Spine vertical text title */}
                    <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-neutral-400/60 font-mono">
                        Thinking Beyond Canvas
                    </div>

                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-amber-500/25 to-transparent" />
                </div>

                {/* Hinge crease shadow for 3D realism */}
                <div className="absolute left-8 md:left-12 top-0 bottom-0 w-3 bg-gradient-to-r from-black/15 to-transparent pointer-events-none z-20" />

                <PagesContent onStartOpening={startOpening} />
            </motion.div>
            {/* <div className="fixed inset-0 h-full w-full pl-8 pointer-events-none">
                <Bars />
            </div> */}
        </div>
    )
}

const Bars = () => {
    const bars = new Array(50).fill(0).map((_, i) => i);
    const mouseY = useMotionValue(Infinity);
    const barsHeight = bars.length * 1 + (bars.length - 1) * 12;

    const { scrollYProgress } = useScroll();
    const translate = useTransform(scrollYProgress, [0, 1], [0, barsHeight]);
    return (
        <motion.div
            className="hidden md:flex flex-col gap-3 absolute top-1/2 -translate-y-1/2 pointer-events-auto"
            onMouseMove={(e) => {
                mouseY.set(e.clientY);
            }}
            onMouseLeave={() => {
                mouseY.set(Infinity);
            }}
        >
            {bars.map((i) => (
                <Bar key={i} mouseY={mouseY} isLarger={i % 5 === 0} />
            ))}

            <motion.div
                style={{ y: translate }}
                className="absolute top-0 left-0 flex items-center pointer-events-none"

            >
                <StepForward
                    className="text-orange-500 fill-orange-500 stroke-orange-500 -translate-x-1"
                    size={20}

                />
                <div className="h-px w-screen bg-orange-500" />

            </motion.div>
        </motion.div>
    );
};

const Bar = ({ mouseY, isLarger }: { mouseY: MotionValue<number>; isLarger: boolean }) => {
    let ref = React.useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseY, (y) => {
        if (!ref.current) return 0;
        let rect = ref.current.getBoundingClientRect();
        let barY = rect.top + rect.height / 2;
        return Math.abs(barY - y);
    });

    const width = useSpring(useTransform(distance, [0, 40, 80], isLarger ? [140, 80, 50] : [120, 60, 40], { clamp: true }), { ...SPRING_CONFIG });


    return (
        <motion.div
            className={cn("h-px w-20 bg-neutral-300", isLarger && 'bg-neutral-600')}
            style={{ width }}
            ref={ref}
        />
    )
}