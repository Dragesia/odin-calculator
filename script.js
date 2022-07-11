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

let textValue = "0";
let values = [];

// event listeners

allButtons.forEach(btn => {
    btn.onmouseover = () => btn.classList.add("btn-hover");
    btn.onmouseleave = () => btn.classList.remove("btn-hover");
    btn.onmousedown = () => btn.classList.add("btn-click");
    btn.onmouseup = () => btn.classList.remove("btn-click");
});

allNumbers.forEach(num => {
    num.onclick = write;
});

allTransactions.forEach(trn => {
    trn.onclick = () => writeTransaction(trn.innerHTML);
});

dot.onclick = writeDot;
deleteBtn.onclick = deleteFunc;
clear.onclick = clearFunc;

window.addEventListener("keydown", write);

// functions

function sumFunc(num1, num2) {
    return num1 + num2;
}

function subFunc(num1, num2) {
    return num1 - num2;
}

function mulFunc(num1, num2) {
    return num1 * num2;
}

function dvsFunc(num1, num2) {
    if (num2 == 0) return "ERROR";
    return num1 / num2;
}

function clearFunc() {
    values = [];
    textValue = "0";
    currentText.innerHTML = textValue;
}

function deleteFunc() {
    if (currentText.innerHTML.length == 1) {
        textValue = "0";
        currentText.innerHTML = textValue;
        return;
    }
    textValue = currentText.innerHTML.slice(0, -1);
    currentText.innerHTML = textValue;
}

function write(e) {
    if (e.repeat) return;
    if (currentText.innerHTML.length == 22) return;
    if (["+", "-", "*", "/"].includes(e.key)) writeTransaction(e.key);
    if (e.key == ".") writeDot();
    if (e.key == "Enter") resultFunc();
    if (e.key == "Backspace") deleteFunc();
    if (e.key != undefined && ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) == 0) return;
    if (currentText.innerHTML == "0") {
        if (e.target.innerHTML == "0" || e.key == "0") return;
    }

    if (currentText.innerHTML == "0") {
        textValue = "";
        if (e.key != undefined) textValue += e.key.toString();
        else if (e.target.innerHTML != undefined) textValue += e.target.innerHTML;
        currentText.textContent = textValue;
        return;
    }
    if (e.key != undefined) textValue += e.key.toString();
    else if (e.target.innerHTML != undefined) textValue += e.target.innerHTML;
    
    currentText.textContent = textValue;
}

function writeDot() {
    if (currentText.innerHTML.includes(".")) return;
    if (["+", "-", "*", "/"].includes(currentText.innerHTML[currentText.innerHTML.length-1])) return;
    textValue += ".";
    currentText.innerHTML = textValue;
}

function writeTransaction(trns) {
    if (currentText.innerHTML.includes("+")) return;
    if (currentText.innerHTML.includes("-")) return;
    if (currentText.innerHTML.includes("*")) return;
    if (currentText.innerHTML.includes("/")) return;
    textValue += trns;
    currentText.innerHTML = textValue;
}