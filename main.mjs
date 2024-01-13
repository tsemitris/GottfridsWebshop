
// Imports
import { websiteObjects, cartObject } from "./js/websiteObjects.mjs";


// FIXME Set me in a interval
let today = new Date();

let options = { weekday: 'long' };
let dayOfWeek = today.toLocaleDateString('en-US', options);

let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

let hours = String(today.getHours()).padStart(2, '0');
let minutes = String(today.getMinutes()).padStart(2, '0');
let seconds = String(today.getSeconds()).padStart(2, '0');



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
    const optionName = i.name.toLowerCase();

    optionsHeader.innerHTML += `
        <button class="options" id="${optionName}Option">
            <span class="${i.underclass}"></span>
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


/** ---------------------------------------------[ Categories Container ]---[ 2 ]
 * TODO:
*/

for(let i = 0; i < categoriesObject.length; i++) { 
    let categoryName = categoriesObject[i].name.toLowerCase().replace(/\s/g, ''); // Remove the spaces and make the text Lowercase

    categoriesContainer.innerHTML += `
        <section class="products_container">
            <div class="product_inner_container" id="${categoryName}InnerContainer"></div>
        </section>
    `;

    
}

increasePriceRule();

const currentCategoryContainer = document.querySelector(`#donutInnerContainer`);   
for(let j = 0; j < productsObject.donuts.length; j++) {
    currentCategoryContainer.innerHTML += `
        <section id="donutSection${j}">
            <div class="product_images_outer_container">
                <div class="product_images_inner_container" id="innerDonutProductImageContainer${j}"></div>
            </div>

            <div class="product_images_slider_buttons">
                <button class="slider_button" id="previousDonutImageArrow${j}">
                    Previous image
                    <span class="left_button"></span>
                </button>

                <button class="slider_button" id="nextDonutImageArrow${j}">
                    Next image
                    <span class="right_button"></span>
                </button>
            </div>

            <div class="product_info_container">
                <div class="product_title_and_price">
                    <span class="title">${productsObject.donuts[j].name}</span>
                    <span class="price">${productsObject.donuts[j].price}kr</span>
                </div>

                <div class="product_add_to_cart_container">
                    <button class="product_button" id="donutAddToCartButton${j}">
                        Add to cart
                        <span class="add_to_cart_button_icon" id="addDonutToCartIcon${j}"></span>
                    </button>
                </div>
                
            </div>

        </section>
    `;

    let productDonutId = document.querySelector(`#innerDonutProductImageContainer${j}`);

    for(let k = 0; k < productsObject.donuts[j].images.length; k++) {
        productDonutId.innerHTML += `
            <img 
                class="donut_product_image"
                id="productDonut${j}Image${k}"
                src="${productsObject.donuts[j].images[k].imageUrl}"
                srcset=""
                alt="${productsObject.donuts[j].images[k].alt}" 
                width="100" 
                height="100" 
                loading="lazy"
            >
        `;

        let currentImage = document.querySelector(`#productDonut${j}Image${k}`);

        for(let l = 0; l < productsObject.donuts[j].images[k].optimizedImages.length; l++) {
            let currentAttribute = currentImage.getAttribute('srcset');
            if(currentAttribute == '') {
                currentImage.setAttribute('srcset', `${productsObject.donuts[j].images[k].optimizedImages[l].imageUrl} ${productsObject.donuts[j].images[k].optimizedImages[l].imageWidth}w`);
            }
            else {
                currentImage.setAttribute('srcset', `${currentAttribute}, ${productsObject.donuts[j].images[k].optimizedImages[l].imageUrl} ${productsObject.donuts[j].images[k].optimizedImages[l].imageWidth}w`);
            }
        }
    }
}


productsObject.donuts.forEach(i => {
    let previousDonutImageArrowId = document.querySelector(`#previousDonutImageArrow${productDonutCurrentCountSize}`); 
    let nextDonutImageArrowId = document.querySelector(`#nextDonutImageArrow${productDonutCurrentCountSize}`);  
    let donutAddToCartButtonId = document.querySelector(`#donutAddToCartButton${productDonutCurrentCountSize}`); 

    previousDonutImageArrowId.addEventListener('click', previousProductImage);
    nextDonutImageArrowId.addEventListener('click', nextProductImage);
    donutAddToCartButtonId.addEventListener('click', addProductToCart); 

    productDonutCurrentCountSize++;
});

// Next product image
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

// Previous product image
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




/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+- SHOPPNING CART / CHECKOUT CART  -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
*/

let totalPrice = 0;

// Options header variable(s) 
const cartOption = document.querySelector('#cartOption');

// Cart container variable(s)
const shoppingCartOuterContainer = document.querySelector('#shoppingCartOuterContainer');
const shoppingCartArrow = document.querySelector('#shoppingCartArrow');
const shoppingCartTitle = document.querySelector('#shoppingCartTitle');

