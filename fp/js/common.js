window.addEventListener("load", function(){
    let swipearea = document.getElementById("wrapper");
    let button = document.querySelector("#button");
    let a = document.querySelector(".menu");
    swipearea.addEventListener("touchstart", function(e){
        startX = touch.clientX;
        startY = touch.clientY;
    }, false)
    swipearea.addEventListener("touchend", function(touch){
        endX = touch.clientX;
        endY = touch.clientY;
        if(endX-startX>0){
        	if(a.classList.contains("move-left")){
						a.classList.remove("move-left");
        	}
        	a.classList.add("move-right");
        }
        else if(endX-startX<=0){
        	if(a.classList.contains("move-right")){
        		a.classList.remove("move-right");
        	}
        a.classList.add("move-left");
      	}
    }, false)
    button.addEventListener('click', function(){
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