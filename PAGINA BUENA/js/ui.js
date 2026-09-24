// Modulo de interfaz: actualiza textos, animaciones y recompensa.
window.CounterUI = {
  updateCounter(element, value) {
    element.textContent = value;
  },

  animateCounter(element) {
    element.classList.remove("pop");
    void element.offsetWidth;
    element.classList.add("pop");
  },

  showReward(rewardElement, rewardTextElement, value) {
    rewardTextElement.textContent = `Has alcanzado ${value} clicks. ¡Sigue así!`;
    rewardElement.hidden = false;
  },

  hideReward(rewardElement) {
    rewardElement.hidden = true;
  },

  updateMessage(messageElement, value) {
    if (value === 0) {
      messageElement.textContent = "¡Haz tu primer click!";
      return;
    }

    const remaining = 5 - (value % 5);
    messageElement.textContent = remaining === 5
      ? "¡Nueva meta alcanzada! 🎉"
      : `Te faltan ${remaining} click${remaining === 1 ? "" : "s"} para la próxima recompensa.`;
  }
};
