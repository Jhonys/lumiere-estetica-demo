export interface ProcedureItem {
  id: string;
  name: string;
  category: string;
  duration: string;
  shortDescription: string;
  details: string;
  indication: string;
  approach: string;
  image: string;
}

export interface GoalOption {
  id: string;
  label: string;
  eyebrow: string;
  summary: string;
  consultationNote: string;
  recommendedIds: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  span: 'wide' | 'tall' | 'standard';
}

export interface ReviewItem {
  id: string;
  author: string;
  procedure: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const clinicConfig = {
  /**
   * Em `demoMode: true`, clicar em qualquer botão de WhatsApp abre a prévia
   * interativa da mensagem preenchida (ideal para apresentar a clínicas).
   * Ao adaptar para um cliente pagante, altere para `false` e coloque o número real.
   */
  demoMode: true,
  brand: {
    logoText: 'lumière.',
    fullName: 'Clínica Lumière Estética Avançada',
    shortName: 'Clínica Lumière',
    neighborhood: 'Batel',
    city: 'Curitiba',
    state: 'PR',
    locationBadge: 'Batel · Curitiba, PR',
    demoFooterLabel: 'Página modelo demonstrativa · Presença Local Expressa',
  },
  contact: {
    whatsappDigits: '5541999990000',
    phoneDisplay: '(41) 99999-0000',
    instagramHandle: '@clinicalumiere.demo',
    instagramUrl: 'https://instagram.com',
    addressLine: 'Av. do Batel, 1550, conj. 804 (endereço demonstrativo)',
    addressReference: 'Estacionamento conveniado no edifício, a duas quadras da Praça do Japão',
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Batel,+Curitiba+-+PR',
    mapsEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-49.2980%2C-25.4480%2C-49.2750%2C-25.4360&layer=mapnik&marker=-25.4422%2C-49.2868',
    hours: [
      { days: 'Segunda a Sexta', time: '09h00 às 19h30' },
      { days: 'Sábado', time: '09h00 às 13h30' },
      { days: 'Domingo', time: 'Fechado' },
    ],
  },
  navLinks: [
    { label: 'Guia', href: '#guia' },
    { label: 'Protocolos', href: '#protocolos' },
    { label: 'A Clínica', href: '#clinica' },
    { label: 'Espaço', href: '#espaco' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
  hero: {
    eyebrow: 'Estética Avançada · Batel, Curitiba',
    mainText:
      'Protocolos faciais e de qualidade da pele pensados com precisão clínica e olhar minimalista, para realçar seus traços sem perder a naturalidade.',
    primaryCta: 'Agendar avaliação',
    secondaryCta: 'Descobrir meu protocolo',
    overlayText: {
      part1: 'beleza',
      part2: 'essencial.',
    },
    imageSrc: '/images/hero-portrait.jpg',
    imageAlt: 'Retrato editorial minimalista destacando pele saudável e luminosa',
    highlights: [
      'Avaliação individualizada sem pressa',
      'Produtos com registro ANVISA',
      'Atendimento com hora marcada no Batel',
    ],
  },
  goals: [
    {
      id: 'naturalidade',
      label: 'Harmonia Natural',
      eyebrow: 'Equilíbrio de proporções',
      summary:
        'Para quem busca suavizar cansaço, valorizar contornos faciais e manter a própria expressão intacta.',
      consultationNote:
        'Na avaliação inicial analisamos proporções em repouso e movimento para planejar doses leves e graduais.',
      recommendedIds: ['harmonizacao-natural', 'toxina-preventiva'],
    },
    {
      id: 'firmeza',
      label: 'Firmeza e Colágeno',
      eyebrow: 'Sustentação progressiva',
      summary:
        'Indicado para prevenir ou tratar flacidez leve a moderada, estimulando a resposta natural da própria pele.',
      consultationNote:
        'Combinamos bioestímulo e tecnologias de sustentação conforme a espessura cutânea e a fase de cada paciente.',
      recommendedIds: ['bioestimuladores', 'ultrassom-microfocado'],
    },
    {
      id: 'luminosidade',
      label: 'Pele Luminosa',
      eyebrow: 'Textura, viço e hidratação',
      summary:
        'Foco em melhorar textura, poros aparentes, manchas leves e desidratação profunda sem alterar volumes.',
      consultationNote:
        'Criamos uma rotina clínica enxuta associada a cuidados domiciliares simples de manter no dia a dia.',
      recommendedIds: ['skinbooster', 'laser-renovacao'],
    },
    {
      id: 'prevencao',
      label: 'Prevenção Suave',
      eyebrow: 'Gerenciamento do envelhecimento',
      summary:
        'Ideal para quem deseja cuidar da pele de forma preventiva, preservando descanso facial e qualidade tecidual.',
      consultationNote:
        'Priorizamos intervenções pontuais e conservadoras, respeitando o ritmo natural de cada rosto.',
      recommendedIds: ['toxina-preventiva', 'skinbooster'],
    },
  ] as GoalOption[],
  procedures: [
    {
      id: 'harmonizacao-natural',
      name: 'Harmonização Facial Natural',
      category: 'Contorno e Equilíbrio',
      duration: '45 a 60 min',
      shortDescription:
        'Planejamento anatômico individualizado com ácido hialurônico em pontos estratégicos para devolver descanso e proporção.',
      details:
        'Em vez de padronizar rostos, mapeamos áreas de sustentação e transição de luz para suavizar sombras de cansaço preservando a identidade facial.',
      indication: 'Olheiras profundas, perda suave de contorno mandibular, lábios ressecados ou assimetrias discretas.',
      approach: 'Aplicação conservadora em camadas seguras, com retorno gradual conforme avaliação clínica.',
      image: '/images/facial-experience.jpg',
    },
    {
      id: 'bioestimuladores',
      name: 'Bioestimuladores de Colágeno',
      category: 'Qualidade Tecidual',
      duration: '45 min',
      shortDescription:
        'Ativos biocompatíveis que estimulam a produção gradual de colágeno para maior firmeza, densidade e elasticidade.',
      details:
        'Excelente aliado para quem deseja envelhecer bem sem ganho artificial de volume. O estímulo acontece de forma progressiva nas semanas seguintes à sessão.',
      indication: 'Flacidez facial leve a moderada, melhora de firmeza em bochechas, linha da mandíbula e pescoço.',
      approach: 'Protocolo personalizado de sessões definidas na consulta presencial de diagnóstico.',
      image: '/images/skincare-macro.jpg',
    },
    {
      id: 'toxina-preventiva',
      name: 'Toxina Botulínica Suave',
      category: 'Expressão Descansada',
      duration: '30 min',
      shortDescription:
        'Modulação precisa da musculatura facial para suavizar linhas dinâmicas sem aspecto rígido ou artificial.',
      details:
        'Ajustamos pontos e unidades conforme a força muscular de cada paciente, mantendo naturalidade ao sorrir e conversar.',
      indication: 'Linhas de expressão na testa, entre sobrancelhas e região dos olhos.',
      approach: 'Mapeamento facial dinâmico e retorno de acompanhamento incluído conforme conduta clínica.',
      image: '/images/hero-portrait.jpg',
    },
    {
      id: 'ultrassom-microfocado',
      name: 'Ultrassom Microfocado',
      category: 'Tecnologia de Sustentação',
      duration: '50 a 70 min',
      shortDescription:
        'Tecnologia não invasiva que atua em camadas profundas da pele para efeito de firmeza progressiva sem tempo de afastamento.',
      details:
        'Direciona pontos térmicos precisos que estimulam neocolagênese profunda, permitindo retomar a rotina no mesmo dia.',
      indication: 'Contorno facial, região submentoniana, sobrancelhas e flacidez de pescoço.',
      approach: 'Configuração de ponteiras definida individualmente após avaliação presencial.',
      image: '/images/treatment-room.jpg',
    },
    {
      id: 'skinbooster',
      name: 'Skinbooster e Hidratação Profunda',
      category: 'Viço e Textura',
      duration: '40 min',
      shortDescription:
        'Hidratação injetável de alta pureza voltada para maciez, luminosidade e melhora de linhas finas superficiais.',
      details:
        'Nutre a derme de dentro para fora sem alterar contornos, sendo um dos protocolos favoritos antes de eventos ou trocas de estação.',
      indication: 'Pele opaca, craquelada, linhas finas periorais e ressecamento persistente.',
      approach: 'Sessões confortáveis com anestésico tópico e orientações simples de pós-procedimento.',
      image: '/images/skincare-macro.jpg',
    },
    {
      id: 'laser-renovacao',
      name: 'Laser e Renovação Celular',
      category: 'Uniformidade de Pele',
      duration: '40 min',
      shortDescription:
        'Protocolos modernos de luz e laser para uniformizar o tom, refinar poros e devolver luminosidade natural.',
      details:
        'Selecionamos parâmetros seguros para cada fototipo, unindo tecnologia clínica e recuperação confortável para o cotidiano curitibano.',
      indication: 'Manchas solares leves, textura irregular, poros dilatados e perda de viço.',
      approach: 'Diagnóstico prévio de fototipo e plano de fotoproteção orientado em consulta.',
      image: '/images/facial-experience.jpg',
    },
  ] as ProcedureItem[],
  specialist: {
    eyebrow: 'Direção Clínica e Filosofia',
    name: 'Dra. Helena Vasconcelos',
    role: 'Biomédica Esteta · Especialista em Harmonização Facial e Gerenciamento de Pele',
    registry: 'CRBM-PR 00000 (registro ilustrativo para demonstração)',
    image: '/images/specialist-portrait.jpg',
    quote:
      'A melhor estética é aquela que faz as pessoas notarem que você está radiante e descansada, nunca qual procedimento você fez.',
    bio: 'Na Lumière, cada atendimento começa com escuta atenta e análise detalhada da pele e da anatomia facial. Trabalhamos com protocolos seguros, insumos com rastreabilidade ANVISA e cronogramas realistas que respeitam a sua rotina.',
    pillars: [
      {
        title: 'Escuta e planejamento real',
        description: 'Avaliação presencial individualizada antes de indicar qualquer sessão.',
      },
      {
        title: 'Segurança e rastreabilidade',
        description: 'Protocolos rigorosos de assepsia e produtos originais aprovados pela ANVISA.',
      },
      {
        title: 'Estética conservadora',
        description: 'Resultados graduais e harmônicos, sem exageros nem padrões engessados.',
      },
      {
        title: 'Atendimento pontual no Batel',
        description: 'Ambiente silencioso, reservado e com facilidade de acesso e estacionamento.',
      },
    ],
  },
  gallery: [
    {
      id: 'recepcao',
      title: 'Recepção Acolhedora',
      caption: 'Arquitetura serena em travertino e luz natural para desacelerar antes do seu horário.',
      image: '/images/clinic-reception.jpg',
      span: 'wide',
    },
    {
      id: 'sala',
      title: 'Sala de Procedimentos',
      caption: 'Ambiente clínico equipado com foco em conforto, higiene rigorosa e privacidade.',
      image: '/images/treatment-room.jpg',
      span: 'standard',
    },
    {
      id: 'cuidado',
      title: 'Cuidado Individualizado',
      caption: 'Protocolos conduzidos com calma, precisão técnica e acompanhamento próximo.',
      image: '/images/facial-experience.jpg',
      span: 'standard',
    },
    {
      id: 'insumos',
      title: 'Curadoria de Ativos',
      caption: 'Seleção criteriosa de formulações e tecnologias voltadas à saúde cutânea.',
      image: '/images/skincare-macro.jpg',
      span: 'wide',
    },
  ] as GalleryItem[],
  reviews: {
    ratingDisplay: '5,0',
    note: 'Depoimentos ilustrativos de demonstração (substituídos pelas avaliações reais do Google da clínica contratante).',
    items: [
      {
        id: 'r1',
        author: 'Camila R.',
        procedure: 'Bioestimulador e Skinbooster',
        rating: 5,
        text: 'Ambiente impecável no Batel e atendimento sem nenhuma pressa. A Dra. Helena explicou cada etapa com muita clareza e o resultado ficou super natural.',
      },
      {
        id: 'r2',
        author: 'Fernanda M.',
        procedure: 'Toxina Botulínica Suave',
        rating: 5,
        text: 'Eu tinha receio de ficar com expressão artificial e me senti completamente segura desde a primeira consulta. Fiquei com ar descansado e continuo sendo eu mesma.',
      },
      {
        id: 'r3',
        author: 'Patrícia S.',
        procedure: 'Ultrassom Microfocado',
        rating: 5,
        text: 'Desde o agendamento rápido pelo WhatsApp até o cuidado pós-sessão, tudo passa muita organização e confiança. Recomendo de olhos fechados.',
      },
    ] as ReviewItem[],
  },
  faq: [
    {
      id: 'f1',
      question: 'Como funciona a avaliação inicial na clínica?',
      answer:
        'A avaliação é realizada presencialmente com análise detalhada da pele, proporções faciais e histórico clínico. Ao final, montamos um plano sob medida respeitando seus objetivos e o seu ritmo.',
    },
    {
      id: 'f2',
      question: 'Posso voltar às minhas atividades normais no mesmo dia?',
      answer:
        'Na maioria dos protocolos faciais e de bioestímulo, o retorno à rotina é imediato, exigindo apenas cuidados simples de fotoproteção e evitando atividade física intensa nas primeiras 24 horas conforme orientação em consulta.',
    },
    {
      id: 'f3',
      question: 'Como agendar um horário ou tirar dúvidas sobre um procedimento?',
      answer:
        'Basta clicar em qualquer botão de WhatsApp nesta página. Nossa equipe responde diretamente pelo WhatsApp para alinhar o melhor horário e passar as orientações prévias.',
    },
    {
      id: 'f4',
      question: 'A clínica possui estacionamento ou acesso facilitado no Batel?',
      answer:
        'Sim. Estamos em localização central no Batel com estacionamento conveniado no próprio edifício e acesso fácil para quem vem de bairros vizinhos como Água Verde e Bigorrilho.',
    },
    {
      id: 'f5',
      question: 'Os valores são informados na avaliação?',
      answer:
        'Sim. Como cada protocolo depende da indicação clínica individual e da quantidade adequada para o seu caso, apresentamos o plano transparente e as opções de pagamento logo após a avaliação presencial.',
    },
  ] as FaqItem[],
};
