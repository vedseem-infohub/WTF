"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import BrandReveal from "./BrandReveal";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const leftX = useTransform(smoothProgress, [0, 0.75], ["0%", "-200%"]);
  const rightX = useTransform(smoothProgress, [0, 0.75], ["0%", "200%"]);

  const revealScale = useTransform(smoothProgress, [0, 0.75], [0.8, 1]);
  const revealY = useTransform(smoothProgress, [0, 0.75], [100, 0]);
  const revealOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  const swipeDownOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="h-[250vh] md:h-[250vh] relative bg-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        {/* Brand Reveal (Behind) */}
        <motion.div
          style={{ scale: revealScale, y: revealY, opacity: revealOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <BrandReveal />
        </motion.div>

        {/* Left Half (Front) */}
        <motion.div
          style={{ x: leftX }}
          className="w-1/2 h-full relative overflow-hidden z-10"
        >
          <div className="absolute inset-0 w-[200%] h-full">
            {/* Desktop Image */}
            <Image
              src="/hero.png"
              alt="Hero Left"
              fill
              priority
              sizes="50vw"
              className="object-cover object-center hidden md:block"
            />
            {/* Mobile Image */}
            <Image
              src="/hero1.png"
              alt="Hero Left Mobile"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center block md:hidden"
            />
          </div>
        </motion.div>

        {/* Right Half (Front) */}
        <motion.div
          style={{ x: rightX }}
          className="w-1/2 h-full relative overflow-hidden z-10"
        >
          <div className="absolute inset-0 w-[200%] h-full -left-[100%]">
            {/* Desktop Image */}
            <Image
              src="/hero.png"
              alt="Hero Right"
              fill
              priority
              sizes="50vw"
              className="object-cover object-center hidden md:block"
            />
            {/* Mobile Image */}
            <Image
              src="/hero1.png"
              alt="Hero Right Mobile"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center block md:hidden"
            />
          </div>
        </motion.div>

        {/* Swipe Down Indicator */}
        <motion.div
          style={{ opacity: swipeDownOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white text-sm md:text-base font-medium tracking-wider drop-shadow-lg">
            Swipe Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-2xl drop-shadow-lg"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
