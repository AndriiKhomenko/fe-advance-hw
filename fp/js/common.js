window.addEventListener("load", function(){
    let swipearea = document.getElementById("wrapper");
    let button = document.querySelector("#button");
    let a = document.querySelector(".menu");
    swipearea.addEventListener("touchstart", function(e){
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
    }, false)
    swipearea.addEventListener("touchend", function(e){
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
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
    window.addEventListener('click', function(){
    	if(a.classList.contains("move-right")){
				document.querySelector(".head").style.display = "none";
				document.querySelector(".head-1").style.display = "flex";
			}
			else{
				document.querySelector(".head").style.display = "flex";
				document.querySelector(".head-1").style.display = "none";
			}
    }, false)
}, false)