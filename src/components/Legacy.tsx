import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import grandfatherImg from "@/assets/grandfather.png";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textEl = sectionRef.current?.querySelector(".legacy-text");
      const imgEl = sectionRef.current?.querySelector(".legacy-image");
      if (textEl) {
        gsap.fromTo(textEl, { x: -40, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: textEl, start: "top 90%" },
        });
      }
      if (imgEl) {
        gsap.fromTo(imgEl, { x: 40, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imgEl, start: "top 90%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="legacy" className="section-padding bg-background">
      {/* Ornamental divider */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-16">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
          <span className="text-accent text-lg md:text-2xl">✦</span>
          <span className="text-primary text-xl md:text-3xl">☸</span>
          <span className="text-accent text-lg md:text-2xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3 text-center">Our Heritage</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight text-center mb-10 md:mb-16">
          My Legacy & <span className="gradient-text">Roots</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text - left on desktop, below on mobile */}
          <div className="legacy-text order-2 lg:order-1 pl-2 sm:pl-4 md:pl-6 lg:pl-8">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 md:mb-4">In Loving Memory</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent leading-tight mb-4 md:mb-6">
              Late. Sri Mulkh Raj Sachdeva
            </h3>
            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                My journey in astrology stands on the blessings and legacy of my grandfather,
                Late Sri Mulkh Raj Sachdeva — a respected palmist who devoted his life to the
                sacred science of hand reading. His wisdom, discipline, and dedication to guiding
                people through spiritual knowledge laid the foundation for our family's path in
                the occult sciences.
              </p>
            </div>
            <p className="mt-6 md:mt-8 text-sm md:text-base italic text-muted-foreground/80 border-l-2 border-accent/50 pl-4">
              "The stars guided him, and through him, they now guide us all."
            </p>
          </div>

          {/* Photo - right on desktop, top on mobile */}
          <div className="legacy-image order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72">
              {/* Sacred glow */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-amber-500/20 via-yellow-400/15 to-primary/20 rounded-2xl blur-2xl" />
              {/* Golden border frame */}
              <div className="relative p-1 md:p-1.5 rounded-2xl bg-gradient-to-br from-amber-500/60 via-yellow-400/40 to-amber-600/60 shadow-2xl">
                <img
                  src={grandfatherImg}
                  alt="Late Sri Mulkh Raj Sachdeva — Respected Palmist"
                  className="relative rounded-xl w-full object-cover aspect-[3/4]"
                  loading="lazy"
                  style={{ filter: "sepia(15%) saturate(1.1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
