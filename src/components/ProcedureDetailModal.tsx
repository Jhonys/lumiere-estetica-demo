import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, MessageCircle, X } from 'lucide-react';
import type { ProcedureItem } from '../data/clinicConfig';

interface ProcedureDetailModalProps {
  procedure: ProcedureItem | null;
  onClose: () => void;
  onSchedule: (procedureName: string) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProcedureDetailModal({
  procedure,
  onClose,
  onSchedule,
}: ProcedureDetailModalProps) {
  useEffect(() => {
    if (!procedure) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [procedure, onClose]);

  return (
    <AnimatePresence>
      {procedure && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#261E1A]/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-[#E3DBCE] bg-[#FCFBF8] shadow-2xl sm:rounded-3xl"
          >
            <div className="relative h-48 w-full overflow-hidden bg-[#EFEAE0] sm:h-52">
              <img
                src={procedure.image}
                alt={procedure.name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar detalhes"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#261E1A]/80 text-[#F9F8F3] hover:bg-[#261E1A]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#8A6D46] uppercase">
                  {procedure.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#F2ECE2] px-3 py-1 text-xs text-[#6B5E55]">
                  <Clock className="h-3.5 w-3.5" />
                  Duração média: {procedure.duration}
                </span>
              </div>

              <h3 className="mt-2.5 font-serif text-3xl font-medium text-[#261E1A]">
                {procedure.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#4B4039]">{procedure.details}</p>

              <div className="mt-4 space-y-2.5 rounded-2xl border border-[#E7E0D6] bg-[#F9F8F3] p-4 text-xs leading-relaxed text-[#6B5E55]">
                <p>
                  <strong className="font-semibold text-[#261E1A]">Principais indicações:</strong>{' '}
                  {procedure.indication}
                </p>
                <p>
                  <strong className="font-semibold text-[#261E1A]">Conduta clínica:</strong>{' '}
                  {procedure.approach}
                </p>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-[#6B5E55]">
                Todo procedimento depende de avaliação clínica presencial individualizada.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    const name = procedure.name;
                    onClose();
                    onSchedule(name);
                  }}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#261E1A] px-5 py-3.5 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase transition-colors hover:bg-[#3A2F29]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Agendar avaliação deste protocolo</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
