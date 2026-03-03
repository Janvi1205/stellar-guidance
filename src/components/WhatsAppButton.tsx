import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "17789973222";
  const message = encodeURIComponent("Hello Astro Aarpit, I'd like to book an astrology consultation.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)] fill-[hsl(0,0%,100%)]" />
    </a>
  );
};

export default WhatsAppButton;
