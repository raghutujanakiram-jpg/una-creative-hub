import SectionProgress from "@/app/components/SectionProgress";

function SolutionsIntro() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <h1 className="text-5xl font-bold">Our Solutions</h1>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <SectionProgress
        sections={[
          "adaptive-ux",
          "digital-humans",
          "xr-commerce",
        ]}
      />

      <SolutionsIntro />

      <section id="adaptive-ux">
        {/* content */}
      </section>

      <section id="digital-humans">
        {/* content */}
      </section>

      <section id="xr-commerce">
        {/* content */}
      </section>
    </>
  );
}
