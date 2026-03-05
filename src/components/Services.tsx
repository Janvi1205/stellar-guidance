import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceBirthChart from "@/assets/service-birth-chart.jpg";
import serviceLove from "@/assets/service-love.jpg";
import serviceCareer from "@/assets/service-career.jpg";
import serviceVastu from "@/assets/service-vastu.jpg";
import serviceSpiritual from "@/assets/service-spiritual.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { image: serviceBirthChart, title: "Birth Chart Analysis", description: "Deep dive into your natal chart to uncover your life's blueprint, strengths, and karmic patterns." },
  { image: serviceLove, title: "Love & Relationships", description: "Compatibility analysis and timing guidance for meaningful romantic connections." },
  { image: serviceCareer, title: "Career & Finance", description: "Discover your professional destiny and optimal timing for business & financial decisions." },
  { image: serviceVastu, title: "Vastu & Relocation", description: "Astrological guidance for home energy alignment and the best places for you to thrive." },
  { image: serviceSpiritual, title: "Spiritual Growth", description: "Unlock your spiritual potential through planetary insights and personalized remedies." },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".services-grid"), start: "top 90%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding">
      {/* Ornamental divider */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <span className="text-accent text-xl">✦</span>
          <span className="text-primary text-2xl">✧</span>
          <span className="text-accent text-xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Our Services</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
          What We <span className="gradient-text">Offer</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive astrology services tailored to every aspect of your life.
        </p>

        <div className="services-grid mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover text-left">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">{service.description}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-bold text-primary">₹2,999</span>
                  <a
                    href={`https://wa.me/17789973222?text=${encodeURIComponent(`Hello Astro Aarpit, I want to consult about ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full border border-primary/50 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs md:text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
