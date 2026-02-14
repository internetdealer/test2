import { Shield, Clock, Coins, Users, FileCheck, Headphones } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Предоставляем официальную гарантию на все виды работ сроком до 5 лет',
    },
    {
      icon: Clock,
      title: 'Сроки выполнения',
      description: 'Строго соблюдаем договорные сроки, штрафные санкции за просрочку',
    },
    {
      icon: Coins,
      title: 'Прозрачное ценообразование',
      description: 'Фиксированная стоимость в договоре без скрытых платежей',
    },
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Сертифицированные специалисты с опытом работы от 5 лет',
    },
    {
      icon: FileCheck,
      title: 'Полный пакет документов',
      description: 'Все необходимые лицензии, разрешения и сертификаты',
    },
    {
      icon: Headphones,
      title: 'Поддержка 24/7',
      description: 'Круглосуточная поддержка клиентов на всех этапах строительства',
    },
  ];

  return (
    <section id="advantages" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Почему более 500 клиентов выбрали именно нас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{advantage.title}</h3>
              <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 transition-shadow">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-400">лет на рынке</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-400">завершенных проектов</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-gray-400">специалистов в команде</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-400">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
