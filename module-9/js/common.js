const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ "
};
const keys = Object.values(lang.en);
let buttons = document.getElementsByClassName("keyboard__btn");

let notes = ["do","re","mi","fa","sol","la","la","sol","fa","mi","re","do"];
const html = document.querySelector('#menu').textContent.trim();
const compiled = _.template(html);
const result = compiled(keys);

const container = document.querySelector('body');
container.innerHTML = result;

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