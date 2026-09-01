import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experiences } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return {};
  return { title: `${exp.title} | Asaiverse`, description: exp.summary };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) notFound();
  const others = experiences.filter((e) => e.slug !== slug).slice(0, 4);
  return <ExperienceDetail experience={experience} others={others} />;
}
