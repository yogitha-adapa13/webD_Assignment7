// Constants
const timeDisplay = document.getElementById('time-display');
const datePicker = document.getElementById('date-picker');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

let running = false;
let intervalId;
let startTime = 0;


function updateTimeDisplay() {
    const elapsed = Date.now() - startTime;
    const time = new Date(elapsed);
    const hours = time.getUTCHours().toString().padStart(2, '0');
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Event listeners
startButton.addEventListener('click', () => {
    if (!running) {
        if (startTime === 0) {
            startTime = Date.now();
        }
        intervalId = setInterval(updateTimeDisplay, 1000);
        running = true;
    }
});

stopButton.addEventListener('click', () => {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    running = false;
    startTime = 0;
    timeDisplay.textContent = '00:00:00';
});


updateTimeDisplay();
datePicker.valueAsDate = new Date();


window.addEventListener('load', () => {
    clearInterval(intervalId);
    running = false;
    startTime = 0;
    timeDisplay.textContent = '00:00:00';
});
