export interface Chapter {
  number: number;
  title: string;
  description: string;
}

export interface TargetGroup {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "O que é Inteligência Artificial",
    description: "Uma introdução clara, sem jargões complicados, sobre o universo da IA e suas possibilidades práticas."
  },
  {
    number: 2,
    title: "O que é um Site de IA e como funciona",
    description: "Entenda a estrutura por trás de um site de IA moderno e como integrar essas tecnologias perfeitamente."
  },
  {
    number: 3,
    title: "Planejamento da ideia e público-alvo",
    description: "Defina o objetivo do seu site e mapeie quem são os seus visitantes ideais para garantir o sucesso do seu projeto."
  },
  {
    number: 4,
    title: "Ferramentas gratuitas para criar um site",
    description: "Nossa seleção de ouro de ferramentas de IA 100% gratuitas para criar, hospedar e gerenciar páginas web."
  },
  {
    number: 5,
    title: "Layout e identidade visual",
    description: "Como criar elementos de design, paletas de cores harmônicas e logotipos profissionais usando prompts simples."
  },
  {
    number: 6,
    title: "Criando páginas essenciais",
    description: "Estruture rapidamente as telas essenciais: Home, Sobre, Contato e as políticas obrigatórias de Privacidade."
  },
  {
    number: 7,
    title: "Integrando recursos de IA ao site",
    description: "Conecte chats inteligentes, assistentes e geradores automáticos direto no seu layout para encantar visitantes."
  },
  {
    number: 8,
    title: "Testando e publicando o site",
    description: "Verifique a responsividade no celular, otimize o carregamento e publique seu site gratuitamente no ambiente web."
  },
  {
    number: 9,
    title: "Mantendo o site atualizado",
    description: "Rotinas simples de manutenção para garantir que seu site continue rápido, seguro e no ar 24 horas por dia."
  },
  {
    number: 10,
    title: "Formas de monetização",
    description: "Principais estratégias para lucrar com seu novo site: anúncios automatizados, áreas de membros e venda de infoprodutos."
  },
  {
    number: 11,
    title: "Dicas de divulgação e marketing",
    description: "Como tracionar visitas diárias de forma orgânica e paga sem demandar orçamentos gigantescos nas redes sociais."
  },
  {
    number: 12,
    title: "Perguntas Frequentes (FAQ) do Usuário",
    description: "Seja o solucionador de problemas: monte uma área de FAQ eficiente que elimina objeções e ajuda nas vendas."
  },
  {
    number: 13,
    title: "Checklist Final para o Lançamento",
    description: "Uma lista objetiva com cada etapa a ser revisada para garantir que seu site seja lançado com perfeição técnica."
  }
];

export const targetGroups: TargetGroup[] = [
  {
    title: "Iniciantes",
    description: "Não entende nada de programação? Sem problemas! Este livro foi feito para você começar do mais absoluto zero.",
    icon: "GraduationCap"
  },
  {
    title: "Empreendedores",
    description: "Precisa de um site profissional para o seu negócio ou projeto sem gastar fortunas com agências de criação.",
    icon: "Briefcase"
  },
  {
    title: "Curiosos de Tecnologia",
    description: "Quer entender como a revolução da Inteligência Artificial pode ser aplicada na prática para gerar valor real na web.",
    icon: "Cpu"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que exatamente vou receber ao comprar o e-book?",
    answer: "Você receberá acesso imediato e vitalício ao e-book em formato PDF de 39 páginas de pura prática, detalhado passo a passo, ilustrado e estruturado de forma simples."
  },
  {
    id: "faq-2",
    question: "Preciso saber programar ou ter habilidades com código?",
    answer: "De forma alguma! O e-book foi escrito especificamente para quem nunca programou. Você vai aprender a usar construtores visuais e prompts de IA que fazem o trabalho pesado para você."
  },
  {
    id: "faq-3",
    question: "As ferramentas ensinadas no e-book são realmente gratuitas?",
    answer: "Sim! O e-book em si possui um pagamento único super acessível e simbólico. Após adquiri-lo, todas as ferramentas de criação, design, inteligência artificial e hospedagem que ensinamos possuem planos 100% gratuitos e funcionais, permitindo colocar seu site no ar sem mensalidades extras ou taxas ocultas."
  },
  {
    id: "faq-4",
    question: "Em quanto tempo consigo colocar meu site no ar?",
    answer: "Se você seguir os capítulos em ordem e com atenção, é perfeitamente possível planejar, construir, integrar e publicar um site robusto com inteligência artificial em menos de 1 hora."
  },
  {
    id: "faq-5",
    question: "Como funciona a entrega do e-book após o pagamento?",
    answer: "A transação é totalmente processada de forma segura pela Cakto. Assim que o pagamento for aprovado, você será imediatamente redirecionado ao link oficial para baixar seu e-book em PDF sem burocracias."
  },
  {
    id: "faq-6",
    question: "Quais são as formas de pagamento aceitas?",
    answer: "A plataforma da Cakto aceita transações rápidas via Pix e também Cartão de Crédito com parcelamento. Tudo seguro e criptografado para sua total tranquilidade."
  }
];
