# Contact Form with Unisender Integration

Форма обратной связи интегрирована с Unisender API для отправки заявок на email.

## Настройка

### 1. Получите API ключ Unisender

1. Зайдите на [unisender.com](https://www.unisender.com)
2. Перейдите в **Настройки** → **API**
3. Скопируйте ваш API ключ

### 2. Настройте переменные окружения в Netlify

1. В панели Netlify перейдите в **Site settings** → **Environment variables**
2. Добавьте следующие переменные:

```
UNISENDER_API_KEY=ваш_api_ключ
UNISENDER_SENDER_EMAIL=ваш_подтвержденный_email@domain.com
UNISENDER_SENDER_NAME=Заявка с сайта
```

**Важно:** 
- `UNISENDER_SENDER_EMAIL` должен быть подтвержденным email адресом в вашем аккаунте Unisender
- После добавления переменных пересоберите сайт (Deploy → Trigger deploy)

### 3. Локальная разработка

Для тестирования функции локально используйте Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

Это запустит локальный сервер с поддержкой Netlify Functions.

## Как это работает

1. Пользователь заполняет форму на странице
2. При нажатии "Отправить заявку" данные отправляются на `/netlify/functions/submit-contact`
3. Функция получает токен Unisender и отправляет email на `internetdealerr@gmail.com`
4. Пользователь видит сообщение об успешной отправке

## Структура проекта

- `netlify/functions/submit-contact.js` - серверная функция для отправки через Unisender
- `src/components/Contact.tsx` - компонент формы обратной связи
- `.env.example` - пример переменных окружения
