const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; // 25 minutos em segundos
let interval;
let isRunning = false;

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);
  timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
};

const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
        clearInterval(interval);
        isRunning = false;
        alert("Acabou o Tempo");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(interval);
  isRunning = false;
};

const resetTimer = () => {
  clearInterval(interval);
  isRunning = false;
  timeLeft = 1500;
  updateTimer();
};

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

// Inicializa o timer com o valor padrão
updateTimer();
