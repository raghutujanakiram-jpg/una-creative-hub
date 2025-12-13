export const metadata = {
  title: "UNA Creative Hub – Designing the Future of Human Experience",
  description:
    "Cinematic, immersive design studio building intelligent creative systems.",
};

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
     <section className="pt-40 pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-semibold mb-6">
            Designing the Future of
            <br />
            Human Experience.
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            A cinematic, immersive design studio delivering intelligent,
            high-impact creative systems for brands, products, and industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions"
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Explore Solutions
            </Link>

            <Link
              href="/engage"
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CINEMATIC PAGE END (IMPORTANT) */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </section>
    </>
  );
}
