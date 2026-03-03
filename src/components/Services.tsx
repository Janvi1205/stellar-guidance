import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Heart, Briefcase, Home, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Star, title: "Birth Chart Analysis", description: "Deep dive into your natal chart to uncover your life's blueprint, strengths, and karmic patterns." },
  { icon: Heart, title: "Love & Relationships", description: "Compatibility analysis and timing guidance for meaningful romantic connections." },
  { icon: Briefcase, title: "Career & Finance", description: "Discover your professional destiny and optimal timing for business & financial decisions." },
  { icon: Home, title: "Vastu & Relocation", description: "Astrological guidance for home energy alignment and the best places for you to thrive." },
  { icon: Sparkles, title: "Spiritual Growth", description: "Unlock your spiritual potential through planetary insights and personalized remedies." },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          What We <span className="gradient-text">Offer</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive astrology services tailored to every aspect of your life.
        </p>

        <div className="services-grid mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card group bg-card rounded-2xl p-8 border border-border/50 card-hover cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
