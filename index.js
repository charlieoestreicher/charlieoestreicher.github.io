// Hide nav bar while scrolling

var prevScrollpos = window.scrollY;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var topribbons = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    topribbons.style.top = "0px";
  } else {
    topribbons.style.top = "-50px";
  }
  if (currentScrollPos > 100) {
    topribbons.classList.add("scrolled");
  } else {
    topribbons.classList.remove("scrolled");
  }
  topribelsList.forEach((topribels) => {
    if (currentScrollPos < 100) {
      topribels.style.marginTop = "20px";
    } else {
      topribels.style.marginTop = "5px";
    }
    topribels.classList.add("smooth-transition");
  });
  prevScrollpos = currentScrollPos;
};

// Get the arrow element
const scrollArrow = document.querySelector(".scroll-down");
const topribels = document.getElementById("topribels");
const topribelsList = document.querySelectorAll("#topribels");
// Define the scroll position at which you want the arrow to start fading out
const fadeOutScrollPosition = 530; // Replace 200 with the desired scroll position in pixels

// Function to handle the scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  // If the scroll position is greater than or equal to the fadeOutScrollPosition, hide the arrow
  var opacity = 1 - scrollPosition / fadeOutScrollPosition;
  scrollArrow.style.opacity = opacity;

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

document
  .getElementById("contact-content-sayhello-button")
  .addEventListener("click", function () {
    var hiddenForm = document.getElementById("contact-content-hidden-form");
    var fadeButton = document.getElementById("contact-content-sayhello-button");
    fadeButton.classList.add("hidden");
    if (!hiddenForm.classList.contains("fade-in")) {
      // If the paragraph is hidden, show it with a fade-in effect
      hiddenForm.classList.remove("hidden");
      hiddenForm.classList.add("fade-in");
    }
    setTimeout(function () {
      fadeButton.remove();
    });
  });

// Function to handle the click event on the scroll arrow
function scrollToSection() {
  // Replace "section2" with the ID of the section you want to scroll to
  const sectionToScroll = document.getElementById("about");

  // Calculate the offset to scroll to the section
  const offset = sectionToScroll.getBoundingClientRect().top + window.scrollY;

  // Use smooth scrolling behavior to scroll to the section
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

// Add a click event listener to the scroll arrow
scrollArrow.addEventListener("click", scrollToSection);
