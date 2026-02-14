import { Home, Building, Wrench, ClipboardCheck, HardHat, PaintBucket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Строительство домов',
      description: 'Возведение частных домов и коттеджей под ключ. Индивидуальное проектирование и качественное выполнение всех работ.',
    },
    {
      icon: Building,
      title: 'Коммерческие объекты',
      description: 'Строительство офисных зданий, торговых центров, складов и производственных помещений любой сложности.',
    },
    {
      icon: Wrench,
      title: 'Реконструкция',
      description: 'Полная или частичная реконструкция зданий с улучшением функциональности и модернизацией инженерных систем.',
    },
    {
      icon: ClipboardCheck,
      title: 'Проектирование',
      description: 'Разработка архитектурных и инженерных проектов с учетом всех требований и пожеланий заказчика.',
    },
    {
      icon: HardHat,
      title: 'Капитальный ремонт',
      description: 'Комплексный капитальный ремонт жилых и коммерческих помещений с заменой всех инженерных систем.',
    },
    {
      icon: PaintBucket,
      title: 'Отделочные работы',
      description: 'Внутренняя и внешняя отделка любой сложности с использованием качественных материалов.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Полный спектр строительных услуг для реализации проектов любой сложности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group cursor-pointer border border-cyan-500/20 hover:border-cyan-400/40 shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-lg hover:shadow-cyan-500/30 transition-shadow">
          <h3 className="text-3xl font-bold mb-4">Не нашли нужную услугу?</h3>
          <p className="text-xl mb-8 text-cyan-100">
            Свяжитесь с нами, и мы подберем индивидуальное решение для вашего проекта
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
}
