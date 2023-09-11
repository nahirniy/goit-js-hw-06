const sliderFontSize = document.querySelector("#font-size-control");
const showTextSize = document.querySelector("#text");

function onInput() {
    showTextSize.style.fontSize = `${sliderFontSize.value}px`;
}
onInput();

sliderFontSize.addEventListener("input", onInput);
