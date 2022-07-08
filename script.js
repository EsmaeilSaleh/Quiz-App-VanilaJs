const quizData = [
  {
    question: "Which language is the best?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    currect: "c",
  },
  {
    question: "Which Js Framework is the best?",
    a: "React",
    b: "Vue",
    c: "Angular",
    d: "None",
    currect: "c",
  },
  {
    question: "What is the next technology you want to master?",
    a: "Node",
    b: "Next",
    c: "Express",
    d: "Postgres",
    currect: "c",
  },
  {
    question: "Which language is the best?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    currect: "c",
  },
  {
    question: "Which language is the best?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    currect: "c",
  },
  {
    question: "Which language is the best?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    currect: "c",
  },
  {
    question: "Do you Think you have answered currectly?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    currect: "c",
  },
];

const quiz = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;
  answersEl.forEach((anEl) => {
    if (anEl.checked) {
      answer = anEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].currect) {
      score++;
      answer = "";
    }
  }
  currentQuiz++;
  if (currentQuiz < quizData.length && answer !== undefined) {
    loadQuiz();
  } else if (answer === undefined) {
    console.log("Please select an answer!");
  } else {
    quiz.innerHTML = `<h2 style="padding: 3em">You have finished the quiz with the result of: ${score}/${quizData.length}</h2>
<button onclick="location.reload()">Reload</button>
`;
  }
});


function deselectAnswers() {
  answersEl.forEach((el) => (el.checked = false));
}
