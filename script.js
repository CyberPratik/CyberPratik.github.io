// Get elements
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  const itemWidth = items[0].offsetWidth; // Get the width of one carousel item
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move carousel to current index
}

// Move to next item
nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first item
  }
  updateCarousel();
});

// Move to previous item
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Loop back to the last item
  }
  updateCarousel();
});

// Initial carousel position
updateCarousel();
