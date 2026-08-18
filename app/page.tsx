import Script from "next/script";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { TechStack } from "@/components/sections/TechStack/TechStack";
import { About } from "@/components/sections/About/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects/FeaturedProjects";
import { Experience } from "@/components/sections/Experience/Experience";
import { Education } from "@/components/sections/Education/Education";
import { Services } from "@/components/sections/Services/Services";
import { Expertise } from "@/components/sections/Expertise/Expertise";
import { Contact } from "@/components/sections/Contact/Contact";
import { ProjectModal } from "@/components/ui/ProjectModal/ProjectModal";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";

export default function HomePage() {
  return (
    <>
      <div className="page-loader" id="pageLoader" role="status" aria-label="Loading Nghia Ha portfolio">
        <div className="loader-brand">
          <span className="loader-logo-ring">
            <Image
              className="loader-logo"
              src="/assets/logos/nh-logo-header-clear.png"
              alt=""
              width={92}
              height={92}
              priority
            />
          </span>
          <span className="loader-name-mask">
            <span className="loader-name">
              <span>Nghia </span>
              <span className="loader-last-name">Ha</span>
              <span className="loader-dot" aria-hidden="true">.</span>
            </span>
          </span>
        </div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <FeaturedProjects />
        <section className="section alt" id="experience">
          <div className="wrap experience-grid">
            <Experience />
            <Education />
          </div>
        </section>
        <Services />
        <Expertise />
        <Contact />
      </main>
      <ProjectModal />
      <Footer />
      <BackToTop />
      <Script src="/portfolio.js" strategy="afterInteractive" />
    </>
  );
}
