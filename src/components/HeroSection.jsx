'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="h-[250vh] relative bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        {/* Left Half */}
        <motion.div 
          style={{ x: leftX }} 
          className="w-1/2 h-full relative overflow-hidden z-10"
        >
            <div className="absolute inset-0 w-[200%] h-full">
                <Image 
                    src="/hero.png" 
                    alt="Hero Left" 
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </motion.div>

        {/* Right Half */}
        <motion.div 
          style={{ x: rightX }} 
          className="w-1/2 h-full relative overflow-hidden z-10"
        >
             <div className="absolute inset-0 w-[200%] h-full -left-[100%]">
                <Image 
                    src="/hero.png" 
                    alt="Hero Right" 
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </motion.div>

        {/* White Background Reveal */}
        <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
      </div>
    </div>
  );
}
