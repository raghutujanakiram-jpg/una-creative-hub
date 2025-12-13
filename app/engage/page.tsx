export default function Engage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold mb-6">Let’s Build the Future</h1>

      <form className="grid gap-6 max-w-3xl">
        <input className="p-4 rounded-lg bg-white/5 border border-white/10" placeholder="Name" />
        <input className="p-4 rounded-lg bg-white/5 border border-white/10" placeholder="Email" />
        <input className="p-4 rounded-lg bg-white/5 border border-white/10" placeholder="Company" />
        <textarea className="p-4 h-32 rounded-lg bg-white/5 border border-white/10" placeholder="Tell us about your project..." />
        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200">
          Submit
        </button>
      </form>
    </main>
  );
}
<section className="mt-24 border-t border-white/10 pt-16">
  <h2 className="text-3xl font-semibold mb-6">
    Follow Our Thinking
  </h2>

  <p className="text-gray-400 max-w-xl mb-10">
    We share design intelligence, immersive storytelling, and behind-the-scenes
    perspectives across our social channels.
  </p>

  <div className="flex flex-wrap gap-4">
    <a href="https://www.youtube.com/@una_creativehub" target="_blank">YouTube</a>
    <a href="https://instagram.com/una_creativehub/" target="_blank">Instagram</a>
    <a href="https://x.com/una_creativehub" target="_blank">X</a>
    <a href="https://facebook.com/profile.php?id=61567309206086" target="_blank">Facebook</a>
    <a href="https://pinterest.com/una_creativehub" target="_blank">Pinterest</a>
  </div>
</section>
