let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let timerResult = document.querySelector("#timer_result");
let txtResult = document.createElement("p");
timerResult.after(txtResult);

let timeNewYear = new Date("December 31 2018 23:59");

let time = 0;
let timer = {};


class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = start;
        this.stopTime = stop;
        this.interval = interval;
    };
    start() {
        timer = setInterval(function () {
            time++;
            timerResult.textContent = time;
        }, 1000);
        this.startTime = time;
    };

    stop() {
        clearInterval(timer);
        this.stopTime = time;
        let someRes = Math.floor(this.stopTime - this.startTime);
        this.interval = someRes;

    };

    getTime() {
        console.log(this.interval);
    };

    static timeToNY() {
        let today = new Date();
        let leftTime = timeNewYear.getTime() - today.getTime();
        let leftDate = Math.floor(leftTime / 86400000);

        return leftDate;
    };

}

let time1 = new Timer(10, 15, 5);
let time2 = new Timer(16, 20, 4);
let time3 = new Timer(21, 25, 4);

let stopwatch = new Timer();

startButton.addEventListener('click', startWatchTime);
stopButton.addEventListener('click', stopWatchTime);


function startWatchTime() {
    stopwatch.start();
};

function stopWatchTime() {
    stopwatch.stop();
    stopwatch.getTime();
    txtResult.textContent = `До Нового Года осталось ${Timer.timeToNY()} дней!`;
};