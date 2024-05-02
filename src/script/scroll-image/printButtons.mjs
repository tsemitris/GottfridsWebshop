import { websiteObjects } from "../../../js/websiteObjects.mjs";

const storeImagesObject = websiteObjects[0].storeImagesObject;

const sliderButtonsContainer = document.querySelector('#sliderButtonsContainer');
let sliderButtonNumber = 1;

export default function printScrollImageButtons() {

    storeImagesObject.forEach(() => {
        const scrollButton = document.createElement('button');
        sliderButtonNumber == 1 ? scrollButton.classList.add('checked') : scrollButton.classList.add('unchecked');
        scrollButton.id = `sliderButton${sliderButtonNumber}`;
        scrollButton.innerText = `Slide image button ${sliderButtonNumber}`;

        sliderButtonsContainer.appendChild(scrollButton);

        sliderButtonNumber++;
    });
}