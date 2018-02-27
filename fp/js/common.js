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

window.addEventListener('load', function(){
    swipearea = document.getElementById('wrapper')
    swipearea.addEventListener('touchstart', function(e){
        startX = e.clientX;
        startY = e.clientY;
    }, false)
    swipearea.addEventListener('touchend', function(e){
        endX = e.clientX;
        endY = e.clientY;
        if (endX-startX>=30 && (Math.abs(endY-startY)<=100)){
          alert("be");
        }
    }, false)
}, false)