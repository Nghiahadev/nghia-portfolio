import styles from "./SectionTitle.module.css";
export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className={styles.title}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
