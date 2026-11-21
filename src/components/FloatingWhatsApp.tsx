import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export function FloatingWhatsApp({ onClick }: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={onClick}
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 16 }}
          transition={{ duration: 0.3 }}
          aria-label="Agendar avaliação pelo WhatsApp"
          className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-[#D4B892]/50 bg-[#261E1A] px-4 py-3 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase shadow-[0_14px_32px_-12px_rgba(38,30,26,0.55)] transition-transform hover:scale-105 hover:bg-[#3A2F29] sm:right-7 sm:bottom-7 sm:px-5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4B892] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4B892]" />
          </span>
          <MessageCircle className="h-4 w-4 text-[#D4B892]" />
          <span className="hidden sm:inline">WhatsApp</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
