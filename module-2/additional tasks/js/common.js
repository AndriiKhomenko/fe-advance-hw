let sharm = 15;
let hurgada = 25;
let taba = 6;
let res;
let num = prompt("Введите количество людей");

if (num<=6){
	if ((taba>0)&&(taba<=6)){flag = confirm("Есть свободные места в Табу"); if (flag === true) {console.log(res = taba - num);}}
	if ((sharm>0)&&(sharm<=15)){flag = confirm("Есть свободные места в Шарм"); if (flag === true) {console.log(res = sharm - num);}}
	if ((hurgada>0)&&(hurgada<=25)){flag = confirm("Есть свободные места в Хургаду"); if (flag === true) {console.log(res = hurgada - num);}}
}

if ((num>6)&&(num<=25)){
	if ((sharm>0)&&(sharm<=15)){flag = confirm("Есть свободные места в Шарм"); if (flag === true) {console.log(res = sharm - num);}}
	if ((hurgada>0)&&(hurgada<=25)){flag = confirm("Есть свободные места в Хургаду"); if (flag === true) {console.log(res = hurgada - num);}}
}

if ((num>15)&&(num<=25)){
	if ((hurgada>0)&&(hurgada<=25)){flag = confirm("Есть свободные места в Хургаду"); if (flag === true) {console.log(res = hurgada - num);}}
}

else{
	console.log("Нет свободных отелей");
}
