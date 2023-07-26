// Hide nav bar while scrolling
var prevScrollpos = window.scrollY;
console.log(prevScrollpos);
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    var topribbons = document.getElementById("navbar");
    topribbons.style.top = "0px";
  } else {
    var topribbons = document.getElementById("navbar");
    topribbons.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
