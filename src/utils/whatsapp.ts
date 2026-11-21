export interface WhatsAppPayload {
  contextLabel: string;
  message: string;
  url: string;
}

export function sanitizeBrazilPhoneDigits(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (!digits) {
    return '';
  }
  if (digits.startsWith('55') && (digits.length === 12 || digits.length === 13)) {
    return digits;
  }
  return `55${digits.replace(/^0+/, '')}`;
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const normalized = sanitizeBrazilPhoneDigits(phone);
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${normalized}?text=${encoded}`;
}

export function buildProcedureWhatsAppPayload(
  clinicShortName: string,
  phone: string,
  procedureName: string,
): WhatsAppPayload {
  const message = `Olá! Vi o site da ${clinicShortName} e gostaria de agendar uma avaliação personalizada para ${procedureName}.`;
  return {
    contextLabel: procedureName,
    message,
    url: buildWhatsAppUrl(phone, message),
  };
}

export function buildGoalWhatsAppPayload(
  clinicShortName: string,
  phone: string,
  goalTitle: string,
  recommendedProcedures: string[],
): WhatsAppPayload {
  const procList = recommendedProcedures.join(' e ');
  const message = `Olá! Usei o guia do site da ${clinicShortName}. Meu foco hoje é "${goalTitle}" e gostaria de saber mais sobre uma avaliação para ${procList}.`;
  return {
    contextLabel: `Objetivo: ${goalTitle}`,
    message,
    url: buildWhatsAppUrl(phone, message),
  };
}

export function buildGeneralWhatsAppPayload(
  clinicShortName: string,
  phone: string,
): WhatsAppPayload {
  const message = `Olá! Vi o site da ${clinicShortName} no Batel e gostaria de agendar uma avaliação personalizada.`;
  return {
    contextLabel: 'Avaliação Personalizada',
    message,
    url: buildWhatsAppUrl(phone, message),
  };
}
