import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Clock, MapPin, MessageCircle, Plus } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

interface LocationAndFaqSectionProps {
  onOpenGeneralWhatsApp: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function LocationAndFaqSection({ onOpenGeneralWhatsApp }: LocationAndFaqSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(clinicConfig.faq[0].id);

  return (
    <section id="duvidas" className="px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* FAQ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
              Dúvidas Frequentes
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal text-[#261E1A] sm:text-5xl">
              Transparência antes da sua primeira visita.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6B5E55]">
              Se preferir esclarecer algo específico sobre seu caso, nossa equipe atende
              diretamente pelo WhatsApp.
            </p>
            <button
              type="button"
              onClick={onOpenGeneralWhatsApp}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#261E1A] px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase transition-colors hover:bg-[#3A2F29]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Falar com a clínica</span>
            </button>
          </div>

          <div className="divide-y divide-[#E3DBCE] rounded-3xl border border-[#E3DBCE] bg-[#FCFBF8] px-6 sm:px-8 lg:col-span-8">
            {clinicConfig.faq.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-serif text-xl font-medium text-[#261E1A] sm:text-2xl">
                      {item.question}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E3DBCE] text-[#261E1A] transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-[#261E1A] text-[#F9F8F3]' : 'bg-[#F9F8F3]'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pr-10 text-sm leading-relaxed text-[#6B5E55]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location & Hours */}
        <div
          id="localizacao"
          className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E3DBCE] bg-[#FCFBF8] lg:grid-cols-12"
        >
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
                Localização e Horários
              </span>
              <h2 className="mt-3 font-serif text-3xl font-normal text-[#261E1A] sm:text-4xl">
                Venha conhecer a {clinicConfig.brand.shortName} no {clinicConfig.brand.neighborhood}.
              </h2>

              <div className="mt-7 space-y-5 text-sm text-[#4B4039]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B09166]" />
                  <div>
                    <p className="font-medium text-[#261E1A]">{clinicConfig.contact.addressLine}</p>
                    <p className="mt-1 text-xs text-[#6B5E55]">
                      {clinicConfig.contact.addressReference}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#B09166]" />
                  <div className="w-full space-y-1.5">
                    {clinicConfig.contact.hours.map((row) => (
                      <div key={row.days} className="flex justify-between gap-4 text-xs sm:text-sm">
                        <span className="text-[#6B5E55]">{row.days}</span>
                        <span className="font-medium text-[#261E1A]">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenGeneralWhatsApp}
                className="inline-flex items-center gap-2 rounded-full bg-[#261E1A] px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase transition-colors hover:bg-[#3A2F29]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Agendar avaliação</span>
              </button>
              <a
                href={clinicConfig.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E3DBCE] bg-[#F9F8F3] px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#261E1A] uppercase transition-colors hover:border-[#B09166]"
              >
                <span>Como chegar</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="min-h-[340px] border-t border-[#E3DBCE] bg-[#EFEAE0] lg:col-span-7 lg:border-t-0 lg:border-l">
            <iframe
              title="Mapa de localização no Batel, Curitiba"
              src={clinicConfig.contact.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[340px] w-full border-0 sepia-[18%] saturate-[75%] contrast-[96%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
