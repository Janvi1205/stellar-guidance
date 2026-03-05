const Footer = () => (
  <footer className="section-padding bg-foreground text-background/80 pt-16 pb-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
      <div>
        <h3 className="font-display text-xl font-bold text-background">
          Astro<span className="text-primary">Aarpit</span>
        </h3>
        <p className="mt-3 text-xs md:text-sm leading-relaxed text-background/60">
          Trusted Vedic astrology consultations for clients worldwide. Guiding you through life's journey with ancient cosmic wisdom.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-background mb-4 text-sm md:text-base">Quick Links</h4>
        <div className="space-y-2 text-xs md:text-sm">
          <a href="#about" className="block hover:text-primary transition-colors">About</a>
          <a href="#services" className="block hover:text-primary transition-colors">Services</a>
          <a href="#booking" className="block hover:text-primary transition-colors">Book Consultation</a>
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-background mb-4 text-sm md:text-base">Contact</h4>
        <div className="space-y-2 text-xs md:text-sm text-background/60">
          <p>info@astroaarpit.com</p>
          <p>+1 (778) 997-3222</p>
          <p>Toronto, Canada</p>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-6 border-t border-background/10 text-center text-xs md:text-sm text-background/40">
      © {new Date().getFullYear()} AstroAarpit. All rights reserved.
    </div>
  </footer>
);

export default Footer;
