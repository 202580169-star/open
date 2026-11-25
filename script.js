
const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

const result = document.getElementById("result");
const instruction = document.getElementById("instruction");

const blowButton = document.getElementById("blowButton");
const restartButton = document.getElementById("restartButton");

const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

let candleReady = false;
let isBlown = false;

// Wait until the candle finishes appearing
setTimeout(() => {
    candleReady = true;
    blowButton.hidden = false;
}, 4700);

// Play or pause birthday music
musicButton.addEventListener("click", () => {
    if (birthdayMusic.paused) {
        birthdayMusic.play();
        musicButton.textContent = "Pause Music";
    } else {
        birthdayMusic.pause();
        musicButton.textContent = "Play Music";
    }
});

// Press SPACEBAR to blow out the candle
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();

        if (candleReady && !isBlown) {
            blowCandle();
        }
    }
});

// Click the button to blow out the candle
blowButton.addEventListener("click", blowCandle);

function blowCandle() {
    if (!candleReady || isBlown) return;

    isBlown = true;

    // Turn off the flame
    flame.classList.add("flame-out");

    // Show smoke
    smoke.classList.add("show-smoke");

    // Update the message
    result.textContent = "Happy Birthday! 🎉";
    instruction.textContent = "Make a wish! 💗";

    // Stop the music
    birthdayMusic.pause();

    // Hide buttons
    blowButton.hidden = true;
    musicButton.hidden = true;

    // Show restart button
    restartButton.hidden = false;

    // Create confetti
    createConfetti();
}

function createConfetti() {
    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#c77dff"];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Restart the birthday surprise
restartButton.addEventListener("click", () => {
    location.reload();
});
