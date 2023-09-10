const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");
let counter = 0;

function onClick(e) {
    if (e.currentTarget === decrementBtn) {
        counter -= 1;
    } else {
        counter += 1;
    }
    return (spanValue.textContent = counter);
}

decrementBtn.addEventListener("click", onClick);
incrementBtn.addEventListener("click", onClick);
