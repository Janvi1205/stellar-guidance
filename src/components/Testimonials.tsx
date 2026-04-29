import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Sophie K.", location: "Toronto, Canada", text: "Aarpit's reading was incredibly accurate. He predicted a major career shift 3 months before it happened. I was completely blown away by the precision!", rating: 5 },
  { name: "James R.", location: "New York, USA", text: "I came with doubts and left with complete clarity. His Kundli analysis was so detailed and the remedies he suggested were simple yet effective.", rating: 5 },
  { name: "Simran D.", location: "Vancouver, Canada", text: "The marriage compatibility reading he did for me and my partner gave us so much confidence. Truly a gifted astrologer from a legendary lineage.", rating: 5 },
  { name: "James T.", location: "Melbourne, Australia", text: "What sets Aarpit apart is how practical his guidance is. No fear, no drama — just clear, honest, and deeply accurate readings.", rating: 5 },
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
      gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    }
  }, [current]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-inner", {
        opacity: 0, y: 40, duration: 0.9,
        scrollTrigger: { trigger: ".testimonial-inner", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #0d0a07 0%, #130e06 40%, #0a0806 100%)" }}
    >
      {/* Ambient glowing orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(234,120,20,0.13) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(234,120,20,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="testimonial-inner relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">✦ Testimonials</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
          Voices of{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Transformation
          </span>
        </h2>

        {/* Thin gold divider */}
        <div className="mx-auto mt-4 mb-10 w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        {/* Card */}
        <div
          ref={cardRef}
          className="relative rounded-2xl border border-orange-500/15 p-8 md:p-12 shadow-2xl overflow-hidden"
          style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(234,120,20,0.05) 100%)", backdropFilter: "blur(12px)" }}
        >
          {/* Giant decorative quote */}
          <span
            className="absolute top-2 left-5 font-display leading-none select-none text-[7rem] md:text-[9rem]"
            style={{ color: "rgba(234,120,20,0.12)", lineHeight: 1 }}
          >
            "
          </span>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6 relative z-10">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote text */}
          <p className="relative z-10 text-base md:text-xl text-white/85 leading-relaxed italic">
            "{t.text}"
          </p>

          {/* Author */}
          <p className="mt-6 font-display font-bold text-orange-400 text-sm md:text-base relative z-10">
            {t.name}
          </p>
          <p className="text-xs md:text-sm text-white/40 tracking-widest uppercase mt-1 relative z-10">
            {t.location}
          </p>

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500/15 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-orange-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-400 hover:bg-orange-500/15 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
