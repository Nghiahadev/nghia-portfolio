import styles from "./ExpertiseCard.module.css";
type Props = {
  number: string;
  kicker: string;
  title: string;
  description: string;
  technologies: string[];
};
export function ExpertiseCard(props: Props) {
  return (
    <article className={styles.card}>
      <span>
        {props.number} · {props.kicker}
      </span>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div>
        {props.technologies.map((item) => (
          <b key={item}>{item}</b>
        ))}
      </div>
    </article>
  );
}
