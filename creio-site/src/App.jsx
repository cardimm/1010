import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MapPin, Mail } from 'lucide-react';

// In a real project, this would be in your index.css or globals.css
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400&display=swap');
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: 'Montserrat', sans-serif;
      -webkit-font-smoothing: antialiased;
      background-color: #ffffff;
      color: #1f2937;
    }

    .brand-purple { color: #5F297C; }
    .bg-brand-purple { background-color: #5F297C; }
    .border-brand-purple { border-color: #5F297C; }
    
    .brand-orange { color: #E2952A; }
    .bg-brand-orange { background-color: #E2952A; }
    .border-brand-orange { border-color: #E2952A; }
  `}} />
);

// ==========================================
// File: src/components/Header.jsx
// Description: Main navigation bar
// ==========================================
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Conecte-se', href: '#conecte-se' },
    { name: 'Eventos', href: '#eventos' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/90 backdrop-blur-sm py-6 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#home" className="flex flex-col group">
            <span className="font-black text-4xl tracking-tighter text-gray-900 uppercase leading-none group-hover:text-[#5F297C] transition-colors">
              CREIO
            </span>
            <span className="text-[0.6rem] font-bold tracking-[0.2em] brand-orange uppercase mt-1">
              Sou Filho Sou Livre
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#5F297C] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#conecte-se" 
              className="bg-brand-purple text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#4a1f61] transition-colors"
            >
              Fazer Parte
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-sm font-bold uppercase tracking-wider text-gray-800 hover:bg-gray-50 hover:text-[#5F297C] rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// ==========================================
// File: src/components/Hero.jsx
// Description: First fold landing section
// ==========================================
const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="brand-orange font-bold tracking-[0.2em] uppercase text-xs">
              Adolescentes do Belém
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8">
            <span className="block mb-2">Sou Filho</span>
            <span className="block brand-purple">Sou Livre</span>
          </h1>
          
          <p className="mt-8 text-lg sm:text-2xl text-gray-500 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
            Despertando uma geração para estabelecer o Reino de Deus, viver em liberdade e transformar a sociedade atual.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#tema2026" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 border border-transparent text-sm font-bold rounded-full text-white bg-brand-purple hover:bg-[#4a1f61] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest"
            >
              Descubra 2026
            </a>
            <a 
              href="#sobre" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 border-2 border-gray-200 text-sm font-bold rounded-full text-gray-700 hover:border-[#5F297C] hover:text-[#5F297C] bg-white transition-all uppercase tracking-widest"
            >
              Nossa Visão
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// ==========================================
// File: src/components/Theme2026.jsx
// Description: Special section for the 2026 Theme
// ==========================================
const Theme2026 = () => {
  return (
    <section id="tema2026" className="py-24 lg:py-32 bg-white relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Typography Graphic Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5">
                <span className="text-[15rem] font-black leading-none">26</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase mb-4 relative z-10">
                CREIO
              </h3>
              
              <div className="flex flex-col relative z-10">
                <span className="text-6xl md:text-8xl font-black brand-orange uppercase tracking-tighter leading-[0.8]">
                  SOU
                </span>
                <span className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mt-2">
                  UMA
                </span>
                <span className="text-6xl md:text-8xl font-black brand-orange uppercase tracking-tighter leading-[0.8] mt-2">
                  BENÇÃO
                </span>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-4 w-full px-8">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <span className="text-gray-900 font-bold tracking-widest text-sm">GEN 12:2</span>
                <div className="h-px bg-gray-300 flex-grow"></div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-1 bg-brand-orange mb-8"></div>
            <h2 className="brand-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Tema Oficial 2026
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-8 leading-tight">
              Identidade e <br />
              <span className="brand-orange">Propósito.</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
              O tema <strong className="text-gray-900">"Sou uma Benção"</strong> se baseia em Gênesis 12:2 e traz uma declaração de identidade e propósito.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Mais do que receber bênçãos, o adolescente é chamado por Deus para ser canal de transformação, impactar sua geração e refletir Cristo na vida, na igreja e na sociedade. É uma afirmação de fé, identidade e propósito em Deus.
            </p>

            <a 
              href="#eventos" 
              className="inline-flex items-center text-[#5F297C] font-bold uppercase tracking-widest text-sm hover:text-[#E2952A] transition-colors group"
            >
              Ver agenda de eventos 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// File: src/components/About.jsx
// Description: About the movement section
// ==========================================
const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8">
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-black brand-purple">01</span>
            </div>
            <h4 className="text-xl font-black uppercase text-gray-900 mb-4">Um Propósito</h4>
            <p className="text-gray-500 font-medium">Unindo adolescentes sob a mesma visão do Reino para gerar impacto real na sociedade.</p>
          </div>
          
          <div className="p-8">
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-black brand-orange">02</span>
            </div>
            <h4 className="text-xl font-black uppercase text-gray-900 mb-4">Pertencimento</h4>
            <p className="text-gray-500 font-medium">Fortalecendo a 'tribo' através de conexões verdadeiras, células e comunidade ativa.</p>
          </div>
          
          <div className="p-8">
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-black text-gray-900">03</span>
            </div>
            <h4 className="text-xl font-black uppercase text-gray-900 mb-4">Identidade</h4>
            <p className="text-gray-500 font-medium">Garantindo que cada jovem descubra quem é em Cristo: Amado, Herdeiro e Livre.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// File: src/components/Connect.jsx
// Description: Connection and action items
// ==========================================
const Connect = () => {
  return (
    <section id="conecte-se" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="brand-orange font-bold tracking-widest uppercase text-xs mb-3">Envolva-se</h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-gray-900">Conecte-se</h3>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base font-medium">
            Existem diversas formas de fazer parte do nosso movimento. Descubra sua identidade e viva o propósito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-[#5F297C] hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5F297C]/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <h4 className="text-2xl font-black uppercase mb-4 text-gray-900 relative z-10">Células</h4>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium relative z-10">
              Encontre uma comunidade perto de você para compartilhar a vida, crescer junto e fortalecer a tribo semanalmente.
            </p>
            <span className="inline-flex items-center brand-purple font-bold uppercase text-xs tracking-wider relative z-10">
              Encontrar Célula <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-[#E2952A] hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E2952A]/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <h4 className="text-2xl font-black uppercase mb-4 text-gray-900 relative z-10">Treinamento</h4>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium relative z-10">
              Escolas e cursos desenhados para equipar, treinar e ativar seu propósito no Reino de Deus.
            </p>
            <span className="inline-flex items-center brand-orange font-bold uppercase text-xs tracking-wider relative z-10">
              Inscreva-se <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-gray-900 hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden lg:col-span-1 md:col-span-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <h4 id="eventos" className="text-2xl font-black uppercase mb-4 text-gray-900 relative z-10">Eventos</h4>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium relative z-10">
              Fique por dentro da nossa agenda. Conferências, cultos unificados e imersões presenciais do CREIO.
            </p>
            <span className="inline-flex items-center text-gray-900 font-bold uppercase text-xs tracking-wider relative z-10">
              Ver Agenda <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// File: src/components/Footer.jsx
// Description: Application Footer
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t-8 border-brand-purple relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a href="#" className="inline-flex flex-col group mb-6">
              <span className="font-black text-5xl tracking-tighter text-white uppercase leading-none">
                CREIO
              </span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] brand-orange uppercase mt-2">
                Sou Filho Sou Livre
              </span>
            </a>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-medium">
              Porque Deus amou o mundo de tal maneira que deu o seu filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. João 3:16
            </p>
          </div>
          
          {/* Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-[#E2952A] text-sm font-medium transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-[#E2952A] text-sm font-medium transition-colors">Sobre Nós</a></li>
              <li><a href="#tema2026" className="text-gray-400 hover:text-[#E2952A] text-sm font-medium transition-colors">Tema 2026</a></li>
              <li><a href="#conecte-se" className="text-gray-400 hover:text-[#E2952A] text-sm font-medium transition-colors">Conecte-se</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#E2952A]" /> contato@creio.net</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-[#E2952A]" /> São Paulo, SP - Brasil</li>
            </ul>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-purple transition-colors">
                
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-orange transition-colors">
                
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
            © 2026 CREIO - Adolescentes do Belém.
          </p>
          <p className="text-white text-xs font-black uppercase tracking-widest">
            creio.net
          </p>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// File: src/App.jsx
// Description: Main Application Assembly
// ==========================================
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalStyles />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Theme2026 />
        <Connect />
      </main>
      
      <Footer />
    </div>
  );
}
