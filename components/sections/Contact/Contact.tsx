import type { CSSProperties } from "react";

export function Contact() {
  return (
    <section className="section" id="contact">
      {"\n      "}
      <div className="wrap contact-grid">
        {"\n        "}
        <div>
          {"\n          "}
          <div className="eyebrow">{"Let’s work together"}</div>
          {"\n          "}
          <h2>{"Have a project in mind?"}</h2>
          {"\n          "}
          <p className="muted">
            {
              "I’m always open to discussing new projects and opportunities. Let’s build something amazing\n            together."
            }
          </p>
          {"\n          "}
          <div className="contact-list">
            {"\n            "}
            <div className="contact-item">
              <i>{"✉"}</i>
              <span>
                <b>{"Email"}</b>
                {"tinnghia16@gmail.com"}
              </span>
            </div>
            {"\n            "}
            <div className="contact-item">
              <i>{"♧"}</i>
              <span>
                <b>{"Phone"}</b>
                {"(667) 123-4567"}
              </span>
            </div>
            {"\n            "}
            <div className="contact-item">
              <i>{"⌖"}</i>
              <span>
                <b>{"Location"}</b>
                {"California, USA"}
              </span>
            </div>
            {"\n            "}
            <div className="contact-item">
              <i>{"◷"}</i>
              <span>
                <b>{"Response Time"}</b>
                {"Within 24 hours"}
              </span>
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n        "}
        <form className="form" id="contactForm">
          <input required placeholder="Your Name" name="name" />
          <input required type="email" placeholder="Your Email" name="email" />
          <select required name="type">
            {"\n            "}
            <option value="">{"Project Type"}</option>
            {"\n            "}
            <option>{"Website"}</option>
            {"\n            "}
            <option>{"eCommerce"}</option>
            {"\n            "}
            <option>{"WordPress"}</option>
            {"\n            "}
            <option>{"Other"}</option>
            {"\n          "}
          </select>
          <textarea
            required
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button className="btn primary" type="submit">
            {"Send Message　✈"}
          </button>
          {"\n          "}
          <div className="success" id="success">
            {"Thanks! Your message is ready to send."}
          </div>
          {"\n        "}
        </form>
        {"\n      "}
      </div>
      {"\n    "}
    </section>
  );
}
