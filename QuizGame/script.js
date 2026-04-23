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
const score = document.querySelector("#score");
const scoreGet = document.querySelector(".scoreGet");
const scoreTotal = document.querySelector(".scoreTotal");
const restartQuiz = document.querySelector(".restartQuiz");

let currentIndex = -1;
let scTotal = 0;

startBtn.addEventListener("click", function () {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  qTotal.textContent = quizQuestions.length;
  // for (let i = 0; i < quizQuestions.length; i++) {

  setInterval(() => {
    if (currentIndex >= 4) {
      quizScreen.classList.remove("active");
      resultScreen.classList.add("active");
      scoreGet.innerHTML = scTotal;
      scoreTotal.innerHTML = quizQuestions.length;
    } else {
      currentIndex++;
      scTotal += showQuestion(quizQuestions[currentIndex]);
      console.log(scTotal);

      qNumber.textContent = currentIndex + 1;
    }
  }, 2000);
});

resultScreen.addEventListener("click", () => {
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");
  qTotal.textContent = quizQuestions.length;
  // for (let i = 0; i < quizQuestions.length; i++) {
  let currentIndex = -1;
  setInterval(() => {
    if (currentIndex >= 4) {
      quizScreen.classList.remove("active");
      resultScreen.classList.add("active");
      scoreGet.innerHTML = scTotal;
      scoreTotal.innerHTML = quizQuestions.length;
    } else {
      currentIndex++;
      scTotal += showQuestion(quizQuestions[currentIndex]);
      console.log(scTotal);

      qNumber.textContent = currentIndex + 1;
    }
  }, 2000);
});

function showQuestion(question) {
  let sc = 0;
  questionText.innerHTML = question.question;

  buttons.innerHTML = "";

  //create new buttons for each answers
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");

    button.addEventListener("click", function () {
      if (answer.correct) {
        button.classList.add("correct");
        sc = 1;
      } else {
        button.classList.add("incorrect");
      }
      score.textContent = sc;
    });

    buttons.appendChild(button);
    //console.log(button.textContent);
    // console.log(sc);
  });
  console.log(sc);
  return sc;
}
