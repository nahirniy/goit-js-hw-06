const numberOfSymbol = document.querySelector("#validation-input");

function onBlur(e) {
    const input = e.currentTarget;
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

numberOfSymbol.addEventListener("blur", onBlur);
