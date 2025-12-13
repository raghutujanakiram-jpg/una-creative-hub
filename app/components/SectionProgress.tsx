"use client";

import { useEffect, useState } from "react";

export default function SectionProgress({ sections }: { sections: string[] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const visible = sections.filter((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5;
      });

      setProgress((visible.length / sections.length) * 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <div className="fixed top-0 left-0 z-[70] h-[2px] w-full">
      <div
        className="h-full bg-white transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}