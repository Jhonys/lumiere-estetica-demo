import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { clinicConfig, type ProcedureItem } from './data/clinicConfig';
import {
  buildGeneralWhatsAppPayload,
  buildGoalWhatsAppPayload,
  buildProcedureWhatsAppPayload,
  type WhatsAppPayload,
} from './utils/whatsapp';
import { MinimalistHero } from './components/MinimalistHero';
import { GoalSelector } from './components/GoalSelector';
import { ProceduresSection } from './components/ProceduresSection';
import { AuthoritySection } from './components/AuthoritySection';
import { SpaceGallerySection } from './components/SpaceGallerySection';
import { SocialProofSection } from './components/SocialProofSection';
import { LocationAndFaqSection } from './components/LocationAndFaqSection';
import { ProcedureDetailModal } from './components/ProcedureDetailModal';
import { WhatsAppPreviewModal } from './components/WhatsAppPreviewModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureItem | null>(null);
  const [whatsAppPreview, setWhatsAppPreview] = useState<WhatsAppPayload | null>(null);

  const dispatchWhatsApp = (payload: WhatsAppPayload) => {
    if (clinicConfig.demoMode) {
      setWhatsAppPreview(payload);
      return;
    }
    window.open(payload.url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenGeneralWhatsApp = () => {
    dispatchWhatsApp(
      buildGeneralWhatsAppPayload(
        clinicConfig.brand.shortName,
        clinicConfig.contact.whatsappDigits,
      ),
    );
  };

  const handleSelectProcedureWhatsApp = (procedureName: string) => {
    dispatchWhatsApp(
      buildProcedureWhatsAppPayload(
        clinicConfig.brand.shortName,
        clinicConfig.contact.whatsappDigits,
        procedureName,
      ),
    );
  };

  const handleSelectGoalWhatsApp = (goalTitle: string, procedureNames: string[]) => {
    dispatchWhatsApp(
      buildGoalWhatsAppPayload(
        clinicConfig.brand.shortName,
        clinicConfig.contact.whatsappDigits,
        goalTitle,
        procedureNames,
      ),
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F9F8F3] text-[#261E1A]">
        <MinimalistHero onOpenGeneralWhatsApp={handleOpenGeneralWhatsApp} />

        <main>
          <GoalSelector
            onSelectGoalWhatsApp={handleSelectGoalWhatsApp}
            onInspectProcedure={setSelectedProcedure}
          />
          <ProceduresSection
            onSelectProcedureWhatsApp={handleSelectProcedureWhatsApp}
            onInspectProcedure={setSelectedProcedure}
          />
          <AuthoritySection />
          <SpaceGallerySection />
          <SocialProofSection />
          <LocationAndFaqSection onOpenGeneralWhatsApp={handleOpenGeneralWhatsApp} />
        </main>

        <Footer />

        <FloatingWhatsApp onClick={handleOpenGeneralWhatsApp} />

        <ProcedureDetailModal
          procedure={selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
          onSchedule={handleSelectProcedureWhatsApp}
        />

        <WhatsAppPreviewModal
          payload={whatsAppPreview}
          onClose={() => setWhatsAppPreview(null)}
        />
      </div>
    </MotionConfig>
  );
}
