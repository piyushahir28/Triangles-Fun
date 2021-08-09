var angle = document.querySelectorAll(".input-field");
var check = document.querySelector(".btn");
var showMessage = document.querySelector(".opt");
var opt = document.querySelector(".output");

function clickHandler() {
    var one = Number(angle[0].value);
    var two = Number(angle[1].value);
    var three = Number(angle[2].value);

    if (one > 0 && two > 0 && three > 0) {
        var result = one + two + three;
        if (result == 180) {
            showMessage.innerHTML = "Yup! these angles can make a triangle."
            opt.style.display = "block";
        } else {
            showMessage.innerHTML = "Oops! these angles can not make a triangle."
            opt.style.display = "block";
        }
    } else {
        showMessage.innerHTML = "Please, enter some values in the fields."
        opt.style.display = "block";
    }
}

check.addEventListener('click', clickHandler);