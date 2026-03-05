import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Priya M.", location: "Toronto, Canada", text: "The birth chart reading was incredibly accurate. It gave me clarity on my career path that I hadn't found anywhere else. Highly recommend!", rating: 5 },
  { name: "James R.", location: "New York, USA", text: "I was skeptical at first, but the consultation was deeply insightful. The remedies suggested have genuinely improved my relationships.", rating: 5 },
  { name: "Anita S.", location: "London, UK", text: "An extraordinary experience. The level of detail and accuracy in the reading was mind-blowing. I've been a returning client for 3 years.", rating: 5 },
  { name: "David K.", location: "Melbourne, Australia", text: "Professional, compassionate, and incredibly knowledgeable. Every session leaves me feeling more aligned with my purpose.", rating: 5 },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
    }
  }, [current]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-section", {
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: ".testimonial-section", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding">
      {/* Ornamental divider */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <span className="text-accent text-xl">✦</span>
          <span className="text-primary text-2xl">❃</span>
          <span className="text-accent text-xl">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
        </div>
      </div>

      <div className="testimonial-section max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
          What Clients <span className="gradient-text">Say</span>
        </h2>

        <div ref={cardRef} className="mt-14 bg-card rounded-2xl p-8 md:p-14 border border-border/50 shadow-lg relative overflow-hidden">
          {/* Subtle decorative quote mark */}
          <span className="absolute top-4 left-6 text-6xl md:text-8xl text-primary/[0.06] font-display leading-none select-none">"</span>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-base md:text-xl text-foreground leading-relaxed italic relative z-10">"{t.text}"</p>
          <p className="mt-6 font-display font-semibold text-foreground text-sm md:text-base">{t.name}</p>
          <p className="text-xs md:text-sm text-muted-foreground">{t.location}</p>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-7 md:w-8" : "bg-border hover:bg-muted-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
