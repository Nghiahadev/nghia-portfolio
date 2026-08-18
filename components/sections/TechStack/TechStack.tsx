import { technologies } from "@/data/technologies";

function TechnologyGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="tech-group" aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <span className="tech" key={technology.name}>
          <i className={technology.iconClass} />
          {technology.name}
        </span>
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <div className="techbar" id="skills">
      <div className="wrap">
        <div className="tech-title">Technologies &amp; Tools</div>
        <div className="tech-marquee">
          <div className="techs">
            <TechnologyGroup />
            <TechnologyGroup hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
