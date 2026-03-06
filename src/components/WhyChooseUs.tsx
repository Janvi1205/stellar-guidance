import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lock, Sparkles, BookOpen, CheckCircle, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Target, title: "Accurate & Practical Predictions", desc: "I focus on realistic and timing-based predictions using authentic Vedic astrology principles." },
  { icon: Lock, title: "Confidential & Safe Consultation", desc: "Your personal details and life matters are treated with complete privacy and respect." },
  { icon: Sparkles, title: "Personalised Remedies", desc: "No generic solutions. Every remedy is carefully tailored to your birth chart and life situation." },
  { icon: BookOpen, title: "Years of Experience", desc: "With deep study and hands-on practice, I provide guidance based on knowledge and real consultation experience." },
  { icon: CheckCircle, title: "Practical Solutions", desc: "My remedies are simple, doable, and aligned with your lifestyle." },
  { icon: Headphones, title: "Continuous Support", desc: "Guidance doesn't end after the session. I ensure clarity and answer follow-up doubts when needed." },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".feature-item");
    if (!items?.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(items,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".features-grid"), start: "top 90%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
      {/* Ornamental divider */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-16">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <span className="text-accent text-lg md:text-xl">✦</span>
          <span className="text-primary text-xl md:text-2xl">⟡</span>
          <span className="text-accent text-lg md:text-xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
          Trusted by <span className="gradient-text">Thousands</span>
        </h2>

        <div className="features-grid mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item flex flex-col items-center text-center p-5 md:p-6 rounded-2xl hover:bg-card/60 transition-colors duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-display font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1.5 md:mt-2 text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