// Checkout
let checkoutDiscountPrice = document.querySelector('#checkoutDiscountPrice');

// Options header event listener(s) 
cartOption.addEventListener('click', toggleShoppingCart);

// Cart container event listener(s)
shoppingCartArrow.addEventListener('click', toggleShoppingCart);
shoppingCartTitle.addEventListener('click', toggleShoppingCart);


function toggleShoppingCart() {
    if(!shoppingCartOuterContainer.classList.contains('open')) {
        shoppingCartOuterContainer.classList.toggle('open');
        shoppingCartArrow.classList.toggle('open');
    }
    else {
        shoppingCartOuterContainer.classList.toggle('open');
        shoppingCartArrow.classList.toggle('open');
    }
}



/**
 * This function will check the lenght of cartObject and if it is 
 * empty then it will add a paragraph with a message in it.
*/

let checkoutContainer = document.querySelector('#checkoutContainer'); 
let emptyCart = false;

// Display the message that the "cart is empty"
onEmptyCart();

checkoutContainer.addEventListener('click', (e)=> {
    if(e.target.classList[0] !== 'checkout_outer_container') return;

    checkoutContainer.classList.toggle('checkout_visible');
    document.body.style.overflow = 'auto';
});



function addProductToCart(e) {
    // Empty the cart object
    cartObject.splice(0, cartObject.length);


    let buttonId = e.target.id;
    let buttonNumberId = Number((buttonId).replace(/\D/g, ""));

    // Will add the content in the div
    if (emptyCart) {
        cartInnerContainer.innerHTML = '';
        cartInnerContainer.innerHTML += `
            <header class="cart_header">
                <p class="cart_product_flex">Product</p>
                <p class="cart_amount_flex">Amount</p>
                <p class="cart_price_flex">Price</p>
                <p class="trash_can_flex"></p>
            </header>

            <div class="cart_content">
                <ul class="cart_main" id="cartMain">
                    <!-- Products in cart -->
                </ul>
            </div>

            <div class="cart_footer">
                <span class="cart_footer_text" id="cartSubTotal">Subtotal: 0 kr</span>
                <div class="cart_footer_extra_options">
                    <button class="cart_footer_option_button" id="emptyCartButton">
                        <span class="cart_footer_icon">Trash |</span>
                        Empty
                    </button>
                </div>
                <button class="cart_footer_checkout_button" id="proceedToCheckoutButton">Proceed to checkout</button>
            </div> 
        `;
        emptyCart = false;


        let emptyCartButton = document.querySelector('#emptyCartButton');
        let proceedToCheckoutButton = document.querySelector('#proceedToCheckoutButton');
        

        emptyCartButton.addEventListener('click', () => {
            for (let i = 0; i < cartObject.length; i++) {
                cartObject[i].amount = 0;
            }
            
            cartInnerContainer.innerHTML = '';
            checkoutCartMain.innerHTML = '';
            cartObject.splice(0, cartObject.length);

            if(cartObject.length === 0) {
                if (!emptyCart) {
                    cartInnerContainer.innerHTML += ` 
                        <p class="message">Your cart is empty!</p>
                    `;
                    checkoutCartMain.innerHTML += ` 
                        <p class="message">Your cart is empty!</p>
                    `;
                    emptyCart = true;
                }
            }
        });
        proceedToCheckoutButton.addEventListener('click', toggleCheckout);
    }


    
    let cartMain = document.querySelector('#cartMain');
    let checkoutCartMain = document.querySelector('#checkoutCartMain');
    if(buttonId.toLowerCase().includes('donut')) {
        productsObject.donuts[buttonNumberId].amount += 1;
        cartObject.push(...productsObject.donuts.filter(product => product.amount > 0));
    }

    createProductContainerToCart();

    // Change the Sub total
    cartSubTotal();
}


