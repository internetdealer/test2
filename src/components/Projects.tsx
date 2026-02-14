import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Жилой комплекс "Солнечный"',
      location: 'Москва, Солнцево',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Современный жилой комплекс на 500 квартир с развитой инфраструктурой',
    },
    {
      title: 'Торговый центр "Метрополис"',
      location: 'Санкт-Петербург',
      year: '2023',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Многоуровневый торговый центр площадью 25000 м²',
    },
    {
      title: 'Частный коттедж',
      location: 'Московская область',
      year: '2024',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Элитный загородный дом с панорамными окнами',
    },
    {
      title: 'Офисное здание "Технопарк"',
      location: 'Казань',
      year: '2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Современное офисное здание класса А с энергоэффективными решениями',
    },
    {
      title: 'Склад "ЛогистикЦентр"',
      location: 'Нижний Новгород',
      year: '2022',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Современный логистический комплекс площадью 15000 м²',
    },
    {
      title: 'Жилой дом премиум-класса',
      location: 'Екатеринбург',
      year: '2023',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Элитный жилой комплекс с видом на городской парк',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Наши проекты</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Портфолио успешно реализованных объектов разного назначения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/40"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:from-cyan-500 hover:to-blue-500">
                    Подробнее
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
