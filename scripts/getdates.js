// Display current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display last modified date
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;
