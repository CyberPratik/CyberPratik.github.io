const words = ["Web Developer!", "Programmer!"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 150;   // Speed of typing
const erasingSpeed = 100;  // Speed of erasing
const delayBetweenWords = 2000; // Delay before typing next word

const typedText = document.getElementById("typed-text");

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

// Start typing effect on load
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, delayBetweenWords);
});
