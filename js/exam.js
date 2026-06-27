// Random Question

const examQuestions = [...questions]
.sort(() => Math.random() - 0.5)
.slice(0,20);

let currentQuestion = 0;

let answers = [];

loadQuestion();

function loadQuestion(){

let q = examQuestions[currentQuestion];

document.getElementById("questionNumber").innerHTML =
`Question ${currentQuestion+1} of ${examQuestions.length}`;

document.getElementById("question").innerHTML =
q.question;

let html="";

q.options.forEach((option,index)=>{

html += `
<label class="option">

<input
type="radio"
name="answer"
value="${index}"
${answers[currentQuestion]==index?"checked":""}
>

${option}

</label>

`;

});

document.getElementById("options").innerHTML=html;

updateProgress();

}

document.addEventListener("change",(e)=>{

if(e.target.name=="answer"){

answers[currentQuestion]=Number(e.target.value);

}

});

function nextQuestion(){

if(currentQuestion<examQuestions.length-1){

currentQuestion++;

loadQuestion();

}

}

function previousQuestion(){

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

}

function updateProgress(){

let percent=((currentQuestion+1)/examQuestions.length)*100;

document.getElementById("progressBar").style.width=
percent+"%";

}

function submitExam(){

localStorage.setItem(
"answers",
JSON.stringify(answers)
);

localStorage.setItem(
"questions",
JSON.stringify(examQuestions)
);

window.location="result.html";

}
