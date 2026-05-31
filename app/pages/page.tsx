"use client";

import { cn } from "@/lib/utils";
import { StepForward } from "lucide-react";
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import React, { useState } from "react";

const SPRING_CONFIG = { stiffness: 300, damping: 30 };

export default function Page() {
    const [page, setPage] = useState("page 1");
    const { scrollYProgress } = useScroll();
    
    return (
        <main>
            <div>
                <Bars />
            </div>

            <h1>Hello</h1>
        </main>
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
            {/* {bars.map((i) => (
                <Bar key={i} mouseY={mouseY} isLarger={i % 5 === 0} />
            ))} */}

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