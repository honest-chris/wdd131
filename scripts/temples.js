console.log("Temples JS loaded");

// Footer dates
document.getElementById("currentyear").textContent = 
  new Date().getFullYear();

document.getElementById("last-modified").textContent =
    "Last Modification: " + document.lastModified;

// Hamburger menu
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = 
  navMenu.classList.contains("open") ? "X" :"☰";
});
