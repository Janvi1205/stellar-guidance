const Footer = () => (
  <footer className="section-padding bg-foreground text-background/80 pt-12 md:pt-16 pb-6 md:pb-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
      <div>
        <h3 className="font-display text-lg md:text-xl font-bold text-background">
          Astro<span className="text-primary">Aarpit</span>
        </h3>
        <p className="mt-2 md:mt-3 text-xs md:text-sm leading-relaxed text-background/60">
          Trusted Vedic astrology consultations for clients worldwide. Guiding you through life's journey with ancient cosmic wisdom.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
        <nav className="space-y-2 text-xs md:text-sm" aria-label="Footer navigation">
          <a href="#about" className="block hover:text-primary transition-colors">About</a>
          <a href="#services" className="block hover:text-primary transition-colors">Services</a>
          <a href="#booking" className="block hover:text-primary transition-colors">Book Consultation</a>
        </nav>
      </div>
      <div>
        <h4 className="font-display font-semibold text-background mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
        <div className="space-y-2 text-xs md:text-sm text-background/60">
          <p>info@astroaarpit.com</p>
          <p>+1 (778) 997-3222</p>
        </div>
      </div>
    </div>
    <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-background/10 text-center text-[10px] sm:text-xs md:text-sm text-background/40">
      © {new Date().getFullYear()} AstroAarpit. All rights reserved.
    </div>
  </footer>
);

export default Footer;
