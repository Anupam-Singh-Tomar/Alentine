// Elements 
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const noPopup = document.getElementById("no-popup");

let noClickedOnce = false;

// Open envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// First NO click → popup
noBtn.addEventListener("click", () => {
    if (!noClickedOnce) {
        noClickedOnce = true;
        noPopup.style.display = "flex";

        // Hide after 3 sec
        setTimeout(() => {
            noPopup.style.display = "none";
        }, 3000);
    }
});

// After that → NO runs away but stays on screen
noBtn.addEventListener("mouseover", () => {
    if (noClickedOnce) {
        const btnRect = noBtn.getBoundingClientRect();
        const padding = 20;

        const maxX = window.innerWidth - btnRect.width - padding;
        const maxY = window.innerHeight - btnRect.height - padding;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        noBtn.style.transition = "all 0.25s ease";
    }
});

// YES click
yesBtn.addEventListener("click", () => {
    title.textContent = "You're mine now 😏";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
});