function createProductContainerToCart() {
    let currentNumber = 0;
    cartMain.innerHTML = '';
    checkoutCartMain.innerHTML = '';

    cartObject.forEach(() => {
        // Cart
        cartMain.innerHTML += `
            <li class="product" id="cartProduct${currentNumber}">
                <img 
                    class="cart_product_image" 
                    id="cartProductImage${currentNumber}"
                    src="${cartObject[currentNumber].images[0].imageUrl}"
                    srcset="" 
                    alt="${cartObject[currentNumber].images[0].alt}" 
                    width="100" 
                    height="100" 
                    loading="lazy"
                >
                <div class="product_info_container">
                <div class="product_cart_info_container product_cart_title_and_price cart_product_flex">
                        <div class="product_cart_title_container">
                            <span class="product_cart_title">${cartObject[currentNumber].name}</span>
                        </div>
                        <div class="product_cart_price_container">
                            <span class="product_cart_price">${cartObject[currentNumber].price} kr / pcs</span>
                        </div>
                </div>
                <div class="product_cart_info_container cart_amount_flex">
                        <div class="cart_amount_buttons_and_label">
                            <button class="decrease_product_button" id="cartProductDecreaseAmountButton${currentNumber}">
                                Decrease amount
                            </button>
                            <p class="product_amount" id="cartProductAmount${currentNumber}">${cartObject[currentNumber].amount}</p>
                            <button class="increase_product_button" id="cartProductIncreaseAmountButton${currentNumber}">
                                Increase amount
                            </button>
                        </div>
                </div>
                <div class="cart_price_flex">
                        <span id="cartProductTotalPrice${currentNumber}">${cartObject[currentNumber].amount * cartObject[currentNumber].price} kr</span>
                </div>
                <div class="product_cart_info_container trash_can_flex">
                        <button class="cart_trash_can_button" id="cartProductTrashCan${currentNumber}">
                            Trash can
                        </button>
                </div>
                </div>
            </li>
        `; 

        // Checkout
        checkoutCartMain.innerHTML += `
            <li class="checkout_product" id="checkoutCartProduct${currentNumber}">
                <img 
                    class="checkout_cart_product_image" 
                    id="checkoutCartProductImage${currentNumber}"
                    src="${cartObject[currentNumber].images[0].imageUrl}"
                    srcset="" 
                    alt="${cartObject[currentNumber].images[0].alt}" 
                    width="100" 
                    height="100" 
                    loading="lazy"
                >
                <div class="checkout_product_info_container">
                    <div class="checkout_product_cart_info_container checkout_product_cart_title_and_price checkout_cart_product_flex">
                            <div class="checkout_product_cart_title_container">
                                <span class="checkout_product_cart_title">${cartObject[currentNumber].name}</span>
                            </div>
                            <div class="checkout_product_cart_price_container">
                                <span class="checkout_product_cart_price">${cartObject[currentNumber].price} kr / pcs</span>
                            </div>
                    </div>
                    <div class="checkout_product_cart_info_container checkout_cart_amount_flex">
                            <div class="checkout_cart_amount_buttons_and_label">
                                <button class="checkout_decrease_product_button" id="checkoutCartProductDecreaseAmountButton${currentNumber}">
                                    Decrease amount
                                </button>
                                <p class="checkout_product_amount" id="checkoutCartProductAmount${currentNumber}">${cartObject[currentNumber].amount}</p>
                                <button class="checkout_increase_product_button" id="checkoutCartProductIncreaseAmountButton${currentNumber}">
                                    Increase amount
                                </button>
                            </div>
                    </div>
                    <div class="checkout_cart_price_flex">
                            <span id="checkoutCartProductTotalPrice${currentNumber}">${cartObject[currentNumber].amount * cartObject[currentNumber].price} kr</span>
                    </div>
                    <div class="checkout_product_cart_info_container trash_can_flex">
                            <button class="checkout_cart_trash_can_button" id="checkoutCartProductTrashCan${currentNumber}">
                                Trash can
                            </button>
                    </div>
                </div>
            </li>
        `;
        
        // Set srcset to all images
        let currentCartImage = document.querySelector(`#cartProductImage${currentNumber}`);
        let currentCheckoutCartImage = document.querySelector(`#cartProductImage${currentNumber}`);
        for(let i = 0; i < cartObject[currentNumber].images[0].optimizedImages.length; i++) {
            let currentAttribute = currentCartImage.getAttribute('srcset');
            if(currentAttribute == '') {
                currentCartImage.setAttribute('srcset', `${cartObject[currentNumber].images[0].optimizedImages[i].imageUrl} ${cartObject[currentNumber].images[0].optimizedImages[i].imageWidth}w`);
                currentCheckoutCartImage.setAttribute('srcset', `${cartObject[currentNumber].images[0].optimizedImages[i].imageUrl} ${cartObject[currentNumber].images[0].optimizedImages[i].imageWidth}w`);
            }
            else {
                currentCartImage.setAttribute('srcset', `${currentAttribute}, ${cartObject[currentNumber].images[0].optimizedImages[i].imageUrl} ${cartObject[currentNumber].images[0].optimizedImages[i].imageWidth}w`);
                currentCheckoutCartImage.setAttribute('srcset', `${currentAttribute}, ${cartObject[currentNumber].images[0].optimizedImages[i].imageUrl} ${cartObject[currentNumber].images[0].optimizedImages[i].imageWidth}w`);
            }
        }

        currentNumber++;
    });

    addEventAtCartButtons();
}

