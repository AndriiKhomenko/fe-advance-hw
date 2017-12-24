let res;
let num = prompt("Введите число от 1 до 3");
switch (num){
	case "1" : res = "taba"; break;
	case "2" : res = "sharm"; break;
	case "3" : res = "hurgada"; break;
	default : res = "error";
}

console.log(res);