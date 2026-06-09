import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  AlertCircle, 
  Users, 
  Star, 
  Award, 
  ChevronDown, 
  Check, 
  Layers, 
  Clock, 
  Smartphone, 
  FileText 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chapters, targetGroups, faqItems } from "./data";
// @ts-ignore
import startIaLogo from "./assets/images/start_ia_logo_1781041206447.png";

export default function App() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [downloadCount, setDownloadCount] = useState(1642);
  const [activeTab, setActiveTab] = useState<"chapters" | "preview">("chapters");
  const [showToast, setShowToast] = useState(false);
  const [currentToastName, setCurrentToastName] = useState("");
  const [currentToastPlace, setCurrentToastPlace] = useState("");
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Payment Link
  const paymentLink = "https://pay.cakto.com.br/pbvkex2_920899";

  // Simulate downloads live counter rising slowly
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Fast countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 }; // reset
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Notifications of periodic sales (proof social proof)
  useEffect(() => {
    const names = [
      "Ana Souza", "Mateus Silva", "Carlos Oliveira", "Juliana Costa", "Rodrigo Santos", 
      "Guilherme Almeida", "Beatriz Lima", "Felipe Martins", "Mariana Rocha", "Gabriel Santos", 
      "Lucas Mendes", "Amanda Dias", "Thiago Ribeiro"
    ];
    const cities = [
      "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Porto Alegre - RS", 
      "Salvador - BA", "Recife - PE", "Curitiba - PR", "Brasília - DF", "Fortaleza - CE", 
      "Goiânia - GO", "Campinas - SP", "Manaus - AM", "Florianópolis - SC"
    ];

    const showRandomToast = () => {
      const idxName = Math.floor(Math.random() * names.length);
      const idxCity = Math.floor(Math.random() * cities.length);
      setCurrentToastName(names[idxName]);
      setCurrentToastPlace(cities[idxCity]);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    };

    // First toast after 3s
    const firstTimeout = setTimeout(showRandomToast, 3500);

    const interval = setInterval(() => {
      showRandomToast();
    }, 24000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  // Helper mapping lucide icons dynamically using component dictionary
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-7 h-7 text-[#00D4B4]" />;
      case "Briefcase":
        return <Briefcase className="w-7 h-7 text-[#00D4B4]" />;
      case "Cpu":
        return <Cpu className="w-7 h-7 text-[#00D4B4]" />;
      default:
        return <BookOpen className="w-7 h-7 text-[#00D4B4]" />;
    }
  };

  return (
    <div id="landing-page" className="min-h-screen bg-[#0E1120] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-[#6C63FF]/30 selection:text-[#00D4B4]">
      
      {/* GLOWING AMBIENT LIGHTS IN BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6C63FF]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-[800px] right-10 w-[500px] h-[500px] bg-[#00D4B4]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-[2000px] left-10 w-[600px] h-[600px] bg-[#6C63FF]/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[400px] right-1/4 w-[400px] h-[400px] bg-[#00D4B4]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* TOP ANNOUNCEMENT BAR */}
      <div id="announce-bar" className="bg-[#1A1F3C]/90 border-b border-[#6C63FF]/20 backdrop-blur-md text-slate-200 text-xs md:text-sm py-2.5 px-4 text-center z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#00D4B4] animate-pulse"></span>
            PROMOÇÃO DE LANÇAMENTO EXCLUSIVA
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-300">O preço subirá em:</span>
            <div className="font-mono bg-[#0E1120] border border-[#6C63FF]/30 px-2 py-0.5 rounded text-[#00D4B4] font-semibold flex items-center gap-0.5">
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="animate-pulse">:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header id="main-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={startIaLogo} 
            alt="Start IA Logo" 
            className="w-11 h-11 object-contain filter drop-shadow-[0_0_8px_rgba(108,99,255,0.4)] animate-pulse"
            style={{ animationDuration: '3s' }}
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-2xl tracking-normal text-white">
            Start<span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4B4] bg-clip-text text-transparent">IA</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-[#1A1F3C]/60 border border-[#6C63FF]/20 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
            <Users className="w-4 h-4 text-[#00D4B4]" />
            <span>Mais de <strong className="text-white font-semibold">{downloadCount.toLocaleString()}</strong> leitores satisfeitos</span>
          </div>
          <a
            href={paymentLink}
            id="nav-cta"
            className="hidden sm:inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5b51f0] text-white px-5 py-2 rounded-full font-medium text-xs tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#6C63FF]/30 hover:-translate-y-0.5"
          >
            Comprar E-book
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 lg:pt-14 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#1A1F3C] border border-[#6C63FF]/40 text-[#00D4B4]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4B4] animate-spin" style={{ animationDuration: '4s' }} />
              2026 • Atualizado
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Descubra Como Criar um <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-[#00D4B4] via-[#6C63FF] to-[#00D4B4] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient text-glow">
              Site de IA do Zero
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg sm:text-xl lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Aprenda o passo a passo definitivo para criar seu próprio site de inteligência artificial de forma descomplicada. Adquirindo nosso e-book por um <strong className="text-white font-semibold">valor único promocional</strong>, você descobrirá métodos práticos para utilizar ferramentas e inteligências incríveis que são <strong className="text-[#00D4B4] font-semibold">100% gratuitas</strong> para colocar seu projeto no ar sem mensalidades de assinatura.
          </p>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 py-2 border-y border-[#6C63FF]/10 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-slate-200 text-sm font-semibold ml-1">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
            <p className="text-xs sm:text-sm text-slate-300">
              ⚡ Usado por <strong className="text-[#00D4B4] text-sm font-bold font-mono">{downloadCount.toLocaleString()}</strong> empreendedores e estudantes
            </p>
          </div>

          {/* Primary CTA Block */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href={paymentLink}
              id="cta-hero-primary"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6C63FF] to-[#7f77f5] hover:from-[#5b51f0] hover:to-[#6C63FF] text-white px-8 py-4.5 rounded-2xl font-bold tracking-wider text-base uppercase transition-all duration-300 shadow-xl shadow-[#6C63FF]/20 hover:shadow-2xl hover:shadow-[#6C63FF]/40 hover:-translate-y-1"
            >
              QUERO O E-BOOK AGORA →
            </a>
            
            <div className="flex flex-col items-center sm:items-start text-xs text-slate-400 gap-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#00D4B4]" /> Compra 100% Segura via Cakto
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-[#00D4B4]" /> Acesso imediato liberado no PDF
              </span>
            </div>
          </div>

          {/* Offer Details */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-mono text-slate-400 mt-2">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00D4B4]" /> FORMATO: PDF COMPACTO
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00D4B4]" /> PÁGINAS: 39 PÁGINAS
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00D4B4]" /> ACESSO: PRODUTO DIGITAL IMEDIATO
            </div>
          </div>
        </div>

        {/* CSS 3D BOOK COVER MOCKUP COLUMN */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center md:py-10">
          <div className="relative group perspective-1000 w-[240px] h-[340px] md:w-[290px] md:h-[410px] mx-auto select-none cursor-pointer">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-[#6C63FF]/15 rounded-3xl blur-[35px] group-hover:bg-[#00D4B4]/15 transition-all duration-700"></div>
            
            {/* 3D Book Container */}
            <div className="relative w-full h-full transform-style-3d duration-500 group-hover:rotate-y-[-24deg] group-hover:rotate-x-[12deg] group-hover:shadow-[20px_20px_50px_rgba(0,0,0,0.6)]">
              
              {/* Spine thickness effect (Simulates book width page layers depth) */}
              <div className="absolute top-[4px] bottom-[4px] right-[2px] w-[18px] bg-slate-100 rounded-r shadow-[inset_3px_0_8px_rgba(0,0,0,0.2)] origin-right transform rotate-y-[-90deg] translate-x-[9px] z-0 flex flex-col justify-between py-6 pr-[2px]">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="h-[1px] w-full bg-slate-300 opacity-60"></div>
                ))}
              </div>

              {/* Physical spine cover edge */}
              <div className="absolute top-0 bottom-0 left-[2px] w-[8px] bg-[#121630] rounded-l-md shadow-lg z-20 opacity-90"></div>
              
              {/* Book Cover Front panel */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E254B] via-[#101430] to-[#0A0D1F] border-2 border-[#6C63FF]/30 rounded-l-md rounded-r-2xl shadow-[6px_6px_30px_rgba(0,0,0,0.65)] px-6 py-8 flex flex-col justify-between overflow-hidden z-10 select-none">
                
                {/* Decorative circuit lines & grids */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-[#00D4B4]/10 blur-xl"></div>
                <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-[#6C63FF]/10 blur-xl"></div>

                {/* Cover Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B4]"></span>
                    <span className="text-[10px] font-mono tracking-widest text-[#00D4B4] uppercase">START IA ACADEMY</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 bg-slate-900/60 border border-slate-700/60 px-1.5 py-0.5 rounded">GUIDE 2026</span>
                </div>

                {/* Cover Middle - Beautiful Display Title */}
                <div className="my-auto z-10 flex flex-col gap-3">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#00D4B4] to-[#6C63FF]"></div>
                  <h3 className="text-left font-display font-black text-2xl md:text-3xl tracking-tight text-white leading-tight">
                    COMO CRIAR <br />
                    UM SITE DE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4B4] to-[#6C63FF]">IA DO ZERO</span>
                  </h3>
                  <p className="text-[9px] md:text-[11px] text-slate-400 leading-snug font-normal text-left max-w-[90%] border-l-2 border-l-[#00D4B4] pl-2">
                    Construa portais modernos utilizando apenas metodologias e ferramentas gratuitas
                  </p>
                </div>

                {/* Cover Footer */}
                <div className="flex items-end justify-between border-t border-slate-800/80 pt-4 z-10">
                  <div className="text-left">
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest">AUTOR</span>
                    <span className="block text-[11px] font-bold text-white tracking-wide">Equipe Start IA</span>
                  </div>
                  {/* Digital Book Badge with the brand logo */}
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#6C63FF]/30 to-[#00D4B4]/30 border border-[#00D4B4]/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src={startIaLogo} 
                      alt="Start IA Rocket Logo" 
                      className="w-6 h-6 object-contain filter brightness-110" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Hint Badge below/hovering the book */}
            <div className="absolute -bottom-6 left-1/4 right-1/4 flex justify-center">
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-slate-400 font-mono bg-[#1A1F3C]/95 border border-[#6C63FF]/20 px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                💡 <span className="text-slate-300">Passe o mouse para rotacionar</span>
              </span>
            </div>

          </div>

          <div className="mt-14 w-full max-w-sm bg-[#1A1F3C]/50 border border-[#6C63FF]/15 p-5 rounded-2xl flex flex-col gap-3.5 shadow-lg">
            <h4 className="font-semibold text-white text-sm flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00D4B4]" /> O que há dentro do PDF:
            </h4>
            
            <ul className="text-xs text-slate-300 flex flex-col gap-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4B4] shrink-0 mt-0.5" />
                <span>39 páginas de conteúdo prático sem enrolação</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4B4] shrink-0 mt-0.5" />
                <span>Metodologia testada para iniciantes absolutos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4B4] shrink-0 mt-0.5" />
                <span>Indicação direta das melhores ferramentas gratuitas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RHYTHM BADGE STRIP (BENEFITS IN NUMBERS) */}
      <section id="benefits-strip" className="bg-[#1A1F3C]/40 border-y border-[#6C63FF]/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white font-mono bg-gradient-to-r from-[#00D4B4] to-[#6C63FF] bg-clip-text text-transparent">39</span>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Páginas de Puro Conteúdo</span>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white font-mono bg-gradient-to-r from-[#00D4B4] to-[#6C63FF] bg-clip-text text-transparent">13</span>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Capítulos Completos</span>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#00D4B4] font-mono">Pague 1x</span>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Ebook Muito Barato</span>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#00D4B4] font-mono">Grátis</span>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Ferramentas Ensinadas</span>
            </div>

          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE ("Para quem é este e-book") */}
      <section id="target-audience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-mono tracking-widest text-[#00D4B4] uppercase block">PREPARADO PARA VOCÊ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Para quem é este E-book exclusivo?
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Construímos o material focando em soluções descomplicadas para que os seguintes perfis consigam criar sites poderosos rapidamente:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetGroups.map((group, index) => (
            <div 
              key={index} 
              id={`target-group-${index}`}
              className="bg-[#1A1F3C]/40 border border-[#6C63FF]/15 hover:border-[#00D4B4]/40 p-8 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#6C63FF] group-hover:bg-[#00D4B4] transition-all duration-300"></div>
              
              <div className="w-14 h-14 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center group-hover:bg-[#00D4B4]/10 transition-all duration-300">
                {getIcon(group.icon)}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00D4B4] transition-all duration-300">
                  {group.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL BOOK PREVIEW / CHAPTERS DETAILED MODULE */}
      <section id="chapters-curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="bg-[#1A1F3C]/20 border border-[#6C63FF]/10 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#6C63FF]/5 blur-3xl pointer-events-none"></div>

          {/* Header Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#6C63FF]/10 mb-10">
            <div className="text-center lg:text-left flex flex-col gap-2 max-w-xl">
              <span className="text-xs font-mono tracking-widest text-[#00D4B4] uppercase block">CRONOGRAMA DE APRENDIZADO</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                O que você vai aprender na prática?
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Navegue pela grade curricular de 13 capítulos estruturados estrategicamente para sua independência digital.
              </p>
            </div>

            {/* Toggle tabs */}
            <div className="flex bg-[#0E1120] p-1.5 rounded-xl border border-[#6C63FF]/20 text-xs font-medium">
              <button 
                onClick={() => setActiveTab("chapters")}
                className={`px-5 py-2 rounded-lg transition-all duration-200 ${activeTab === "chapters" ? "bg-[#6C63FF] text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                Grade de Capítulos (13)
              </button>
              <button 
                onClick={() => setActiveTab("preview")}
                className={`px-5 py-2 rounded-lg transition-all duration-200 ${activeTab === "preview" ? "bg-[#6C63FF] text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                Espiar Prévia do Livro
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "chapters" ? (
              <motion.div 
                key="chapters-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {chapters.map((chapter) => (
                  <div 
                    key={chapter.number}
                    id={`chapter-card-${chapter.number}`}
                    className="p-5 rounded-xl bg-[#0E1120]/85 border border-[#6C63FF]/10 hover:border-[#6C63FF]/30 transition-all duration-300 hover:bg-[#1A1F3C]/40 flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#6C63FF]/10 font-mono font-bold text-sm text-[#00D4B4] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00D4B4]/10 transition-colors duration-300">
                      {String(chapter.number).padStart(2, '0')}
                    </div>
                    <div className="flex flex-col gap-1.5 text-left">
                      <h4 className="font-semibold text-white group-hover:text-[#00D4B4] transition-colors duration-300 text-sm md:text-base leading-snug">
                        {chapter.title}
                      </h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="preview-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Book spine simulation layout */}
                <div className="lg:col-span-5 bg-[#0E1120] border border-[#6C63FF]/20 rounded-2xl p-6 flex flex-col gap-6 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center bg-[#1A1F3C]/50 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-xs font-mono text-[#00D4B4] font-semibold">TIPO DE ARQUIVO</span>
                      <span className="text-xs font-mono text-white">Documento PDF (.pdf)</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#1A1F3C]/50 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-xs font-mono text-[#00D4B4] font-semibold">MÚLTIPLOS ACESSOS</span>
                      <span className="text-xs font-mono text-white">Celular, Tablet e PC</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#1A1F3C]/50 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-xs font-mono text-[#00D4B4] font-semibold">PÁGINAS TOTAIS</span>
                      <span className="text-xs font-mono text-white">39 páginas completas</span>
                    </div>
                  </div>

                  <div className="bg-[#1A1F3C]/30 border border-[#6C63FF]/10 p-5 rounded-xl text-xs text-slate-300 flex flex-col gap-3 leading-relaxed">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#00D4B4]" /> Trecho de Introdução:
                    </p>
                    <p className="italic">
                      &quot;...A grande revolução da Inteligência Artificial em 2026 é que você não precisa mais reescrever códigos para ter seu site rodando. Hoje, ferramentas consolidadas geram toda a infraestrutura base, servindo para que você adapte e aplique prompts estruturados...&quot;
                    </p>
                  </div>

                  <a 
                    href={paymentLink}
                    id="cta-preview-button"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#00D4B4] hover:bg-[#00bfa3] text-slate-900 font-bold py-3 px-5 rounded-xl transition-all duration-200 tracking-wide text-xs uppercase"
                  >
                    Garantir e-book Completo
                  </a>
                </div>

                {/* PDF Live Spreader Simulator */}
                <div className="lg:col-span-7 bg-[#0E1120] border border-dashed border-[#6C63FF]/30 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden justify-between">
                  <div className="absolute top-2 right-2 bg-[#6C63FF]/10 px-2 py-0.5 rounded text-[10px] font-mono text-[#00D4B4] border border-[#6C63FF]/20">
                    MOCK PREVIEW
                  </div>
                  
                  <div className="flex flex-col gap-4 text-left">
                    <div className="pb-3 border-b border-slate-800 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#6C63FF]" />
                      <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Capítulo 4: Ferramentas Gratuitas</h4>
                        <span className="text-[10px] text-slate-500 font-mono">PÁGINA 12 DO E-BOOK</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 text-xs text-slate-400 font-mono">
                      <div className="text-slate-300 font-sans leading-relaxed text-sm">
                        Para colocar um site profissional no ar sem custos, utilizaremos a fusão de três serviços líderes que possuem planos gratuitos permanentes:
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <div className="bg-[#1A1F3C]/50 border border-[#6C63FF]/25 p-3 rounded-xl flex flex-col gap-1">
                          <span className="text-[#00D4B4] font-bold font-sans">1. IA Criadora de Interface:</span>
                          <span className="text-[11px] leading-normal font-sans text-slate-300">Responsável por desenhar as seções, o visual moderno e exportar o HTML limpo.</span>
                        </div>
                        <div className="bg-[#1A1F3C]/50 border border-[#6C63FF]/25 p-3 rounded-xl flex flex-col gap-1">
                          <span className="text-[#00D4B4] font-bold font-sans">2. Hospedagem Global Grátis:</span>
                          <span className="text-[11px] leading-normal font-sans text-slate-300">Garante que o seu site seja acessível em qualquer lugar do mundo instantaneamente com CDN.</span>
                        </div>
                      </div>

                      <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-slate-400 text-[10px] leading-relaxed font-sans italic">
                        ⭐ <strong>Nota de Implementação (2026):</strong> Faremos o acoplamento do código estático de forma direta no servidor, poupando passos chatos de setup de domínio.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent absolute bottom-0 left-0 right-0 text-center flex flex-col items-center pt-16">
                    <span className="text-xs font-semibold text-[#00D4B4] mb-1.5 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> FIM DA PRÉVIA GRATUITA
                    </span>
                    <span className="text-[10px] text-slate-400 max-w-xs leading-normal">
                      Compre hoje e tenha acesso imediato a todas as 39 páginas prontas com dicas práticas de otimização.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Big secondary CTA button centered in Middle of curriculum section */}
          <div className="mt-14 flex flex-col items-center gap-3">
            <a
              href={paymentLink}
              id="cta-chapters-middle"
              className="inline-flex items-center gap-2 bg-[#00D4B4] hover:bg-[#00bfa3] text-slate-900 font-extrabold px-8 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#00D4B4]/10 hover:shadow-xl hover:shadow-[#00D4B4]/20"
            >
              GARANTIR MEU ACESSO
            </a>
            <span className="text-slate-400 text-xs font-mono">⚡ De R$ 97,00 por apenas um pagamento único simbólico</span>
          </div>

        </div>
      </section>

      {/* DETAILED WARRANTY PANEL */}
      <section id="warranty-panel" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#1A1F3C]/50 border-2 border-[#00D4B4]/20 rounded-3xl p-8 md:p-12 lg:p-14 text-center relative overflow-hidden">
          
          {/* Glowing badge background decorative circle */}
          <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-[#00D4B4]/10 blur-2xl"></div>

          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#00D4B4]/10 flex items-center justify-center border border-[#00D4B4]/30">
              <ShieldCheck className="w-10 h-10 text-[#00D4B4]" />
            </div>

            <span className="text-xs font-mono font-bold tracking-widest text-[#00D4B4] uppercase bg-[#00D4B4]/10 border border-[#00D4B4]/30 px-3 py-1 rounded-full">
              ACESSO ÚNICO E ECONÔMICO
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Investimento Único e Barato no E-book <br className="hidden sm:inline" />
              para dominar ferramentas 100% Gratuitas
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Nossa missão é economizar seu dinheiro! Você faz um <strong className="text-white font-semibold">único e pequeno pagamento pelo e-book</strong> e, em contrapartida, terá um guia completo ensinando a usar plataformas consagradas que oferecem <strong className="text-[#00D4B4] font-semibold">planos gratuitos vitalícios</strong> para criar, hospedar e integrar IA no seu site, tudo sem custos adicionais de assinatura.
            </p>

            {/* Platform checkout badges container */}
            <div className="pt-6 border-t border-slate-800 w-full flex flex-col items-center gap-4">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">PAGAMENTO SEGURO E CRIPTOGRAFADO</span>
              <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
                {/* Custom Styled Security Badges */}
                <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono">
                  🔒 Criptografia SSL
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono">
                  💳 Cartão de Crédito
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono text-[#00D4B4]">
                  ⚡ Pix Imediato
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="text-center flex flex-col gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest text-[#00D4B4] uppercase block">DÚVIDAS FREQUENTES</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tem alguma dúvida sobre o e-book ou a entrega digital? Confira as respostas rápidas abaixo:
          </p>
        </div>

        {/* FAQ Accordion container */}
        <div className="flex flex-col gap-4">
          {faqItems.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id}
                id={faq.id}
                className="bg-[#1A1F3C]/40 border border-[#6C63FF]/15 hover:border-[#6C63FF]/30 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  id={`${faq.id}-trigger`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-white hover:text-[#00D4B4] transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-sm md:text-base pr-4 leading-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#0E1120] border border-[#6C63FF]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </button>

                {/* Animated collapse content wrapper using Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 bg-[#0E1120]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Pre-footer Call back */}
        <div className="mt-16 text-center flex flex-col items-center gap-5 bg-gradient-to-tr from-[#1A1F3C]/40 to-[#0E1120] border border-[#6C63FF]/10 rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display font-bold text-white text-lg">Ainda tem alguma dúvida específica?</h3>
            <p className="text-xs sm:text-sm text-slate-400">Garanta o material sem preocupações. Nosso processo é imediato e simplificado.</p>
          </div>
          <a
            href={paymentLink}
            id="cta-prefooter-redirect"
            className="inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5b51f0] text-white font-bold py-3.5 px-8 rounded-xl text-xs tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
          >
            GARANTIR MEU ACESSO
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="main-footer" className="bg-[#0A0D1A] border-t border-[#6C63FF]/10 pt-16 pb-28 md:pb-20 text-slate-400 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
          
          {/* Logo & Small description */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2.5">
              <img 
                src={startIaLogo} 
                alt="Start IA Logo" 
                className="w-9 h-9 object-contain" 
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-xl text-white">
                Start<span className="text-[#00D4B4]">IA</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-normal">
              Democratizando a criação de tecnologia na web através da Inteligência Artificial em 2026.
            </p>
          </div>

          <div className="w-20 h-px bg-slate-800"></div>

          {/* Legal Warning MANDATORY BY INSTRUCTION */}
          <div className="max-w-2xl mx-auto flex flex-col gap-2 bg-[#1A1F3C]/30 border border-slate-800/80 p-4 rounded-xl">
            <span className="text-[#00D4B4] font-semibold uppercase tracking-widest text-[9px] block">⚠️ AVISO IMPORTANTE</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Este e-book é um produto digital. Não há garantia de ganhos financeiros. Os resultados de velocidade, design e monetização dependem exclusivamente da dedicação, testes e aplicação individual de cada leitor.
            </p>
          </div>

          {/* Bottom Copyrights */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-slate-900 text-[10px] text-slate-500 gap-4 mt-4">
            <p>© 2026 Start IA Academy. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <span>Termos de Uso</span>
              <span>·</span>
              <span>Políticas de Privacidade</span>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING MOBILE ACTION BOTTOM BUTTON (MANDATORY BY INSTRUCTION) */}
      <div id="mobile-floating-dock" className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-[#0E1120]/95 border border-[#6C63FF]/30 p-2.5 rounded-2xl backdrop-blur-lg shadow-2xl flex items-center justify-between gap-3 animate-fade-in-up">
        <div className="flex flex-col pl-2 text-left justify-center">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[#00D4B4] font-bold">START IA • E-BOOK</span>
          <span className="text-white text-xs font-bold leading-tight line-clamp-1">Site de IA do Zero</span>
        </div>
        <a
          href={paymentLink}
          id="cta-mobile-floating"
          className="bg-gradient-to-r from-[#6C63FF] to-[#00D4B4] hover:bg-[#6C63FF] text-slate-900 font-extrabold text-[11px] tracking-wide uppercase px-4 py-3 rounded-xl transition-all duration-200 shrink-0 font-sans shadow-md"
        >
          GARANTIR MEU ACESSO
        </a>
      </div>

      {/* CONVERSION SOCIAL PROOF TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-50 bg-[#1A1F3C] border border-[#6C63FF]/35 p-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm pointer-events-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00D4B4] flex items-center justify-center font-bold text-xs text-white uppercase shadow-md select-none">
              {currentToastName.substring(0, 2)}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] md:text-xs text-slate-300">
                <strong className="text-white font-semibold">{currentToastName}</strong> ({currentToastPlace})
              </span>
              <span className="text-[10px] md:text-xs text-[#00D4B4] font-medium flex items-center gap-1 mt-0.5">
                <Check className="w-3 h-3" /> garantiu o e-book com desconto
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
