import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, ExternalLink, MessageCircle, X } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import type { WhatsAppPayload } from '../utils/whatsapp';

interface WhatsAppPreviewModalProps {
  payload: WhatsAppPayload | null;
  onClose: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function WhatsAppPreviewModal({ payload, onClose }: WhatsAppPreviewModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!payload) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [payload, onClose]);

  const handleCopy = async () => {
    if (!payload) {
      return;
    }
    try {
      await navigator.clipboard.writeText(payload.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {payload && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#261E1A]/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-t-3xl border border-[#E3DBCE] bg-[#FCFBF8] shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-center justify-between border-b border-[#EFEAE0] bg-[#261E1A] px-6 py-4 text-[#F9F8F3]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D4B892]/20 text-[#D4B892]">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[#D4B892] uppercase">
                    Prévia de Agendamento · Modo Demo
                  </p>
                  <p className="text-sm font-medium">{clinicConfig.brand.shortName}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar prévia do WhatsApp"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#F9F8F3]/75 transition-colors hover:bg-white/10 hover:text-[#F9F8F3]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8A6D46] uppercase">
                Contexto selecionado: {payload.contextLabel}
              </p>

              <div className="mt-3 rounded-2xl border border-[#E3DBCE] bg-[#F2ECE2]/70 p-4">
                <p className="text-[11px] font-medium text-[#6B5E55]">
                  Mensagem pré-preenchida que a paciente envia com 1 clique:
                </p>
                <p className="mt-2 rounded-xl bg-[#FCFBF8] p-3.5 text-sm leading-relaxed text-[#261E1A] shadow-xs">
                  {payload.message}
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#6B5E55]">
                Na página definitiva da sua clínica, este botão redireciona diretamente para o seu
                WhatsApp oficial com o procedimento já preenchido, sem formulários longos e sem
                mensalidade de sistema.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#261E1A] px-4 py-3 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase transition-colors hover:bg-[#3A2F29]"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Mensagem copiada' : 'Copiar texto'}</span>
                </button>
                <a
                  href={payload.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E3DBCE] bg-[#F9F8F3] px-4 py-3 text-xs font-medium tracking-[0.1em] text-[#4B4039] uppercase transition-colors hover:border-[#B09166] hover:text-[#261E1A]"
                >
                  <span>Testar link</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
