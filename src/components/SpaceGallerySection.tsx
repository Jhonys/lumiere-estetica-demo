import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { clinicConfig, type GalleryItem } from '../data/clinicConfig';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function SpaceGallerySection() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!lightboxItem) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem]);

  return (
    <section
      id="espaco"
      className="px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
              Experiência do Espaço
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#261E1A] sm:text-5xl">
              Um refúgio silencioso e luminoso no coração do Batel.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#6B5E55]">
            Clique em qualquer fotografia para ampliar os detalhes do ambiente clínico e da
            atmosfera pensada para o seu atendimento.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {clinicConfig.gallery.map((item, idx) => {
            const colClass = item.span === 'wide' ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                className={`group relative block h-[270px] w-full overflow-hidden rounded-3xl border border-[#E3DBCE] bg-[#EFEAE0] text-left sm:h-[330px] lg:h-[380px] ${colClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261E1A]/80 via-[#261E1A]/15 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F9F8F3]/85 text-[#261E1A] opacity-90 backdrop-blur-sm transition-transform group-hover:scale-105">
                  <Maximize2 className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-serif text-2xl font-medium text-[#F9F8F3]">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-[#EFEAE0]/90">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#261E1A]/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#E3DBCE]/30 bg-[#FCFBF8] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Fechar visualização"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#261E1A]/80 text-[#F9F8F3] transition-colors hover:bg-[#261E1A]"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[72vh] w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-2xl font-medium text-[#261E1A]">
                  {lightboxItem.title}
                </h3>
                <p className="mt-1 text-sm text-[#6B5E55]">{lightboxItem.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
