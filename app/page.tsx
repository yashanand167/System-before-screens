"use client";

import Image from "next/image";
import { motion, useScroll } from "motion/react";
import { Landing } from "@/components/landing";
import React from "react";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Detect when scroll stops
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {/* <motion.div
        animate={{
          opacity: isScrolling ? 0 : 1,
          y: isScrolling ? -10 : 0,
          pointerEvents: isScrolling ? "none" : "auto"
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="sticky top-4 z-20 mx-auto flex justify-center px-4"
      >
        <h1 className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-gray-900 shadow-lg shadow-black/5 ring-1 ring-gray-200 backdrop-blur">
          Pages 1/5
        </h1>
      </motion.div> */}
      <Landing />
    </div>
  );
}
