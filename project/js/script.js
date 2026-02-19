document.addEventListener("DOMContentLoaded", () => {

  // 1. Dynamic Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Theme System (Clean Implementation)
  const toggle = document.getElementById("darkModeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (toggle && savedTheme === "dark") {
      toggle.textContent = "☀️ Light Mode";
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        toggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        toggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // 3. Utility Calculator
  const form = document.querySelector("#utilityForm");
  const resultsDiv = document.querySelector("#results");
  const previousDiv = document.querySelector("#previous");

  const utilityRates = {
    electricity: 60,
    water: 30,
    fuel: 850
  };

  const calculationHistory = JSON.parse(localStorage.getItem("history")) || [];

  function calculateCost(electricity, water, fuel) {
    return (
      electricity * utilityRates.electricity +
      water * utilityRates.water +
      fuel * utilityRates.fuel
    );
  }

  function displayResults(total, usage) {
    const message =
      total > 50000
        ? "High usage detected. Consider reducing consumption."
        : "Your utility cost is within a reasonable range.";

    resultsDiv.innerHTML = `
      <h2>Total Estimated Utility Cost: ₦${total.toFixed(2)}</h2>
      <p>${message}</p>
      <ul>
        <li>Electricity: ${usage.electricity} kWh</li>
        <li>Water: ${usage.water} m³</li>
        <li>Fuel: ${usage.fuel} liters</li>
      </ul>
    `;
  }

  function saveHistory(entry) {
    calculationHistory.push(entry);
    localStorage.setItem("history", JSON.stringify(calculationHistory));
  }

  function loadPrevious() {
    if (calculationHistory.length > 0) {
      const historyHTML = calculationHistory
        .map(item => `
          <p>₦${item.total.toFixed(2)} — ${item.electricity}kWh, ${item.water}m³, ${item.fuel}L</p>
        `)
        .join("");

      previousDiv.innerHTML = `
        <h3>Previous Calculations</h3>
        ${historyHTML}
      `;
    }
  }

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const electricity = Number(document.querySelector("#electricity").value);
      const water = Number(document.querySelector("#water").value);
      const fuel = Number(document.querySelector("#fuel").value);

      if (electricity <= 0 || water <= 0 || fuel <= 0) {
        resultsDiv.innerHTML = `<p>Please enter values greater than zero.</p>`;
        return;
      }

      const usage = { electricity, water, fuel };
      const total = calculateCost(electricity, water, fuel);

      displayResults(total, usage);

      saveHistory({ ...usage, total });

      loadPrevious();
    });

    loadPrevious();
  }

  // 4. Tips Page (Array + Array Method)
  const tipsList = document.querySelector("#tipsList");
  if (tipsList) {
    const tips = [
      "Turn off lights when not in use.",
      "Fix leaking pipes promptly.",
      "Use energy-efficient appliances.",
      "Schedule generator maintenance regularly."
    ];

    tipsList.innerHTML = tips
      .map(tip => `<li>${tip}</li>`)
      .join("");
  }

});
