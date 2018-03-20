const str = "qryte";
let stopwatch = document.getElementsByClassName("timer")[0];
let text = document.getElementById("userText");
let flag = true;
document.getElementById("title").textContent = "Введите строчку - " + str;

text.addEventListener("keydown", function timer(){
	if (flag === true){
	let second = 0;
	let timerId = setInterval(function() {
		second = second + 0.01;
		stopwatch.textContent = Math.round(second * 100) / 100;
		flag = false;
		if (text.value === str){
			let record = localStorage.getItem("bestResult");
			if (stopwatch.textContent<record || record === null){
				localStorage.setItem("bestResult", stopwatch.textContent);
			}
			clearInterval(timerId);
		};
	}, 10);
}
});