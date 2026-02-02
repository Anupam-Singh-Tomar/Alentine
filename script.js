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

        // Hide after 5 sec
        setTimeout(() => {
            noPopup.style.display = "none";
        }, 3000);
    }
});

// After that → NO runs away
noBtn.addEventListener("mouseover", () => {
    if (noClickedOnce) {
        const min = 200;
        const max = 400;

        const distance = Math.random() * (max - min) + min;
        const angle = Math.random() * Math.PI * 2;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// YES click
yesBtn.addEventListener("click", () => {
    title.textContent = "You're mine now 😏";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
});
