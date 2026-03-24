let questions = [];
let answers = [];
let userName = "";
let timeLeft = 160;
let timerInterval;

// Random son
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Trigonometriya
function randomTrig() {
  const funcs = ["sin", "cos", "tan", "cot"];
  return funcs[randomInt(0, funcs.length - 1)];
}

// Savollar
function generateQuestions() {
  questions = [];
  answers = [];

  let a = randomInt(10, 100);
  let b = randomInt(10, 100);
  questions.push(`${a} + ${b}`);
  answers.push(a + b);

  a = randomInt(5, 20);
  b = randomInt(2, 10);
  questions.push(`${a} * ${b}`);
  answers.push(a * b);

  a = randomInt(2, 10);
  let power = randomInt(2, 3);
  questions.push(`${a}^${power}`);
  answers.push(a ** power);

  a = randomInt(4, 400);
  questions.push(`√${a}`);
  answers.push(Math.round(Math.sqrt(a)));

  let trigFunc = randomTrig();
  let angle = [0, 30, 45, 60][randomInt(0, 3)];
  let rad = angle * Math.PI / 180;

  let trig;
  if (trigFunc === "sin") trig = Math.sin(rad);
  if (trigFunc === "cos") trig = Math.cos(rad);
  if (trigFunc === "tan") trig = Math.tan(rad);
  if (trigFunc === "cot") trig = 1 / Math.tan(rad);

  questions.push(`${trigFunc}(${angle}°)`);
  answers.push(Math.round(trig * 100) / 100);
}

// Timer
function startTimer() {
  timeLeft = 160;
  timerInterval = setInterval(() => {
    document.getElementById("timer").innerText = "⏱ " + timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      checkTest();
    }
  }, 1000);
}

// Start
function startTest() {
  const first = document.getElementById("firstName").value;
  const last = document.getElementById("lastName").value;

  if (!first || !last) {
    alert("Ism va familiya kiriting!");
    return;
  }

  userName = first + " " + last;

  document.getElementById("start-section").style.display = "none";
  document.getElementById("test-section").style.display = "block";

  generateQuestions();

  for (let i = 1; i <= 5; i++) {
    document.getElementById("q" + i).previousElementSibling.innerText = questions[i - 1];
    document.getElementById("q" + i).value = "";
  }

  startTimer();
}

// Tekshirish
function checkTest() {
  clearInterval(timerInterval);

  let score = 0;
  let wrongTopics = [];

  for (let i = 1; i <= 5; i++) {
    let user = parseFloat(document.getElementById("q" + i).value);

    if (Math.abs(user - answers[i - 1]) < 0.1) {
      score++;
    } else {
      if (i === 3) wrongTopics.push("daraja");
      if (i === 4) wrongTopics.push("ildiz");
      if (i === 5) wrongTopics.push("trigonometriya");
    }
  }

  saveResult(userName, score);

  let recommendation = wrongTopics.length
    ? "O‘rganing: " + wrongTopics.join(", ")
    : "A’lo!";

  document.getElementById("greeting").innerText = "Salom " + userName;
  document.getElementById("score").innerText = "Ball: " + score + "/5";
  document.getElementById("recommendation").innerText = recommendation;

  let html = "";
  wrongTopics.forEach(t => {
    html += `<button onclick="openLesson('${t}')">${t}</button><br>`;
  });

  document.getElementById("recommendation").innerHTML += "<br>" + html;

  document.getElementById("test-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
}

// Lesson
function openLesson(topic) {
  localStorage.setItem("topic", topic);
  window.location.href = "lesson.html";
}
saveResults(userId, resultData);
// Saqlash
function saveResult(name, score) {
  let data = JSON.parse(localStorage.getItem("results")) || [];
  data.push({ name, score, date: new Date().toLocaleString() });
  localStorage.setItem("results", JSON.stringify(data));
}
function goAdmin() {
  window.location.href = "admin.html";
}

// Restart
function restartTest() {
  location.reload();
}
function goAdmin() {
  let password = prompt("Parol kiriting:");

  if (password === "1234") {
    window.location.href = "admin.html";
  } else {
    alert("Noto‘g‘ri parol!");
  }
}
