"use client";

import { motion } from "framer-motion";

export default function SuccessScreen({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="text-center mt-40"
    >
      <h2 className="text-5xl font-semibold mb-6">
        We’re On It.
      </h2>
      <p className="text-white/70 max-w-md mx-auto mb-12">
        Your brief is received. Our team will review and reach out with next
        steps shortly.
      </p>

      <button
        onClick={onClose}
        className="rounded-full border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition"
      >
        Back to Site
      </button>
    </motion.div>
  );
}