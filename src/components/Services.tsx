import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceBirthChart from "@/assets/service-birth-chart.jpg";
import serviceLove from "@/assets/service-love.jpg";
import serviceCareer from "@/assets/service-career.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: serviceBirthChart,
    title: "Birth Chart Analysis",
    description: "A focused reading of your Kundli uncovering your life's blueprint, strengths, and karmic patterns.",
    time: "⏱ 15 mins",
    price: "₹666",
  },
  {
    image: serviceCareer,
    title: "Detailed Kundli Reading",
    description: "An in-depth birth chart consultation covering life path, planetary influences, and personalized guidance.",
    time: "⏱ 30 mins",
    price: "₹1,100",
  },
  {
    image: serviceLove,
    title: "Marriage & Couple Compatibility",
    description: "Compatibility analysis for couples covering emotional, spiritual, and karmic alignment for a harmonious union.",
    time: "⏱ Joint Session",
    price: "₹1,999",
  },
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
      <div className="max-w-7xl mx-auto mb-10 md:mb-16">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <span className="text-accent text-lg md:text-xl">✦</span>
          <span className="text-primary text-xl md:text-2xl">✧</span>
          <span className="text-accent text-lg md:text-xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Our Services</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
          What We <span className="gradient-text">Offer</span>
        </h2>
        <p className="mt-3 md:mt-4 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive astrology services tailored to every aspect of your life.
        </p>

        <div className="services-grid mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {services.map((service) => (
            <div key={service.title} className="service-card group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover text-left w-full max-w-sm sm:max-w-none">
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-7">
                <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 md:mt-3 text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">{service.description}</p>

                <div className="mt-4 md:mt-5 flex items-center justify-between">
                  <span className="text-primary font-medium text-xs md:text-sm">{service.time}</span>
                  <a
                    href={`https://wa.me/17789973222?text=${encodeURIComponent(`Hello Astro Aarpit, I want to consult about ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-primary/50 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs md:text-sm"
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