// Add eventListener on cart buttons
function addEventAtCartButtons() {
    let index = 0;

    cartObject.forEach(() => {
        let cartDecreaseAmountButton = document.querySelector(`#cartProductDecreaseAmountButton${index}`);
        let cartIncreaseAmountButton = document.querySelector(`#cartProductIncreaseAmountButton${index}`);
        let cartProductTrashCan = document.querySelector(`#cartProductTrashCan${index}`);
        
        let checkoutDecreaseAmountButton = document.querySelector(`#checkoutCartProductDecreaseAmountButton${index}`);
        let checkoutIncreaseAmountButton = document.querySelector(`#checkoutCartProductIncreaseAmountButton${index}`);
        let checkoutCartProductTrashCan = document.querySelector(`#checkoutCartProductTrashCan${index}`);

        cartDecreaseAmountButton.addEventListener('click', decreaseCartProductAmount);
        cartIncreaseAmountButton.addEventListener('click', increaseCartProductAmount);
        cartProductTrashCan.addEventListener('click', removeProductFromCart);

        checkoutDecreaseAmountButton.addEventListener('click', decreaseCartProductAmount);
        checkoutIncreaseAmountButton.addEventListener('click', increaseCartProductAmount);
        checkoutCartProductTrashCan.addEventListener('click', removeProductFromCart);
        
        index++;
    }); 
}



function decreaseCartProductAmount(e) {
    let buttonId = e.target.id;
    let buttonNumberId = Number((buttonId).replace(/\D/g, ""));

    let cartProductAmount = document.querySelector(`#cartProductAmount${buttonNumberId}`);
    let checkoutCartProductAmount = document.querySelector(`#checkoutCartProductAmount${buttonNumberId}`);
    let cartProductTotalPrice = document.querySelector(`#cartProductTotalPrice${buttonNumberId}`);
    let checkoutCartProductTotalPrice = document.querySelector(`#checkoutCartProductTotalPrice${buttonNumberId}`);
    let amount = Number(cartProductAmount.textContent);

    if (amount < 2) return;

    amount -= 1;

    // Change the amount in the product text
    cartProductAmount.textContent = amount;
    checkoutCartProductAmount.textContent = amount;
    // Change the amount in the object
    cartObject[buttonNumberId].amount = amount;
    // Change the total price in the product
    if (amount >= 10) {
        const discountFinalCost = (amount * cartObject[buttonNumberId].price) * 0.9;

        cartProductTotalPrice.textContent = `${discountFinalCost.toFixed(0)} kr`;
        checkoutCartProductTotalPrice.textContent = `${discountFinalCost.toFixed(0)} kr`;
    }
    else {
        cartProductTotalPrice.textContent = `${amount * cartObject[buttonNumberId].price} kr`;
        checkoutCartProductTotalPrice.textContent = `${amount * cartObject[buttonNumberId].price} kr`;
    }

    cartSubTotal();
}
function increaseCartProductAmount(e) {
    let buttonId = e.target.id;
    let buttonNumberId = Number((buttonId).replace(/\D/g, ""));

    let cartProductAmount = document.querySelector(`#cartProductAmount${buttonNumberId}`);
    let checkoutCartProductAmount = document.querySelector(`#checkoutCartProductAmount${buttonNumberId}`);
    let cartProductTotalPrice = document.querySelector(`#cartProductTotalPrice${buttonNumberId}`);
    let checkoutCartProductTotalPrice = document.querySelector(`#checkoutCartProductTotalPrice${buttonNumberId}`);
    let amount = Number(cartProductAmount.textContent);
    
    amount += 1;
    
    // Change the amount in the product text
    cartProductAmount.textContent = amount;
    checkoutCartProductAmount.textContent = amount;
    // Change the amount in the object
    cartObject[buttonNumberId].amount = amount;
    // Change the total price in the product
    // If customer shop more than 10 sorts then a discount of 10% will applies.
    if (amount >= 10) {
        const discountFinalCost = (amount * cartObject[buttonNumberId].price) * 0.9;

        cartProductTotalPrice.textContent = `${discountFinalCost.toFixed(0)} kr`;
        checkoutCartProductTotalPrice.textContent = `${discountFinalCost.toFixed(0)} kr`;
    }
    else {
        cartProductTotalPrice.textContent = `${amount * cartObject[buttonNumberId].price} kr`;
        checkoutCartProductTotalPrice.textContent = `${amount * cartObject[buttonNumberId].price} kr`;
    }
    

    cartSubTotal();
}
function removeProductFromCart(e) {
    let buttonId = e.target.id;
    let buttonNumberId = Number((buttonId).replace(/\D/g, ""));

    let cartProductId = document.querySelector(`#cartProduct${buttonNumberId}`);
    let checkoutCartProductId = document.querySelector(`#checkoutCartProduct${buttonNumberId}`);

    let cartSubTotal = document.querySelector('#cartSubTotal');
    let subTotalOnlyDigits = Number(cartSubTotal.textContent.replace(/\D/g, ""));

    let cartProductAmount = document.querySelector(`#cartProductAmount${buttonNumberId}`);
    let currentProductAmount = Number(cartProductAmount.textContent);

    let finalSubTotal = subTotalOnlyDigits - (currentProductAmount * cartObject[buttonNumberId].price);

    let checkoutContainer = document.querySelector('#checkoutContainer');

    cartSubTotal.textContent = `Subtotal: ${finalSubTotal} kr`;

    // Remove the li from the HTML
    cartProductId.remove();
    checkoutCartProductId.remove();
    // Change the object amount to 0
    cartObject[buttonNumberId].amount = 0;
    // Removes the product from the array
    cartObject.splice(buttonNumberId, 1);

    // Update the cart / checkout list of products
    createProductContainerToCart();
    // Add back the event listener in the buttons
    addEventAtCartButtons();
    // Check if the cart is empty
    // If it is empty will display the message
    onEmptyCart();
    // If the cart has no product in it then the class will
    // be removed from the checkout section
    if (cartObject.length === 0) {
        checkoutContainer.classList.remove('checkout_visible');
    }
}
function toggleCheckout() {
    let checkoutContainer = document.querySelector('#checkoutContainer');
    let shoppingCartOuterContainer = document.querySelector('#shoppingCartOuterContainer');
    let shoppingCartArrow = document.querySelector('#shoppingCartArrow');


    checkoutContainer.classList.toggle('checkout_visible');
    shoppingCartOuterContainer.classList.toggle('open');
    shoppingCartArrow.classList.toggle('open');
    
    document.body.style.overflow = 'hidden';
}



