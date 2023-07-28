const scrollArrow = document.querySelector(".TryThis");

// Define the scroll position at which you want the arrow to start fading out
const fadeOutScrollPosition = 100; // Replace 200 with the desired scroll position in pixels

// Function to handle the scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Apply the fade_move_down animation based on the scroll position
  if (scrollPosition < fadeOutScrollPosition) {
    // Calculate the opacity based on the scroll position
    const opacity = 1 - scrollPosition / fadeOutScrollPosition;
    scrollArrow.style.opacity = opacity;
  } else {
    scrollArrow.style.opacity = "0"; // Fully fade out the arrow
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);

// Call the handleScroll function on page load to set the initial opacity
handleScroll();
