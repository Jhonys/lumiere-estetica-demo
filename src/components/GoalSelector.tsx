import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { clinicConfig, type ProcedureItem } from '../data/clinicConfig';

interface GoalSelectorProps {
  onSelectGoalWhatsApp: (goalTitle: string, procedureNames: string[]) => void;
  onInspectProcedure: (procedure: ProcedureItem) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function GoalSelector({
  onSelectGoalWhatsApp,
  onInspectProcedure,
}: GoalSelectorProps) {
  const [selectedGoalId, setSelectedGoalId] = useState(clinicConfig.goals[0].id);

  const activeGoal =
    clinicConfig.goals.find((goal) => goal.id === selectedGoalId) ?? clinicConfig.goals[0];

  const recommendedProcedures = activeGoal.recommendedIds
    .map((id) => clinicConfig.procedures.find((proc) => proc.id === id))
    .filter((proc): proc is ProcedureItem => Boolean(proc));

  return (
    <section
      id="guia"
      className="border-y border-[#E3DBCE] bg-[#F2ECE2]/60 px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#8A6D46] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Guia interativo de avaliação
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#261E1A] sm:text-5xl">
              Qual é o seu principal objetivo hoje?
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#6B5E55]">
            Escolha um foco para ver os protocolos mais indicados na avaliação presencial e já
            iniciar a conversa no WhatsApp com o contexto certo.
          </p>
        </div>

        {/* Interactive Sliding Pill Tabs */}
        <div
          role="tablist"
          aria-label="Objetivos estéticos"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {clinicConfig.goals.map((goal) => {
            const isActive = goal.id === activeGoal.id;
            return (
              <button
                key={goal.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedGoalId(goal.id)}
                className={`relative rounded-full px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase transition-colors ${
                  isActive
                    ? 'text-[#F9F8F3]'
                    : 'border border-[#DDD3C3] bg-[#FCFBF8] text-[#4B4039] hover:border-[#B09166]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeGoalPill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#261E1A]"
                  />
                )}
                <span className="relative z-10">{goal.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Recommendation Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="mt-8 grid grid-cols-1 gap-8 rounded-3xl border border-[#E3DBCE] bg-[#FCFBF8] p-6 shadow-sm sm:p-8 lg:grid-cols-12 lg:p-10"
          >
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8A6D46] uppercase">
                  {activeGoal.eyebrow}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-medium text-[#261E1A]">
                  {activeGoal.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4039] sm:text-base">
                  {activeGoal.summary}
                </p>
                <p className="mt-4 rounded-2xl bg-[#F6F2EA] p-4 text-xs leading-relaxed text-[#6B5E55]">
                  <strong className="font-semibold text-[#261E1A]">Como avaliamos:</strong>{' '}
                  {activeGoal.consultationNote}
                </p>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() =>
                    onSelectGoalWhatsApp(
                      activeGoal.label,
                      recommendedProcedures.map((proc) => proc.name),
                    )
                  }
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#261E1A] px-6 py-3.5 text-xs font-medium tracking-[0.14em] text-[#F9F8F3] uppercase transition-all hover:bg-[#3A2F29] sm:w-auto"
                >
                  <span>Agendar para este objetivo</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {recommendedProcedures.map((proc) => (
                <div
                  key={proc.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E7E0D6] bg-[#F9F8F3] p-5 transition-colors hover:border-[#C5A880]"
                >
                  <div>
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <img
                        src={proc.image}
                        alt={proc.name}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[#8A6D46] uppercase">
                      {proc.category}
                    </span>
                    <h4 className="mt-1 font-serif text-2xl font-medium text-[#261E1A]">
                      {proc.name}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B5E55]">
                      {proc.shortDescription}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onInspectProcedure(proc)}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] text-[#261E1A] uppercase transition-colors hover:text-[#8A6D46]"
                  >
                    <span>Ver detalhes do protocolo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
