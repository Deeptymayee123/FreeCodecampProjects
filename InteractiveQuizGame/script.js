//DOM Element
//start screen
const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");

//quiz screen
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers-container");
const currentQuestion = document.querySelector("#current-question");
const totalQuestionSpan = document.querySelector("#total-questions");
const scoreSpan = document.querySelector("#score");

//result screen
const finalScore = document.querySelector("#final-score");
const maxScore = document.querySelector("#max-score");
const resultMessage = document.querySelector("#result-message");
const restartBtn = document.querySelector("#restart-btn");
const progress = document.querySelector("#progress");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: true },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: true },
      { text: "Paris", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: false },
      { text: "London", correct: true },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
    ],
  },
];

//quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

// console.log(quizQuestions.length);

totalQuestionSpan.textContent = quizQuestions.length;
maxScore.textContent = quizQuestions.length;

//event listener
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  //   console.log("quiz started");
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;
  const currentQue = quizQuestions[currentQuestionIndex];
  currentQuestion.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progress.style.width = progressPercent + "%";

  //50%
  questionText.textContent = currentQue.question;

  //explain this in a second
  answersContainer.innerHTML = "";

  currentQue.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    //what is dataset?It's a property of the button element that allows you to store custom date
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  //optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  //explain this in a sec
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = scoreSpan;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    //check if  there are more questions or if quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScore.textContent = score;
  const percentage = (scoreSpan / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! you are a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  console.log("quiz re-started");
  resultScreen.classList.remove("active");
  startQuiz();
}
