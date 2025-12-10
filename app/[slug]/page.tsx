import { getPage } from "../../lib/getPage";
import Hero from "@/app/components/sections/Hero";
import TextSection from "@/app/components/sections/TextSection";
import Hero2 from "../components/sections/Hero2";

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const page = await getPage(params.slug); // ✅ FIXED

  if (!page) {
    return <h1>404 - Page Not Found</h1>;
  }

  const components: Record<string, any> = {
    hero: Hero,
    text: TextSection,
    hero2: Hero2,
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>{page.title}</h1>

      {page.sections.map((section: any, index: number) => {
        const Component = components[section.type];
        if (!Component) return null;

        return <Component key={index} {...section} />;
      })}
    </main>
  );
}
