import Image from "next/image";

export function Footer() {
  return (
    <footer>
      {"\n    "}
      <div className="wrap">
        {"\n      "}
        <div className="footer-grid">
          {"\n        "}
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-logo-shell">
                <Image className="brand-logo" src="/assets/logos/nh-logo-green.png" alt="" width={48} height={48} />
              </span>
              <span>{"Nghia Ha"}</span>
            </a>
            {"\n          "}
            <p>
              {
                "I create responsive web applications, eCommerce experiences, and data solutions that help businesses grow\n            and work smarter."
              }
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <div className="footer-contact">
            {"\n          "}
            <h4>{"Get In Touch"}</h4>
            {"\n          "}
            <p>{"California, USA"}</p>
            {"\n          "}
            <p>{"Available for freelance work"}</p>
            {"\n          "}
            <p className="email-id">{"tinnghia16@gmail.com"}</p>
            {"\n          "}
            <p>
              <strong>{"+1 (667) 123-4567"}</strong>
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <div>
            {"\n          "}
            <h4>{"Quick Links"}</h4>
            <a href="#home">{"Home"}</a>
            <a href="#about">{"About"}</a>
            <a href="#projects">{"Projects"}</a>
            <a href="#experience">{"Experience"}</a>
            <a href="#contact">{"Contact"}</a>
            {"\n        "}
          </div>
          {"\n        "}
          <div>
            {"\n          "}
            <h4>{"Stay Connected"}</h4>
            {"\n          "}
            <form className="newsletter-form" id="newsletterForm">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                aria-label="Email for newsletter"
                placeholder="Enter your email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                {"→"}
              </button>
            </form>
            {"\n          "}
            <div className="footer-socials">
              <a href="https://github.com/Nghiahadev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nghia-ha-612122207/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://codepen.io/Nghia-Ha" target="_blank" rel="noreferrer" aria-label="CodePen">
                <i className="fa-brands fa-codepen"></i>
              </a>
              <a href="mailto:tinnghia16@gmail.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n      "}
        <div className="copyright">
          <span>{"© 2026 Nghia Ha. All rights reserved."}</span>
          <span>{"Made with ♥ and lots of ☕"}</span>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n  "}
    </footer>
  );
}
