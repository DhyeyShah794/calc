const operators = ["+", "-", "x", "÷", "^"];

function buttonPlus() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "0 + ";
	}
	else {
	exp = exp + " + ";
	}
	document.getElementById("inp").value = exp;
}

function buttonMinus() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "0 - ";
	}
	else {
	exp = exp + " - ";
	}
	document.getElementById("inp").value = exp;
}

function buttonMultiply() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "0 x ";
	}
	else if (operators.includes(exp.slice(-2, -1))) {
		exp = exp.replace(exp.slice(-2, -1), "x");
	}
	else {
	exp = exp + " x ";
	}
	document.getElementById("inp").value = exp;
}

function buttonDivide() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "0 ÷ ";
	}
	else if (operators.includes(exp.slice(-2, -1))) {
		exp = exp.replace(exp.slice(-2, -1), "÷");
	}
	else {
	exp = exp + " ÷ ";
	}
	document.getElementById("inp").value = exp;
}

//Digits

function buttonZero() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "0";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 0";
	}
	else {
		exp = exp + "0";
	}
	document.getElementById("inp").value = exp;

	}

function buttonOne() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "1";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 1";
	}
	else {
		exp = exp + "1";
	}
	document.getElementById("inp").value = exp;
}

function buttonTwo() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "2";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 2";
	}
	else {
		exp = exp + "2";
	}
	document.getElementById("inp").value = exp;
}

function buttonThree() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "3";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 3";
	}
	else {
		exp = exp + "3";
	}
	document.getElementById("inp").value = exp;
}

function buttonFour() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "4";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 4";
	}
	else {
		exp = exp + "4";
	}
	document.getElementById("inp").value = exp;
}

function buttonFive() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "5";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 5";
	}
	else {
		exp = exp + "5";
	}
	document.getElementById("inp").value = exp;
}

function buttonSix() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "6";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 6";
	}
	else {
		exp = exp + "6";
	}
	document.getElementById("inp").value = exp;
}

function buttonSeven() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "7";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 7";
	}
	else {
		exp = exp + "7";
	}
	document.getElementById("inp").value = exp;
}

function buttonEight() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "8";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 8";
	}
	else {
		exp = exp + "8";
	}
	document.getElementById("inp").value = exp;
}

function buttonNine() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "9";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e") {
		exp = exp + " * 9";
	}
	else {
		exp = exp + "9";
	}
	document.getElementById("inp").value = exp;
}

//Other

function buttonPi() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "π";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e" || ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(exp.slice(-1))) {
		exp = exp + " * π";
	}
	else {
		exp = exp + "π";
	}
	document.getElementById("inp").value = exp;
}

function buttonE() {
	let exp = document.getElementById("inp").value;
	if (exp === "") {
		exp = "e";
	}
	else if (exp.slice(-1) === "π" || exp.slice(-1) === "e" || ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(exp.slice(-1))) {
		exp = exp + " * e";
	}
	else {
		exp = exp + "e";
	}
	document.getElementById("inp").value = exp;
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
	// exp = document.getElementById("inp");
	// const power = document.createElement("input");
	// const content = document.createTextNode("pow(");
	// power.appendChild(content);
	// exp.parentNode.insertBefore(power, exp);

	document.getElementById("inp").value += "pow(";
}