export const metadata = {
  title: "Insights",
  description: "Perspectives on design, technology, and human experience.",
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

function getInsights(): Insight[] {
  const insightsDir = path.join(process.cwd(), "content/insights");
  const files = fs.readdirSync(insightsDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const fullPath = path.join(insightsDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        date: data.date || "",
        tags: data.tags || [],
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="max-w-3xl mb-16">
        <h1 className="text-5xl font-semibold mb-4">Insights</h1>
        <p className="text-gray-400 text-lg">
          Perspectives on design, technology, intelligence, and the future
          of human experience.
        </p>
      </header>

      {/* Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 transition hover:border-white/30"
          >
            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-medium mb-3 group-hover:text-white transition">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-400 mb-6">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/insights/${post.slug}`}
              className="inline-flex items-center text-sm text-white/80 hover:text-white transition"
            >
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
