function myMove(e){
	let a = document.querySelector(".menu");
	let button = document.querySelector("#button");
	let lines = document.querySelector(".line");
	let card = document.querySelector("#cards");
	if(e.target === button || lines){
		if(a.classList.contains("move-right")){
			a.classList.remove("move-right");
			a.classList.add("move-left");
		}
		else{
		a.classList.add("move-right");
		a.classList.remove("move-left");
		}
	}
	if(e.target === card){
			a.classList.remove("move-right");
			a.classList.add("move-left");
	}
}
window.addEventListener("click", myMove);