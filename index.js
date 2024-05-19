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
        question: "Y/YX20/4=?",
        options: ["4", "1", "0", "5"],
        answer: "5"
    },
    {
        question: "it takes 5 mins for a microwave to finish microwaving a meal.How long hould it take a microwave to make 4 meals?",
        options: ["5mins", "20mins", "10mins"],
        answer: "20mins",
    },
    {
        question: "Ali drove 20km at 400m per minute.How long did it take for Ali to reach his destination",
        options: ["50mins", "40mins", "60mins", "55mins"],
        answer: "50mins",
    },
    {
        question: "how many questons have u answered so far?(including this one)",
        options: ["3", "4", "5", "7"],
        answer: "7",
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
    score = 0
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