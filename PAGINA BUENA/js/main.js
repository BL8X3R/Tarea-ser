// Punto de entrada: conecta el contador con la interfaz.
document.addEventListener("DOMContentLoaded", () => {
  const counter = new window.ClickCounter();

  const clickButton = document.querySelector("#clickButton");
  const resetButton = document.querySelector("#resetButton");
  const clickCount = document.querySelector("#clickCount");
  const rewardMessage = document.querySelector("#rewardMessage");
  const reward = document.querySelector("#reward");
  const rewardText = document.querySelector("#rewardText");

  clickButton.addEventListener("click", () => {
    const value = counter.increment();

    window.CounterUI.updateCounter(clickCount, value);
    window.CounterUI.updateMessage(rewardMessage, value);
    window.CounterUI.animateCounter(clickCount.parentElement);

    if (counter.isMilestone()) {
      window.CounterUI.showReward(reward, rewardText, value);
    }
  });

  resetButton.addEventListener("click", () => {
    counter.reset();
    window.CounterUI.updateCounter(clickCount, counter.value);
    window.CounterUI.updateMessage(rewardMessage, counter.value);
    window.CounterUI.hideReward(reward);
    window.CounterUI.animateCounter(clickCount.parentElement);
  });
});
