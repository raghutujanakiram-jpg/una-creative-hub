"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Engage", href: "/engage" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-black border-l border-white/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-end mb-12">
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-8 text-xl">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`transition ${
                        active
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto text-sm text-white/40">
                © {new Date().getFullYear()} UNA Creative Hub
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}