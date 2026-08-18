import type { CSSProperties } from "react";

export function Hero() {
  return (
    <section className="hero" id="home">
      {"\n      "}
      <div className="wrap hero-grid">
        {"\n        "}
        <div>
          <span className="status">
            <i></i>
            {" Available for work"}
          </span>
          {"\n          "}
          <h1>
            {"Hi, I’m "}
            <span className="green">{"Nghia Ha"}</span>
            <span
              className="role-animate"
              id="roleAnimate"
              aria-label="Web Developer, UI/UX Designer, E-commerce Specialist, and Data Analyst"
            >
              <span className="role-word active">
                {"Web\n                Developer"}
              </span>
              <span className="role-word">{"UI/UX Designer"}</span>
              <span className="role-word">{"E-commerce Specialist"}</span>
              <span className="role-word">
                {"Data\n                Analyst"}
              </span>
            </span>
          </h1>
          {"\n          "}
          <p className="hero-copy">
            {
              "I build modern, responsive web applications and eCommerce solutions that help businesses\n            grow."
            }
          </p>
          {"\n          "}
          <div className="hero-buttons">
            <a className="btn primary aware-btn" href="#projects">
              <span>{"View My\n                Work"}</span>
              <i>{"→"}</i>
              <span className="aware-bg"></span>
            </a>
            <a className="btn aware-btn secondary" href="#contact">
              <span>{"Contact Me"}</span>
              <i>{"→"}</i>
              <span className="aware-bg"></span>
            </a>
          </div>
          {"\n          "}
          <div className="social">
            <span>{"Find me on"}</span>
            <a href="https://github.com/Nghiahadev" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/nghia-ha-612122207/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://codepen.io/Nghia-Ha" target="_blank" rel="noreferrer" aria-label="CodePen" title="CodePen">
              <i className="devicon-codepen-original"></i>
            </a>
            <a
              href="mailto:tinnghia16@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          {"\n        "}
        </div>
        {"\n        "}
        <div className="hero-art">
          <img
            className="portrait"
            src="/assets/images/profile/profile-illustration-v5.png"
            alt="Vietnamese developer illustration"
          />
          {"\n          "}
          <div className="float-stat">
            <strong>{"3+"}</strong>
            <span>{"Years Experience"}</span>
          </div>
          {"\n          "}
          <div className="float-stat two">
            <strong>{"20+"}</strong>
            <span>{"Projects Completed"}</span>
          </div>
          {"\n          "}
          <div className="codebox">
            <span className="codeicon">{"</>"}</span>
            <b>{"const"}</b>
            {" developer = {"}
            <br />
            {" name:\n            "}
            <em>{"'Nghia Ha'"}</em>
            {","}
            <br />
            {" role: "}
            <em>{"'Web Developer'"}</em>
            {","}
            <br />
            {" focus: ["}
            <em>{"'React'"}</em>
            {",\n            "}
            <em>{"'Shopify'"}</em>
            {"]"}
            <br />
            {"}"}
          </div>
          {"\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </section>
  );
}
