function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const boxControls = document.querySelector("#controls");
const createBoxBtn = document.querySelector("button[data-create]");
const deleteBoxBtn = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");
let sizeBox = 30;

function createBoxes(amount) {
    destroyBoxes();
    amount = Number(boxControls.firstElementChild.value);
    const arrayOfBox = [];
    if (amount > 0 && amount <= 100) {
        for (let i = 1; i <= amount; i += 1) {
            const styleContainer = `background-color: ${getRandomHexColor()}; width: ${sizeBox}px; height: ${sizeBox}px`;
            arrayOfBox.push(`<div style="${styleContainer}"></div>`);
            sizeBox += 10;
        }
        container.insertAdjacentHTML("beforeend", arrayOfBox.join(""));
    } else {
        alert("It must be a number between 1 and 100");
    }
}

function destroyBoxes() {
    container.innerHTML = "";
    sizeBox = 30;
}

createBoxBtn.addEventListener("click", createBoxes);
deleteBoxBtn.addEventListener("click", destroyBoxes);
