const counterText = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease-button");
const resetBtn = document.getElementById("reset-button");
const increaseBtn = document.getElementById("increase-button");
let count = 0;

counterText.textContent = count;

decreaseBtn.onclick = () => {
  count--;
  counterText.textContent = count;
};

increaseBtn.onclick = () => {
  count++;
  counterText.textContent = count;
};

resetBtn.onclick = () => {
  count = 0;
  counterText.textContent = count;
};
