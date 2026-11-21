import { clinicConfig } from '../data/clinicConfig';

export function Footer() {
  return (
    <footer className="border-t border-[#E3DBCE] bg-[#F2ECE2]/65 px-6 pt-12 pb-24 text-[#6B5E55] sm:px-10 md:px-14 lg:px-20 lg:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-md space-y-2.5">
          <p className="font-serif text-3xl font-semibold text-[#261E1A]">
            {clinicConfig.brand.logoText}
          </p>
          <p className="text-xs leading-relaxed">
            {clinicConfig.brand.fullName} · {clinicConfig.contact.addressLine}
          </p>
          <p className="text-[11px] leading-relaxed text-[#6B5E55]/90">
            Responsável técnica demonstrativa: {clinicConfig.specialist.name} (
            {clinicConfig.specialist.registry}). Os procedimentos estéticos variam conforme
            avaliação clínica individual e resposta biológica de cada paciente.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <span className="inline-flex rounded-full border border-[#DDD3C3] bg-[#FCFBF8] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.08em] text-[#4B4039]">
            {clinicConfig.brand.demoFooterLabel}
          </span>
          <p className="text-[11px] text-[#6B5E55]/85">
            Arquitetura 100% estática · Zero mensalidade de plataforma
          </p>
        </div>
      </div>
    </footer>
  );
}
