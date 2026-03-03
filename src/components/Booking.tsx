import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-content", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".booking-content", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "17789973222";
    const message = `Hello Astro Aarpit, I would like to book a consultation.%0A%0A*Details:*%0A- *Name:* ${form.name}%0A- *Email:* ${form.email}%0A- *Phone:* ${form.phone || "Not provided"}%0A- *Service:* ${form.service || "Not selected"}%0A- *Message:* ${form.message || "No message provided"}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section ref={sectionRef} id="booking" className="section-padding bg-secondary/30">
      <div className="booking-content max-w-3xl mx-auto text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get Started</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Book Your <span className="gradient-text">Consultation</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Fill out the form below and we'll schedule your personalized session.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            >
              <option value="">Select Service</option>
              <option value="birth-chart">Birth Chart Analysis</option>
              <option value="love">Love & Relationships</option>
              <option value="career">Career & Finance</option>
              <option value="vastu">Vastu & Relocation</option>
              <option value="spiritual">Spiritual Growth</option>
            </select>
          </div>
          <textarea
            placeholder="Your Message (optional)"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
