document.getElementById("sayhi").addEventListener("click", function () {
  var hiddenForm = document.getElementById("form-container");
  var fadeButton = document.getElementById("sayhi");
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
