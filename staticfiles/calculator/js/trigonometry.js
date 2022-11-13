const operators = ["+", "-", "*", "/", "^"];

function buttonPlus() {
	document.getElementById("inp").value += " + ";
}

function buttonMinus() {
	document.getElementById("inp").value += " - ";
}

function buttonMultiply() {
	document.getElementById("inp").value += " x ";
}

function buttonDivide() {
	document.getElementById("inp").value += " ÷ ";
}

//Digits

function buttonZero() {
	document.getElementById("inp").value += "0";
}


function buttonOne() {
	document.getElementById("inp").value += "1";
}

function buttonTwo() {
	document.getElementById("inp").value += "2";
}

function buttonThree() {
	document.getElementById("inp").value += "3";
}

function buttonFour() {
	document.getElementById("inp").value += "4";
}

function buttonFive() {
	document.getElementById("inp").value += "5";
}

function buttonSix() {
	document.getElementById("inp").value += "6";
}

function buttonSeven() {
	document.getElementById("inp").value += "7";
}

function buttonEight() {
	document.getElementById("inp").value += "8";
}

function buttonNine() {
	document.getElementById("inp").value += "9";
}

//Other

function buttonPi() {
	document.getElementById("inp").value += Math.PI;
}

function buttonE() {
	document.getElementById("inp").value += Math.E;
}

function buttonOpenBracket() {
	document.getElementById("inp").value += " (";
}

function buttonCloseBracket() {
	document.getElementById("inp").value += ") ";
}

function buttonDelete() {
	let text = document.getElementById("inp").value;
	let newText = text.trim().slice(0, -1);
	document.getElementById("inp").value = newText;
}

function buttonClear() {
	document.getElementById("inp").value = "";
}

function buttonDecimal() {
	document.getElementById("inp").value += ".";
}

function buttonSquare() {
	document.getElementById("inp").value += " ^ 2";
}

function buttonRoot() {
	document.getElementById("inp").value += "√(";
	console.log(Math.sqrt(4));
}


function buttonPower() {
	document.getElementById("inp").value += " pow( ";
}