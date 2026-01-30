// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WIND CHILL CALCULATION
const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);
const windChillElement = document.querySelector("#windchill");

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}