import fs from "fs";
import path from "path";
import Link from "next/link";

type WorkItem = {
  slug: string;
  title: string;
  description: string;
  industry?: string;
  year?: string;
};

function getWorkItems(): WorkItem[] {
  const workDir = path.join(process.cwd(), "content/work");

  if (!fs.existsSync(workDir)) {
    return [];
  }

  const files = fs.readdirSync(workDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(workDir, file), "utf-8");

    const match = (field: string) => {
      const regex = new RegExp(`${field}:\\s*"(.*?)"`);
      return raw.match(regex)?.[1] || "";
    };

    return {
      slug,
      title: match("title"),
      description: match("description"),
      industry: match("industry"),
      year: match("year"),
    };
  });
}

export const metadata = {
  title: "Work",
  description:
    "Selected case studies showcasing how UNA Creative Hub designs systems, experiences, and scalable brand platforms.",
};

export default function WorkPage() {
  const workItems = getWorkItems();

  return (
    <main className="px-6 pt-32 pb-40 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-20 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
          Selected Work
        </h1>
        <p className="text-gray-400 text-lg">
          A collection of case studies demonstrating how we design systems,
          experiences, and intelligent brand platforms.
        </p>
      </header>

      {/* Work Grid */}
      <section className="grid gap-12 md:grid-cols-2">
        {workItems.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group block border border-white/10 rounded-2xl p-8 hover:border-white/30 transition"
          >
            <div className="mb-4 text-sm text-gray-500">
              {item.industry && <span>{item.industry}</span>}
              {item.year && <span className="ml-2">• {item.year}</span>}
            </div>

            <h2 className="text-2xl font-medium mb-3 group-hover:underline">
              {item.title}
            </h2>

            <p className="text-gray-400">
              {item.description}
            </p>
          </Link>
        ))}

        {workItems.length === 0 && (
          <p className="text-gray-500">
            Case studies coming soon.
          </p>
        )}
      </section>
    </main>
  );
}