// Display current year
// Footer Date Information
const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#last-modified");

// Display last modified date
yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;


// Hamburger Menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});