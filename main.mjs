/**
 * 
 * 
 * 
 * 
 * When the user press the [ Add or Remove ] Btn from a product then
 * 
 * INFO: 
 * 1: variables
 * 2: functions
 * 3: events
 * 
 * TODO: 
 * The user will not be able to drag the images.
 * 
 * FIXME:
 * Tab in the catogories images 
 * 
 * 
 * 
 * READY:
 * Make the menu disappear when user scroll down, and appear when user scroll up.
 * Make the header_options .options a object and for loop it in the HTML
*/

// Imports
import websiteObjects from "./js/websiteObjects.mjs";

/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+ VARIABLES +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
*/

// ----------------------------------------------------------[ Options ]---[ 1 ]
const optionsHeader = document.querySelector('#optionsHeader');
const menuOptions = websiteObjects[0].menuOptionsObject;

// -------------------------------------------------------[ Categories ]---[ 1 ]
const categoriesList = document.querySelector('#categoriesList');
const categoriesObject = websiteObjects[0].categoriesObject;

// ---------------------------------------------[ Categories Container ]---[ 1 ]
const categoriesContainer = document.querySelector('#categoriesContainer');
const productsObject = websiteObjects[0].productsObject[0];

// --------------------------------------------------[ Category Donuts ]---[ 1 ]
let productDonutCurrentCountSize = 0;


// -----------------------------------------------------[ Swipe images ]---[ 1 ]
const storeImagesObject = websiteObjects[0].storeImagesObject;

const sliderButtonsContainer = document.querySelector('#sliderButtonsContainer');
let sliderButtonNumber = 1;

const innerImagesContainer = document.querySelector('#innerImagesContainer');



/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+ WINDOW SCROLL FUNCTION -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
 * 1. If the user scroll down then the header disappears from the screen
 * 2. If the user scroll up then the header appears in the screen
*/

const headerElement = document.querySelector('#header');
let usersLastKnownPosition = 0;
let windowScrollPosition = 0;

/** -----------------------------------------------------------[ Event ]---[ 3 ]
 *  When event scroll triggered
 *      Menu
 *          If the users window scroll Y position is less than 470
 *              - remove class hidden
 *                  * make the menu stays in position
 *          If the users window scroll Y position is less than usersLastKnownPosition 
 *              - remove class hidden 
 *              + add class visible 
 *          If the users window scroll Y position is more than usersLastKnownPosition
 *              - remove class visible
 *              + add class hidden
 *      
 *      Categories
 *          If the users window scroll Y position is less than endMenuPosition
 *              + change the translateY value from categoriesList div to window scroll Y position
 *          If the users window scroll Y position is more than endMenuPosition
 *              + change the translateY value from categoriesList div to endMenuPosition
 *                  * In the bottom
 *   
*/
document.addEventListener('scroll', () => {
    windowScrollPosition = window.scrollY;

    // Menu
    if(windowScrollPosition <= 470){
        headerElement.classList.remove('hidden');
    }
    else if (windowScrollPosition <= usersLastKnownPosition) {
        usersLastKnownPosition = windowScrollPosition;
        headerElement.classList.remove('hidden');
        headerElement.classList.add('visible');
    }
    else if (windowScrollPosition >= usersLastKnownPosition) {
        usersLastKnownPosition = windowScrollPosition;
        headerElement.classList.remove('visible');
        headerElement.classList.add('hidden');
    }

    // Categories div
    let endMenuPosition = 445 - categoriesList.offsetHeight;
    if(windowScrollPosition <= endMenuPosition) {
        categoriesList.style.transform = `
            translateY(${windowScrollPosition}px)
        `;
    }
    else if(windowScrollPosition >= endMenuPosition){
        categoriesList.style.transform = `
            translateY(${endMenuPosition}px)
        `;
    }
});



/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+ CONTENT TO HTML +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
 * All the code below displays in the html
*/

/** ----------------------------------------------------------[ Options ]---[ 2 ]
 *  For each item in menuOptions
 *      In optionsHeader
 *          + add button
 *              + add class
 *              + add context
*/
menuOptions.forEach(i => {
    optionsHeader.innerHTML += `
        <button class="options">
            <span class="${i.underclass}">
            </span>
            <span class="text">
                ${i.name}
            </span>
        </button>
    `;
});


