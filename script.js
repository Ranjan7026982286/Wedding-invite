// Countdown timer to wedding
const targetDate = new Date("June 6, 2025 09:30:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    timerElement.innerHTML = "The big day is here!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hrs}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
