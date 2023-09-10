function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

function onClick() {
    colorText.textContent = getRandomHexColor();
    body.style.backgroundColor = colorText.textContent;
}

changeColorBtn.addEventListener("click", onClick);
