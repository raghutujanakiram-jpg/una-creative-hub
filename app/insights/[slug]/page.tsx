import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const files = fs.readdirSync("content/insights");

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default function InsightDetail({ params }: Props) {
  const filePath = path.join(
    process.cwd(),
    "content/insights",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <article>
        <h1 className="text-4xl font-semibold mb-4">{data.title}</h1>
        <p className="text-gray-400 mb-8">{data.date}</p>

        <div className="prose prose-invert max-w-none">
          <p>{content || "Full article coming soon."}</p>
        </div>
      </article>
    </main>
  );
}
