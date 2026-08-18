(() => {
  const hero = document.querySelector("#home");
  if (!hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.createElement("canvas");
  canvas.className = "particle-canvas";
  canvas.setAttribute("aria-hidden", "true");
  hero.prepend(canvas);
  const ctx = canvas.getContext("2d"),
    pointer = { x: -1e3, y: -1e3 };
  let particles = [],
    frame;
  function resize() {
    const rect = hero.getBoundingClientRect(),
      dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(85, Math.max(35, Math.round(rect.width / 18)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.8 + 0.7,
    }));
  }
  function draw() {
    const w = canvas.clientWidth,
      h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i],
        dx = p.x - pointer.x,
        dy = p.y - pointer.y,
        d = Math.hypot(dx, dy);
      if (d < 110 && d > 0) {
        p.vx += (dx / d) * 0.015;
        p.vy += (dy / d) * 0.015;
      }
      p.vx *= 0.995;
      p.vy *= 0.995;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
      p.y = Math.max(0, Math.min(h, p.y));
      ctx.beginPath();
      ctx.fillStyle = "rgba(24,169,87,.55)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j],
          distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance < 105) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(24,169,87,${(1 - distance / 105) * 0.16})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    frame = requestAnimationFrame(draw);
  }
  hero.addEventListener(
    "pointermove",
    (e) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    },
    { passive: true },
  );
  hero.addEventListener("pointerleave", () => {
    pointer.x = pointer.y = -1e3;
  });
  new ResizeObserver(resize).observe(hero);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else draw();
  });
  resize();
  draw();
})();
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.createElement("canvas");
  canvas.className = "page-particle-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d"),
    mouse = { x: -1e3, y: -1e3, active: false };
  let dots = [],
    raf,
    w = 0,
    h = 0;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth;
    h = innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(105, Math.max(42, Math.round(w / 15)));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      r: Math.random() * 1.7 + 0.65,
    }));
  }
  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      const p = dots[i];
      if (mouse.active) {
        const dx = p.x - mouse.x,
          dy = p.y - mouse.y,
          d = Math.hypot(dx, dy);
        if (d < 145 && d > 0) {
          const force = (1 - d / 145) * 0.075;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }
      }
      p.vx *= 0.992;
      p.vy *= 0.992;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) {
        p.x = 0;
        p.vx = Math.abs(p.vx);
      } else if (p.x > w) {
        p.x = w;
        p.vx = -Math.abs(p.vx);
      }
      if (p.y < 0) {
        p.y = 0;
        p.vy = Math.abs(p.vy);
      } else if (p.y > h) {
        p.y = h;
        p.vy = -Math.abs(p.vy);
      }
      ctx.beginPath();
      ctx.fillStyle = "rgba(10,145,67,.72)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const q = dots[j],
          distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance < 115) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(15,157,72,${(1 - distance / 115) * 0.22})`;
          ctx.lineWidth = 0.65;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(animate);
  }
  addEventListener(
    "pointermove",
    (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    },
    { passive: true },
  );
  document.documentElement.addEventListener("pointerleave", () => {
    mouse.active = false;
  });
  addEventListener("blur", () => {
    mouse.active = false;
  });
  addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else animate();
  });
  resize();
  animate();
})();
(() => {
  const contact = document.querySelector("#contact");
  if (contact) {
    contact.id = "contact-details";
    const section = document.createElement("section");
    section.className = "lets-talk";
    section.id = "contact";
    section.setAttribute("aria-labelledby", "letsTalkTitle");
    section.innerHTML = `<div class="wrap"><div class="lets-kicker">Have a project in mind?</div><h2 class="lets-title" id="letsTalkTitle" aria-label="Let's Talk"><span class="lets-row">LET'S</span><span class="lets-row text-outline">TALK.</span></h2><p class="lets-sub">Have an idea, opportunity, or challenge worth building? Tell me about it—then use the form below to share the details.</p><div class="lets-actions"><a class="btn primary" href="#contact-details">Start a conversation ↓</a><a class="btn" href="mailto:tinnghia16@gmail.com">Email me ↗</a></div></div>`;
    contact.before(section);
    section.querySelectorAll(".lets-row").forEach((row) => {
      const text = row.textContent;
      row.textContent = "";
      [...text].forEach((char) => {
        const span = document.createElement("span");
        span.className = "talk-letter";
        span.textContent = char;
        row.appendChild(span);
      });
    });
  }
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches,
    reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce) return;
  const dot = document.createElement("div"),
    ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  dot.setAttribute("aria-hidden", "true");
  ring.setAttribute("aria-hidden", "true");
  document.body.append(dot, ring);
  let mx = innerWidth / 2,
    my = innerHeight / 2,
    rx = mx,
    ry = my;
  addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
    },
    { passive: true },
  );
  addEventListener("mousedown", () => ring.classList.add("is-down"));
  addEventListener("mouseup", () => ring.classList.remove("is-down"));
  document.addEventListener("mouseover", (e) => {
    ring.classList.toggle(
      "is-hot",
      !!e.target.closest("a,button,input,textarea,select,.talk-letter"),
    );
  });
  (function cursorLoop() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(cursorLoop);
  })();
})();
(() => {
  const name = document.querySelector(".hero h1>.green");
  if (name && !name.querySelector(".hero-name-letter")) {
    const text = name.textContent;
    name.textContent = "";
    [...text].forEach((char) => {
      const span = document.createElement("span");
      span.className = "hero-name-letter";
      span.textContent = char;
      name.appendChild(span);
    });
  }
  const send = document.querySelector(
    '#contact-details .form button[type="submit"]',
  );
  if (send && !send.classList.contains("aware-btn")) {
    const label = send.textContent.trim();
    send.textContent = "";
    send.classList.add("aware-btn");
    const text = document.createElement("span"),
      icon = document.createElement("i"),
      bg = document.createElement("span");
    text.textContent = label.replace(/\s*✈$/, "");
    icon.textContent = "✈";
    bg.className = "aware-bg";
    send.append(text, icon, bg);
  }
})();
(() => {
  const servicesSection = document
    .querySelector(".services")
    ?.closest("section");
  if (servicesSection) servicesSection.id = "services";
  const nav = document.querySelector("#navlinks"),
    contactLink = nav?.querySelector('a[href="#contact"]');
  if (nav && contactLink && !nav.querySelector('a[href="#services"]')) {
    const link = document.createElement("a");
    link.href = "#services";
    link.textContent = "Services";
    nav.insertBefore(link, contactLink);
  }
})();
(() => {
  const stats = [...document.querySelectorAll(".hero .float-stat strong")],
    hero = document.querySelector("#home");
  if (!stats.length || !hero) return;
  const values = stats.map((el) => ({
    el,
    target: parseInt(el.textContent, 10),
    suffix: el.textContent.replace(/[\d\s]/g, ""),
  }));
  stats.forEach((el) => (el.textContent = "0"));
  const run = () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches,
      start = performance.now(),
      duration = reduce ? 0 : 1250;
    function tick(now) {
      const progress = duration ? Math.min((now - start) / duration, 1) : 1,
        eased = 1 - Math.pow(1 - progress, 3);
      values.forEach(
        ({ el, target, suffix }) =>
          (el.textContent = Math.round(target * eased) + suffix),
      );
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        run();
      }
    },
    { threshold: 0.35 },
  );
  observer.observe(hero);
})();
(() => {
  const list = document.querySelector("#contact-details .contact-list");
  if (list)
    list.innerHTML = `<div class="contact-item"><i>✦</i><span><b>Availability</b>Open to selected projects</span></div><div class="contact-item"><i>↗</i><span><b>Work Style</b>Remote collaboration</span></div><div class="contact-item"><i>◇</i><span><b>Project Types</b>Web, eCommerce &amp; Data</span></div><div class="contact-item"><i>◷</i><span><b>Get in Touch</b>Use the secure form</span></div>`;
  const footerContact = document.querySelector(".footer-contact");
  if (footerContact)
    footerContact.innerHTML = `<h4>Let's Work Together</h4><p>Available for selected freelance and contract projects.</p><p>Use the contact form to start a conversation.</p><a class="email-id" href="#contact">Send a project inquiry →</a>`;
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = "#contact";
    if (link.closest(".social,.footer-socials"))
      link.setAttribute("aria-label", "Contact form");
  });
})();
(() => {
  const icons = [
    "fa-calendar-check",
    "fa-house-laptop",
    "fa-layer-group",
    "fa-paper-plane",
  ];
  document
    .querySelectorAll("#contact-details .contact-item>i")
    .forEach((icon, index) => {
      icon.textContent = "";
      icon.className = `fa-solid ${icons[index]}`;
      icon.setAttribute("aria-hidden", "true");
    });
})();
(() => {
  const buttons = [
    {
      el: document.querySelector("#modalSite"),
      label: "View Site",
      icon: "fa-arrow-up-right-from-square",
      secondary: false,
    },
    {
      el: document.querySelector("#modalBack"),
      label: "Close",
      icon: "fa-xmark",
      secondary: true,
    },
  ];
  buttons.forEach(({ el, label, icon, secondary }) => {
    if (!el) return;
    el.textContent = "";
    el.classList.add("aware-btn");
    if (secondary) el.classList.add("secondary");
    const text = document.createElement("span"),
      symbol = document.createElement("i"),
      bg = document.createElement("span");
    text.textContent = label;
    symbol.className = `fa-solid ${icon}`;
    symbol.setAttribute("aria-hidden", "true");
    bg.className = "aware-bg";
    el.append(text, symbol, bg);
  });
})();
(() => {
  const heading = document.querySelector("#about h2");
  if (!heading || heading.querySelector(".wave-hand")) return;
  [...heading.childNodes].forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE || !node.textContent.includes("👋"))
      return;
    const parts = node.textContent.split("👋"),
      hand = document.createElement("span");
    hand.className = "wave-hand";
    hand.textContent = "👋";
    hand.setAttribute("aria-label", "Waving hand");
    node.replaceWith(
      document.createTextNode(parts[0]),
      hand,
      document.createTextNode(parts.slice(1).join("👋")),
    );
  });
})();
// Project values: title, description, image, technologies, category,
// contributors [{ name, image, url }], live website, and optional date.
const projects = [
  [
    "Elysium Mall",
    "Cross-platform virtual mall experience combining a React Native interface, PostgreSQL-backed data, and an immersive Unity environment.",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    ["React Native", "PostgreSQL", "Unity"],
    "Full Stack",
    [
      { name: "Sam", url: "https://www.linkedin.com/in/siwanta/" },
    ],
    "http://app.elysiummall.com/",
    "In Progress",
  ],
  [
    "The Phelan Focus",
    "Responsive coaching and consulting platform that presents services clearly and supports a streamlined, secure Stripe payment experience.",
    "/assets/projects/thephelanfocus.png",
    ["Next.js", "Stripe", "Tailwind CSS"],
    "Full Stack",
    [],
    "https://thephelanfocus.com/",
    "June 2025",
  ],
  [
    "PocketContent",
    "AI-powered content platform with a responsive React interface, Firebase services, OpenAI-assisted features, and integrated Stripe billing.",
    "/assets/projects/pocketcontent.png",
    ["React.js", "Tailwind CSS", "Firebase", "OpenAI API", "Stripe API"],
    "Full Stack",
    [
      { name: "Jay", image: "/assets/projects/Jay.png", url: "https://www.linkedin.com/in/jaygrubbs/" },
      { name: "Dylan", image: "/assets/projects/Dylan.png", url: "https://www.linkedin.com/in/dylanmoo/" },
    ],
    "https://pocketcontent.io/",
    "August 2025",
  ],
  [
    "Projxon",
    "Modern agency website built with reusable Next.js components, responsive Tailwind layouts, and a polished experience across devices.",
    "/assets/projects/projxon.jpg",
    ["Next.js", "Tailwind CSS"],
    "Full Stack",
    [
      { name: "Evan", image: "/assets/projects/Evan.png", url: "https://www.linkedin.com/in/evanprograms/" },
      { name: "Simeon", image: "/assets/projects/Simeon.png", url: "https://www.linkedin.com/in/simeon-davenport/" },
    ],
    "https://projxon.com/",
    "May 2025",
  ],
  [
    "Zephyr Aero Leather",
    "Full-stack aviation leather commerce experience combining a Next.js storefront, Stripe payments, and WooCommerce product management.",
    "/assets/projects/zephyraeroleather.jpg",
    ["Next.js", "React.js", "Tailwind CSS", "Stripe API", "WooCommerce"],
    "Full Stack",
    [
      { name: "Evan", image: "/assets/projects/Evan.png", url: "https://www.linkedin.com/in/evanprograms/" },
      { name: "Simeon", image: "/assets/projects/Simeon.png", url: "https://www.linkedin.com/in/simeon-davenport/" },
      { name: "Brandon", image: "/assets/projects/Brandon.png", url: "https://www.linkedin.com/in/brandon-araya-b90234338/" },
      { name: "Carmen", image: "/assets/projects/Carmen.png", url: "https://www.linkedin.com/in/carmen-e-vega/" },
    ],
    "http://zephyraeroleather.com/",
    "May 2025",
  ],
  [
    "Toan Thanh Wedding",
    "Responsive wedding website featuring event information, interactive guest experiences, and Google Apps Script-powered form workflows.",
    "/assets/projects/toanthanhwedding.png",
    ["HTML", "CSS", "JavaScript", "jQuery", "Google Apps Script"],
    "Full Stack",
    [],
    "https://toanthanhwedding.com/",
    "February 2024",
  ],
  [
    "Surviving Breast Cancer App",
    "Community-focused mobile application that connects people affected by breast cancer with helpful resources, content, and support services.",
    "/assets/projects/SBC.png",
    ["React Native", "AWS"],
    "Full Stack",
    [],
    "https://play.google.com/store/apps/details?id=org.survivingbreastcancer&hl=en_AU",
  ],
  [
    "Old Portfolio",
    "My original personal portfolio website, built from the ground up to present my early projects, skills, and contact information through a responsive custom interface.",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
    ["HTML", "CSS", "JavaScript", "jQuery", "Google Apps Script"],
    "Full Stack",
    [],
    "https://nghiaha95.com/",
    "June 2023",
  ],
  [
    "NextShine Car Care",
    "Custom Shopify storefront for car-care products with responsive Liquid sections and JavaScript enhancements that simplify product discovery. Demo password: 1.",
    "/assets/projects/nextshine.png",
    ["Shopify", "Liquid", "JavaScript"],
    "Shopify",
    [],
    "https://car-soap-h6ihyjdn.myshopify.com/",
    "August 2026",
  ],
  [
    "Viora Creamery",
    "SEO-friendly Shopify storefront with branded visual design, responsive product browsing, and a smooth shopping experience across devices.",
    "/assets/projects/viora.png",
    ["Shopify", "Liquid", "SEO"],
    "Shopify",
    [
      { name: "Dat", image: "/assets/projects/Dat.png", url: "https://www.linkedin.com/in/dat-nguyen-867250220/" },
    ],
    "https://vioracreamery.com/",
    "August 2026",
  ],
  [
    "Phatsat",
    "Shopify storefront for satellite, cable, and connectivity products with clear catalog organization and an efficient customer ordering experience.",
    "/assets/projects/PSI.png",
    ["Shopify"],
    "Shopify",
    [],
    "https://phatsat.com/",
    "February 2024",
  ],
  [
    "Ambit",
    "Bold Shopify commerce concept for beverages and branded merchandise with responsive visual merchandising and streamlined product exploration.",
    "/assets/projects/Ambit.png",
    ["Shopify"],
    "Shopify",
    [],
    "https://ambit.one/",
    "February 2024",
  ],
  [
    "Avid Learner — V1",
    "First version of a WordPress learning and coaching platform with custom PHP functionality, structured content, and MySQL-backed data.",
    "/assets/projects/Al-v2.png",
    ["WordPress", "PHP", "MySQL"],
    "WordPress",
    [],
    "http://avidlearner-v1.infinityfreeapp.com/",
    "February 2026",
  ],
  [
    "Avid Learner — V2",
    "Redesigned version of the Avid Learner platform with improved information architecture, clearer service presentation, and a refined responsive experience.",
    "/assets/projects/av-v1.png",
    ["WordPress", "PHP", "MySQL"],
    "WordPress",
    [],
    "http://avidlearner-v2.infinityfreeapp.com/",
    "March 2026",
  ],
  [
    "Vietnamese Temple",
    "Welcoming community website for a Vietnamese Buddhist temple, presenting services, announcements, and visitor information through an accessible layout.",
    "/assets/projects/chuabaohai.jpg",
    ["WordPress", "Elementor"],
    "WordPress",
    [],
    "https://chuabaohai.us/",
    "March 2024",
  ],
  [
    "Lash & Facial by Annie",
    "Beauty-service website designed to showcase lash and facial offerings, communicate essential business information, and encourage appointment inquiries.",
    "/assets/projects/lash-facialbyannie.jpg",
    ["WordPress", "Elementor"],
    "WordPress",
    [],
    "https://lash-facialbyannie.com/",
    "March 2024",
  ],
  [
    "Analytics Dashboard",
    "Interactive Power BI reporting dashboard for a growing team.",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    ["Power BI", "Python", "SQL"],
    "Data",
  ],
  [
    "Sales Intelligence",
    "Automated sales analysis and forecasting data pipeline.",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=700&q=80",
    ["Python", "SQL", "Excel"],
    "Data",
  ],
  [
    "Customer Insights",
    "Segmentation dashboard revealing retention and churn trends.",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    ["Power BI", "DAX", "SQL"],
    "Data",
  ],
  [
    "Inventory Forecast",
    "Demand forecasting workflow for inventory planning.",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
    ["Python", "Pandas", "Excel"],
    "Data",
  ],
  [
    "Operations Monitor",
    "Executive KPI dashboard combining multiple data sources.",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80",
    ["Power BI", "ETL", "AWS"],
    "Data",
  ],
];
const track = document.querySelector("#projectTrack"),
  dots = document.querySelector("#projectDots"),
  filters = document.querySelector("#projectFilters"),
  projectCarousel = document.querySelector(".project-carousel");
