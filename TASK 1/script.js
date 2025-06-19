const words = ["Web Developer", "Software Engineer", "Web Designer", "Frontend Designer", "Cyber Security"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 150;
const eraseSpeed = 80;
const delay = 2000;

const typedTextSpan = document.getElementById("typed-text");

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // Typing mode
        charIndex++;
        typedTextSpan.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {
            // Word fully typed, pause before deleting
            setTimeout(() => {
                isDeleting = true;
                type();
            }, delay);
            return;
        }
    } else {
        // Deleting mode
        charIndex--;
        typedTextSpan.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {
            // Word deleted, move to next
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? eraseSpeed : speed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typedTextSpan) type();
});

