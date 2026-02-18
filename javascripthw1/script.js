let counter = 0;

function tickUp() {
	counter++;
	document.getElementById("counter").textContent = counter;
}

function tickDown() {
	counter--;
	document.getElementById("counter").textContent = counter;
}

function runForLoop() {
	let result = "";
	for (let i = 0; i <= counter; i++) {
		result += i + " ";
	}
	document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
	let result = "";
	for (let i = 1; i <= counter; i++) {
		if (i % 2 === 1) {
			result += i + " ";
		}
	}
	document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
	let arr = [];
	if (counter >= 5) {
		for (let i = 5; i <= counter; i += 5) {
			arr.unshift(i);
		}
	}
	console.log(arr);
}

function printCarObject() {
	let obj = {
		cType: document.getElementById("carType").value,
		cMPG: document.getElementById("carMPG").value,
		cColor: document.getElementById("carColor").value
	};
	console.log(obj);
}

function loadCar(n) {
	let obj;
	if (n === 1) obj = carObject1;
	else if (n === 2) obj = carObject2;
	else obj = carObject3;
	document.getElementById("carType").value = obj.cType;
	document.getElementById("carMPG").value = obj.cMPG;
	document.getElementById("carColor").value = obj.cColor;
}

function changeColor(n) {
	let p = document.getElementById("styleParagraph");
	if (n === 1) p.style.color = "red";
	else if (n === 2) p.style.color = "green";
	else p.style.color = "blue";
}
