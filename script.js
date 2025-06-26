const endDate = new Date("12 Jan, 2026 00:00:00").getTime();
const startDate = new Date().getTime();

const input = document.querySelectorAll("input");

function updateTimer() {
  const now = new Date().getTime();

  const remaining = endDate - now;
  const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
  const hrs = Math.floor(
    (remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const mins = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
  const secs = Math.floor((remaining % (60 * 1000)) / 1000);

  input[0].value = days;
  input[1].value = hrs;
  input[2].value = mins;
  input[3].value = secs;
}

setInterval(updateTimer, 1000);
