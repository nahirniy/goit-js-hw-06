const loginForm = document.querySelector(".login-form");

function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const { email: userEmail, password: userPassword } = form.elements;
    if (userEmail.value !== "" && userPassword.value !== "") {
        const dataUser = {
            email: userEmail.value,
            password: userPassword.value,
        };
        console.log(dataUser);
        form.reset();
    } else {
        alert("All fields must be filled!");
    }
}

loginForm.addEventListener("submit", onSubmit);
