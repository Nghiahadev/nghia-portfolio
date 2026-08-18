import styles from "./TechLogo.module.css";
export function TechLogo({
  name,
  iconClass,
}: {
  name: string;
  iconClass?: string;
}) {
  return (
    <span className={styles.logo}>
      {iconClass && <i className={iconClass} />}
      {name}
    </span>
  );
}
