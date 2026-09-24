// Contador de clicks
const GOAL = 5;

let clickCount = 0;

const countElement = document.getElementById("clickCount");
const messageElement = document.getElementById("message");
const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");

// Cada click aumenta el contador.
clickButton.addEventListener("click", () => {
  clickCount++;

  countElement.textContent = clickCount;

  // Mostrar felicitación cada 5 clicks.
  if (clickCount % GOAL === 0) {
    const milestones = clickCount / GOAL;
    const plural = milestones === 1 ? "vez" : "veces";

    messageElement.textContent =
      `🎉 ¡Felicidades! Has alcanzado ${milestones} ${plural} la meta de 5 clicks.`;

    messageElement.classList.add("is-visible");
  }
});

// Reiniciar contador.
resetButton.addEventListener("click", () => {
  clickCount = 0;
  countElement.textContent = "0";
  messageElement.textContent = "";
  messageElement.classList.remove("is-visible");
});
