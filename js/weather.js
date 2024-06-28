const API_KEY = "7b5388e4ed86e54aa719e75a5bb64a48";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      console.log(data);
      weather.innerText = `${data.weather[0].main} / ${data.main["temp"]}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you! No weahter for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
