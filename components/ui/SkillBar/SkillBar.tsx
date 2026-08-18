import type { CSSProperties } from "react";
import styles from "./SkillBar.module.css";
export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className={styles.row}>
      <span>{name}</span>
      <div>
        <i style={{ "--level": `${level}%` } as CSSProperties} />
      </div>
      <b>{level}%</b>
    </div>
  );
}
