import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const CONTACT_API = '/.netlify/functions/submit-contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || `Ошибка ${res.status}. Попробуйте позже.`);
        return;
      }
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      setError('Не удалось отправить заявку. Проверьте интернет и попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-gray-400 hover:text-cyan-400">
                      +7 (495) 123-45-67
                    </a>
                    <br />
                    <a href="tel:+79161234567" className="text-gray-400 hover:text-cyan-400">
                      +7 (916) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:info@stroymaster.ru" className="text-gray-400 hover:text-cyan-400">
                      info@stroymaster.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Адрес</div>
                    <div className="text-gray-400">
                      г. Москва, ул. Строителей, д. 15<br />
                      офис 301
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Режим работы</div>
                    <div className="text-gray-400">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб: 10:00 - 16:00<br />
                      Вс: выходной
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-cyan-500/30 transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Бесплатная консультация</h3>
              <p className="text-cyan-100 mb-6">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для обсуждения вашего проекта
              </p>
              <ul className="space-y-3">
                {['Расчет стоимости', 'Подбор материалов', 'Консультация по срокам', 'Разработка проекта'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl shadow-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Отправить заявку</h3>

            {isSubmitted ? (
              <div className="bg-cyan-600/20 border border-cyan-500 rounded-lg p-6 text-center">
                <div className="text-cyan-400 text-lg font-semibold mb-2">Спасибо за обращение!</div>
                <p className="text-gray-400">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg px-4 py-3 text-red-300 text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-700/50 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition-colors placeholder-gray-500"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-700/50 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition-colors placeholder-gray-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-700/50 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition-colors placeholder-gray-500"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-700/50 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition-colors resize-none placeholder-gray-500"
                    placeholder="Опишите ваш проект..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-colors shadow-lg hover:shadow-cyan-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Отправка...' : 'Отправить заявку'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
