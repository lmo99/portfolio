const startbutton = document.getElementById('startbtn')
const nextbutton = document.getElementById('nextbtn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scorebutton = document.getElementById('scorebtn')

let shuffledQuestions, currentQuestionIndex

startbtn.addEventListener('click', startGame)

function startGame() {
  startbtn.classList.add('hide')
  scorebtn.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  nextbutton.classList.add('hide')
  scorebutton.classList.add('hide')
  
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer() {
  if (this.dataset.correct) {
    this.classList.add('correct'),
    nextbutton.classList.remove('hide')
    // scoring mechanism here

    
  } else {
    this.classList.add('wrong')
    // scoring mechanism here
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    scorebutton.classList.add('hide')
    nextbutton.classList.remove('hide')
  } else {
    startbutton.innerText = 'Restart'
    scorebutton.classList.remove('hide')
    startbutton.classList.remove('hide')
  }

  //next question here

  nextbutton.addEventListener('click', setNextQuestion)
  currentQuestionIndex = currentQuestionIndex + 1

  //check length of array here, length of shuffled question minus 1, should not exceed
}


var score = 0;
document.getElementById("scorebtn").onclick = 
function scoreTest() {
  var score = (correct) * 100;
  return score;
  }

const questions = [
  {
    question: 'In what month did the UK go into lockdown?',
    answers: [
      { text: 'January', correct: false },
      { text: 'February', correct: false },
      { text: 'March', correct: true },
      { text: 'April', correct: false }

    ]
  },
  {
    question: 'Which Tory MP implemented the Eat Out To Help Out scheme in August?',
    answers: [
      { text: 'Rishi Sunak', correct: true },
      { text: 'Priti Patel', correct: false }

    ]
  },
  {
    question: 'Which of these popular netflix shows was not first released in 2020?',
    answers: [
      { text: 'Love Is Blind', correct: false },
      { text: 'Selling Sunset', correct: true },
      { text: 'Tiger King', correct: false },
      { text: 'The Stranger', correct: false }

    ]
  },
  {
    question: 'Which was the first country to bring in a nationwide lockdown?',
    answers: [
      { text: 'Spain', correct: false },
      { text: 'Italy', correct: true },
      { text: 'UK', correct: false },
      { text: 'United States', correct: false }

    ]
  },
  {
    question: 'Where were the 2020 Olympics supposed to be held?',
    answers: [
      { text: 'Beijing', correct: false },
      { text: 'Seoul', correct: false },
      { text: 'Toyko', correct: true },
      { text: 'Shanghai', correct: false }

    ]
  },
]