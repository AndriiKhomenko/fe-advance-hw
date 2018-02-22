function myMove(){
	let a = document.querySelector(".menu");
	if(a.classList.contains("move-right")){
		a.classList.remove("move-right");
		a.classList.add("move-left");
	}
	else{
	a.classList.add("move-right");
	a.classList.remove("move-left");
	}
}
document.getElementById("button").addEventListener("click", myMove);