function cartSubTotal() {
    totalPrice = 0;
    let cartSubTotal = document.querySelector('#cartSubTotal');
    let checkoutSubTotal = document.querySelector('#checkoutSubTotal');

    for (let i = 0; i < cartObject.length; i++) {
        let cartProductTotalPrice = document.querySelector(`#cartProductTotalPrice${i}`);
        let cartProductPrice = Number(cartProductTotalPrice.textContent.replace(/\D/g, ""));
        
        
        totalPrice += cartProductPrice;

        dayRules();

        cartSubTotal.textContent = `Subtotal: ${totalPrice} kr`;
        checkoutSubTotal.textContent = `Subtotal: ${totalPrice} kr`;
    }
    
}
function onEmptyCart() {
    if(cartObject.length === 0) {
        if (!emptyCart) {
            cartInnerContainer.innerHTML = '';
            checkoutCartMain.innerHTML = '';

            cartInnerContainer.innerHTML += ` 
                <p class="message">Your cart is empty!</p>
            `;
            checkoutCartMain.innerHTML += ` 
                <p class="message">Your cart is empty!</p>
            `;
            emptyCart = true;
        }
    }
}



/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+ CHECKOUT CUSTOMER'S DELIVERY INFORMATIONS  -+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
*/

let errorsMessageDisplayCustomerInfo = [];

let customerInfoInputObject = [
    {
        customerFirstNameInput: 
        {
            regEx: `^[a-zA-Z-' ]{2,}$`,
            errorMessage: 'Please enter a valid first name | Minimum letters 2 | No digits is allow',
        },
        customerLastNameInput: 
        {
            regEx: `^[a-zA-Z-' ]{2,}$`,
            errorMessage: 'Please enter a valid last name | Minimum letters 2 | No digits is allow',
        },
        customerPhoneNumberInput: 
        {
            regEx: `^((\\+46|0)7[\\s-]*\\d{4}[\\s-]?\\d{4,5})$`,
            errorMessage: 'Please enter a valid phone number | 07123456789',
        },
        customerEmailInput: 
        {
            regEx: `^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$`,
            errorMessage: 'Please enter a valid email',
        },
        customerAddressInput: 
        {
            regEx: `.{5,100}`,
            errorMessage: 'Please enter a valid adress',
        },
        customerZipCodeInput: 
        {
            regEx: `^.{2,20}$`,
            errorMessage: 'Please enter a valid ZIP code',
        },
        customerPostTownInput: 
        {
            regEx: `^[a-zA-ZåÅ' -]{2,}$`,
            errorMessage: 'Please enter a valid post town',
        },
        customerDoorCodeInput: 
        {
            regEx: `^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$`,
            errorMessage: 'Please enter a valid door code',
        },
    }
];


const customersInfoInput = [
    document.querySelector('#customerFirstNameInput'),
    document.querySelector('#customerLastNameInput'),
    document.querySelector('#customerPhoneNumberInput'),
    document.querySelector('#customerEmailInput'),
    document.querySelector('#customerAddressInput'),
    document.querySelector('#customerZipCodeInput'),
    document.querySelector('#customerPostTownInput'),
    document.querySelector('#customerDoorCodeInput')
];

