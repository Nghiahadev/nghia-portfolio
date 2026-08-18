import Link from "next/link";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <img src={project.image} alt="" className={styles.image} />
      <div className={styles.content}>
        <span>{project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Link href={`/projects/${project.slug}`}>View project →</Link>
      </div>
    </article>
  );
}
