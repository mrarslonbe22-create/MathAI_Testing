const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Gemini sozlamalari
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 1. Mavzuni o'rganish bo'yicha tavsiya
app.post('/api/advice', async (req, res) => {
    try {
        const { weakTopics, score } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `
            O'quvchi matematika testida ${score} ball oldi.
            Zaif mavzulari: ${weakTopics.join(', ') || "Hech qanday zaif mavzu yo'q"}.
            
            Shu natijalarga asoslanib, o'quvchiga qisqa va foydali maslahat bering.
            Faqat 3-4 gap yozing. O'zbek tilida javob bering.
        `;
        
        const result = await model.generateContent(prompt);
        const advice = result.response.text();
        
        res.json({ success: true, advice });
    } catch (error) {
        console.error('Xato:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// 2. Savol-javob
app.post('/api/ask', async (req, res) => {
    try {
        const { question } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `
            Siz matematika o'qituvchisisiz. Quyidagi savolga aniq va tushunarli javob bering:
            
            Savol: ${question}
            
            Javobingizni o'zbek tilida yozing.
        `;
        
        const result = await model.generateContent(prompt);
        const answer = result.response.text();
        
        res.json({ success: true, answer });
    } catch (error) {
        console.error('Xato:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
    console.log(`Gemini API tayyor!`);
});
