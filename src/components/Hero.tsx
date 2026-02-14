import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Более 15 лет на рынке
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Строим ваше будущее с надежностью и качеством
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Профессиональное строительство жилых и коммерческих объектов. Полный цикл работ от проектирования до сдачи под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-cyan-500/50"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all border border-cyan-500/30 hover:border-cyan-400/60"
              >
                Наши проекты
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Construction site"
              className="rounded-2xl shadow-2xl border border-cyan-500/20"
            />
            <div className="absolute -bottom-6 -left-6 bg-slate-800 p-6 rounded-xl shadow-xl border border-cyan-500/30">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-400">Завершенных проектов</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { icon: Shield, title: 'Гарантия качества', text: 'Официальная гарантия на все виды работ' },
            { icon: Award, title: 'Лицензии и сертификаты', text: 'Все необходимые разрешительные документы' },
            { icon: Users, title: 'Опытная команда', text: 'Квалифицированные специалисты' },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 hover:bg-white/10 transition-all">
              <item.icon className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