/** -------------------------------------------------------[ Categories ]---[ 2 ]
 * 
 *  For each item in the categoriesObject
 *      In categoriesList
 *          + add button
 *              + add class category_button
 *              + add context category name
 * 
*/
categoriesObject.forEach(i => {
    categoriesList.innerHTML += `
        <button class="category_button">${i.name}</button>
    `;
});

/** ---------------------------------------------[ Categories Container ]---[ 2 ]
 * TODO:
*/
for(let i = 0; i < categoriesObject.length; i++) { 
    let categoryName = categoriesObject[i].name.toLowerCase().replace(/\s/g, ''); // Remove the spaces and make the text Lowercase
    
    if(i % 2) {
        categoriesContainer.innerHTML += `
            <div class="categories_content_container">
                <img class="categories_image_right" src="${categoriesObject[i].mainPicture[0].imageUrl}" alt="${categoriesObject[i].mainPicture[0].alt} width="100" height="100">
                <div class="categories_left_side_container" id="${categoryName}_SideContainer"></div>
            </div>
        `;
    }
    else {
        categoriesContainer.innerHTML += `
            <div class="categories_content_container">
                <img class="categories_image_left"src="${categoriesObject[i].mainPicture[0].imageUrl}" alt="${categoriesObject[i].mainPicture[0].alt} width="100" height="100"">
                <div class="categories_right_side_container" id="${categoryName}_SideContainer"></div>
            </div>
        `;
    }
}

/** --------------------------------------------------[ Category Donuts ]---[ 2 ]
 * TODO:
*/
const categoriesSidesContainers = document.querySelector('#donut_SideContainer');
for(let i = 0; i < productsObject.donuts.length; i++) {
    categoriesSidesContainers.innerHTML += `
        <section id="productDonut${i}">
            <div class="inner_product_image_container" id="innerDonutProductImageContainer${i}" ></div>

            <div class="product_images_container">
              <div class="product_images_slider_buttons">

                <button class="slider_button">
                    Previous
                    <span class="left_button" id="previousDonutImageArrow${i}"></span>
                </button>

                <button class="slider_button">
                    Next
                    <span class="right_button" id="nextDonutImageArrow${i}""></span>
                </button>

              </div>

              <div class="product_info_container">
                <div class="product_title_and_price">
                    <span class="title">Chocolate Donut Special</span>
                    <span class="price">12kr</span>
                </div>

                <div class="product_amount_container">
                    <button class="product_button" id="decreaseDonutProductAmountButton${i}">
                        Decrease amount
                        <span class="minus_button_icon" id="decreaseDonutAmountIcon${i}"></span>
                    </button>

                    <input type="number" id="currentDonutProductAmount${i}" value="0">

                    <button class="product_button" id="increaseDonutProductAmountButton${i}">
                        Increase amount
                        <span class="plus_button_icon" id="increaseDonutAmountIcon${i}"></span>
                    </button>

                    <button class="product_button" id="donutAddToCartButton${i}">
                        Add to card
                        <span class="add_to_cart_button_icon" id="addToCartIcon${i}"></span>
                    </button>
                </div>
                
              </div>

            </div>
            
        </section> 
    `;

    let productDonutId = document.querySelector(`#innerDonutProductImageContainer${i}`);
    
    for(let j = 0; j < productsObject.donuts[i].images.length; j++) {
        productDonutId.innerHTML += `
            <img class="donut_product" src="${productsObject.donuts[i].images[j].imageUrl}" alt="${productsObject.donuts[i].images[j].alt}" width="100" height="100"> 
        `;
    }
}

productsObject.donuts.forEach(i => {
    let previousDonutImageArrowId = document.querySelector(`#previousDonutImageArrow${productDonutCurrentCountSize}`); 
    let nextDonutImageArrowId = document.querySelector(`#nextDonutImageArrow${productDonutCurrentCountSize}`); 
    let currentDonutProductAmountId = document.querySelector(`#currentDonutProductAmount${productDonutCurrentCountSize}`); 
    let decreaseDonutProductAmountButtonId = document.querySelector(`#decreaseDonutProductAmountButton${productDonutCurrentCountSize}`); 
    let increaseDonutProductAmountButtonId = document.querySelector(`#increaseDonutProductAmountButton${productDonutCurrentCountSize}`); 
    let donutAddToCartButtonId = document.querySelector(`#donutAddToCartButton${productDonutCurrentCountSize}`); 

    previousDonutImageArrowId.addEventListener('click', previousProductImage);
    nextDonutImageArrowId.addEventListener('click', nextProductImage);
    currentDonutProductAmountId.addEventListener('change', onChangeProductInput);
    decreaseDonutProductAmountButtonId.addEventListener('click', decreaseProductAmount);
    increaseDonutProductAmountButtonId.addEventListener('click', increaseProductAmount);
    donutAddToCartButtonId.addEventListener('click', onClick);

    productDonutCurrentCountSize++;
});

