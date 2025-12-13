"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SuccessScreen from "./SuccessScreen";

export default function EngageModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="mx-auto max-w-3xl px-6">
          {!submitted ? (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-32"
            >
              <h2 className="text-5xl font-semibold mb-4">
                Let’s Begin.
              </h2>
              <p className="text-white/60 mb-12">
                Answer a few questions. We’ll handle the rest.
              </p>

              {step === 0 && (
                <input
                  placeholder="Your Name"
                  className="input"
                  onKeyDown={() => setStep(1)}
                />
              )}

              {step === 1 && (
                <input
                  placeholder="Email Address"
                  className="input"
                  onKeyDown={() => setStep(2)}
                />
              )}

              {step === 2 && (
                <textarea
                  placeholder="Describe your project vision…"
                  rows={5}
                  className="input resize-none"
                />
              )}

              <MagneticButton
                onClick={() => setSubmitted(true)}
                className="mt-10 w-full rounded-full bg-white text-black py-4 font-medium"
              >
                Submit Brief
              </MagneticButton>
            </motion.div>
          ) : (
            <SuccessScreen onClose={onClose} />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}