customersInfoInput.forEach(input => {
    input.addEventListener('focusout', checkCurrentInput);
    input.addEventListener('change', checkCurrentInput);
});



function checkCurrentInput(e) {
    const currentInput = e.target.id;
    const inputElemnt = document.querySelector(`#${currentInput}`);

    const inputValidationInfo = customerInfoInputObject.find(input => input[currentInput]);

    // Regex
    const regEx = new RegExp(`${inputValidationInfo[currentInput].regEx}`);

    let inputValue = regEx.exec(inputElemnt.value); 

    if(inputValue === null) {
        inputElemnt.classList.add('customer_input_error');
        errorsMessageDisplayCustomerInfo[`${currentInput}`] = `${inputValidationInfo[currentInput].errorMessage}`;
        displayErrorMessages();
    } 
    else {
        inputElemnt.classList.remove('customer_input_error');
        delete errorsMessageDisplayCustomerInfo[`${currentInput}`];
        displayErrorMessages();
    }
}


function displayErrorMessages() {
    const customerInputErrorMessage = document.querySelector('#customerInputErrorMessage');

    const errors = Object.keys(errorsMessageDisplayCustomerInfo);

    customerInputErrorMessage.innerHTML = '';

    for(let i = 0; i < errors.length; i++) { 
        customerInputErrorMessage.innerHTML += ` 
            <p>${errorsMessageDisplayCustomerInfo[errors[i]]}</p>
        `;
    }

    if(Object.keys(errorsMessageDisplayCustomerInfo).length === 0) {
        customerInputErrorMessage.classList.remove('error_messages');
    }
    else if(Object.keys(errorsMessageDisplayCustomerInfo).length >= 1) {
        customerInputErrorMessage.classList.add('error_messages');
    }
}




/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+- CHECKOUT PAYMENT METHODS  -+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
*/

let paymentMethodsObject = websiteObjects[0].paymentMethodsObject;
let paymentMethodsContainer = document.querySelector('#paymentMethodsContainer');
let customerCompletePurchaseContainer = document.querySelector('#customerCompletePurchaseContainer');
let paymentCurrentCount = 0;

paymentMethodsObject.forEach( e => {

    if (paymentCurrentCount === 0) {
        paymentMethodsContainer.innerHTML += `
            <li class="chechout_payment_option payment_option_selected" id="checkoutPaymentOption${paymentCurrentCount}">
                <div class="payment_radio_container">
                    <input type="radio" value="${e.value}" id="cardPaymentMethodRadio${paymentCurrentCount}" checked>
                </div>
                <div class="payment_method_container">
                    <div class="payment_method_icon_container">
                        <div class="payment_method_icon" style="mask-image: url('${e.imageUrl}')"></div>
                    </div>
                    <p class="payment_method_text_container">
                        ${e.paymentName}
                    </p>
                </div>
            </li>       
        `;
    }
    else {
        paymentMethodsContainer.innerHTML += `
            <li class="chechout_payment_option" id="checkoutPaymentOption${paymentCurrentCount}">
                <div class="payment_radio_container">
                    <input type="radio" value="${e.value}" id="cardPaymentMethodRadio${paymentCurrentCount}">
                </div>
                <div class="payment_method_container">
                    <div class="payment_method_icon_container">
                        <div class="payment_method_icon" style="mask-image: url('${e.imageUrl}')"></div>
                    </div>
                    <p class="payment_method_text_container">
                        ${e.paymentName}
                    </p>
                </div>
            </li>       
        `;
    }

    paymentCurrentCount++;
});

cardPaymentContent();

for(let i = 0; i < paymentMethodsObject.length; i++) {
    const currentPaymentMethodRadio = document.querySelector(`#cardPaymentMethodRadio${i}`);
    currentPaymentMethodRadio.addEventListener('click', selectedPaymentMethod);
}


function selectedPaymentMethod(e) {
    let pressedButtonId = Number(e.target.id.replace(/\D/g, ""));

    for(let i = 0; i < paymentMethodsObject.length; i++) {
        const checkoutPaymentOption = document.querySelector(`#checkoutPaymentOption${i}`);
        const radioInput = document.querySelector(`#cardPaymentMethodRadio${i}`);

        if(i === pressedButtonId) {
            checkoutPaymentOption.classList.add('payment_option_selected');
            radioInput.checked = true;
        }
        else {
            checkoutPaymentOption.classList.remove('payment_option_selected');
            radioInput.checked = false;
        }
    }

    customerCompletePurchaseContainer.innerHTML = '';
    if(e.target.value == 'invoice') {
        invoicePaymentContent();
    }
    else if(e.target.value == 'card') {
        cardPaymentContent();
    }
}


