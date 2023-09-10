function showStatistics(idList) {
    const categoriesList = document.querySelector(idList);
    console.log(`Number of categories: ${[...categoriesList.children].length}`);

    [...categoriesList.children].forEach((item) =>
        console.log(
            `Category: ${item.firstElementChild.textContent}\nElements: ${
                [...item.lastElementChild.children].length
            }`
        )
    );
}

showStatistics("#categories");
