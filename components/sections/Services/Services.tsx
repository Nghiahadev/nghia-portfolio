import type { CSSProperties } from "react";

export function Services() {
  return (
    <section className="section">
      {"\n      "}
      <div className="wrap">
        {"\n        "}
        <div className="eyebrow">{"Services"}</div>
        {"\n        "}
        <h2>{"What I can do for you"}</h2>
        {"\n        "}
        <div className="services">
          {"\n          "}
          <article className="service">
            <span className="ico">
              <i className="fa-solid fa-code"></i>
            </span>
            {"\n            "}
            <h3>{"Web Development"}</h3>
            {"\n            "}
            <p>
              {
                "Modern, responsive websites built with React, Next.js, and scalable technologies."
              }
            </p>
            {"\n          "}
          </article>
          {"\n          "}
          <article className="service">
            <span className="ico">
              <i className="fa-brands fa-shopify"></i>
            </span>
            {"\n            "}
            <h3>{"eCommerce Solutions"}</h3>
            {"\n            "}
            <p>
              {
                "Shopify stores, custom apps, product bundles, and payment integrations."
              }
            </p>
            {"\n          "}
          </article>
          {"\n          "}
          <article className="service">
            <span className="ico">
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            {"\n            "}
            <h3>{"Data Visualization"}</h3>
            {"\n            "}
            <p>
              {
                "Interactive Power BI dashboards and Excel reports that make insights clear."
              }
            </p>
            {"\n          "}
          </article>
          {"\n          "}
          <article className="service">
            <span className="ico">
              <i className="fa-solid fa-database"></i>
            </span>
            {"\n            "}
            <h3>{"Database & Backend"}</h3>
            {"\n            "}
            <p>
              {
                "Design, optimize, and manage robust databases, APIs, and cloud services."
              }
            </p>
            {"\n          "}
          </article>
          {"\n          "}
          <article className="service">
            <span className="ico">
              <i className="fa-solid fa-pen-ruler"></i>
            </span>
            {"\n            "}
            <h3>{"UI/UX & SEO"}</h3>
            {"\n            "}
            <p>
              {
                "Accessible interfaces with thoughtful UX and SEO practices for visibility."
              }
            </p>
            {"\n          "}
          </article>
          {"\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </section>
  );
}
