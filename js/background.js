const images = ["0.JPEG", "1.JPG", "2.JPG", "3.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const body = document.querySelector("body");
// console.log(chosenImage);
// body.style.backgroundImage = `url(img/${chosenImage})`;
// body.style.backgroundSize = "cover";
// body.style.backgroundRepeat = "no-repeat";
// body.style.backgroundPosition = "center center";

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background-image");
document.body.appendChild(bgImage);