let slide = 0,
  activeFilter = "All",
  filteredProjects = projects;
function visible() {
  return innerWidth < 620 ? 1 : innerWidth < 950 ? 3 : 5;
}
function updateArrows() {
  const max = Math.max(0, filteredProjects.length - visible());
  document.querySelector("#projectPrev").disabled = slide === 0;
  document.querySelector("#projectNext").disabled = slide >= max;
}
function renderProjects() {
  filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p[4] === activeFilter);
  slide = 0;
  track.style.transform = "translateX(0)";
  track.innerHTML = filteredProjects
    .map(
      (p, i) =>
        `<article class="project-card" tabindex="0" role="button" aria-label="View details for ${p[0]}" data-project="${projects.indexOf(p)}" style="animation-delay:${i * 0.04}s"><div class="card-inner"><div class="project-hover"><span>View Project ↗</span></div><img class="thumb" src="${p[2]}" alt="${p[0]}"><div class="card-body"><h3>${p[0]}</h3><p>${p[1]}</p>${p[3].map((t) => `<span class="tag">${t}</span>`).join("")}</div></div></article>`,
    )
    .join("");
  const pages = Math.max(1, filteredProjects.length - visible() + 1);
  dots.innerHTML =
    pages > 1
      ? Array.from(
          { length: pages },
          (_, i) =>
            `<i class="dot ${i === 0 ? "active" : ""}" data-i="${i}"></i>`,
        ).join("")
      : "";
  updateArrows();
}
function show(i) {
  const max = Math.max(0, filteredProjects.length - visible());
  slide = Math.max(0, Math.min(i, max));
  track.style.transform = `translateX(-${slide * (100 / visible())}%)`;
  dots
    .querySelectorAll(".dot")
    .forEach((d, n) => d.classList.toggle("active", n === slide));
  updateArrows();
}
filters.onclick = (e) => {
  const button = e.target.closest("[data-filter]");
  if (!button) return;
  projectCarousel.classList.remove("expanded");
  document.querySelector("#viewAllProjects").style.display = "inline-flex";
  activeFilter = button.dataset.filter;
  filters
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.toggle("active", b === button));
  renderProjects();
};
dots.onclick = (e) => {
  if (e.target.dataset.i !== undefined) show(+e.target.dataset.i);
};
document.querySelector("#projectPrev").onclick = () => show(slide - 1);
document.querySelector("#projectNext").onclick = () => show(slide + 1);
document.querySelector("#viewAllProjects").onclick = () => {
  activeFilter = "All";
  filters
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.filter === "All"));
  renderProjects();
  projectCarousel.classList.add("expanded");
  document.querySelector("#viewAllProjects").style.display = "none";
};
addEventListener("resize", () => {
  if (!projectCarousel.classList.contains("expanded")) renderProjects();
});
renderProjects();
const projectModal = document.querySelector("#projectModal"),
  modalClose = document.querySelector("#modalClose");
