import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold">СтройМастер</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Профессиональное строительство с 2009 года. Качество, надежность, индивидуальный подход.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {['Строительство домов', 'Коммерческие объекты', 'Реконструкция', 'Проектирование'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {['О нас', 'Проекты', 'Преимущества', 'Контакты'].map((item, index) => {
                const ids = ['about', 'projects', 'advantages', 'contact'];
                return (
                  <li key={item}>
                    <a
                      href={`#${ids[index]}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+74951234567" className="hover:text-cyan-400 transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@stroymaster.ru" className="hover:text-cyan-400 transition-colors">
                  info@stroymaster.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Строителей, д. 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} СтройМастер. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
