# Инструкция по развертыванию формы обратной связи

## Проблема: Ошибка 405

Ошибка 405 возникает, потому что сайт развернут на **Onreza**, а Netlify Functions работают только на **Netlify**.

## Решения:

### Вариант 1: Развернуть на Netlify (Рекомендуется)

1. **Создайте аккаунт на Netlify** (если нет): https://netlify.com
2. **Подключите репозиторий**:
   - Зайдите в Netlify Dashboard
   - Нажмите "Add new site" → "Import an existing project"
   - Подключите ваш Git репозиторий
3. **Настройте переменные окружения**:
   - Site settings → Environment variables
   - Добавьте:
     ```
     UNISENDER_API_KEY=ваш_api_ключ
     UNISENDER_SENDER_EMAIL=internetdealerr@gmail.com
     UNISENDER_SENDER_NAME=Заявка с сайта
     ```
4. **Настройте сборку**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
5. **Деплой**: Netlify автоматически задеплоит сайт

### Вариант 2: Развернуть на Vercel

1. **Создайте аккаунт на Vercel**: https://vercel.com
2. **Подключите репозиторий**
3. **Настройте переменные окружения** (те же что выше)
4. **Функция будет работать** из папки `api/`

### Вариант 3: Использовать внешний сервер

Если нужно оставить сайт на Onreza:

1. **Создайте отдельный сервер** (Node.js/Express) или используйте сервис типа:
   - Formspree
   - EmailJS
   - SendGrid
2. **Укажите URL в переменной окружения**:
   ```env
   VITE_CONTACT_API=https://your-server.com/api/submit-contact
   ```

### Вариант 4: Быстрое решение - EmailJS (без сервера)

Можно использовать EmailJS напрямую с фронтенда (но менее безопасно):

1. Зарегистрируйтесь на https://emailjs.com
2. Настройте сервис отправки
3. Обновите компонент Contact для использования EmailJS

---

## Текущая конфигурация

- **Netlify Functions**: `netlify/functions/submit-contact.js`
- **Vercel Functions**: `api/submit-contact.js` (универсальная версия)
- **Форма**: `src/components/Contact.tsx`

После развертывания на Netlify или Vercel форма будет работать автоматически.
