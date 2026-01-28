let duration = 60 * 60;
let timerInterval;

function startTimer() {
  const timerDisplay = document.getElementById("timer");
  let timeLeft = duration;

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = minutes + ":" + seconds;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time Over! Please submit your test.");
    }
    timeLeft--;
  }, 1000);
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (name === "") {
    alert("Please enter your full name");
    return;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  startTimer();

  setTimeout(() => {
    window.open("https://forms.gle/bsN3xSUUuQrgywvFA", "_self");
  }, 500);
});
