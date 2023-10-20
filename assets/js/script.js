'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// // alert toast variables
// const alertToast = document.querySelector('[data.alert-toast]');
// const alertToastCloseBtn = document.querySelector('[data.alert-toast-close]');

// // alert toast eventListener
// alertToastCloseBtn.addEventListener('click', function () {
//   alertToast.classList.add('closed1');
// });




// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}







// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

  var ProductImg = document.getElementById("product-img");
  var SmallImg = document.getElementsByClassName("small-img");

  SmallImg[0].onclick = function()
  {
    ProductImg.src = SmallImg[0].src;
  }
  SmallImg[1].onclick = function()
  {
    ProductImg.src = SmallImg[1].src;
  }
  SmallImg[2].onclick = function()
  {
    ProductImg.src = SmallImg[2].src;
  }
  SmallImg[3].onclick = function()
  {
    ProductImg.src = SmallImg[3].src;
  }

// script.js
const addToCartButtons = document.querySelectorAll('.add-cart-btn');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupName = document.getElementById('popup-name');
const popupQuantity = document.getElementById('popup-quantity');

function openPopup(imageSrc, productName, productQuantity) {
    popupImage.src = imageSrc;
    popupName.textContent = productName;
    popupQuantity.textContent = productQuantity;
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            imageSrc: `product${index + 1}.jpg`,
            productName: `Product ${index + 1}`,
            productQuantity: '1', // You can update this dynamically based on your logic
        };
        openPopup(product.imageSrc, product.productName, product.productQuantity);
    });
});

// Get the elements by their ID
var popupLink = document.getElementById("popup-link");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");
// Show the pop-up window when the link is clicked
popupLink.addEventListener("click", function(event) {
  event.preventDefault();
  popupWindow.style.display = "block";
});
// Hide the pop-up window when the close button is clicked
closeButton.addEventListener("click", function() {
  popupWindow.style.display = "none";
});

$(document).ready(function() {
  $('#emailButton').click(function() {
    window.location.href = "mailto:tgeee27@gmail.com";
  });
});

$(document).ready(function() {
  $('#location').select2({
    data: [
      { id: 'Albania', text: 'Albania' },
      { id: 'Algeria', text: 'Algeria' },
      { id: 'Angola', text: 'Angola' },
      { id: 'Australia', text: 'Australia' },
      { id: 'Austria', text: 'Austria' },
      { id: 'Belarus', text: 'Belarus' },
      { id: 'Belgium', text: 'Belgium' },
      { id: 'Benin', text: 'Benin' },
      { id: 'Botswana', text: 'Botswana' },
      { id: 'Burkina Faso', text: 'Burkina Faso' },
      { id: 'Cameroon', text: 'Cameroon' },
      { id: 'Central African Republic', text: 'Central African Republic' },
      { id: 'Chad', text: 'Chad' },
      { id: 'Cyprus', text: 'Cyprus' },
      { id: 'Czech Republic', text: 'Czech Republic' },
      { id: 'Denmark', text: 'Denmark' },
      { id: 'Egypt', text: 'Egypt' },
      { id: 'Ethiopia', text: 'Ethiopia' },
      { id: 'Finland', text: 'Finland' },
      { id: 'France', text: 'France' },
      { id: 'Germany', text: 'Germany' },
      { id: 'Ghana', text: 'Ghana' },
      { id: 'Greece', text: 'Greece' },
      { id: 'Hungary', text: 'Hungary' },
      { id: 'Iceland', text: 'Iceland' },
      { id: 'Ireland', text: 'Ireland' },
      { id: 'Italy', text: 'Italy' },
      { id: 'Kenya', text: 'Kenya' },
      { id: 'Madagascar', text: 'Madagascar' },
      { id: 'Malawi', text: 'Malawi' },
      { id: 'Mali', text: 'Mali' },
      { id: 'Morocco', text: 'Morocco' },
      { id: 'Netherlands', text: 'Netherlands' },
      { id: 'Niger', text: 'Niger' },
      { id: 'Nigeria', text: 'Nigeria' },
      { id: 'Norway', text: 'Norway' },
      { id: 'Poland', text: 'Poland' },
      { id: 'Portugal', text: 'Portugal' },
      { id: 'Senegal', text: 'Senegal' },
      { id: 'Serbia', text: 'Serbia' },
      { id: 'Sierra Leone', text: 'Sierra Leone' },
      { id: 'Somalia', text: 'Somalia' },
      { id: 'South Africa', text: 'South Africa' },
      { id: 'South Sudan', text: 'South Sudan' },
      { id: 'Spain', text: 'Spain' },
      { id: 'Sudan', text: 'Sudan' },
      { id: 'Sweden', text: 'Sweden' },
      { id: 'Switzerland', text: 'Switzerland' },
      { id: 'Togo', text: 'Togo' },
      { id: 'United Kingdom', text: 'United Kingdom' },
      { id: 'United States', text: 'United States' },
      { id: 'Zimbabwe', text: 'Zimbabwe' },
      // Add the rest of the countries here
    ],
    placeholder: 'Search for your country',
  });
});
