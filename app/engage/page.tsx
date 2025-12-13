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
