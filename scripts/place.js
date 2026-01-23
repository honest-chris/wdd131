// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values (Cotonou - tropical)
const temperature = 28; // °C
const windSpeed = 10;   // km/h

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp
    - 11.37 * Math.pow(speed, 0.16)
    + 0.3965 * temp * Math.pow(speed, 0.16);
}

let windChillText = "N/A";

// Only calculate if conditions are valid
if (temperature <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillText = chill.toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChillText;
