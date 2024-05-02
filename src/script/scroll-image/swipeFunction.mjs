import { websiteObjects } from "../../../js/websiteObjects.mjs";


export default function imageSlider() {

    const storeImagesObject = websiteObjects[0].storeImagesObject;
    const storeSlideImageButton = document.querySelectorAll('.slider_buttons_container button');
    let storeSwipeImagesOldButtonNumberId = 1;
    let swipeStoreImageXposition = 0;
    let increaseDecreaseStoreImageValue = Number((100 / storeImagesObject.length));

    let autoScrollStoreImage = 5 * 1000;


    storeSlideImageButton.forEach(i => {
        i.addEventListener('click', swipeImage);
    });

    function swipeImage(e) {
        let buttonId = e.target.id;
        let buttonNumberId = Number((buttonId).replace(/\D/g, ""));

        function toggleCheckUncheck() {
            e.target.className = 'checked';

            storeSlideImageButton.forEach(i => {
                if (i.id !== buttonId) {
                    i.className = 'unchecked';
                }
            });
        }

        if (buttonNumberId == 1) {
            if (buttonNumberId == storeSwipeImagesOldButtonNumberId) return;
            swipeStoreImageXposition = 0;
            innerImagesContainer.style.transform = 'translateX(0%)';
            toggleCheckUncheck();
        }
        else if (buttonNumberId > storeSwipeImagesOldButtonNumberId || buttonNumberId < storeSwipeImagesOldButtonNumberId) {
            innerImagesContainer.style.transform = `
                translateX(-${(buttonNumberId - 1) * increaseDecreaseStoreImageValue}%)
            `;
            toggleCheckUncheck();
        }
        storeSwipeImagesOldButtonNumberId = buttonNumberId;
    }

    setInterval(() => {
        if (storeSwipeImagesOldButtonNumberId !== storeImagesObject.length) {
            innerImagesContainer.style.transform = `
                translateX(-${(storeSwipeImagesOldButtonNumberId) * increaseDecreaseStoreImageValue}%)
            `;
            storeSwipeImagesOldButtonNumberId += 1;
        }
        else {
            storeSwipeImagesOldButtonNumberId = 1;
            innerImagesContainer.style.transform = 'translateX(0%)';
        }


        storeSlideImageButton.forEach(i => {
            if (Number((i.id).replace(/\D/g, "")) == storeSwipeImagesOldButtonNumberId) {
                i.className = 'checked';
            }
            else {
                i.className = 'unchecked';
            }
        });
    }, autoScrollStoreImage);
}