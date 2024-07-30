const quizData = [{
    question: "Why are cyber vulnerabilities unlikely to ever go away?",
    a: "They are side effects of the freedom and ease of communicating online.",
    b: "They’re protected in a secret base on the moon.",
    c: "The government won’t allow people to fix them.",
    d: "Criminals need them to steal identities.",
    correct: "d",
}, {
    question: "Which of the following would be the best password (hardest to crack)?",
    a: "Summ3r2017",
    b: "12345678",
    c: "t3chnologyRuls",
    d: "iLm!J@c)&dl^A",
    correct: "d",
}, {
    question: "Which of the following is NOT a smart way to test a suspicious link",
    a: "Use a free online tool to expand a shortened link and view the actual destination URL",
    b: "Click on it",
    c: "Use a link scanner tool",
    d: "Hover over the link and view the destination URL that is displayed",
    correct: "b",
}];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Try Again</button> `
            // location.reload() won't work in CodePen for security reasons; } } });
        }
    }
});