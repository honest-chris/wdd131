console.log("Temples JS loaded");

// Footer dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("last-modified").textContent =
    "Last Modification: " + document.lastModified;

// Hamburger menu
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});