// TEST FUNCTION REMOVE ME LATER
function onClick(e) {
    console.dir(e);
}

// NextImage
function nextProductImage(e) {
    let buttonId = e.target.id;
    let buttonNumberId = Number((buttonId).replace(/\D/g, ""));


    if(buttonId.toLowerCase().includes('donut')) {
        let productDonutId = document.querySelector(`#innerDonutProductImageContainer${buttonNumberId}`);
        let donutProductCurrentImageNumberId = productsObject.donuts[buttonNumberId].imagePosition;
        let imagesLenght = productsObject.donuts[buttonNumberId].images.length;

        if(donutProductCurrentImageNumberId < imagesLenght) {
            productDonutId.style.transform = `
                translateX(-${donutProductCurrentImageNumberId * 100}%)
            `;
            productsObject.donuts[buttonNumberId].imagePosition++;
        }
        else {
            productDonutId.style.transform = `
                translateX(${0}%)
           `;
           productsObject.donuts[buttonNumberId].imagePosition = 1;
        }
    }
}

function previousProductImage(e) {
    let buttonId = e.target.id;
    let buttonNumberId = Number((buttonId).replace(/\D/g, ""));


    if(buttonId.toLowerCase().includes('donut')) {
        let productDonutId = document.querySelector(`#innerDonutProductImageContainer${buttonNumberId}`);
        let donutProductCurrentImageNumberId = productsObject.donuts[buttonNumberId].imagePosition;
        let imagesLenght = productsObject.donuts[buttonNumberId].images.length;
        
        if(donutProductCurrentImageNumberId == 1) {
            productDonutId.style.transform = `
                translateX(-${(imagesLenght - 1) * 100}%)
            `;

            productsObject.donuts[buttonNumberId].imagePosition = imagesLenght;
        }
        else if(donutProductCurrentImageNumberId > 0 && donutProductCurrentImageNumberId <= imagesLenght) {
            productDonutId.style.transform = `
                translateX(-${(donutProductCurrentImageNumberId - 2) * 100}%)
            `;
            productsObject.donuts[buttonNumberId].imagePosition--;
        }
    }
}

// Update input price from btns
function updateInputValueNumber(inputId, currentValue) {
    let currentDonutProductAmountId = document.querySelector(`#currentDonutProductAmount${inputId}`);

    if(currentValue > Number(currentDonutProductAmountId.value)) {
        currentDonutProductAmountId.value = Number(currentDonutProductAmountId.value) + 1;
    }
    else if(currentValue < Number(currentDonutProductAmountId.value)) {
        currentDonutProductAmountId.value = Number(currentDonutProductAmountId.value) - 1;
    }
}

// Input
function onChangeProductInput(e){
    let inputChangedId = e.target.id;
    let inputNumberId = Number((inputChangedId).replace(/\D/g, ""));

    let currentDonutProductAmountId = document.querySelector(`#currentDonutProductAmount${inputNumberId}`);

    if(inputChangedId.toLowerCase().includes('donut')) {
        if(currentDonutProductAmountId.value < 1) {
            currentDonutProductAmountId.value = 0;
            return;
        }
        productsObject.donuts[inputNumberId].amount = Number(currentDonutProductAmountId.value);
    }
}

// + 
function increaseProductAmount(e) {
    let buttonPressedId = e.target.id;
    let currentValue = 0;

    let buttonNumberId = Number((buttonPressedId).replace(/\D/g, ""));

    if(buttonPressedId.toLowerCase().includes('donut')) {
        currentValue = (productsObject.donuts[buttonNumberId].amount += 1);
    }

    updateInputValueNumber(buttonNumberId, currentValue); 
}

