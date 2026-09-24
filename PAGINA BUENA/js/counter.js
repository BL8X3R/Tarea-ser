// Modulo del contador. No usa import/export para que funcione
// incluso al abrir index.html directamente desde el explorador.
window.ClickCounter = class ClickCounter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value += 1;
    return this.value;
  }

  reset() {
    this.value = 0;
    return this.value;
  }

  isMilestone() {
    return this.value > 0 && this.value % 5 === 0;
  }
};
