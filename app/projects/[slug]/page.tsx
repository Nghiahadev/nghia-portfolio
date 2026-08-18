import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project ? `${project.title} — Nghia Ha` : "Project not found" };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-5 py-16 text-[#17231a]">
      <article className="mx-auto max-w-4xl">
        <Link href="/projects" className="font-bold text-[#2f7d32]">← All projects</Link>
        <img src={project.image} alt="" className="mt-10 aspect-[16/9] w-full rounded-[2rem] object-cover" />
        <div className="mt-10 text-sm font-extrabold uppercase tracking-[.18em] text-[#2f7d32]">{project.category}</div>
        <h1 className="mt-3 text-5xl font-extrabold">{project.title}</h1>
        <p className="mt-6 text-lg leading-8 text-[#536057]">{project.description}</p>
        <div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-[#17231a]/15 px-4 py-2 text-sm font-bold">{technology}</span>)}</div>
      </article>
    </main>
  );
}

