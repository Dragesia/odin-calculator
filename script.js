// selecting all buttons and declaring variables

const currentText = document.querySelector(".text-current");
const lastText = document.querySelector(".text-last")
const allButtons = document.querySelectorAll(".btn");
const allNumbers = document.querySelectorAll(".btn.num");
const allTransactions = document.querySelectorAll(".btn.trn");
const sum = document.querySelector(".sum");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const dvs = document.querySelector(".dvs");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const enter = document.querySelector(".enter");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

let textValue = "";
let values = [];
let currentMode = "free";

// event listeners

allNumbers.forEach(num => {
    num.onmouseover = () => num.classList.add("btn-hover");
    num.onmouseleave = () => num.classList.remove("btn-hover");
    num.onmousedown = () => num.classList.add("btn-on");
    num.onmouseup = () => num.classList.remove("btn-on");
    num.onclick = writeFromScreen;
});

allTransactions.forEach(trn => {
    trn.onmouseover = () => trn.classList.add("btn-hover");
    trn.onmouseleave = () => trn.classList.remove("btn-hover");
});

sum.onclick = () => changeMode("sum");
sub.onclick = () => changeMode("sub");
mul.onclick = () => changeMode("mul");
dvs.onclick = () => changeMode("dvs");

clear.onclick = () => {
    clearText();
    changeMode("free");
}

deleteBtn.onclick = deleteText;

//functions

function clearText() {
    values = [];
    textValue = ""
    lastText.innerHTML = textValue;
    currentText.innerHTML = textValue;
}

function deleteText () {
    textValue = textValue.slice(0, -1);
    currentText.innerHTML = textValue;
}

function writeFromScreen(e) {
    if (textValue == "") {
        if (e.target.innerHTML == ".") return;
    }
    if (textValue[textValue.length-1] == "." && e.target.innerHTML == ".") return;
    if (textValue == "0" && e.target.innerHTML == "0") return;
    textValue += e.target.innerHTML;
    currentText.innerHTML = textValue;
}

function changeMode(newMode) {
    if (currentMode == "free" || newMode == "free") {
        currentMode = "free";
        sum.classList.remove("btn-on");
        sub.classList.remove("btn-on");
        mul.classList.remove("btn-on");
        dvs.classList.remove("btn-on");
    }
    console.log(currentMode);
    if (currentMode == newMode) {
        currentMode = "free";
        sum.classList.remove("btn-on");
        sub.classList.remove("btn-on");
        mul.classList.remove("btn-on");
        dvs.classList.remove("btn-on");
    } else if (newMode == "sum") {
        currentMode = "sum";
        sum.classList.add("btn-on");
        sub.classList.remove("btn-on");
        mul.classList.remove("btn-on");
        dvs.classList.remove("btn-on");
    } else if (newMode == "sub") {
        currentMode = "sub";
        sum.classList.remove("btn-on");
        sub.classList.add("btn-on");
        mul.classList.remove("btn-on");
        dvs.classList.remove("btn-on");
    } else if (newMode == "mul") {
        currentMode = "mul";
        sum.classList.remove("btn-on");
        sub.classList.remove("btn-on");
        mul.classList.add("btn-on");
        dvs.classList.remove("btn-on");
    } else if (newMode == "dvs") {
        currentMode = "dvs";
        sum.classList.remove("btn-on");
        sub.classList.remove("btn-on");
        mul.classList.remove("btn-on");
        dvs.classList.add("btn-on");
    }
}

