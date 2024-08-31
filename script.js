 let currentAudio = null;

        function playSound(soundName) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(`sounds/${soundName}.mp3`);
            currentAudio.play();
        }

        function handleButtonClick(event) {
            const button = event.target;
            if (button.classList.contains('btn')) {
                const soundName = button.getAttribute('data-sound');
                playSound(soundName);
            } else if (button.classList.contains('stop')) {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
            }
        }

        document.getElementById('buttons').addEventListener('click', handleButtonClick);