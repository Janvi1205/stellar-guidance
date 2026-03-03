import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "@/assets/about-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Experience", value: 15 },
  { label: "Happy Clients", value: 5000 },
  { label: "Consultations", value: 12000 },
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="about-image">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-xl" />
            <img src={aboutImage} alt="Astrology consultation" className="relative rounded-2xl shadow-xl w-full object-cover" />
          </div>
        </div>
        <div className="about-text">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
            Guiding Lives Through the <span className="gradient-text">Stars</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            With over 15 years of expertise in Vedic astrology, we've helped thousands of individuals across the globe navigate life's biggest decisions. Our consultations blend ancient wisdom with modern insights to provide actionable, personalized guidance.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="counter block text-3xl md:text-4xl font-display font-bold text-primary" data-target={stat.value}>0+</span>
                <span className="text-sm text-muted-foreground mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
