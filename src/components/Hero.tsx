import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroPortrait from "@/assets/hero-portrait.png";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-cta-wrap", { y: 30, opacity: 0, duration: 0.8, delay: 0.6, ease: "power3.out" });
      gsap.from(".hero-image", { x: 60, opacity: 0, duration: 1.2, delay: 0.4, ease: "power3.out" });
      gsap.from(".hero-shape", { scale: 0, opacity: 0, duration: 1.5, delay: 0.8, ease: "elastic.out(1,0.5)", stagger: 0.2 });

      gsap.to(".hero-portrait-float", {
        y: -20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut"
      });

      gsap.to(".om-symbol", {
        y: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center section-padding overflow-hidden bg-background">
      {/* Om Symbol */}
      <div className="om-symbol absolute top-1/2 left-[10%] md:left-[15%] -translate-y-1/2 opacity-[0.06] pointer-events-none blur-[1px] text-[150px] sm:text-[200px] md:text-[300px] lg:text-[350px] font-bold text-primary select-none leading-none">
        ॐ
      </div>

      {/* Star Particles */}
      <div className="star-field">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="star animate-star-float"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 8 + 's',
              backgroundColor: i % 2 === 0 ? '#fff' : 'hsl(48, 96%, 53%)',
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="hero-shape absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/5 animate-float" />
      <div className="hero-shape absolute top-40 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/10 animate-float-slow" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-7xl mx-auto">
        <div className="relative z-30 text-center lg:text-left">
          <p className="hero-sub text-primary font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm mb-3 md:mb-4">Vedic Astrology Consultation</p>
          <div className="relative inline-block mb-2">
            <div className="absolute -inset-12 md:-inset-16 bg-[radial-gradient(circle,hsl(48_96%_53%_/_0.2)_0%,transparent_70%)] blur-3xl -z-10" />
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-foreground relative z-10">
              Discover Your <span className="gradient-text">Cosmic Path</span>
            </h1>
          </div>
          <p className="hero-sub mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
            Unlock the secrets of your birth chart with personalized Vedic astrology consultations. Guidance for love, career, health & spiritual growth.
          </p>

          <div className="hero-cta-wrap mt-6 md:mt-10 block">
            <a
              href="#booking"
              className="shine-sweep relative z-50 inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 text-xs sm:text-sm md:text-base"
            >
              ✨ Book My Consultation
            </a>

            {/* Trust Indicators */}
            <div className="mt-5 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-2 opacity-70">
              <span className="text-[11px] sm:text-xs md:text-[13px] font-medium flex items-center gap-1.5"><span className="text-accent">⭐</span> 1,000+ Happy Clients</span>
              <span className="text-[11px] sm:text-xs md:text-[13px] font-medium flex items-center gap-1.5"><span className="text-accent">🔒</span> 100% Confidential</span>
              <span className="text-[11px] sm:text-xs md:text-[13px] font-medium flex items-center gap-1.5"><span className="text-accent">🌍</span> Global Consultations</span>
            </div>
          </div>
        </div>

        <div className="hero-image relative flex justify-center lg:justify-end z-10">
          <img
            src={heroPortrait}
            alt="Astro Aarpit - Vedic Astrologer"
            className="hero-portrait-float relative mt-8 sm:mt-12 md:mt-16 lg:mt-[6.3rem] w-60 sm:w-72 md:w-[26rem] lg:w-[32rem] xl:w-[38rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
