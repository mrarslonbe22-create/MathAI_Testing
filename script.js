let questions = [];
let answers = [];
let userName = "";

// Helper funksiyalar
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random trig funksiyasini tanlash
function randomTrig() {
  const funcs = ["sin", "cos", "tan", "cot"];
  return funcs[randomInt(0, funcs.length - 1)];
}

// Random savollar yaratish
function generateQuestions() {
  questions = [];
  answers = [];

  // 1) Qo'shish (katta sonlar)
  let a = randomInt(10, 500);
  let b = randomInt(10, 500);
  questions.push(`Qo‘shish: ${a} + ${b} = ?`);
  answers.push(a + b);

  // 2) Ko'paytirish (katta sonlar)
  a = randomInt(10, 50);
  b = randomInt(2, 20);
  questions.push(`Ko'paytirish: ${a} * ${b} = ?`);
  answers.push(a * b);

  // 3) Daraja (2 yoki 3-daraja)
  a = randomInt(2, 10);
  let power = randomInt(2, 3);
  questions.push(`Daraja: ${a}^${power} = ?`);
  answers.push(a ** power);

  // 4) Ildiz (katta son)
  a = randomInt(4, 4000);
  let root = Math.sqrt(a);
  questions.push(`Ildiz: √${a} = ? (Yaqinlashtirib butun son)`);
  answers.push(Math.round(root));

  // 5) Trigonometriya (sin, cos, tan, cot)
  let trigFunc = randomTrig();
  let angles = [0, 30, 45, 60, 90];
  let angle = angles[randomInt(0, angles.length - 1)];
  questions.push(`Trigonometriya: ${trigFunc}(${angle}°) ≈ ? (2 xonaga yaqinlashtr)`);
  let radians = angle * Math.PI / 180;
  let trigAnswer;

  switch(trigFunc){
    case "sin": trigAnswer = Math.sin(radians); break;
    case "cos": trigAnswer = Math.cos(radians); break;
    case "tan": trigAnswer = Math.tan(radians); break;
    case "cot": trigAnswer = 1 / Math.tan(radians); break;
  }

  // 2 xonaga yaqinlashtirish
  answers.push(Math.round(trigAnswer * 100) / 100);
}

// Testni boshlash
function startTest() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();

  if (!firstName || !lastName) {
    alert("Iltimos, ism va familiyangizni kiriting!");
    return;
  }

  userName = firstName + " " + lastName;

  document.getElementById('start-section').style.display = 'none';
  document.getElementById('test-section').style.display = 'block';

  generateQuestions(); // Random savollar yaratish

  // Savollarni HTML ga chiqarish
  for (let i = 1; i <= 5; i++) {
    document.getElementById('q'+i).previousElementSibling.innerText = questions[i-1];
    document.getElementById('q'+i).value = '';
  }

  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('progress-bar').innerText = '0%';
}

// Testni tekshirish
function checkTest() {
  let score = 0;
  let wrongTopics = [];

  for (let i = 1; i <= 5; i++) {
    let userAnswer = parseFloat(document.getElementById('q'+i).value);
    if (Math.abs(userAnswer - answers[i-1]) < 0.01) {
      score++;
    } else {
      // Xato savolga mos tavsiya
      if (i === 1) wrongTopics.push("Qo‘shish");
      if (i === 2) wrongTopics.push("Ko‘paytirish");
      if (i === 3) wrongTopics.push("Daraja ko‘tarish");
      if (i === 4) wrongTopics.push("Ildiz olish");
      if (i === 5) wrongTopics.push("Trigonometriya (sin, cos, tan, cot)");
    }
  }

  // Progress bar
  const progressBar = document.getElementById('progress-bar');
  const percent = (score / 5) * 100;
  progressBar.style.width = percent + '%';
  progressBar.innerText = percent + '%';

  // Bilim darajasi va tavsiyalar
  let level = "";
  let recommendation = "";

  if (score === 5) {
    level = "A’lo 🌟";
    recommendation = "Siz barcha mavzularni mukammal bilasiz!";
  } else if (score >= 3) {
    level = "O‘rta 👍";
    recommendation = "Yaxshi! Siz quyidagi mavzularni mashq qilishingiz mumkin: " + wrongTopics.join(", ");
  } else {
    level = "Boshlovchi 📘";
    recommendation = "Sizga quyidagi mavzularni o‘rganish tavsiya qilinadi: " + wrongTopics.join(", ");
  }

  // Natija chiqarish
  document.getElementById('greeting').innerText = "Salom, " + userName + "!";
  document.getElementById('score').innerText = "Natija: " + score + "/5";
  document.getElementById('level').innerText = "Daraja: " + level;
  document.getElementById('recommendation').innerText = recommendation;

  document.getElementById('test-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
}

// Testni qayta boshlash
function restartTest() {
  document.getElementById('result-section').style.display = 'none';
  document.getElementById('start-section').style.display = 'block';
}
let tavsiyaHTML = "";

if (wrongTopics.includes("daraja")) {
  tavsiyaHTML += `<button onclick="openLesson('daraja')">Daraja mavzusini o‘rganish</button><br>`;
}

if (wrongTopics.includes("ildiz")) {
  tavsiyaHTML += `<button onclick="openLesson('ildiz')">Ildiz mavzusini o‘rganish</button><br>`;
}

if (wrongTopics.includes("trigonometriya")) {
  tavsiyaHTML += `<button onclick="openLesson('trigonometriya')">Trigonometriya mavzusini o‘rganish</button>`;
}

document.getElementById("result").innerHTML += tavsiyaHTML;

function openLesson(topic) {
  localStorage.setItem("topic", topic);
  window.location.href = "lesson.html";
}
let level = 1;
if (score == 5) {
  level++;
} else if (score <= 2) {
  level = 1;
}
function randomAdd() {
  let a, b;

  if (level == 1) {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
  } else if (level == 2) {
    a = Math.floor(Math.random() * 50);
    b = Math.floor(Math.random() * 50);
  } else {
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
  }

  return {
    question: `${a} + ${b}`,
    answer: a + b,
    topic: "qoshish"
  };
}
function randomPower() {
  let a = Math.floor(Math.random() * 5) + 2;
  let n;

  if (level == 1) n = 2;
  else if (level == 2) n = 3;
  else n = 4;

  return {
    question: `${a}^${n}`,
    answer: Math.pow(a, n),
    topic: "daraja"
  };
}
localStorage.setItem("level", level);
level = parseInt(localStorage.getItem("level")) || 1;
function saveResult(name, score) {
  let results = JSON.parse(localStorage.getItem("results")) || [];

  results.push({
    name: name,
    score: score,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("results", JSON.stringify(results));
}
saveResult(userName, score);
let timeLeft = 60;

function startTimer() {
  const timer = setInterval(() => {
    document.getElementById("timer").innerText = "⏱ " + timeLeft;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      checkAnswers(); // avtomatik tekshiradi
    }
  }, 1000);
}
startTimer();