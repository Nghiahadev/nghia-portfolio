import { experience } from "@/data/experience";
import type { Experience as ExperienceItem } from "@/types/experience";

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="job" key={`${item.company}-${item.period}`}>
          <span className="date">{item.period}</span>
          <h3>{item.role}</h3>
          <small>{item.company}</small>
          {item.description && <p>{item.description}</p>}
          {item.technologies?.map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </article>
      ))}
    </div>
  );
}

export function Experience() {
  const newestFirst = [...experience].reverse();
  const initialExperience = newestFirst.slice(0, 3);
  const additionalExperience = newestFirst.slice(3);

  return (
    <div className="journey-column">
      <div className="eyebrow">Experience</div>
      <h2>My professional journey</h2>
      <Timeline items={initialExperience} />
      <div className="journey-extra" id="journeyExtra">
        <div>
          <Timeline items={additionalExperience} />
        </div>
      </div>
      <div className="journey-button">
        <button
          className="btn shiny-action"
          id="journeyToggle"
          aria-expanded="false"
          aria-controls="journeyExtra"
        >
          View Full Resume →
        </button>
      </div>
    </div>
  );
}
