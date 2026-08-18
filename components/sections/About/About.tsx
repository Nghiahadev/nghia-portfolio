import type { CSSProperties } from "react";

export function About() {
  return (
    <section className="section alt" id="about">
      {"\n      "}
      <div className="wrap about-grid">
        {"\n        "}
        <div>
          {"\n          "}
          <div className="eyebrow">{"About me"}</div>
          {"\n          "}
          <h2>
            {"I build things for the "}
            <span className="typed-word" id="typedWord">
              {"web"}
            </span>
            {" 👋"}
          </h2>
          {"\n          "}
          <p className="muted">
            {
              "I’m a Web Developer with experience in building full-stack web applications, eCommerce\n            stores, data solutions, and custom products. I enjoy turning ideas into real products that solve problems.\n          "
            }
          </p>
          {"\n          "}
          <ul className="checklist">
            {"\n            "}
            <li>{"Full-Stack Web Development"}</li>
            {"\n            "}
            <li>{"eCommerce & Shopify Expert"}</li>
            {"\n            "}
            <li>{"WordPress & Custom Plugins"}</li>
            {"\n            "}
            <li>{"Database Design & Management"}</li>
            {"\n            "}
            <li>{"Data Analysis & Visualization"}</li>
            {"\n            "}
            <li>{"Cloud & DevOps"}</li>
            {"\n            "}
            <li>{"API Integration & Automation"}</li>
            {"\n          "}
          </ul>
          <a className="btn aware-btn secondary" href="#contact">
            <span>{"More About Me"}</span>
            <i>{"→"}</i>
            <span className="aware-bg"></span>
          </a>
          {"\n        "}
        </div>
        {"\n        "}
        <div>
          {"\n          "}
          <div className="metrics">
            {"\n            "}
            <div className="metric">
              <strong data-count="20" data-suffix="+">
                {"0"}
              </strong>
              <span>{"Projects Completed"}</span>
            </div>
            {"\n            "}
            <div className="metric">
              <strong data-count="10" data-suffix="+">
                {"0"}
              </strong>
              <span>{"Happy Clients"}</span>
            </div>
            {"\n            "}
            <div className="metric">
              <strong data-count="3" data-suffix="+">
                {"0"}
              </strong>
              <span>{"Years Experience"}</span>
            </div>
            {"\n            "}
            <div className="metric">
              <strong data-count="30" data-suffix="K+">
                {"0"}
              </strong>
              <span>{"Products Managed"}</span>
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className="toolkit" id="toolkit">
            <strong>{"My Toolkit"}</strong>
            {"\n            "}
            <div className="skillrow">
              <span>{"JavaScript / TypeScript"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "95%" } as CSSProperties}></i>
              </div>
              <span>{"95%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"React / Next.js"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "90%" } as CSSProperties}></i>
              </div>
              <span>{"90%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"Node.js"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "85%" } as CSSProperties}></i>
              </div>
              <span>{"85%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"Shopify / Liquid"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "90%" } as CSSProperties}></i>
              </div>
              <span>{"90%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"WordPress / PHP"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "85%" } as CSSProperties}></i>
              </div>
              <span>{"85%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"PostgreSQL / SQL"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "80%" } as CSSProperties}></i>
              </div>
              <span>{"80%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"Data Analysis (Python, SQL)"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "88%" } as CSSProperties}></i>
              </div>
              <span>{"88%"}</span>
              {"\n            "}
            </div>
            {"\n            "}
            <div className="skillrow">
              <span>{"Data Visualization (Power BI, Excel)"}</span>
              {"\n              "}
              <div className="bar">
                <i style={{ "--level": "86%" } as CSSProperties}></i>
              </div>
              <span>{"86%"}</span>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </section>
  );
}
