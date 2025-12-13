"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/una-logo.png"
            alt="UNA Creative Hub"
            width={110}
            height={55}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/solutions" className="hover:text-gray-300 transition">Solutions</Link>
          <Link href="/work" className="hover:text-gray-300 transition">Work</Link>
          <Link href="/insights" className="hover:text-gray-300 transition">Insights</Link>
          <Link href="/engage" className="hover:text-gray-300 transition">Engage</Link>
        </div>

      </div>
    </nav>
  );
}
