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
    <div ref={containerRef} className="h-[150vh] md:h-[250vh] relative bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        {/* Left Half */}
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
                    src="/mobile-hero.png" 
                    alt="Hero Left Mobile" 
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center block md:hidden"
                />
            </div>
        </motion.div>

        {/* Right Half */}
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
                    src="/mobile-hero.jpg" 
                    alt="Hero Right Mobile" 
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center block md:hidden"
                />
            </div>
        </motion.div>

        {/* White Background Reveal */}
        <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
      </div>
    </div>
  );
}
