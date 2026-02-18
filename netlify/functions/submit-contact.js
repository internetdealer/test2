const UNISENDER_API_URL = 'https://api.unisender.com/ru/api/sendEmail';
const RECIPIENT_EMAIL = 'internetdealerr@gmail.com';

function buildEmailBody(name, phone, email, message) {
  const text = [
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Email: ${email || '—'}`,
    '',
    'Сообщение:',
    message,
  ].join('\n');

  const html = [
    '<h2>Новая заявка с сайта</h2>',
    `<p><strong>Имя:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email || '—')}</p>`,
    '<p><strong>Сообщение:</strong></p>',
    `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  ].join('');

  return { text, html };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.UNISENDER_API_KEY;
  const senderName = process.env.UNISENDER_SENDER_NAME || 'Заявка с сайта';
  const senderEmail = process.env.UNISENDER_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Server misconfiguration: Set UNISENDER_API_KEY and UNISENDER_SENDER_EMAIL in Netlify env',
      }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, phone, email, message } = body;
  if (!name || !phone || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Required fields: name, phone, message' }),
    };
  }

  try {
    const { text, html } = buildEmailBody(name, phone, email || '', message);
    const subject = `Новая заявка: ${name}`;

    const params = new URLSearchParams({
      format: 'json',
      api_key: apiKey,
      email: RECIPIENT_EMAIL,
      sender_name: senderName,
      sender_email: senderEmail,
      subject: subject,
      body: html,
      text_body: text,
    });
    
    if (email) {
      params.append('reply_to', email);
    }

    const res = await fetch(`${UNISENDER_API_URL}?${params.toString()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const data = await res.json();

    if (data.error) {
      return {
        statusCode: res.status || 400,
        body: JSON.stringify({ error: data.error || 'Unisender send failed' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, result: data.result }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Server error' }),
    };
  }
};
