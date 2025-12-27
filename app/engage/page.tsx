"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function EngagePage() {
  return (
    <section className="relative min-h-screen bg-black text-white pt-32 pb-32 overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[160px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl px-6"
      >
        {/* HERO */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Let’s Build Something
          <br />
          <span className="opacity-60">Extraordinary.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-white/70 max-w-xl mb-16"
        >
          Tell us about your vision. We design intelligent, cinematic systems
          that shape brands, products, and human experiences.
        </motion.p>

        {/* FORM */}
        <motion.form
          variants={container}
          className="space-y-8"
        >
          <motion.input
            variants={item}
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/30 transition"
          />

          <motion.input
            variants={item}
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/30 transition"
          />

          <motion.input
            variants={item}
            type="text"
            placeholder="Company / Brand"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/30 transition"
          />

          <motion.textarea
            variants={item}
            placeholder="Describe your project, challenge, or idea..."
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-white/30 transition resize-none"
          />

          {/* SINGLE CTA — NO DUPLICATE */}
          <motion.button
            variants={item}
            type="submit"
            className="mt-6 w-full rounded-full bg-white text-black py-4 text-sm tracking-wide font-medium hover:scale-[1.02] transition-transform"
          >
            Start the Conversation
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}