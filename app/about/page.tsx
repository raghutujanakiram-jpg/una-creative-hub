export const metadata = {
  title: "About",
  description: "About UNA Creative Hub, our vision and philosophy.",
};

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold mb-6">About Us</h1>

      <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
        UNA Creative Hub is a next-generation design innovation studio delivering
        cinematic, intelligent, and immersive creative ecosystems. 
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-medium mb-3">Mission</h2>
          <p className="text-gray-400">To redefine how brands communicate and how humans experience digital environments.</p>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-3">Vision</h2>
          <p className="text-gray-400">A world where creativity and intelligence converge to build transformative experiences.</p>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-3">What We Stand For</h2>
          <ul className="text-gray-400 list-disc ml-6 space-y-2">
            <li>Design Intelligence</li>
            <li>Immersive Experience Engineering</li>
            <li>AI-Enhanced Creative Systems</li>
            <li>Enterprise-Grade Innovation</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
