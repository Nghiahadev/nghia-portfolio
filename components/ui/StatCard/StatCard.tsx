import styles from "./StatCard.module.css";
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article className={styles.card}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
