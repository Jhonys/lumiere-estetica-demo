import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function SocialProofSection() {
  const { reviews } = clinicConfig;

  return (
    <section className="border-y border-[#E3DBCE] bg-[#F2ECE2]/55 px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
              Prova Social
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal text-[#261E1A] sm:text-5xl">
              Experiências de quem escolheu cuidar da pele com naturalidade.
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 self-start rounded-2xl border border-[#E3DBCE] bg-[#FCFBF8] px-5 py-3 md:self-auto">
            <span className="font-serif text-3xl font-semibold text-[#261E1A]">
              {reviews.ratingDisplay}
            </span>
            <div>
              <div className="flex items-center gap-0.5 text-[#B09166]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-[11px] text-[#6B5E55]">Avaliação no Google (modelo)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.items.map((review, index) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: EASE_OUT_EXPO }}
              className="flex flex-col justify-between rounded-3xl border border-[#E3DBCE] bg-[#FCFBF8] p-6"
            >
              <div>
                <div className="flex items-center gap-1 text-[#B09166]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4039]">“{review.text}”</p>
              </div>

              <footer className="mt-6 border-t border-[#EFEAE0] pt-4">
                <p className="text-sm font-semibold text-[#261E1A]">{review.author}</p>
                <p className="text-xs text-[#6B5E55]">{review.procedure}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#6B5E55]">{reviews.note}</p>
      </div>
    </section>
  );
}
