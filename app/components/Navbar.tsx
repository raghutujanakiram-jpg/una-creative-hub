"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/una-logo.png"
            alt="UNA Creative Hub"
            width={120}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        {/* Nav links */}
        <div className="flex gap-8 text-sm tracking-wide">
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/solutions" className="hover:text-gray-300 transition">Solutions</Link>
          <Link href="/work" className="hover:text-gray-300 transition">Work</Link>
          <Link href="/insights" className="hover:text-gray-300 transition">Insights</Link>
          <Link href="/engage" className="hover:text-gray-300 transition">Engage</Link>
        </div>

      </div>
    </motion.nav>
  );
}
