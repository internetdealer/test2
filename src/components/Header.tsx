import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Building2 className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">СтройМастер</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['О нас', 'Услуги', 'Проекты', 'Преимущества', 'Контакты'].map((item, index) => {
              const ids = ['about', 'services', 'projects', 'advantages', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(ids[index])}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors"
          >
            Связаться с нами
          </button>

          <button
            className="md:hidden text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {['О нас', 'Услуги', 'Проекты', 'Преимущества', 'Контакты'].map((item, index) => {
              const ids = ['about', 'services', 'projects', 'advantages', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(ids[index])}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 font-medium py-2"
                >
                  {item}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
