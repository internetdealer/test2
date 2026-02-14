import { Target, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">О компании</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            СтройМастер - это надежный партнер в реализации ваших строительных проектов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Our team"
              className="rounded-2xl shadow-xl border border-cyan-500/20"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Профессионализм и качество с 2009 года
            </h3>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Мы специализируемся на строительстве жилых домов, коммерческих зданий и промышленных объектов.
              Наша команда состоит из высококвалифицированных специалистов с многолетним опытом работы.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Используем только проверенные материалы и современные технологии строительства.
              Каждый проект выполняется с соблюдением всех норм и стандартов безопасности.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-400">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-400">проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-gray-400">специалистов</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-gray-400">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Наша миссия',
              text: 'Создавать надежные и качественные объекты, которые служат людям десятилетиями',
            },
            {
              icon: TrendingUp,
              title: 'Наши цели',
              text: 'Постоянное развитие, внедрение новых технологий и улучшение качества работ',
            },
            {
              icon: Heart,
              title: 'Наши ценности',
              text: 'Честность, профессионализм, ответственность и индивидуальный подход к каждому клиенту',
            },
          ].map((item, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-750 border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
