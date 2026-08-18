import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects — Nghia Ha" };

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-5 py-20 text-[#17231a]">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-bold text-[#2f7d32]">← Back home</Link>
        <div className="mt-12"><div className="eyebrow">Portfolio</div><h1 className="mt-3 text-5xl font-extrabold">All projects</h1></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </div>
    </main>
  );
}

