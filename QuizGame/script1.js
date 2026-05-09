//select DOM element

const startBtn = document.querySelector("#startBtn");
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const questionText = document.querySelector(".question-text");
const buttons = document.querySelector(".buttons");
//qnumber and scores
const qNumber = document.querySelector("#qNumber");
const qTotal = document.querySelector("#qTotal");
const spanScore = document.querySelector("#score");
const scoreGet = document.querySelector(".scoreGet");
const scoreTotal = document.querySelector(".scoreTotal");
const restartQuiz = document.querySelector(".restartQuiz");
const progress = document.querySelector(".progres");
const answersContainer = document.querySelector(".answers-container");
const resultMsg = document.querySelector("#resultMsg");

// Quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

//quiz state vars
let currentQIndex = 0;
let score = 0;
let answersDisabled = false;

qTotal.textContent = quizQuestions.length;
scoreTotal.textContent = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
restartQuiz.addEventListener("click", restartQuizGame);

function startQuiz() {
  currentQIndex = 0;
  score = 0;
  spanScore.textContent = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuizQuestion();
}

function showQuizQuestion() {
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQIndex];
  qNumber.textContent = currentQIndex + 1;
  const progressPercentage = (currentQIndex / quizQuestions.length) * 100;
  progress.style.width = progressPercentage + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.textContent = "";

  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");

    btn.dataset.correct = answer.correct;
    btn.addEventListener("click", selectAnswer);

    answersContainer.appendChild(btn);
  });
}
function selectAnswer(e) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset === true;

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "ture") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    score++;
    spanScore.textContent = spanScore;
    // console.log(spanScore);
  }

  setTimeout(() => {
    currentQIndex++;

    if (currentQIndex < quizQuestions.length) {
      showQuizQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  scoreGet.textContent = spanScore;
  const percentage = (spanScore / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMsg.textContent = "You are a genious!";
  } else if (percentage >= 80) {
    resultMsg.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMsg.textContent = "Good effort! keep learning!";
  } else if (percentage >= 40) {
    resultMsg.textContent = "Not bad! try again to improve!";
  } else {
    resultMsg.textContent = "Keep studying! You'll get better!";
  }
}
function restartQuizGame() {
  resultScreen.classList.remove("active");
  startQuiz();
}
