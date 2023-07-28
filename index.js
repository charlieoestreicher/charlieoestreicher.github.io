// Hide nav bar while scrolling
/*
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  if (prevScrollpos > currentScrollPos) {
    var topribbons = document.getElementById("navbar");
    topribbons.style.top = "0px";
  } else {
    var topribbons = document.getElementById("navbar");
    topribbons.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
*/

// Get the arrow element
const scrollArrow = document.querySelector(".scroll-down");

// Define the scroll position at which you want the arrow to start fading out
const fadeOutScrollPosition = 530; // Replace 200 with the desired scroll position in pixels

// Function to handle the scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);

  // Calculate the opacity based on the scroll position
  const opacity = 1 - scrollPosition / fadeOutScrollPosition;

  // Update the arrow's opacity
  scrollArrow.style.opacity = opacity;

  // If the scroll position is greater than or equal to the fadeOutScrollPosition, hide the arrow
  if (scrollPosition >= fadeOutScrollPosition) {
    scrollArrow.style.display = "none";
  } else {
    scrollArrow.style.display = "block";
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);

// Call the handleScroll function on page load to set the initial opacity
handleScroll();
