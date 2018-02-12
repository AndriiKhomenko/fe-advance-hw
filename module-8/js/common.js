const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
let buttons = document.getElementsByClassName("keyboard__btn");

function callback(e){
		for(let i=0; i<buttons.length; i++){
			if(buttons[i].textContent === e.key){
				let attribute = buttons[i].getAttribute("data-note");
				let element = buttons[i];
				element.classList.add("keyboard__btn--active");
				setTimeout(function bgcol(){element.classList.remove("keyboard__btn--active");}, 150);
				const audio = document.querySelector(`audio[data-note=${attribute}]`);
  			audio.currentTime = 0;
  			audio.play();
  			let chbox = document.getElementById("slideThree");
				if(chbox.checked){
					audio.volume = 1;
				}
				else{
					audio.volume = 0;
				}
			}
		}
};


window.addEventListener("keydown", callback);