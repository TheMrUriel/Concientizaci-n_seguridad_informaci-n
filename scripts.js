document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeButton = document.getElementById("toggle-theme");
  const body = document.body;

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.className = currentTheme;
  }

  toggleThemeButton.addEventListener("click", function () {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "");
    } else {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  });

  const parallaxContainer = document.querySelector(".parallax-container");

  window.addEventListener("scroll", function () {
    const offset = window.pageYOffset;
    parallaxContainer.style.backgroundPositionY = offset * 0.7 + "px";
  });
});
