const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const padTime = (value) => String(value).padStart(2, "0");

  const hour = padTime(date.getHours());
  const min = padTime(date.getMinutes());
  const sec = padTime(date.getSeconds());
  clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