let lastProjectCard = null;
const projectRoles = {
  "Full Stack": "Full-Stack Developer",
  Shopify: "Shopify Developer",
  WordPress: "WordPress Developer",
  Data: "Data Analyst",
};
function openProject(index) {
  const p = projects[index],
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  lastProjectCard = document.activeElement;
  document.querySelector("#modalImage").src = p[2];
  document.querySelector("#modalImage").alt = p[0] + " preview";
  document.querySelector("#modalCategory").textContent = p[4] + " Project";
  document.querySelector("#modalTitle").textContent = p[0];
  document.querySelector("#modalDescription").textContent = p[1];
  document.querySelector("#modalCreated").textContent =
    p[7] ||
    (p[4] === "Data"
      ? months[index % 12] + " " + (2023 + (index % 4))
      : "—");
  document.querySelector("#modalRole").textContent = projectRoles[p[4]];
  document.querySelector("#modalTech").textContent = p[3].join(", ");
  document.querySelector("#modalType").textContent = p[4];
  const contributors = p[5] || [];
  const contributorSection = document.querySelector("#modalContributors");
  const contributorList = document.querySelector("#modalContributorList");
  contributorSection.hidden = contributors.length === 0;
  contributorList.innerHTML = contributors
    .map((contributor) => {
      const initials = contributor.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      const image = contributor.image
        ? `<img class="contributor" src="${contributor.image}" alt="${contributor.name}">`
        : `<span class="contributor contributor-initial" aria-hidden="true">${initials}</span>`;
      return contributor.url
        ? `<a href="${contributor.url}" target="_blank" rel="noreferrer" aria-label="View ${contributor.name}'s profile" data-name="${contributor.name}">${image}</a>`
        : `<span data-name="${contributor.name}">${image}</span>`;
    })
    .join("");
  document.querySelector("#modalSite").href =
    p[6] || "https://example.com/?project=" + encodeURIComponent(p[0]);
  projectModal.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}
