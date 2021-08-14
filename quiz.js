function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

var form = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-answer-btn");
var showMessage = document.querySelector(".opt")
var opt = document.querySelector(".output");
var questionContainer = document.querySelectorAll(".question-container")

const correctAnswer = ["Yes", "No", "Yes", "Yes", "Yes", "Isosceles", "30", "Both", "5cm", "Scalene"];

function calScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(form);
    for (let value of formResult.values()) {
        if (value === correctAnswer[index]) {
            score++;
            questionContainer[index].style.backgroundColor = "lightgreen"
        } else {
            questionContainer[index].style.backgroundColor = "pink"
        }
        index++;
    }
    showMessage.innerHTML = "Your Score: " + score;
    opt.style.display = "block";
}

submitBtn.addEventListener("click", calScore);