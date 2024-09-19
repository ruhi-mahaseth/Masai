let timer;
let remainingTime;
let isPaused = false;

const display = document.getElementById('time');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Format the time to MM:SS
function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update the display
function updateDisplay(minutes, seconds) {
    display.textContent = formatTime(minutes, seconds);
}

// Countdown function
function countdown() {
    if (remainingTime <= 0) {
        clearInterval(timer);
        updateDisplay(0, 0);
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = true;
        return;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    updateDisplay(minutes, seconds);
    remainingTime--;
}

// Start the timer
startButton.addEventListener('click', function() {
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;

    remainingTime = minutes * 60 + seconds;
    updateDisplay(minutes, seconds);

    timer = setInterval(countdown, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
});

// Pause the timer
pauseButton.addEventListener('click', function() {
    if (isPaused) {
        timer = setInterval(countdown, 1000);
        pauseButton.textContent = 'Pause';
    } else {
        clearInterval(timer);
        pauseButton.textContent = 'Resume';
    }

    isPaused = !isPaused;
});

// Reset the timer
resetButton.addEventListener('click', function() {
    clearInterval(timer);
    updateDisplay(0, 0);
    minutesInput.value = '';
    secondsInput.value = '';
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    pauseButton.textContent = 'Pause';
    isPaused = false;
});