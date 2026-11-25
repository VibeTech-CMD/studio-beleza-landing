/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRALIZADA DA LANDING PAGE
 * ============================================================================
 * Edite apenas este arquivo para personalizar o site para uma nova cliente:
 * nome do espaço, profissional, WhatsApp, Instagram, endereço, horários,
 * serviços, portfólio, sobre, depoimentos e SEO.
 */

export const siteConfig = {
  brand: {
    studioName: 'Atelier Lumière',
    studioSubtitle: 'Beleza & Autocuidado',
    professionalName: 'Nome da Profissional',
    professionalRole: 'Especialista em Beleza Feminina',
    city: 'Sua Cidade - UF',
    neighborhood: 'Seu Bairro',
    copyrightYear: new Date().getFullYear(),
  },

  contact: {
    /**
     * Número do WhatsApp apenas com dígitos (DDI + DDD + Número).
     * Exemplo Brasil: 5511999999999
     */
    whatsappNumber: '5511999999999',
    whatsappDisplay: '(11) 99999-9999',
    defaultWhatsappMessage:
      'Olá! Conheci seu trabalho pelo site e gostaria de agendar um horário.',
    instagramHandle: '@seustudio.beleza',
    instagramUrl: 'https://instagram.com/seustudio.beleza',
    address: 'Rua Exemplo, 120 — Sala 04',
    addressComplement: 'Seu Bairro, Sua Cidade - UF',
    googleMapsUrl: 'https://maps.google.com/?q=Seu+Endereco+Aqui',
    hours: [
      { days: 'Segunda a Sexta', time: '09h às 19h' },
      { days: 'Sábado', time: '09h às 15h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
  },

  seo: {
    title: 'Atelier Lumière | Beleza Feminina, Unhas, Cílios e Autocuidado',
    description:
      'Manicure, pedicure, alongamento de unhas, nail design, extensão de cílios, lash lifting, design de sobrancelhas e beleza facial em um espaço pensado para o seu autocuidado.',
    siteUrl: '',
    ogImage: './images/hero-beauty.jpg',
    /**
     * Ative como `true` apenas após preencher os dados reais da profissional
     * (endereço, telefone, cidade e URL), para emitir Schema.org BeautySalon.
     */
    enableStructuredData: false,
  },

  hero: {
    eyebrow: 'Beleza Feminina & Autocuidado',
    title: 'Seu momento de beleza, cuidado e autoestima.',
    subtitle:
      'Realce sua beleza, valorize sua essência e transforme seu autocuidado em uma experiência especial.',
    primaryCta: 'Agendar meu horário',
    secondaryCta: 'Conhecer os serviços',
    image: './images/hero-beauty.jpg',
    imageAlt:
      'Retrato editorial de beleza feminina com pele luminosa, cílios delicados e unhas em tom nude',
    highlights: [
      'Atendimento com hora marcada',
      'Cuidado em cada detalhe',
      'Ambiente acolhedor',
    ],
  },

  servicesSection: {
    eyebrow: 'Nossos Serviços',
    title: 'Beleza em cada detalhe.',
    subtitle:
      'Descubra nossos cuidados e escolha o momento que merece ser dedicado a você.',
    ctaLabel: 'Agendar este serviço',
  },

  services: [
    {
      id: 'manicure-pedicure',
      name: 'Manicure e pedicure',
      category: 'Unhas',
      description:
        'Cuidado completo para mãos e pés, com cuticulagem delicada, hidratação e acabamento impecável para o seu dia a dia.',
      image: './images/service-manicure.jpg',
      imageAlt: 'Mãos femininas com manicure sofisticada em esmaltação nude suave',
      whatsappMessage:
        'Olá! Gostaria de agendar um horário para manicure e pedicure. Poderia me informar os horários disponíveis?',
    },
    {
      id: 'alongamento-unhas',
      name: 'Alongamento de unhas',
      category: 'Unhas',
      description:
        'Estrutura resistente, curvatura elegante e aspecto natural pensado para valorizar o formato das suas mãos.',
      image: './images/service-alongamento.jpg',
      imageAlt: 'Alongamento de unhas em formato amendoado com acabamento rosé leitoso',
      whatsappMessage:
        'Olá! Gostaria de agendar um horário para alongamento de unhas. Poderia me informar os horários disponíveis?',
    },
    {
      id: 'nail-design',
      name: 'Nail design',
      category: 'Unhas',
      description:
        'Detalhes autorais, traços delicados e acabamentos sofisticados que traduzem a sua personalidade com elegância.',
      image: './images/service-nail-design.jpg',
      imageAlt: 'Nail design minimalista com base nude perolada e detalhes finos dourados',
      whatsappMessage:
        'Olá! Gostaria de agendar um horário para nail design. Poderia me informar os horários disponíveis?',
    },
    {
      id: 'extensao-cilios',
      name: 'Extensão de cílios',
      category: 'Cílios',
      description:
        'Fios leves e personalizados para destacar o seu olhar com harmonia, conforto e praticidade ao acordar.',
      image: './images/service-cilios.jpg',
      imageAlt: 'Detalhe do olhar feminino com extensão de cílios leve e sofisticada',
      whatsappMessage:
        'Olá! Gostaria de agendar um horário para extensão de cílios. Poderia me informar os horários disponíveis?',
    },
    {
      id: 'lash-lifting',
      name: 'Lash lifting',
      category: 'Cílios',
      description:
        'Curvatura e alinhamento dos seus cílios naturais, proporcionando um efeito alongado, leve e extremamente natural.',
      image: './images/service-lash-lifting.jpg',
      imageAlt: 'Cílios naturais curvados e alinhados com técnica de lash lifting',
      whatsappMessage:
        'Olá! Gostaria de agendar um horário para lash lifting. Poderia me informar os horários disponíveis?',
    },
    {
      id: 'design-sobrancelhas',
      name: 'Design de sobrancelhas',
      category: 'Sobrancelhas',
      description:
        'Mapeamento cuidadoso que respeita o desenho natural do seu rosto, trazendo equilíbrio e expressão ao olhar.',
      image: './images/service-sobrancelhas.jpg',
      imageAlt: 'Design de sobrancelhas com acabamento natural e harmonioso',
      whatsappMessage:
        'Olá! Gostaria de agendar um horário para design de sobrancelhas. Poderia me informar os horários disponíveis?',
    },
    {
      id: 'beleza-facial',
      name: 'Beleza facial',
      category: 'Beleza Facial',
      description:
        'Rituais de cuidado voltados para o viço, maciez e bem-estar da sua pele, com toque suave e acolhedor.',
      image: './images/service-facial.jpg',
      imageAlt: 'Cuidado de beleza facial com pele hidratada e luminosa em estúdio',
      whatsappMessage:
        'Olá! Gostaria de saber mais e agendar um horário para beleza facial. Quais horários estão disponíveis?',
    },
    {
      id: 'tratamentos-esteticos',
      name: 'Tratamentos e cuidados estéticos',
      category: 'Beleza Facial',
      description:
        'Protocolos e cuidados estéticos realizados conforme a disponibilidade da profissional e as necessidades do seu momento.',
      image: './images/service-estetica.jpg',
      imageAlt: 'Produtos e elementos de autocuidado e estética em pedra travertino',
      whatsappMessage:
        'Olá! Gostaria de consultar a disponibilidade para tratamentos e cuidados estéticos e agendar um horário.',
    },
  ],

  experience: {
    eyebrow: 'Experiência de Autocuidado',
    title: 'Você merece esse momento.',
    text: 'Em meio à rotina, reservar um momento para cuidar de você também é uma forma de se valorizar. Nosso espaço foi pensado para proporcionar cuidado, acolhimento e uma experiência que valoriza sua beleza e bem-estar.',
    ctaText: 'Reservar meu momento',
    whatsappMessage:
      'Olá! Gostaria de reservar um momento de autocuidado e verificar os horários disponíveis.',
    image: './images/experiencia-autocuidado.jpg',
    imageAlt:
      'Ambiente acolhedor de estúdio de beleza em tons bege, off-white e dourado suave',
  },

  portfolio: {
    eyebrow: 'Portfólio Visual',
    title: 'Nosso trabalho, nossa paixão.',
    subtitle:
      'Cada detalhe é executado com técnica, sensibilidade e carinho. Clique em qualquer imagem para ampliar.',
    categories: ['Todos', 'Unhas', 'Cílios', 'Sobrancelhas', 'Beleza Facial'],
    items: [
      {
        id: 'pf-1',
        category: 'Unhas',
        title: 'Manicure em tom nude clássico',
        caption: 'Acabamento limpo, brilho delicado e naturalidade.',
        image: './images/service-manicure.jpg',
        imageAlt: 'Trabalho de manicure em tom nude suave',
      },
      {
        id: 'pf-2',
        category: 'Cílios',
        title: 'Extensão de cílios com leveza',
        caption: 'Olhar realçado com harmonia e conforto.',
        image: './images/service-cilios.jpg',
        imageAlt: 'Trabalho de extensão de cílios com acabamento delicado',
      },
      {
        id: 'pf-3',
        category: 'Unhas',
        title: 'Alongamento amendoado rosé',
        caption: 'Estrutura elegante com acabamento natural.',
        image: './images/service-alongamento.jpg',
        imageAlt: 'Trabalho de alongamento de unhas em tom rosé leitoso',
      },
      {
        id: 'pf-4',
        category: 'Sobrancelhas',
        title: 'Design de sobrancelhas harmonizado',
        caption: 'Respeito ao desenho natural do rosto.',
        image: './images/service-sobrancelhas.jpg',
        imageAlt: 'Trabalho de design de sobrancelhas com fios alinhados',
      },
      {
        id: 'pf-5',
        category: 'Unhas',
        title: 'Nail design com detalhes sutis',
        caption: 'Minimalismo sofisticado em tons champagne.',
        image: './images/service-nail-design.jpg',
        imageAlt: 'Trabalho de nail design delicado com detalhes dourados',
      },
      {
        id: 'pf-6',
        category: 'Cílios',
        title: 'Lash lifting natural',
        caption: 'Curvatura suave que valoriza os fios naturais.',
        image: './images/service-lash-lifting.jpg',
        imageAlt: 'Resultado natural de lash lifting',
      },
      {
        id: 'pf-7',
        category: 'Beleza Facial',
        title: 'Cuidados e viço facial',
        caption: 'Pele acolhida, iluminada e bem cuidada.',
        image: './images/service-facial.jpg',
        imageAlt: 'Cuidado facial com pele luminosa em estúdio',
      },
      {
        id: 'pf-8',
        category: 'Beleza Facial',
        title: 'Ritual de estética e bem-estar',
        caption: 'Texturas delicadas para uma pausa restauradora.',
        image: './images/service-estetica.jpg',
        imageAlt: 'Composição de ritual estético e autocuidado',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre a Profissional',
    title: 'Prazer, sou sua profissional de beleza.',
    image: './images/sobre-profissional.jpg',
    imageAlt: 'Retrato editorial da profissional de beleza em seu estúdio',
    name: 'Seu Nome Aqui',
    specialty: 'Especialidade principal (ex.: Nail Designer, Lash Designer e Estética)',
    story: [
      'Este espaço foi criado para contar a sua história de forma verdadeira e acolhedora. Compartilhe aqui como nasceu sua paixão pela beleza feminina e o que motiva o seu trabalho todos os dias.',
      'Personalize este texto com a sua trajetória, a forma como você acolhe cada cliente e o cuidado presente em cada atendimento no seu espaço.',
    ],
    details: [
      {
        label: 'Experiência',
        value: 'Informe aqui seu tempo de atuação e vivência na área da beleza.',
      },
      {
        label: 'Formação',
        value: 'Adicione aqui sua formação, cursos e especializações reais.',
      },
      {
        label: 'Diferenciais',
        value: 'Destaque o que torna seu atendimento único e memorável.',
      },
      {
        label: 'Filosofia de atendimento',
        value: 'Cuidado individualizado, escuta atenta e respeito à sua essência.',
      },
    ],
    ctaText: 'Conversar pelo WhatsApp',
  },

  differentialsSection: {
    eyebrow: 'Nosso Jeito de Cuidar',
    title: 'Detalhes que transformam o seu atendimento.',
    subtitle:
      'Cada visita é pensada para oferecer tranquilidade, beleza e uma experiência verdadeiramente acolhedora.',
    items: [
      {
        icon: 'sparkle',
        title: 'Atendimento personalizado',
        description:
          'Cada procedimento é adaptado ao seu estilo, rotina e características naturais.',
      },
      {
        icon: 'home',
        title: 'Ambiente acolhedor',
        description:
          'Um espaço calmo, organizado e preparado para você desacelerar e relaxar.',
      },
      {
        icon: 'detail',
        title: 'Cuidado com cada detalhe',
        description:
          'Atenção rigorosa à higiene, acabamento delicado e escolha criteriosa dos materiais.',
      },
      {
        icon: 'heart',
        title: 'Dedicação à beleza e autoestima',
        description:
          'Nosso propósito é realçar a sua essência para que você se sinta ainda mais confiante.',
      },
      {
        icon: 'calendar',
        title: 'Agendamento facilitado',
        description:
          'Atendimento direto pelo WhatsApp com praticidade e horários organizados para você.',
      },
      {
        icon: 'ribbon',
        title: 'Experiência pensada para você',
        description:
          'Do primeiro contato ao resultado final, tudo é planejado para o seu bem-estar.',
      },
    ],
  },

  /**
   * DEPOIMENTOS REAIS
   * Por padrão, esta seção permanece oculta (`enabled: false`) até que você
   * adicione depoimentos reais de clientes. Nunca publique avaliações fictícias.
   */
  testimonials: {
    enabled: false,
    eyebrow: 'Carinho de Quem Passa Por Aqui',
    title: 'Palavras de quem confia no nosso cuidado.',
    items: [
      // Exemplo de estrutura para quando houver depoimentos reais:
      // {
      //   author: 'Nome real da cliente',
      //   service: 'Serviço realizado',
      //   quote: 'Texto real autorizado pela cliente.',
      // },
    ],
  },

  contactSection: {
    eyebrow: 'Contato e Localização',
    title: 'Agende o seu momento.',
    subtitle:
      'Será um prazer receber você. Fale diretamente pelo WhatsApp para consultar disponibilidade ou tirar suas dúvidas.',
    ctaText: 'Agendar pelo WhatsApp',
  },
};

/**
 * Monta um link oficial do WhatsApp com mensagem codificada.
 */
export function buildWhatsAppUrl(message = siteConfig.contact.defaultWhatsappMessage) {
  const cleanPhone = String(siteConfig.contact.whatsappNumber).replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
