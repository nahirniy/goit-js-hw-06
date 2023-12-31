const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

function createItemForList(array, idList) {
    const list = document.querySelector(idList);

    const arrayElements = array.map((item) => {
        const createElement = document.createElement("li");
        createElement.textContent = item;
        createElement.classList.add("item");
        return createElement;
    });
    list.append(...arrayElements);
}

createItemForList(ingredients, "#ingredients");

// як на мене це краще вирішення проблеми, але в завданні вимагається "createElement()", тому закоментував

// const ingredients = [
//     "Potatoes",
//     "Mushrooms",
//     "Garlic",
//     "Tomatos",
//     "Herbs",
//     "Condiments",
// ];

// function createItemForList(array, idList) {
//     const list = document.querySelector(idList);
//     const itemsForList = array
//         .map((item) => `<li class="item">${item}</li>`)
//         .join("");
//     list.insertAdjacentHTML("beforeend", itemsForList);
// }

// createItemForList(ingredients, "#ingredients");
