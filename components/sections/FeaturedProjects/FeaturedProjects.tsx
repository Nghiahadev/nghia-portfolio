import type { CSSProperties } from "react";

export function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      {"\n      "}
      <div className="wrap">
        {"\n        "}
        <div className="section-head">
          {"\n          "}
          <div>
            {"\n            "}
            <div className="eyebrow">{"Featured projects"}</div>
            {"\n            "}
            <h2>{"Some of my recent work"}</h2>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n        "}
        <div className="project-filters" id="projectFilters">
          <button
            className="filter-btn aware-btn secondary active"
            data-filter="All"
          >
            <span>{"All"}</span>
            <span className="aware-bg"></span>
          </button>
          <button
            className="filter-btn aware-btn secondary"
            data-filter="Full Stack"
          >
            <span>{"Full Stack"}</span>
            <span className="aware-bg"></span>
          </button>
          <button
            className="filter-btn aware-btn secondary"
            data-filter="Shopify"
          >
            <span>{"Shopify"}</span>
            <span className="aware-bg"></span>
          </button>
          <button
            className="filter-btn aware-btn secondary"
            data-filter="WordPress"
          >
            <span>{"WordPress"}</span>
            <span className="aware-bg"></span>
          </button>
          <button className="filter-btn aware-btn secondary" data-filter="Data">
            <span>{"Data"}</span>
            <span className="aware-bg"></span>
          </button>
        </div>
        {"\n        "}
        <div className="project-carousel">
          <button
            className="carousel-arrow prev"
            id="projectPrev"
            aria-label="Previous projects"
          >
            {"‹"}
          </button>
          {"\n          "}
          <div className="project-window">
            {"\n            "}
            <div className="project-track" id="projectTrack"></div>
            {"\n          "}
          </div>
          <button
            className="carousel-arrow next"
            id="projectNext"
            aria-label="Next projects"
          >
            {"›"}
          </button>
          {"\n        "}
        </div>
        {"\n        "}
        <div className="dots" id="projectDots"></div>
        {"\n        "}
        <div className="view-all-wrap">
          <button className="btn shiny-action" id="viewAllProjects">
            {"View All Projects →"}
          </button>
          {"\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </section>
  );
}
