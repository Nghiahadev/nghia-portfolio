import Image from "next/image";

export function Navbar() {
  return (
    <header>
      {"\n    "}
      <nav className="wrap">
        <a className="brand" href="#home">
          <span className="brand-logo-shell">
            <Image className="brand-logo" src="/assets/logos/nh-logo-header-clear.png" alt="" width={44} height={44} priority />
          </span>
          <span>{"Nghia Ha"}</span>
        </a>
        {"\n      "}
        <div className="navlinks" id="navlinks">
          <span className="gooey-pill" id="gooeyPill" aria-hidden="true"></span>
          <a className="active" href="#home">
            {"Home"}
          </a>
          <a href="#skills">{"Skills"}</a>
          <a href="#about">{"About"}</a>
          <a href="#projects">{"Projects"}</a>
          <a href="#experience">{"Experience"}</a>
          <a href="#contact">{"Contact"}</a>
        </div>
        {"\n      "}
        <div className="actions">
          <a className="btn primary aware-btn download-cv" href="#contact">
            <span>{"Download\n            CV"}</span>
            <i>{"↓"}</i>
            <span className="aware-bg"></span>
          </a>
          <button className="btn menu" id="menu" aria-label="Open menu">
            {"☰"}
          </button>
        </div>
        {"\n    "}
      </nav>
      {"\n  "}
    </header>
  );
}
