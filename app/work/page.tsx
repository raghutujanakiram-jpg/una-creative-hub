import Image from "next/image";

const projects = [
  {
    title: "Neural Brand System",
    category: "Branding · AI",
    image: "/work/brand-system.jpg",
  },
  {
    title: "Immersive Retail Experience",
    category: "XR · Retail",
    image: "/work/xr-retail.jpg",
  },
  {
    title: "Industrial Digital Twin",
    category: "Industry · Simulation",
    image: "/work/digital-twin.jpg",
  },
  {
    title: "Cinematic Product Film",
    category: "CGI · Film",
    image: "/work/cinematic-film.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="max-w-3xl mb-16">
        <h1 className="text-5xl font-semibold mb-4">Our Work</h1>
        <p className="text-gray-400 text-lg">
          A selection of immersive systems, cinematic narratives, and intelligent
          design solutions delivered across industries.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/40"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute bottom-0 p-6">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