function closeProject() {
  projectModal.classList.remove("open");
  document.body.style.overflow = "";
  if (lastProjectCard) lastProjectCard.focus();
}
track.addEventListener("click", (e) => {
  const card = e.target.closest("[data-project]");
  if (card) openProject(+card.dataset.project);
});
track.addEventListener("keydown", (e) => {
  const card = e.target.closest("[data-project]");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openProject(+card.dataset.project);
  }
});
modalClose.onclick = closeProject;
document.querySelector("#modalBack").onclick = closeProject;
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProject();
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("open"))
    closeProject();
});
const menu = document.querySelector("#menu"),
  nav = document.querySelector("#navlinks"),
  gooeyPill = document.querySelector("#gooeyPill");
menu.onclick = () => nav.classList.toggle("open");
nav.onclick = () => nav.classList.remove("open");
const links = [...document.querySelectorAll(".navlinks a")],
  sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
let activeNav = links[0],
  gooTimer;
function moveGoo(link, animate = true) {
  if (innerWidth <= 950 || !link) return;
  const navRect = nav.getBoundingClientRect(),
    linkRect = link.getBoundingClientRect();
  if (animate) {
    nav.classList.add("goo-moving");
    clearTimeout(gooTimer);
    gooTimer = setTimeout(() => nav.classList.remove("goo-moving"), 390);
  }
  gooeyPill.style.width = linkRect.width + "px";
  gooeyPill.style.transform = `translateX(${linkRect.left - navRect.left - 4}px)`;
}
function updateActiveNav() {
  const marker = scrollY + Math.min(innerHeight * 0.35, 260);
  let current = sections[0],
    highest = -1;
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8)
    current = document.querySelector("#contact");
  else
    sections.forEach((section) => {
      if (section.offsetTop <= marker && section.offsetTop > highest) {
        current = section;
        highest = section.offsetTop;
      }
    });
  const currentHash = "#" + current.id;
  links.forEach((link) =>
    link.classList.toggle("active", link.getAttribute("href") === currentHash),
  );
  activeNav =
    links.find((link) => link.classList.contains("active")) || links[0];
  moveGoo(activeNav);
  document.querySelector("#toTop").style.display =
    scrollY > 600 ? "block" : "none";
}
links.forEach((link) => {
  link.addEventListener("mouseenter", () => moveGoo(link));
  link.addEventListener("focus", () => moveGoo(link));
  link.addEventListener("click", () => {
    activeNav = link;
    links.forEach((item) => item.classList.toggle("active", item === link));
    moveGoo(link);
  });
});
nav.addEventListener("mouseleave", () => moveGoo(activeNav));
nav.addEventListener("focusout", (e) => {
  if (!nav.contains(e.relatedTarget)) moveGoo(activeNav);
});
addEventListener("scroll", updateActiveNav, { passive: true });
addEventListener("resize", () => {
  updateActiveNav();
  moveGoo(activeNav, false);
});
addEventListener("load", () => {
  updateActiveNav();
  moveGoo(activeNav, false);
});
updateActiveNav();
document.querySelector("#toTop").onclick = () =>
  scrollTo({ top: 0, behavior: "smooth" });
