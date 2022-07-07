// selecting all buttons and declaring variables

const text = document.querySelector(".text");
const allButtons = document.querySelectorAll(".btn");
const allNumbers = document.querySelectorAll(".btn.num");
const allTransactions = document.querySelectorAll(".btn.trn");
const sum = document.querySelector(".sum");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const dvs = document.querySelector(".dvs");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
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
// event listeners

allButtons.forEach(btn => {
    btn.onmouseover = () => btn.classList.add("btn-hover");
    btn.onmouseleave = () => btn.classList.remove("btn-hover");
    btn.onmousedown = () => btn.classList.add("btn-on");
    btn.onmouseup = () => btn.classList.remove("btn-on");
});

allNumbers.forEach(num => {
    num.onclick = writeFromScreen;
});

clear.onclick = clearText;

//functions

function clearText() {
    textValue = ""
    text.value = textValue;
}

function writeFromScreen(e) {
    if (textValue == "") {
        if (e.target.innerHTML == "." || e.target.innerHTML == "0") return;
    }
    textValue += e.target.innerHTML;
    text.value = textValue;
}

