const userName = document.querySelector("#name-input");
const showUserName = document.querySelector("#name-output");

function onInput(e) {
    const inputName = e.currentTarget.value.trim();

    if (!(inputName === "")) {
        showUserName.textContent = inputName;
    } else {
        showUserName.textContent = "Anonymous";
    }
}

userName.addEventListener("input", onInput);
