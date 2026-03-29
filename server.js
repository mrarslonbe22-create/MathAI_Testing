// server.js

// 1️⃣ dotenv-ni yuklash (.env faylni o'qish uchun)
require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch'); // node-fetch paketini o'rnatish kerak: npm install node-fetch
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // index.html, style.css, script.js shu papkada bo'lsa ishlaydi

// 2️⃣ AI so'rov endpointi
app.post('/askAI', async (req, res) => {
  const question = req.body.question;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Sen matematika o'qituvchisan. Oddiy tushuntir." },
          { role: "user", content: question }
        ]
      })
    });

    const data = await response.json();

    // AI javobini frontend-ga qaytarish
    res.json({ answer: data.choices[0].message.content });

  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: "AI ishlamayapti" });
  }
});

// 3️⃣ Serverni ishga tushirish
app.listen(PORT, () => console.log(`Server ${PORT} da ishga tushdi`));