document.querySelector("#contactForm").onsubmit = (e) => {
  e.preventDefault();
  document.querySelector("#success").style.display = "block";
  e.target.reset();
  setTimeout(
    () => (document.querySelector("#success").style.display = "none"),
    3500,
  );
};
document.querySelectorAll(".aware-btn").forEach((button) => {
  const setOrigin = (e) => {
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--aware-x", e.clientX - rect.left + "px");
    button.style.setProperty("--aware-y", e.clientY - rect.top + "px");
  };
  button.addEventListener("pointerenter", setOrigin);
  button.addEventListener("pointerleave", setOrigin);
  button.addEventListener(
    "pointermove",
    (e) => {
      if (e.buttons) setOrigin(e);
    },
    { passive: true },
  );
});
const roleWords = [...document.querySelectorAll(".role-word")];
roleWords.forEach((word) => {
  const text = word.textContent;
  word.textContent = "";
  [...text].forEach((char) => {
    const span = document.createElement("span");
    span.className = "role-char";
    span.textContent = char;
    span.style.setProperty(
      "--scatter-x",
      (Math.random() * 180 - 90).toFixed(0) + "px",
    );
    span.style.setProperty(
      "--scatter-y",
      (Math.random() * 90 - 45).toFixed(0) + "px",
    );
    span.style.setProperty(
      "--scatter-z",
      (Math.random() * 500 - 250).toFixed(0) + "px",
    );
    span.style.setProperty(
      "--scatter-r",
      (Math.random() * 35 - 17).toFixed(0) + "deg",
    );
    span.style.transitionDelay = (Math.random() * 0.15).toFixed(2) + "s";
    word.appendChild(span);
  });
});
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let roleIndex = 0;
  setInterval(() => {
    roleWords[roleIndex].classList.remove("active");
    roleIndex = (roleIndex + 1) % roleWords.length;
    setTimeout(() => roleWords[roleIndex].classList.add("active"), 180);
  }, 4000);
}
const typedWord = document.querySelector("#typedWord"),
  typeWords = ["web", "data", "eCommerce"];
