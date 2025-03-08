const images = [
    "01.png",
    "02.png",
    "03.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];


// js에서 html element 생성하기
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);