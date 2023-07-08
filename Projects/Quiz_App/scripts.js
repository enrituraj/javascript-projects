const questions = [
    {
        question: "question text 1",
        answers: [
            { text: "shark", correct: false },
            { text: "blue shark", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "question text 1",
        answers: [
            { text: "shark", correct: false },
            { text: "blue shark", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "question text 1",
        answers: [
            { text: "shark", correct: false },
            { text: "blue shark", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "question text 1",
        answers: [
            { text: "shark", correct: false },
            { text: "blue shark", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "question text 1",
        answers: [
            { text: "shark", correct: false },
            { text: "blue shark", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let ans_button = document.createElement("button");
        ans_button.innerText = answer.text;
        ans_button.classList.add('btn');
        answerButton.appendChild(ans_button)

        if (answer.correct) {
            ans_button.dataset.correct = answer.correct;
        }

        ans_button.addEventListener("click", slectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function slectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scorred ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play agin"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz()
    }
})

startQuiz()