// -
function decreaseProductAmount(e) { 
    let buttonPressedId = e.target.id;
    let currentValue = 0;

    let buttonNumberId = Number((buttonPressedId).replace(/\D/g, ""));

    if(buttonPressedId.toLowerCase().includes('donut')) {
        if(productsObject.donuts[buttonNumberId].amount < 1) return;
        currentValue = (productsObject.donuts[buttonNumberId].amount -= 1);
    }

    updateInputValueNumber(buttonNumberId, currentValue); 
}



/** -----------------------------------------------------[ Swipe images ]---[ 2 ]
 *
 *  Image(s)
 * 
 *  For each item in the storeImagesObject
 *      + add a new div inside innerImagesContainer
 *          + add the class "Slide_image"
 *          + add style
 *      + change the width of innerImagesContainer depending of storeImagesObject lenght
 * 
 *  Button(s)
 * 
 *  For each item in the storeImagesObject
 *      If sliderButtonNumber is 1 then
 *          + add a button
 *              + add class "checked"
 *              + add id
 *              + add context
 *      If sliderButtonNumber is not 1 then
 *          + add a button
 *              + add class "unchecked"
 *              + add id
 *              + add context
 * 
*/ 
// Image(s)
storeImagesObject.forEach(i => {
    innerImagesContainer.innerHTML += `
    <div 
        class="slide_image" 
        style=" width: ${(100 / storeImagesObject.length)}%; background-image: url(${i.imageUrl});"
    >
    </div>`;
    innerImagesContainer.style.width = `${(storeImagesObject.length * 100)}%`;
});

// Button(s)
storeImagesObject.forEach(i => {
    if(sliderButtonNumber == 1) {
        sliderButtonsContainer.innerHTML += `
        <button class="checked" id="sliderButton${sliderButtonNumber}">
            Slide image button ${sliderButtonNumber}
        </button>
        `;
    }
    else {
        sliderButtonsContainer.innerHTML += `
        <button class="unchecked" id="sliderButton${sliderButtonNumber}">
            Slide image button ${sliderButtonNumber}
        </button>
        `;
    }  
    sliderButtonNumber++;
});



/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+- SWIPE IMAGE ON CLICK +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
 * 1. When the user click in slide image button then the event will be triggered
 * 2. The function will check which button has been clicked and change the 
 *    transform: translateX from inner_images_container
*/

const storeSlideImageButton = document.querySelectorAll('.slider_buttons_container button');
let storeSwipeImagesOldButtonNumberId = 1;
let swipeStoreImageXposition = 0;
let increaseDecreaseStoreImageValue = Number((100 / storeImagesObject.length));

let autoScrollStoreImage = 5 * 1000;

/** ------------------------------------------------------[ Swipe image ]---[ 3 ]
 *  
 *  For each storeSlideImageButton
 *      + add a eventListener who trigger with click
 *          on click
 *              + run swipeImage function
 *        
 * 
 *  If any button in storeSlideImageButton has been clicked then
 *      If buttonNumberId is 1
 *          If buttonNumberId and storeSwipeImagesOldButtonNumberId is alike then
 *                  - return
 *              Otherwise set
 *                  + change swipeStoreImageXposition to 0
 *                  + change the Xposition from innerImagesContainer to 0%
 *                  + toggle the toggleCheckUncheck
 *          If buttonNumberId is bigger than storeSwipeImagesOldButtonNumberId or 
 *          less than storeSwipeImagesOldButtonNumberId
 *              + change the Xposition from innerImagesContainer
 *              + toggle the toggleCheckUncheck
 *          In the end
 *              + change storeSwipeImagesOldButtonNumberId to the new buttonNumberId
 * 
 *  Auto Scroll
 *      Check the image position
 *          If the old position is not same as the lenght of button 
 *              + change to next picture
 *          If the old position is same as the lenght of button
 *              + set the old position to 1
 *              + change to the first image
 *
 *      For each button
 *          If button id is the same as old position
 *              + add class "checked"
 *          If button id is not the same as old position
 *              + add class "unchecked" 
 *  
*/
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

    if(buttonNumberId == 1) {
        if(buttonNumberId == storeSwipeImagesOldButtonNumberId) return;
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
    if (storeSwipeImagesOldButtonNumberId !== storeImagesObject.length){
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
        if( Number((i.id).replace(/\D/g, "")) == storeSwipeImagesOldButtonNumberId ){
            i.className = 'checked';
        }
        else {
            i.className = 'unchecked';
        }
    });    
}, autoScrollStoreImage); 




