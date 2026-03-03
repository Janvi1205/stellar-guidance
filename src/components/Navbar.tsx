import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          Astro<span className="text-primary">Aapit</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#booking" className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
            Book Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
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
