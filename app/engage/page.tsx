export default function EngagePage() {
  return (
    <section className="relative px-6 pt-32 pb-40 max-w-3xl mx-auto">
      {/* Background fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Start Your Project
        </h1>
        <p className="text-gray-400 text-lg">
          Tell us about your idea and we’ll explore how to bring it to life.
        </p>
      </header>

      {/* Form */}
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 focus:outline-none focus:border-white/30"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 focus:outline-none focus:border-white/30"
        />

        <input
          type="text"
          placeholder="Company"
          className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 focus:outline-none focus:border-white/30"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 focus:outline-none focus:border-white/30"
        />

        <button
          type="submit"
          className="w-full mt-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>

      {/* Spacer to guarantee footer visibility */}
      <div className="h-32" />
    </section>
  );
}
