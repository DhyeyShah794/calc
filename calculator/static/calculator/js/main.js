const ids = ["basic", "trig", "constants", "calculus", "stats", "advanced", "transforms"];

function openTab(idName) {
	const x = document.getElementById(idName);
	const filtered = ids.filter(item => item !== idName);
	try {
		for (let id of filtered) {
			let state = document.getElementById(id).style;
			if (state.display === "block") {
				state.display = "none";
			}
		}
	} catch (error) {
		console.log(error);
	}
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Basic functions

function toggleBasic() {
	let basic1 = document.getElementById("t-basic-1");
	let basic2 = document.getElementById("t-basic-2");
	if (basic1.style.display === "none") {
		basic1.style.display = "block";
		basic2.style.display = "none";
	}
	else {
		basic1.style.display = "none";
		basic2.style.display = "block";
	}
}

function constDropdown(idName) {
	let dropdowns = document.getElementsByClassName("dropdown-content");
	for (let dropdown of dropdowns) {
		if (dropdown.id !== idName) {
			dropdown.style.display = "none";
		}
	}
	let x = document.getElementById(idName);
	if (x.style.display === "none") {
		x.style.display = "flex";
	}
	else {
		x.style.display = "none";
	}
}

const operators = ["+", "-", "×", "÷", "^"];

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
		exp = "0 × ";
	}
	else if (operators.includes(exp.slice(-2, -1))) {
		exp = exp.replace(exp.slice(-2, -1), "×");
	}
	else {
		exp = exp + " × ";
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

function buttonOpen() {
	document.getElementById("inp").value += " (";
}

function buttonClose() {
	document.getElementById("inp").value += ") ";
}


function buttonDecimal() {
	document.getElementById("inp").value += ".";
}

function buttonSquare() {
	document.getElementById("inp").value += " ^ 2";
}

function buttonRoot() {
	document.getElementById("inp").value += "√(";
}

function buttonPower() {
	document.getElementById("inp").value += "pow(";
}

function buttonLog10() {
	document.getElementById("inp").value += "log10(";
}

function buttonPower10() {
	document.getElementById("inp").value += "10 ^ ";
}

function buttonLogE() {
	document.getElementById("inp").value += "ln(";
}

function buttonFactorial() {
	document.getElementById("inp").value += "fac(";
}

function buttonExp() {
	document.getElementById("inp").value += "exp(";
}

// Trigonometric functions

function toggleTrig() {
	let trig1 = document.getElementById("trig-table-1");
	let trig2 = document.getElementById("trig-table-2");
	if (trig1.style.display === "none") {
		trig1.style.display = "block";
		trig2.style.display = "none";
	}
	else {
		trig1.style.display = "none";
		trig2.style.display = "block";
	}
}

function buttonSin() {
	document.getElementById("inp").value += "sin(";
}

function buttonCos() {
	document.getElementById("inp").value += "cos(";
}

function buttonTan() {
	document.getElementById("inp").value += "tan(";
}

function buttonCot() {
	document.getElementById("inp").value += "cot(";
}

function buttonSec() {
	document.getElementById("inp").value += "sec(";
}

function buttonCosec() {
	document.getElementById("inp").value += "cosec(";
}

function buttonAsin() {
	document.getElementById("inp").value += "asin(";
}

function buttonAcos() {
	document.getElementById("inp").value += "acos(";
}

function buttonAtan() {
	document.getElementById("inp").value += "atan(";
}

function buttonAcot() {
	document.getElementById("inp").value += "acot(";
}

function buttonAsec() {
	document.getElementById("inp").value += "asec(";
}

function buttonAcosec() {
	document.getElementById("inp").value += "acosec(";
}

function buttonSinh() {
	document.getElementById("inp").value += "sinh(";
}

function buttonCosh() {
	document.getElementById("inp").value += "cosh(";
}

function buttonTanh() {
	document.getElementById("inp").value += "tanh(";
}

function buttonCoth() {
	document.getElementById("inp").value += "coth(";
}

function buttonSech() {
	document.getElementById("inp").value += "sech(";
}

function buttonCosech() {
	document.getElementById("inp").value += "cosech(";
}

function buttonAsinh() {
	document.getElementById("inp").value += "asinh(";
}

function buttonAcosh() {
	document.getElementById("inp").value += "acosh(";
}

function buttonAtanh() {
	document.getElementById("inp").value += "atanh(";
}

function buttonAcoth() {
	document.getElementById("inp").value += "acoth(";
}

function buttonAsech() {
	document.getElementById("inp").value += "asech(";
}

function buttonAcosech() {
	document.getElementById("inp").value += "acosech(";
}

// Calculus functions

function buttonDiff() {
	document.getElementById("inp").value += "diff(";
}

function buttonInteg() {
	document.getElementById("inp").value += "∫(";
}

function buttonLimit() {
	document.getElementById("inp").value += "lim(";
}

// Transforms

function buttonLaplace() {
	document.getElementById("inp").value += "L(";
}

function buttonInvLaplace() {
	document.getElementById("inp").value += "L_inv(";
}

function buttonFourier() {
	document.getElementById("inp").value += "fourier_series(";
}

function buttonBeta() {
	document.getElementById("inp").value += "β(";
}

function buttonGamma() {
	document.getElementById("inp").value += "Γ(";
}

function buttonMean() {
	document.getElementById("inp").value += "mean([";
}

function buttonMedian() {
	document.getElementById("inp").value += "median([";
}

function buttonMode() {
	document.getElementById("inp").value += "mode([";
}

function buttonStdev() {
	document.getElementById("inp").value += "stdev([";
}

function buttonVariance() {
	document.getElementById("inp").value += "variance([";
}

function buttonCovariance() {
	document.getElementById("inp").value += "cov([";
}

function constPi() {
	document.getElementById("inp").value += "π";
}

function constE() {
	document.getElementById("inp").value += "e";
}

function constPhi() {
	document.getElementById("inp").value += "φ";
}

function constApery() {
	document.getElementById("inp").value += "ζ(3)";
}

function constFeigenbaum1() {
	document.getElementById("inp").value += "α";
}

function constFeigenbaum2() {
	document.getElementById("inp").value += "δ";
}

function constEulerMascheroni() {
	document.getElementById("inp").value += "γ";
}

function constConway() {
	document.getElementById("inp").value += "const_conway";
}

function constKhinchin() {
	document.getElementById("inp").value += "const_khinchin";
}

function constGlaisherKinkelin() {
	document.getElementById("inp").value += "const_A";
}

function constChampernowne() {
	document.getElementById("inp").value += "C_10";
}

function constMeisselMertens() {
	document.getElementById("inp").value += "M_1";
}

function constBernstein() {
	document.getElementById("inp").value += "β";
}

function constGaussKuzminWirsing() {
	document.getElementById("inp").value += "λ";
}

function constHafnerSarnakMcCurley() {
	document.getElementById("inp").value += "σ";
}

function constOmega() {
	document.getElementById("inp").value += "Ω";
}

function constGolombDickman() {
	document.getElementById("inp").value += "const_gb";
}

function constTwinPrime() {
	document.getElementById("inp").value += "C_2"
}

function buttonGeneralLog() {
	document.getElementById("inp").value += "log(";
}

function buttonSuperfac() {
	document.getElementById("inp").value += "superfac(";
}

function buttonHyperfac() {
	document.getElementById("inp").value += "hyperfac(";
}

function buttonBessel() {
	document.getElementById("inp").value += "bessel(";
}

function buttonLegendre() {
	document.getElementById("inp").value += "legendre(";
}

function buttonHankel1() {
	document.getElementById("inp").value += "hankel1(";
}

function buttonHankel2() {
	document.getElementById("inp").value += "hankel2(";
}

function buttonBer() {
	document.getElementById("inp").value += "ber(";
}

function buttonBei() {
	document.getElementById("inp").value += "bei(";
}

function buttonKer() {
	document.getElementById("inp").value += "ker(";
}

function buttonKei() {
	document.getElementById("inp").value += "kei(";
}

function constGravity() {
	document.getElementById("inp").value += "const_G";
}

function constPlanck() {
	document.getElementById("inp").value += "ℎ";
}

function constMassE() {
	document.getElementById("inp").value += "m_e";
}

function constMassP() {
	document.getElementById("inp").value += "m_p";
}

function constMassN() {
	document.getElementById("inp").value += "m_n";
}

function constSpeedLight() {
	document.getElementById("inp").value += "const_c";
}

function constHBar() {
	document.getElementById("inp").value += "ħ";
}

function constBoltzmann() {
	document.getElementById("inp").value += "K_b";
}

function constAvogadro() {
	document.getElementById("inp").value += "N_A";
}

function constFaraday() {
	document.getElementById("inp").value += "const_F";
}

function constGas() {
	document.getElementById("inp").value += "const_R";
}

function constEpsilon0() {
	document.getElementById("inp").value += "ε_0";
}

function constUnitCharge() {
	document.getElementById("inp").value += "q_e";
}

function constRydberg() {
	document.getElementById("inp").value += "R∞";
}