function cardPaymentContent() {
    customerCompletePurchaseContainer.innerHTML += `
        <form class="customer_delivery_info_container" action="">
            <p class="checkout_customer_info_box">* Required section</p>
            <div class="row">
                <div class="input_control row_half">
                    <input type="text" class="customer_delivery_info_input" placeholder="Card name holder *" id="customerCardName">
                    <label for="customerCardName" class="customer_delivery_info_label">Card name holder</label>
                </div>
                <div class="input_control row_half">
                    <input type="text" class="customer_delivery_info_input" placeholder="Card Number *" id="customerCardNumber">
                    <label for="customerCardNumber" class="customer_delivery_info_label">Card Number</label>
                </div>
            </div>
            <div class="row">
                <div class="input_control row_half"></div>
                <div class="input_control row_half">
                    <input type="text" class="customer_delivery_info_input" placeholder="Expiration date *" id="customerCardExpirationDate">
                    <label for="customerCardExpirationDate" class="customer_delivery_info_label">Expiration date </label>
                </div>
                <div class="input_control row_half">
                    <input type="text" class="customer_delivery_info_input" placeholder="CVC *" id="customerCardCVC">
                    <label for="customerCardCVC" class="customer_delivery_info_label">CVC</label>
                </div>
            </div>
            <div class="input_control" id="customerCardPaymentInputErrorMessage"></div>
        </form>
    `;

    let errorsMessageDisplayCustomerPayment = [];

    let customerPaymentInfoInputObject = [
        {
            customerCardName: 
            {
                regEx: `^(?:[A-Za-z]+ ?){1,3}$`,
                errorMessage: 'Please enter a valid card name | Digits is not allow',
            },
            customerCardNumber: 
            {
                regEx: `^5[1-5][0-9]{14}$`,
                errorMessage: 'Please enter a valid card number',
            },
            customerCardExpirationDate: 
            {
                regEx: `^(0[1-9]|1[0-2])\/(?:[0-9]{2})?[0-9]{2}$`,
                errorMessage: 'Please enter a valid date | MM/YY | Month/year',
            },
            customerCardCVC: 
            {
                regEx: `^[0-9]{3}$`,
                errorMessage: 'Please enter a valid CVC | 123',
            },
            customerPersonalIdentityNumber: 
            {
                regEx: `^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})`,
                errorMessage: 'Please enter a valid CVC | 123',
            },
            
        }
    ];


    const customersPaymentInfoInput = [
        document.querySelector('#customerCardName'),
        document.querySelector('#customerCardNumber'),
        document.querySelector('#customerCardExpirationDate'),
        document.querySelector('#customerCardCVC')
    ];

    customersPaymentInfoInput.forEach(input => {
        input.addEventListener('focusout', checkCurrentPaymentInput);
        input.addEventListener('change', checkCurrentPaymentInput);
    });



    function checkCurrentPaymentInput(e) {
        const currentInput = e.target.id;
        const inputElemnt = document.querySelector(`#${currentInput}`);

        const inputValidationInfo = customerPaymentInfoInputObject.find(input => input[currentInput]);

        // Regex
        const regEx = new RegExp(`${inputValidationInfo[currentInput].regEx}`);

        let inputValue = regEx.exec(inputElemnt.value); 
        console.log(inputValue);

        if(inputValue === null) {
            inputElemnt.classList.add('customer_input_error');
            errorsMessageDisplayCustomerPayment[`${currentInput}`] = `${inputValidationInfo[currentInput].errorMessage}`;
            displayErrorMessagesPaymentInput();
        } 
        else {
            inputElemnt.classList.remove('customer_input_error');
            delete errorsMessageDisplayCustomerPayment[`${currentInput}`];
            displayErrorMessagesPaymentInput();
        }
        console.log(errorsMessageDisplayCustomerPayment);
    }


    function displayErrorMessagesPaymentInput() {
        const customerCardPaymentInputErrorMessage = document.querySelector('#customerCardPaymentInputErrorMessage');

        const errors = Object.keys(errorsMessageDisplayCustomerPayment);

        customerCardPaymentInputErrorMessage.innerHTML = '';

        for(let i = 0; i < errors.length; i++) { 
            customerCardPaymentInputErrorMessage.innerHTML += ` 
                <p>${errorsMessageDisplayCustomerPayment[errors[i]]}</p>
            `;
        }

        if(Object.keys(errorsMessageDisplayCustomerPayment).length === 0) {
            customerCardPaymentInputErrorMessage.classList.remove('error_messages');
        }
        else if(Object.keys(errorsMessageDisplayCustomerPayment).length >= 1) {
            customerCardPaymentInputErrorMessage.classList.add('error_messages');
        }
    }
}
function invoicePaymentContent() {
    customerCompletePurchaseContainer.innerHTML += `
        <form class="customer_delivery_info_container" action="">
            <p class="checkout_customer_info_box">* Required section</p>
            <div class="row">
                <div class="input_control row_half">
                    <input type="text" class="customer_delivery_info_input" placeholder="Personal identity number *" id="customerPersonalIdentityNumber">
                    <label for="customerPersonalIdentityNumber" class="customer_delivery_info_label">Personal identity number</label>
                </div>
                <div class="input_control row_half"></div>
            </div>
            <div class="input_control" id="customerCardPaymentInputErrorMessage"></div>
        </form>
    `;

    let errorsMessageDisplayCustomerPayment = [];

    let customerPaymentInfoInputObject = [
        {
            customerPersonalIdentityNumber: 
            {
                regEx: `^(?:19|20)?[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[-+]{1}[0-9]{4}$`,
                errorMessage: 'Please enter a valid personal identity number',
            },   
        }
    ];


    const customersPaymentInfoInput = [
        document.querySelector('#customerPersonalIdentityNumber') 
    ];

    customersPaymentInfoInput.forEach(input => {
        input.addEventListener('focusout', checkCurrentPaymentInput);
        input.addEventListener('change', checkCurrentPaymentInput);
    });



    function checkCurrentPaymentInput(e) {
        const currentInput = e.target.id;
        const inputElemnt = document.querySelector(`#${currentInput}`);

        const inputValidationInfo = customerPaymentInfoInputObject.find(input => input[currentInput]);

        // Regex
        const regEx = new RegExp(`${inputValidationInfo[currentInput].regEx}`);

        let inputValue = regEx.exec(inputElemnt.value); 
        console.log(inputValue);

        if(inputValue === null) {
            inputElemnt.classList.add('customer_input_error');
            errorsMessageDisplayCustomerPayment[`${currentInput}`] = `${inputValidationInfo[currentInput].errorMessage}`;
            displayErrorMessagesPaymentInput();
        } 
        else {
            inputElemnt.classList.remove('customer_input_error');
            delete errorsMessageDisplayCustomerPayment[`${currentInput}`];
            displayErrorMessagesPaymentInput();
        }
        console.log(errorsMessageDisplayCustomerPayment);
    }


    function displayErrorMessagesPaymentInput() {
        const customerCardPaymentInputErrorMessage = document.querySelector('#customerCardPaymentInputErrorMessage');

        const errors = Object.keys(errorsMessageDisplayCustomerPayment);

        customerCardPaymentInputErrorMessage.innerHTML = '';

        for(let i = 0; i < errors.length; i++) { 
            customerCardPaymentInputErrorMessage.innerHTML += ` 
                <p>${errorsMessageDisplayCustomerPayment[errors[i]]}</p>
            `;
        }

        if(Object.keys(errorsMessageDisplayCustomerPayment).length === 0) {
            customerCardPaymentInputErrorMessage.classList.remove('error_messages');
        }
        else if(Object.keys(errorsMessageDisplayCustomerPayment).length >= 1) {
            customerCardPaymentInputErrorMessage.classList.add('error_messages');
        }
    }
}