let wordIndex = 0,
  charIndex = typeWords[0].length,
  deleting = true;
function typeLoop() {
  const word = typeWords[wordIndex];
  typedWord.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(typeLoop, 105);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 55);
  } else if (deleting) {
    deleting = false;
    wordIndex = (wordIndex + 1) % typeWords.length;
    setTimeout(typeLoop, 260);
  } else {
    deleting = true;
    setTimeout(typeLoop, 1350);
  }
}
setTimeout(typeLoop, 1300);
const about = document.querySelector("#about");
let aboutAnimated = false;
const aboutObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !aboutAnimated) {
      aboutAnimated = true;
      document.querySelector("#toolkit").classList.add("animate");
      document.querySelectorAll("[data-count]").forEach((counter) => {
        const target = +counter.dataset.count,
          suffix = counter.dataset.suffix || "",
          start = performance.now(),
          duration = 1300;
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1),
            eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
      aboutObserver.disconnect();
    }
  },
  { threshold: 0.28 },
);
aboutObserver.observe(about);
const timelines = [...document.querySelectorAll(".timeline")];
let timelineTicking = false;
function updateTimelines() {
  const trigger = innerHeight * 0.58;
  timelines.forEach((timeline) => {
    if (timeline.offsetHeight < 20) return;
    const rect = timeline.getBoundingClientRect(),
      progress = Math.max(0, Math.min(1, (trigger - rect.top) / rect.height));
    timeline.style.setProperty("--line-progress", progress);
    timeline.querySelectorAll(".job").forEach((job) => {
      const jobRect = job.getBoundingClientRect(),
        jobProgress = Math.max(
          0,
          Math.min(
            1,
            (trigger - jobRect.top) / Math.max(60, jobRect.height * 0.7),
          ),
        );
      job.style.setProperty("--job-progress", jobProgress);
    });
  });
  timelineTicking = false;
}
function requestTimelineUpdate() {
  if (!timelineTicking) {
    timelineTicking = true;
    requestAnimationFrame(updateTimelines);
  }
}
addEventListener("scroll", requestTimelineUpdate, { passive: true });
addEventListener("resize", requestTimelineUpdate);
updateTimelines();
const journeyToggle = document.querySelector("#journeyToggle"),
  journeyExtra = document.querySelector("#journeyExtra");
