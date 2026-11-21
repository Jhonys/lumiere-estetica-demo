import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Instagram, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

interface MinimalistHeroProps {
  onOpenGeneralWhatsApp: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MinimalistHero({ onOpenGeneralWhatsApp }: MinimalistHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#F9F8F3] px-6 py-6 text-[#261E1A] sm:px-10 md:px-14 md:py-8 lg:px-20"
    >
      {/* Subtle architectural grid ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 editorial-grain opacity-45"
      />

      {/* Header */}
      <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="font-serif text-3xl font-semibold tracking-tight text-[#261E1A] sm:text-[2rem]"
        >
          {clinicConfig.brand.logoText}
        </motion.a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          {clinicConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.18em] text-[#6B5E55] uppercase transition-colors hover:text-[#261E1A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={onOpenGeneralWhatsApp}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="hidden items-center gap-2 rounded-full bg-[#261E1A] px-5 py-2.5 text-xs font-medium tracking-[0.12em] text-[#F9F8F3] uppercase transition-all hover:bg-[#3A2F29] sm:inline-flex"
          >
            <span>Agendar</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E3DBCE] bg-[#FCFBF8] text-[#261E1A] md:hidden"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="relative z-30 mx-auto mt-4 w-full max-w-7xl rounded-2xl border border-[#E3DBCE] bg-[#FCFBF8] p-5 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-4">
              {clinicConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-[0.14em] text-[#261E1A] uppercase"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGeneralWhatsApp();
                }}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#261E1A] px-5 py-3 text-xs font-medium tracking-[0.14em] text-[#F9F8F3] uppercase"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{clinicConfig.hero.primaryCta}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main 3-Column Editorial Minimalist Hero Grid (21st.dev Minimalist Hero inspired) */}
      <div className="relative z-20 mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-center gap-7 py-6 md:grid-cols-12 md:gap-6 md:py-10 lg:py-12">
        {/* Left Column: Manifesto & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="order-3 flex flex-col items-start text-left md:order-1 md:col-span-4"
        >
          <span className="mb-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#E3DBCE] bg-[#FCFBF8] px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-[#6B5E55] uppercase sm:mb-5 sm:px-3.5 sm:text-[11px] sm:tracking-[0.16em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
            {clinicConfig.hero.eyebrow}
          </span>

          <p className="max-w-sm text-base leading-relaxed font-light text-[#4B4039] sm:text-[17px]">
            {clinicConfig.hero.mainText}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenGeneralWhatsApp}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#261E1A] px-6 py-3.5 text-xs font-medium tracking-[0.14em] text-[#F9F8F3] uppercase transition-all hover:bg-[#3A2F29] hover:shadow-md"
            >
              <span>{clinicConfig.hero.primaryCta}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#guia"
              className="group inline-flex items-center gap-1.5 border-b border-[#261E1A]/40 pb-1 text-xs font-medium tracking-[0.12em] text-[#261E1A] uppercase transition-colors hover:border-[#B09166] hover:text-[#8A6D46]"
            >
              <span>{clinicConfig.hero.secondaryCta}</span>
              <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="mt-8 space-y-2 border-t border-[#E3DBCE] pt-5 text-xs text-[#6B5E55]">
            {clinicConfig.hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-[#B09166]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Center Column: Champagne Halo Circle + Editorial Arched Portrait */}
        <div className="relative order-2 flex items-center justify-center md:order-2 md:col-span-4">
          <div className="relative flex items-center justify-center py-2 sm:py-4">
            {/* Iconic Champagne Accent Circle */}
            <motion.div
              initial={{ scale: 0.72, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
              aria-hidden="true"
              className="absolute -top-2 -right-3 h-[210px] w-[210px] rounded-full bg-[#D4B892]/75 sm:h-[290px] sm:w-[290px] lg:h-[340px] lg:w-[340px]"
            />

            {/* Delicate Orbital Hairline */}
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.1, ease: EASE_OUT_EXPO }}
              aria-hidden="true"
              className="absolute -bottom-3 -left-4 h-[225px] w-[225px] rounded-full border border-[#B09166]/35 sm:h-[315px] sm:w-[315px] lg:h-[360px] lg:w-[360px]"
            />

            {/* Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="relative z-10 w-[210px] overflow-hidden rounded-t-[999px] rounded-b-[28px] border-[6px] border-[#F9F8F3] bg-[#F5F2EB] shadow-[0_28px_60px_-28px_rgba(38,30,26,0.32)] sm:w-[290px] lg:w-[320px]"
            >
              <img
                src={clinicConfig.hero.imageSrc}
                alt={clinicConfig.hero.imageAlt}
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>

            {/* Subtle Floating Clinical Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE_OUT_EXPO }}
              className="absolute -bottom-1 right-0 z-20 rounded-2xl border border-[#E3DBCE] bg-[#FCFBF8]/95 px-3.5 py-2 shadow-sm backdrop-blur-sm sm:-right-4 sm:px-4 sm:py-2.5"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#8A6D46] uppercase">
                Avaliação 1:1
              </p>
              <p className="font-serif text-sm font-medium text-[#261E1A] sm:text-base">
                Estética de precisão
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Monumental Display Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="order-1 flex flex-col items-center text-center md:order-3 md:col-span-4 md:items-end md:text-right"
        >
          <h1 className="font-serif text-5xl leading-[0.88] font-normal tracking-tight text-[#261E1A] sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]">
            <span className="block italic text-[#6B5E55]">
              {clinicConfig.hero.overlayText.part1}
            </span>
            <span className="block font-semibold text-[#261E1A]">
              {clinicConfig.hero.overlayText.part2}
            </span>
          </h1>
          <p className="mt-4 hidden max-w-[240px] text-xs leading-relaxed tracking-wide text-[#6B5E55] md:block">
            Cuidado dermatofuncional e harmonização natural pensados para a sua melhor versão.
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar: Social & Location */}
      <footer className="relative z-20 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#E3DBCE]/80 pt-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE_OUT_EXPO }}
          className="flex items-center gap-4"
        >
          <button
            type="button"
            onClick={onOpenGeneralWhatsApp}
            aria-label="WhatsApp da clínica"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E3DBCE] bg-[#FCFBF8] text-[#6B5E55] transition-colors hover:border-[#261E1A] hover:text-[#261E1A]"
          >
            <MessageCircle className="h-4 w-4" />
          </button>
          <a
            href={clinicConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram demonstrativo"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E3DBCE] bg-[#FCFBF8] text-[#6B5E55] transition-colors hover:border-[#261E1A] hover:text-[#261E1A]"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#localizacao"
            aria-label="Localização no Batel"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E3DBCE] bg-[#FCFBF8] text-[#6B5E55] transition-colors hover:border-[#261E1A] hover:text-[#261E1A]"
          >
            <MapPin className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT_EXPO }}
          className="text-xs font-medium tracking-[0.16em] text-[#6B5E55] uppercase"
        >
          {clinicConfig.brand.locationBadge}
        </motion.div>
      </footer>
    </section>
  );
}
