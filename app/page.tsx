"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0f0f] to-black opacity-70 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-[#1a1a1a] rounded-full blur-[160px] opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#222222] rounded-full blur-[150px] opacity-30" />

      {/* HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-screen px-6 text-center pt-24 sm:pt-0">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/una-logo.png"
            alt="UNA Creative Hub"
            width={180}
            height={90}
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight"
        >
          Designing the Future of <br /> Human Experience.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="mt-4 max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-gray-300"
        >
          A cinematic, immersive design studio delivering intelligent,
          high-impact creative systems for brands, products, and industries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Explore Solutions
          </button>

          <button className="w-full sm:w-auto px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Start Your Project
          </button>
        </motion.div>

      </div>
    </main>
  );
}
