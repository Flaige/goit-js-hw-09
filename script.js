function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let colorInterval = null;

startButton.addEventListener('click', () => {
    startButton.disabled = true;

    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(colorInterval);

    startButton.disabled = false;
});
