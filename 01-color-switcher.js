const startButton = document.querySelector('[data-start]');
        const stopButton = document.querySelector('[data-stop]');
        let intervalId;

        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        startButton.addEventListener('click', () => {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    document.body.style.backgroundColor = getRandomHexColor();
                }, 1000);
            }
        });

        stopButton.addEventListener('click', () => {
            clearInterval(intervalId);
            intervalId = null;
        });
    </script>
</body>
</html>
