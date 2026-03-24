let questions = [];
let answers = [];
let userName = "";
let timeLeft = 160;
let timerInterval;

// Random son
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomTrig() {
  const funcs = ["sin","cos","tan","cot"];
  return funcs[randomInt(0, funcs.length - 1)];
}

// Savollar
function generateQuestions(){
  questions=[]; answers=[];

  let a=randomInt(10,100), b=randomInt(10,100);
  questions.push(${a} + ${b});
  answers.push(a+b);

  a=randomInt(5,20); b=randomInt(2,10);
  questions.push(${a} * ${b});
  answers.push(a*b);

  a=randomInt(2,10);
  let power=randomInt(2,3);
  questions.push(${a}^${power});
  answers.push(a**power);

  a=randomInt(4,400);
  questions.push(√${a});
  answers.push(Math.round(Math.sqrt(a)));

  let trigFunc=randomTrig();
  let angle=[0,30,45,60][randomInt(0,3)];
  let rad=angle*Math.PI/180;

  let trig;
  if(trigFunc=="sin") trig=Math.sin(rad);
  if(trigFunc=="cos") trig=Math.cos(rad);
  if(trigFunc=="tan") trig=Math.tan(rad);
  if(trigFunc=="cot") trig=1/Math.tan(rad);

  questions.push(${trigFunc}(${angle}°);
  answers.push(Math.round(trig*100)/100);
}

// Timer
function startTimer(){
  timeLeft=160;
  timerInterval=setInterval(()=>{
    document.getElementById("timer").innerText="⏱️ "+timeLeft;
    timeLeft--;

    if(timeLeft<0){
      clearInterval(timerInterval);
      checkTest();
    }
  },1000);
}

// Start
function startTest()
{
  const first=document.getElementById("firstName").value;
  const last=document.getElementById("lastName").value;
  const pass=document.getElementById("password").value;

  if(pass !== "1234"){
    alert("Parol noto‘g‘ri!");
    return;
  }

  if(!first || !last){
    alert("Ism va familiya kiriting!");
    return;
  }

  userName=first+" "+last;

  document.getElementById("start-section").style.display="none";
  document.getElementById("test-section").style.display="block";

  generateQuestions();
  startTimer();
}

  userName=first+" "+last;

  document.getElementById("start-section").style.display="none";
  document.getElementById("test-section").style.display="block";

 let difficulty = "easy";

function generateQuestions(){
  questions=[]; answers=[];

  let a,b;

  if(difficulty==="easy"){
    a=randomInt(5,20);
    b=randomInt(5,20);
  }
  else if(difficulty==="medium"){
    a=randomInt(20,50);
    b=randomInt(10,30);
  }
  else{
    a=randomInt(50,100);
    b=randomInt(20,50);
  }

  questions.push(${a} + ${b});
  answers.push(a+b);

  questions.push(${a} * ${b});
  answers.push(a*b);

  questions.push(${a}^2);
  answers.push(a*a);

  questions.push(√${a*b});
  answers.push(Math.round(Math.sqrt(a*b)));

  let angle=[0,30,45,60][randomInt(0,3)];
  questions.push(sin(${angle}°));
  answers.push(Math.round(Math.sin(angle*Math.PI/180)*100)/100);
}

  startTimer();
}

// Saqlash
function saveResult(name,score){
  let data=JSON.parse(localStorage.getItem("results")) || [];
  data.push({name,score,date:new Date().toLocaleString()});
  localStorage.setItem("results",JSON.stringify(data));
}

// User data
function saveUserData(topic,correct){
  let data=JSON.parse(localStorage.getItem("userData")) || {};

  if(!data[topic]) data[topic]={correct:0,wrong:0};

  if(correct) data[topic].correct++;
  else data[topic].wrong++;

  localStorage.setItem("userData",JSON.stringify(data));
}

function getWeakTopics(){
  let data=JSON.parse(localStorage.getItem("userData")) || {};
  let weak=[];

  for(let topic in data){
    if(data[topic].wrong > data[topic].correct){
      weak.push(topic);
    }
  }

  return weak;
}

// Tavsiya
function showRecommendations(){
  let weak=getWeakTopics();
  let output=document.getElementById("recommendation");

  if(weak.length===0){
    output.innerHTML="Siz yaxshi ketyapsiz 👍";
  } else {
    output.innerHTML="Quyidagi mavzularni o‘rganing: "+weak.join(", ")+"<br>";

    weak.forEach(t=>{
      output.innerHTML+=<button onclick="openLesson('${t}')">${t} leksiyasi</button><br>;
    });
  }

  document.getElementById("nextTopicBtn").innerText=nextTopic();
}

// Tekshirish
function checkTest(){
  clearInterval(timerInterval);

  let score=0;
  let wrongTopics=[];

  for(let i=1;i<=5;i++){
    let user=parseFloat(document.getElementById("q"+i).value);

    if(Math.abs(user-answers[i-1])<0.1){
      score++;
      saveUserData("umumiy",true);
    } else {
      if(i===3) wrongTopics.push("daraja");
      if(i===4) wrongTopics.push("ildiz");
      if(i===5) wrongTopics.push("trigonometriya");

      saveUserData(wrongTopics[i-1] || "umumiy",false);
    }
  }
document.getElementById("recommendation").innerHTML += "<br>"+smartRecommendation(score);
  saveResult(userName,score);

  document.getElementById("greeting").innerText="Salom "+userName;
  document.getElementById("score").innerText="Ball: "+score+"/5";

  showRecommendations();

  document.getElementById("test-section").style.display="none";
  document.getElementById("result-section").style.display="block";
}
// Keyingi mavzu
function nextTopic(){
  let weak=getWeakTopics();

  if(weak.length>0){
    return "Keyingi o‘rganish: "+weak[0];
  } else {
    return "Murakkab masalalarga o‘ting 🔥";
  }
}

// Restart
function restartTest(){
  location.reload();
}

// Lesson
function openLesson(topic){
  localStorage.setItem("topic",topic);
  window.location.href="lesson.html";
}
if(score<=2) difficulty="easy";
else if(score<=4) difficulty="medium";
else difficulty="hard";
function smartRecommendation(score){
  if(score<=2) return "Boshlang‘ich darajadan qayta o‘rganing";
  if(score<=4) return "Mashqlarni ko‘proq bajaring";
  return "Murakkab masalalarga o‘ting 🔥";
}
