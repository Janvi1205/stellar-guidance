import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Clock, Globe, Award, Users, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Shield, title: "100% Confidential", desc: "Your readings and personal details are always private and secure." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book sessions that fit your timezone – available worldwide." },
  { icon: Globe, title: "Global Clientele", desc: "Trusted by clients across Canada, US, UK, and 30+ countries." },
  { icon: Award, title: "Certified Expert", desc: "Formally trained in Vedic astrology with decades of practice." },
  { icon: Users, title: "Personalized Approach", desc: "Every consultation is unique and tailored to your specific chart." },
  { icon: Headphones, title: "Post-Session Support", desc: "Follow-up guidance and remedies included with every session." },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".feature-item");
    if (!items?.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(items,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".features-grid"), start: "top 90%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
      {/* Ornamental divider */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <span className="text-accent text-xl">✦</span>
          <span className="text-primary text-2xl">⟡</span>
          <span className="text-accent text-xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
          Trusted by <span className="gradient-text">Thousands</span>
        </h2>

        <div className="features-grid mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item flex flex-col items-center text-center p-6 rounded-2xl hover:bg-card/60 transition-colors duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
