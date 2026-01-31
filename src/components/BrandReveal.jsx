"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandReveal() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4 py-10 md:py-20 z-0">
      <div className="text-center flex flex-col items-center gap-6 md:gap-8 -mt-15">
        <div className="flex flex-col items-center gap-4 mt-6 md:mt-8 w-full">
          <h2
            className="text-4xl md:text-7xl lg:text-9xl uppercase tracking-tighter text-[#D62828] leading-none text-center"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontWeight: 800,
            }}
          >
            Partner With Us!
          </h2>

          <div className="flex flex-row gap-8 md:gap-16 w-full justify-center flex-wrap pt-4">
            {/* WTF Logo Link */}
            <motion.a
              href="https://partnerships.wtffoods.in/forms/wtf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center p-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-32 h-32 md:w-56 md:h-56">
                <Image
                  src="/logo.png"
                  alt="WTF Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.a>

            {/* ROLL-X Logo Link */}
            <motion.a
              href="https://partnerships.wtffoods.in/forms/roll-x"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center p-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-32 h-32 md:w-56 md:h-56">
                <Image
                  src="/roll-x.png"
                  alt="Roll-X Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
