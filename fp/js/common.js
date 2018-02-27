
	// if(e.target === card){
	// 		a.classList.remove("move-right");
	// 		a.classList.add("move-left");
	// }
window.addEventListener('load', function(){
    let swipearea = document.getElementById("wrapper");
    let button = document.querySelector("#button");
    swipearea.addEventListener('mousedown', function(e){
        startX = e.clientX;
        startY = e.clientY;
    }, false)
    swipearea.addEventListener('mouseup', function(e){
        endX = e.clientX;
        endY = e.clientY;
        let a = document.querySelector(".menu");
        if(endX-startX>0){
        	if(a.classList.contains("move-left")){
						a.classList.remove("move-left");
        	}
        	a.classList.add("move-right");
        }
        else if(endX-startX<0){
        	if(a.classList.contains("move-right")){
        		a.classList.remove("move-right");
        	}
        a.classList.add("move-left");
      	}
    }, false)
    button.addEventListener('click', function(e){
        let a = document.querySelector(".menu");
					if(a.classList.contains("move-right")){
						a.classList.remove("move-right");
						a.classList.add("move-left");
					}
					else{
						a.classList.add("move-right");
						a.classList.remove("move-left");
					}
    }, false)
}, false)