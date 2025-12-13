"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  ...props
}: any) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0,0)`;
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}