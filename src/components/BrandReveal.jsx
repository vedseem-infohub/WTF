'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrandReveal() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center relative px-4 py-20 z-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <div className="w-32 h-32 md:w-48 md:h-48 relative mb-4">
             <Image src="/logo.png" alt="Brand Logo" fill className="object-contain" />
        </div>

        {/* Headline */}
        {/* Headline */}
        <h1 
            className="text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter text-[#D62828] leading-none text-center"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800 }}
        >
          WHERE’S<br />THE FORK
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
            {/* CTA Button */}
            <motion.a
                href="https://partnerships.wtffoods.in/forms/roll-x"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#D62828] text-white text-lg md:text-xl font-bold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Get Franchise
            </motion.a>

             {/* Contact Button */}
             <motion.a
                href="mailto:partnerships@wtffoods.in" 
                className="px-8 py-4 bg-white text-[#D62828] border-2 border-[#D62828] text-lg md:text-xl font-bold rounded-full hover:bg-red-50 transition-colors duration-300 shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Contact
            </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