/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+- SWIPE STORE IMAGES WITH BUTTONS -+-+-+-+-+-+-+-+-+-+-+-+-+
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

/** ----------------------------------------------[ Swipe between image ]---[ 3 ]
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




/**
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+ EXPAND ABOUT US  -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * 
*/

let expandAboutUsButton = document.querySelector('#expandAboutUsButton');
expandAboutUsButton.addEventListener('click', () => {
    let aboutUsTextContainer = document.querySelector('#aboutUsTextContainer');

    aboutUsTextContainer.classList.toggle('about_us_text_container_expand');
    expandAboutUsButton.classList.toggle('about_us_button_open');
});













setInterval(() => {
    // console.log(today, mm + '/' + dd + '/' + yyyy + '|' + hours + ':' + minutes + ':' + seconds)
    // console.log(dayOfWeek);
}, 1*1000);

// dayRules();

function dayRules() {
    const subTotal = [
        document.querySelector('#cartSubTotal'),
        document.querySelector('#checkoutSubTotal')
    ]
    let checkoutDiscountPrice = document.querySelector('#checkoutDiscountPrice');
    
    
    if(dayOfWeek === 'Monday' && hours < 10) {
        checkoutDiscountPrice.textContent = `Discount: -${totalPrice * 0.1} kr`;
        totalPrice = (totalPrice * 0.9).toFixed(0);
    }
    else {

    }
}


function increasePriceRule() {
    // if(dayOfWeek === 'Friday' && hours >= 15 || dayOfWeek === 'Sunday' || dayOfWeek === 'Saturday' || dayOfWeek === 'Monday' && hours <= 3) {
    //     productsObject.donuts.forEach(e => {
    //         let donutPrice = e.price;

    //         e.price = (donutPrice * 1.15).toFixed(0);
    //     });
    // } 
}