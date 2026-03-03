import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroPortrait from "@/assets/hero-portrait.png";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-image", { x: 60, opacity: 0, duration: 1.2, delay: 0.4, ease: "power3.out" });
      gsap.from(".hero-shape", { scale: 0, opacity: 0, duration: 1.5, delay: 0.8, ease: "elastic.out(1,0.5)", stagger: 0.2 });

      // Floating Om Symbol Animation
      gsap.to(".om-symbol", {
        y: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center section-padding overflow-hidden bg-background">
      {/* Om Symbol Background (Text-based for maximum fidelity) */}
      <div className="om-symbol absolute top-1/2 left-[15%] -translate-y-1/2 opacity-[0.08] pointer-events-none blur-[1px] text-[350px] font-bold text-[#ea580c] select-none leading-none">
        ॐ
      </div>

      {/* Minimal Floating Star Particles */}
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
              backgroundColor: i % 2 === 0 ? '#fff' : '#fbbf24',
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      {/* Very subtle floating shapes */}
      <div className="hero-shape absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/5 animate-float" />
      <div className="hero-shape absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float-slow" />

      {/* Original type gradient (very subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <div className="relative z-30">
          <p className="hero-sub text-primary font-medium tracking-widest uppercase text-sm mb-4">Vedic Astrology Consultation</p>
          <div className="relative inline-block mb-2">
            {/* Soft radial warm golden glow behind heading */}
            <div className="absolute -inset-16 bg-[radial-gradient(circle,rgba(251,191,36,0.25)_0%,transparent_70%)] blur-3xl -z-10" />
            <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground relative z-10">
              Discover Your <span className="gradient-text">Cosmic Path</span>
            </h1>
          </div>
          <p className="hero-sub mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Unlock the secrets of your birth chart with personalized Vedic astrology consultations. Guidance for love, career, health & spiritual growth.
          </p>

          <div className="mt-10 block">
            <a
              href="#booking"
              className="hero-cta shine-sweep relative z-50 inline-block px-10 py-5 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/30 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] hover:scale-[1.05] transition-all duration-300 text-lg"
              style={{ display: 'inline-block', opacity: 1, visibility: 'visible', color: 'white', backgroundColor: 'hsl(var(--primary))' }}
            >
              ✨ Book My Consultation
            </a>

            {/* Elegant Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 opacity-70">
              <span className="text-[14px] font-medium flex items-center gap-2"><span className="text-accent text-lg">⭐</span> 5,000+ Happy Clients</span>
              <span className="text-[14px] font-medium flex items-center gap-2"><span className="text-accent text-lg">🔒</span> 100% Confidential</span>
              <span className="text-[14px] font-medium flex items-center gap-2"><span className="text-accent text-lg">🌍</span> Global Consultations</span>
            </div>
          </div>
        </div>

        <div className="hero-image relative flex justify-center lg:justify-end z-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-2xl" />
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
