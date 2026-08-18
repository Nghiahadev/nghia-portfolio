import type { Service } from "@/types/service";
import styles from "./ServiceCard.module.css";
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={styles.card}>
      <span>{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
