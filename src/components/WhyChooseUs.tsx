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
    const ctx = gsap.context(() => {
      gsap.from(".feature-item", {
        y: 40, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".features-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Trusted by <span className="gradient-text">Thousands</span>
        </h2>

        <div className="features-grid mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
