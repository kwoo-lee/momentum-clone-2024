const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const padTime = (value) => String(value).padStart(2, "0");

  let hour = padTime(date.getHours());

  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  const min = padTime(date.getMinutes());
  const sec = padTime(date.getSeconds());
  //clock.innerText = `${hour}:${min}:${sec}`;
  clock.innerText = `${hour}:${min}`;
}

getClock();
setInterval(getClock, 1000);
