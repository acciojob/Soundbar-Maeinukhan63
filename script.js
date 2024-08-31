//your JS code here. If required.
// script.js

// Create a variable to hold the currently playing audio
let currentAudio = null;

// Function to play a sound
function playSound(soundName) {
    // Stop any currently playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset playback position
    }

    // Create a new audio element
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
}

// Function to handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    if (button.classList.contains('btn')) {
        const soundName = button.getAttribute('data-sound');
        playSound(soundName);
    } else if (button.classList.contains('stop')) {
        // Stop button clicked
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset playback position
        }
    }
}

// Attach event listeners to the buttons
document.getElementById('buttons').addEventListener('click', handleButtonClick);
