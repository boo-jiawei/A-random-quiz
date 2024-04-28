const questionContainer = document.getElementById("question")
const optionsContainer = document.getElementById("options")

const data = [
    {
        question: "What is 2+2+21-24",
        options: ["1", "20", "2", "42"],
        answer: "1"
    },
    {
        question: "what is 4/2+24x10?",
        options: ["260", "242", "262", "240"],
        answer: "242",
    },
    {
        question: "Y/4X21+4=46 Y=16",
        options: ["true", "false"],
        answer: "false",
    },
    {
        question: "how long do you think I took to make 1 question?",
        options: ["60mins", "2mins", "30mins", "10mins"],
        answer: "10mins",
    },
    {
        question: "how many questons have u answered so far?(not including this one)",
        options: ["3", "4", "5", "7"],
        answer: "4",
    },
];

let currentQuestionIndex = 0;
let score = 0;


const displayQuestion = () => {
    const currentQuestion = data[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));

        optionsContainer.appendChild(optionButton)
    });
};
const restartQuiz = () => {
    currentQuestionIndex = 0
    displayQuestion();
};

const endQuiz = () => {
    questionContainer.textContent = `Quiz completed! Your score: ${score}/${data.length}`
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz?"
    restartBtn.addEventListener("click", restartQuiz);
    optionsContainer.innerHTML = "";
    optionsContainer.appendChild(restartBtn)
}

const checkAnswer = (answer) => {
    const currentQuestion = data[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        console.log("correct answer")
        score++
        console.log(score)
    }
    currentQuestionIndex++
    if (currentQuestionIndex < data.length) {
        displayQuestion();
    } else {
        endQuiz()
    }
};

// initial render
displayQuestion();