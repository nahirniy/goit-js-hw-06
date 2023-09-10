const userName = document.querySelector("#name-input");
const showUserName = document.querySelector("#name-output");

function onInput(e) {
    const input = e.currentTarget;
    if (!(input.value === "")) {
        showUserName.textContent = input.value;
    } else {
        showUserName.textContent = "Anonymous";
    }
}

userName.addEventListener("input", onInput);
