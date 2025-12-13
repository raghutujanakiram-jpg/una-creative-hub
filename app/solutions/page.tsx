export const metadata = {
  title: "Solutions",
  description: "Future-ready design and immersive creative solutions.",
};

import Link from "next/link";

const services = [
  { title: "Neural Branding Systems", slug: "neural-branding" },
  { title: "Hyper-Real Digital Humans", slug: "digital-humans" },
  { title: "XR Commerce & Virtual Retail", slug: "xr-commerce" },
  { title: "Industrial Digital Twins", slug: "digital-twins" },
  { title: "Adaptive Experience Design (UI/UX)", slug: "adaptive-ux" },
  { title: "Spatial Visualization & CGI", slug: "spatial-visualization" },
  { title: "Influence Design Intelligence", slug: "influence-design" },
  { title: "Autonomous Experience Pods", slug: "experience-pods" },
];

export default function Solutions() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold mb-6">Solutions</h1>
      <p className="text-gray-300 max-w-3xl mb-12">
        Explore our premium portfolio of future-ready design innovation services.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/solutions/${service.slug}`}
            className="p-8 border border-white/10 rounded-2xl hover:border-white/30 transition"
          >
            <h2 className="text-2xl font-medium">{service.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
