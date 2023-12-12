document.addEventListener("DOMContentLoaded", document_load)
function document_load(){
    const quiz = document.getElementById("quiz");
    quiz.addEventListener("submit", gay)
    const checkboxes = document.querySelectorAll(".q");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
//gay


function gay(event) {
    event.preventDefault();
    let score = 0;
    let totalCorrectAnswers = 0;
    const scorediv = document.getElementById("score");
    const questions = document.querySelectorAll(".question");
    const label = document.querySelectorAll('label');
    const submitButton = document.getElementById('submitter');


    questions.forEach(question => {
        const correctAnswers = question.dataset.correct.split(',');
        totalCorrectAnswers += correctAnswers.length;
        const correctAnswer = question.dataset.correct
        const checkboxes = question.querySelectorAll(".q");

        checkboxes.forEach(checkbox => {
            if (checkbox.checked && correctAnswer.includes(checkbox.id)) {
                score += 1;
            } else if (checkbox.checked && !correctAnswer.includes(checkbox.id)) {
                score -= 1;
            }
        });
    });

    label.forEach(i => {
        if (i.classList.contains("correct")) {
            i.classList.add("valid");
        } else {
            i.classList.add("invalid");
        }
    });


    const checkboxes = document.querySelectorAll(".q");
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
    submitButton.disabled = true;

    scorediv.innerHTML += `${score}/${totalCorrectAnswers}`;
}


