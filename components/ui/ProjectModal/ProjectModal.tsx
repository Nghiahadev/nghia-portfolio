import type { CSSProperties } from "react";

export function ProjectModal() {
  return (
    <div
      className="project-modal"
      id="projectModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      {"\n    "}
      <div className="modal-panel">
        <button
          className="modal-close"
          id="modalClose"
          aria-label="Close project details"
        >
          {"×"}
        </button>
        <img className="modal-image" id="modalImage" alt="" />
        {"\n      "}
        <div className="modal-content">
          {"\n        "}
          <div className="eyebrow" id="modalCategory"></div>
          {"\n        "}
          <h2 id="modalTitle"></h2>
          {"\n        "}
          <p className="modal-description" id="modalDescription"></p>
          {"\n        "}
          <div className="modal-meta">
            {"\n          "}
            <div>
              <strong>{"Created"}</strong>
              <span id="modalCreated"></span>
            </div>
            {"\n          "}
            <div>
              <strong>{"Role"}</strong>
              <span id="modalRole"></span>
            </div>
            {"\n          "}
            <div>
              <strong>{"Technologies"}</strong>
              <span id="modalTech"></span>
            </div>
            {"\n          "}
            <div>
              <strong>{"Project Type"}</strong>
              <span id="modalType"></span>
            </div>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="contributors" id="modalContributors" hidden>
            {"\n          "}
            <h3>{"Other Contributors"}</h3>
            {"\n          "}
            <div className="contributor-list" id="modalContributorList"></div>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="modal-actions">
            <a
              className="btn primary"
              id="modalSite"
              href="#"
              target="_blank"
              rel="noopener"
            >
              {"View\n            Site ↗"}
            </a>
            <button className="btn" id="modalBack">
              {"Close"}
            </button>
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n  "}
    </div>
  );
}
