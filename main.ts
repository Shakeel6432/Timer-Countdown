// Timer Countdown

function* countdownTimer(seconds: number) {
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}

let timerIterator = countdownTimer(5);

function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        console.log(result.value);
        setTimeout(displayCountdown, 1000);
    } else {
        console.log("Countdown Complete!");
    };
};

displayCountdown();