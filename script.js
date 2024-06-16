const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let colorInterval = null;

startButton.addEventListener('click', () => {
    // Deaktywuj przycisk Start, aby nie można było go kliknąć ponownie
    startButton.disabled = true;

    // Ustaw interwał zmiany koloru tła
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    // Zatrzymaj interwał zmiany koloru
    clearInterval(colorInterval);

    // Aktywuj przycisk Start, aby można było go ponownie kliknąć
    startButton.disabled = false;
});

// Funkcja generująca losowy kolor HEX
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
