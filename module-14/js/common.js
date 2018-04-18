(function main(){

	const startButton = document.getElementById("start");
	const stopButton = document.getElementById("stop");
	const time = document.getElementById("time");

	function Clock(){
		this.timeNow = function(){
			let today = new Date();
			let hours = today.getHours();
			let minutes = today.getMinutes();
			let seconds = today.getSeconds();
			time.textContent = hours+" hours "+minutes+" min "+seconds+" sec";
		}

		this.start = function startClock(){
			this.startTime = new Date();
			timer = setInterval(this.timeNow,1000)
		}

		this.stop = function stopClock(){
			clearInterval(timer);
			this.stopTime = new Date();
			this.interval = Math.floor((this.stopTime - this.startTime)/1000);
		}

		Clock.prototype.st1 = this.start;
		Clock.prototype.st2 = this.stop;
	}

	let obj = new Clock;

	startButton.addEventListener("click", function(){  
 	obj.start();
 	});

 	stopButton.addEventListener("click", function(){  
 	obj.stop();
 	time.textContent = "interval = " + obj.interval + " seconds";
 	});

})();