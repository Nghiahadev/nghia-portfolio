import type { CSSProperties } from "react";

export function Education() {
  return (
    <div className="journey-column edu-showcase" id="eduShowcase">
      {"\n          "}
      <div className="eyebrow">{"Education & Certifications"}</div>
      {"\n          "}
      <div className="edu-stack">
        {"\n            "}
        <article className="edu-card">
          {"\n              "}
          <div className="edu-icon">{"🎓"}</div>
          {"\n              "}
          <div>
            {"\n                "}
            <h3>{"M.S. Information Security"}</h3>
            <strong>{"California State Polytechnic University-Pomona"}</strong>
            {"\n                "}
            <p>
              {"May 2026"}
              <br />
              {
                "Focused on cybersecurity, risk management, forensics, and secure systems."
              }
            </p>
            {"\n              "}
          </div>
          {"\n            "}
        </article>
        {"\n            "}
        <article className="edu-card">
          {"\n              "}
          <div className="edu-icon">{"🎓"}</div>
          {"\n              "}
          <div>
            {"\n                "}
            <h3>{"B.S. Computer Information Systems"}</h3>
            <strong>{"California State Polytechnic University-Pomona"}</strong>
            {"\n                "}
            <p>
              {"May 2033"}
              <br />
              {
                "Relevant coursework: Database Systems, Networking, Web Development, Security."
              }
            </p>
            {"\n              "}
          </div>
          {"\n            "}
        </article>
        {"\n          "}
      </div>
      {"\n          "}
      <div className="cert-grid">
        {"\n            "}
        <article className="cert-card">
          {"\n              "}
          <div className="cert-logo aws" aria-label="AWS">
            <i className="fa-brands fa-aws"></i>
          </div>
          {"\n              "}
          <div className="cert-info">
            <strong>{"AWS Academy"}</strong>
            <span>{"Cloud Architecting"}</span>
          </div>
          {"\n            "}
        </article>
        {"\n            "}
        <article className="cert-card">
          {"\n              "}
          <div className="cert-logo aws" aria-label="AWS">
            <i className="fa-brands fa-aws"></i>
          </div>
          {"\n              "}
          <div className="cert-info">
            <strong>{"AWS Academy"}</strong>
            <span>{"Cloud Foundations"}</span>
          </div>
          {"\n            "}
        </article>
        {"\n            "}
        <article className="cert-card">
          {"\n              "}
          <div className="cert-logo comptia" aria-label="CompTIA">
            <b>{"CompTIA"}</b>
          </div>
          {"\n              "}
          <div className="cert-info">
            <strong>{"Network+"}</strong>
            <span>{"Professional Certification"}</span>
          </div>
          {"\n            "}
        </article>
        {"\n          "}
      </div>
      {"\n        "}
    </div>
  );
}
