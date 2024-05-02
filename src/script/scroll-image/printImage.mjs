import { websiteObjects } from "../../../js/websiteObjects.mjs";
import printScrollImageButtons from "./printButtons.mjs";
import imageSlider from "./swipeFunction.mjs";

const storeImagesObject = websiteObjects[0].storeImagesObject;
const innerImagesContainer = document.querySelector('#innerImagesContainer');

export default function printScrollImage() {

    storeImagesObject.forEach(i => {

        const slideImage = document.createElement('div');
        slideImage.classList.add('slide_image');
        slideImage.style = `width: ${(100 / storeImagesObject.length)}%; background-image: url(${i.imageUrl});`;

        innerImagesContainer.appendChild(slideImage);
        innerImagesContainer.style.width = `${(storeImagesObject.length * 100)}%`;
    });

    printScrollImageButtons();
    imageSlider();
}




