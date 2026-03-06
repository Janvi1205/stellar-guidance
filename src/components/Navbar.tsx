import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#booking" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
        <a href="#" className="flex items-center gap-2 font-display text-lg md:text-xl font-bold text-foreground">
          <img src={logo} alt="Astro Aarpit Logo" className="w-7 h-7 md:w-9 md:h-9 rounded-full object-cover" width="36" height="36" />
          Astro<span className="text-primary">Aarpit</span>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#booking" className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
            Book Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 sm:px-6 py-3 space-y-2.5">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="inline-block px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
