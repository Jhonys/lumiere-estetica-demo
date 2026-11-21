import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, MessageCircle } from 'lucide-react';
import { clinicConfig, type ProcedureItem } from '../data/clinicConfig';

interface ProceduresSectionProps {
  onSelectProcedureWhatsApp: (procedureName: string) => void;
  onInspectProcedure: (procedure: ProcedureItem) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProceduresSection({
  onSelectProcedureWhatsApp,
  onInspectProcedure,
}: ProceduresSectionProps) {
  return (
    <section
      id="protocolos"
      className="px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
              Protocolos Clínicos
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#261E1A] sm:text-5xl">
              Tratamentos desenhados para naturalidade e longevidade da pele.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#6B5E55]">
            Cada procedimento possui indicação criteriosa em consulta presencial e agendamento
            direto pelo WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clinicConfig.procedures.map((proc, index) => (
            <motion.article
              key={proc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: (index % 3) * 0.08, ease: EASE_OUT_EXPO }}
              className="group flex flex-col justify-between rounded-3xl border border-[#E3DBCE] bg-[#FCFBF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-[0_20px_45px_-28px_rgba(38,30,26,0.22)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#8A6D46] uppercase">
                    {proc.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F2ECE2] px-2.5 py-1 text-[11px] text-[#6B5E55]">
                    <Clock className="h-3 w-3" />
                    {proc.duration}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-[1.75rem] leading-snug font-medium text-[#261E1A]">
                  {proc.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#6B5E55]">
                  {proc.shortDescription}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-[#EFEAE0] pt-5">
                <button
                  type="button"
                  onClick={() => onSelectProcedureWhatsApp(proc.name)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#261E1A] px-4 py-3 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase transition-colors hover:bg-[#3A2F29]"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Agendar este protocolo</span>
                </button>
                <button
                  type="button"
                  onClick={() => onInspectProcedure(proc)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#E3DBCE] bg-transparent px-4 py-2.5 text-xs font-medium tracking-[0.1em] text-[#4B4039] uppercase transition-colors hover:border-[#B09166] hover:text-[#261E1A]"
                >
                  <span>Entender indicação</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