journeyToggle.onclick = () => {
  const open = journeyExtra.classList.toggle("open");
  journeyToggle.setAttribute("aria-expanded", open);
  journeyToggle.textContent = open ? "Show Less ↑" : "View Full Resume →";
  setTimeout(() => {
    updateTimelines();
    if (open)
      journeyExtra.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 250);
};
const eduShowcase = document.querySelector("#eduShowcase"),
  eduCards = [...eduShowcase.querySelectorAll(".edu-card,.cert-card")];
eduShowcase.addEventListener("pointerenter", () =>
  eduShowcase.classList.add("spotlight-on"),
);
eduShowcase.addEventListener("pointerleave", () =>
  eduShowcase.classList.remove("spotlight-on"),
);
eduShowcase.addEventListener(
  "pointermove",
  (e) => {
    eduCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", e.clientX - rect.left + "px");
      card.style.setProperty("--spot-y", e.clientY - rect.top + "px");
    });
  },
  { passive: true },
);
document.querySelector("#newsletterForm").onsubmit = (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  button.textContent = "✓";
  e.target.reset();
  setTimeout(() => (button.textContent = "→"), 2500);
};
const stackCards = [...document.querySelectorAll(".stack-card")];
let stackTicking = false;
function updateStackCards() {
  const vh = innerHeight,
    mobile = innerWidth <= 620,
    stickyTop = vh * (mobile ? 0.09 : 0.14),
    minScale = mobile ? 0.96 : 0.9;
  stackCards.forEach((card, index) => {
    const next = stackCards[index + 1];
    if (!next) return;
    const distance = next.getBoundingClientRect().top - stickyTop;
    if (distance < vh && distance > 0) {
      const scale = 1 - (vh - distance) * ((1 - minScale) / vh),
        finalScale = Math.max(minScale, Math.min(1, scale));
      card.style.transform = `scale(${finalScale})`;
      card.style.filter = `brightness(${Math.max(0.9, finalScale)})`;
    } else if (distance <= 0) {
      card.style.transform = `scale(${minScale})`;
      card.style.filter = "brightness(.9)";
    } else {
      card.style.transform = "scale(1)";
      card.style.filter = "brightness(1)";
    }
  });
  stackTicking = false;
}
addEventListener(
  "scroll",
  () => {
    if (!stackTicking) {
      stackTicking = true;
      requestAnimationFrame(updateStackCards);
    }
  },
  { passive: true },
);
addEventListener("resize", updateStackCards);
updateStackCards();
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches,
    tokens = new WeakMap();
  function count(el, target, suffix, duration = 1300) {
    const token = (tokens.get(el) || 0) + 1;
    tokens.set(el, token);
    el.textContent = "0";
    if (reduce) {
      el.textContent = target + suffix;
      return;
    }
    const start = performance.now();
    function tick(now) {
      if (tokens.get(el) !== token) return;
      const progress = Math.min((now - start) / duration, 1),
        eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const hero = document.querySelector("#home"),
    heroStats = [...document.querySelectorAll(".hero .float-stat strong")];
  new IntersectionObserver(
    (entries) => {
      const visible = entries[0].isIntersecting;
      if (visible)
        heroStats.forEach((el, i) => count(el, i === 0 ? 3 : 20, "+"));
      else
        heroStats.forEach((el) => {
          tokens.set(el, (tokens.get(el) || 0) + 1);
          el.textContent = "0";
        });
    },
    { threshold: 0 },
  ).observe(hero);
  const about = document.querySelector("#about"),
    aboutCounters = [...about.querySelectorAll("[data-count]")],
    toolkit = document.querySelector("#toolkit");
  new IntersectionObserver(
    (entries) => {
      const visible = entries[0].isIntersecting;
      if (visible) {
        aboutCounters.forEach((el) =>
          count(el, +el.dataset.count, el.dataset.suffix || ""),
        );
        toolkit.classList.remove("animate");
        requestAnimationFrame(() =>
          requestAnimationFrame(() => toolkit.classList.add("animate")),
        );
      } else {
        aboutCounters.forEach((el) => {
          tokens.set(el, (tokens.get(el) || 0) + 1);
          el.textContent = "0";
        });
        toolkit.classList.remove("animate");
      }
    },
    { threshold: 0 },
  ).observe(about);
})();
(() => {
  const menu = document.querySelector("#menu"),
    nav = document.querySelector("#navlinks");
  if (!menu || !nav) return;
  function sync() {
    const open = nav.classList.contains("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.textContent = open ? "×" : "☰";
  }
  menu.setAttribute("aria-controls", "navlinks");
  sync();
  menu.addEventListener("click", () => requestAnimationFrame(sync));
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) requestAnimationFrame(sync);
  });
  addEventListener(
    "resize",
    () => {
      if (innerWidth > 950) {
        nav.classList.remove("open");
        sync();
      }
    },
    { passive: true },
  );
})();
(() => {
  const loader = document.querySelector("#pageLoader");
  if (!loader) return;
  const loaderStartedAt = performance.now();
  const minimumLoaderTime = 1500;
  let removed = false;
  function finish() {
    if (removed) return;
    removed = true;
    loader.classList.add("done");
    setTimeout(() => loader.remove(), 850);
  }
  addEventListener(
    "load",
    () => {
      const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const remaining = reduceMotion
        ? 0
        : Math.max(0, minimumLoaderTime - (performance.now() - loaderStartedAt));
      setTimeout(finish, remaining);
    },
    { once: true },
  );
  setTimeout(finish, 3000);
})();

document.querySelectorAll(".role-char").forEach((char) => {
  if (char.textContent.trim() === "") char.classList.add("role-space");
});

document.querySelectorAll(".role-word").forEach((role) => {
  role.textContent = role.textContent;
});
