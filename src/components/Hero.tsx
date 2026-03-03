import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroPortrait from "@/assets/hero-portrait.png";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, delay: 0.6, ease: "power3.out" });
      gsap.from(".hero-image", { x: 60, opacity: 0, duration: 1.2, delay: 0.4, ease: "power3.out" });
      gsap.from(".hero-shape", { scale: 0, opacity: 0, duration: 1.5, delay: 0.8, ease: "elastic.out(1,0.5)", stagger: 0.2 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Floating shapes */}
      <div className="hero-shape absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="hero-shape absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/15 animate-float-slow" />
      <div className="hero-shape absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-primary/5 animate-float-slow" />
      <div className="hero-shape absolute top-1/3 left-1/3 w-10 h-10 rounded-full bg-accent/10 animate-float" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <div>
          <p className="hero-sub text-primary font-medium tracking-widest uppercase text-sm mb-4">Vedic Astrology Consultation</p>
          <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground">
            Discover Your <span className="gradient-text">Cosmic Path</span>
          </h1>
          <p className="hero-sub mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Unlock the secrets of your birth chart with personalized Vedic astrology consultations. Guidance for love, career, health & spiritual growth.
          </p>
          <a href="#booking" className="hero-cta inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 text-lg">
            Book Consultation
          </a>
        </div>

        <div className="hero-image relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={heroPortrait}
              alt="Astrology consultant"
              className="relative w-80 md:w-96 rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
