import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AuthoritySection() {
  const { specialist } = clinicConfig;

  return (
    <section
      id="clinica"
      className="border-y border-[#E3DBCE] bg-[#FCFBF8] px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E3DBCE] bg-[#EFEAE0]">
            <img
              src={specialist.image}
              alt={`Retrato de ${specialist.name}`}
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#E3DBCE] bg-[#F9F8F3] px-4 py-3">
            <Award className="h-5 w-5 shrink-0 text-[#B09166]" />
            <div>
              <p className="text-xs font-semibold text-[#261E1A]">{specialist.name}</p>
              <p className="text-[11px] text-[#6B5E55]">{specialist.registry}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="lg:col-span-7"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
            {specialist.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-[#261E1A] sm:text-5xl">
            {specialist.name}
          </h2>
          <p className="mt-2 text-xs font-medium tracking-[0.12em] text-[#6B5E55] uppercase">
            {specialist.role}
          </p>

          <blockquote className="mt-7 border-l-2 border-[#C5A880] pl-5 font-serif text-2xl leading-snug italic text-[#3A2F29] sm:text-[1.7rem]">
            “{specialist.quote}”
          </blockquote>

          <p className="mt-6 text-sm leading-relaxed text-[#4B4039] sm:text-base">
            {specialist.bio}
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specialist.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[#EAE2D6] bg-[#F9F8F3] p-4"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B09166]" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#261E1A]">{pillar.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#6B5E55]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
