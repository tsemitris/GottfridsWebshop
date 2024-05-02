import { websiteObjects } from "../../../js/websiteObjects.mjs";

const categoriesList = document.querySelector('#categoriesList');
const categoriesObject = websiteObjects[0].categoriesObject;

export default function printCategories() {

    document.addEventListener('scroll', () => {
        let endMenuPosition = 445 - categoriesList.offsetHeight;
        if (windowScrollPosition <= endMenuPosition) {
            categoriesList.style.transform = `
                translateY(${windowScrollPosition}px)
            `;
        }
        else if (windowScrollPosition >= endMenuPosition) {
            categoriesList.style.transform = `
                translateY(${endMenuPosition}px)
            `;
        }
    });

    categoriesObject.forEach(i => {

        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category_button');
        categoryButton.innerText = `${i.name}`;

        categoriesList.appendChild(categoryButton);
    });
}