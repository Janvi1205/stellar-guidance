import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "@/assets/AstroAarpit_Pic-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Experience", value: 3 },
  { label: "Happy Clients", value: 1000 },
  { label: "Consultations", value: 1000 },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const aboutImg = sectionRef.current?.querySelector(".about-image");
      const aboutTxt = sectionRef.current?.querySelector(".about-text");
      if (aboutImg) {
        gsap.fromTo(aboutImg, { x: -60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: aboutImg, start: "top 90%" },
        });
      }
      if (aboutTxt) {
        gsap.fromTo(aboutTxt, { x: 60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: aboutTxt, start: "top 90%" },
        });
      }

      document.querySelectorAll<HTMLSpanElement>(".counter").forEach((el) => {
        const target = parseInt(el.dataset.target || "0");
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: target, duration: 2, ease: "power1.out", snap: { innerText: 1 },
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate() {
            el.textContent = Math.floor(Number(el.innerText)).toLocaleString() + "+";
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-secondary/30">
      {/* Ornamental divider at top */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <span className="text-accent text-xl">✦</span>
          <span className="text-primary text-2xl">☽</span>
          <span className="text-accent text-xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3 text-center">About Me</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight text-center mb-14">
          Guiding Lives Through the <span className="gradient-text">Stars</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="about-image order-1 lg:order-1 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-xl" />
              {/* Warm border frame like Legacy section */}
              <div className="relative p-1 rounded-2xl   w-fit mx-auto">
                <img
                  src={aboutImage}
                  alt="Astrology consultation"
                  className="relative rounded-xl -mt-[22px] w-[440px] h-[640px] object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="about-text order-2 lg:order-2">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                From a third-generation family rooted in the occult sciences, I carry forward a legacy that began with my grandfather — a skilled palmist and continued through my father, a dedicated Vedic astrologer. Continuing this sacred lineage, I have devoted my life to astrology, Vastu, and spiritual guidance not just as a profession, but as a family tradition and a spiritual calling.              </p>
              <p>
                As a Vedic Astrologer, Vastu Expert, and Spiritual Guide, I blend generational wisdom with modern practical application, focusing on clarity, accurate timing, and personalised remedies tailored to your life.              </p>
              <p>
                I believe astrology should empower you, not create fear. My mission is to help you understand your karmic patterns, make confident decisions, and align your life with positive energies.              </p>

            </div>

            <p className="mt-8 text-sm md:text-base italic text-muted-foreground/80 border-l-2 border-accent/50 pl-4">
              "The cosmos is within us. We are made of star-stuff."
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="counter block text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary" data-target={stat.value}>0+</span>
                  <span className="text-xs md:text-sm text-muted-foreground mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
