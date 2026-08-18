import type { CSSProperties } from "react";

export function Expertise() {
  return (
    <section className="stack-showcase" aria-labelledby="stackTitle">
      {"\n      "}
      <div className="stack-intro">
        {"\n        "}
        <div className="eyebrow">{"How I create value"}</div>
        {"\n        "}
        <h2 id="stackTitle">
          {"From idea to "}
          <span className="green">{"impact"}</span>
        </h2>
        {"\n        "}
        <p>
          {
            "Four connected disciplines that let me build complete digital products—not just isolated pages."
          }
        </p>
        {"\n      "}
      </div>
      {"\n      "}
      <div className="stack-area">
        {"\n        "}
        <article className="stack-card">
          {"\n          "}
          <div className="stack-content">
            <span className="stack-num">{"01 · DEVELOPMENT"}</span>
            {"\n            "}
            <h3>{"Full Stack"}</h3>
            {"\n            "}
            <p>
              {
                "Responsive, accessible applications built from polished interfaces through reliable APIs and databases.\n            "
              }
            </p>
            {"\n            "}
            <div className="stack-tags">
              <span>{"React"}</span>
              <span>{"Next.js"}</span>
              <span>{"Node.js"}</span>
              <span>{"PostgreSQL"}</span>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className="stack-img">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85"
              alt="Application code on a screen"
            />
          </div>
          {"\n        "}
        </article>
        {"\n        "}
        <article className="stack-card">
          {"\n          "}
          <div className="stack-content">
            <span className="stack-num">{"02 · COMMERCE"}</span>
            {"\n            "}
            <h3>{"eCommerce"}</h3>
            {"\n            "}
            <p>
              {
                "Conversion-focused storefronts, custom product experiences, integrations, and scalable catalog\n              operations."
              }
            </p>
            {"\n            "}
            <div className="stack-tags">
              <span>{"Shopify"}</span>
              <span>{"Liquid"}</span>
              <span>{"WordPress"}</span>
              <span>{"SEO"}</span>
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className="stack-img">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="Online commerce experience"
            />
          </div>
          {"\n        "}
        </article>
        {"\n        "}
        <article className="stack-card">
          {"\n          "}
          <div className="stack-content">
            <span className="stack-num">{"03 · INSIGHT"}</span>
            {"\n            "}
            <h3>{"Data"}</h3>
            {"\n            "}
            <p>
              {
                "Clean analysis and interactive visualizations that turn complex business information into clear\n              decisions."
              }
            </p>
            {"\n            "}
            <div className="stack-tags">
              <span>{"Python"}</span>
              <span>{"SQL"}</span>
              <span>{"Power BI"}</span>
              <span>{"Excel"}</span>
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className="stack-img">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85"
              alt="Analytics and data dashboard"
            />
          </div>
          {"\n        "}
        </article>
        {"\n        "}
        <article className="stack-card">
          {"\n          "}
          <div className="stack-content">
            <span className="stack-num">{"04 · DELIVERY"}</span>
            {"\n            "}
            <h3>{"Cloud & DevOps"}</h3>
            {"\n            "}
            <p>
              {
                "Repeatable deployments, containerized services, and dependable infrastructure designed for confident\n              growth."
              }
            </p>
            {"\n            "}
            <div className="stack-tags">
              <span>{"AWS"}</span>
              <span>{"Docker"}</span>
              <span>{"Git"}</span>
              <span>{"Hetzner"}</span>
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className="stack-img">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85"
              alt="Connected cloud infrastructure"
            />
          </div>
          {"\n        "}
        </article>
        {"\n      "}
      </div>
      {"\n    "}
    </section>
  );
}
