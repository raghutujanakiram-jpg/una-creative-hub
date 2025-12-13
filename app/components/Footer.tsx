"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal } from "../hooks/useReveal";

const socials = [
  { name: "YouTube", href: "https://www.youtube.com/@una_creativehub" },
  { name: "Instagram", href: "https://instagram.com/una_creativehub/" },
  { name: "X (Twitter)", href: "https://x.com/una_creativehub" },
  { name: "Facebook", href: "https://facebook.com/profile.php?id=61567309206086" },
  { name: "Pinterest", href: "https://pinterest.com/una_creativehub" },
];

export default function Footer() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <footer
      ref={ref}
      className={`relative bg-black border-t border-white/10 transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <Image
          src="/una-logo.png"
          alt="UNA watermark"
          width={420}
          height={140}
          priority={false}
        />
      </div>

      {/* Glow separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-medium mb-4">UNA Creative Hub</h3>
          <p className="text-gray-400 text-sm max-w-sm">
            A cinematic, immersive design studio crafting intelligent creative
            systems for brands, products, and industries worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-medium mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/engage">Engage</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-medium mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative text-center text-xs text-gray-500 pb-8">
        © {new Date().getFullYear()} UNA Creative Hub. All rights reserved.
      </div>
    </footer>
  );
}
