
// search-Form Logics

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = function () {
searchForm.classList.toggle('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navBar.classList.remove('active');
}

// Shoping-cart lagics

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = function () {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

// Login Form Logics

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = function () {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}

// Responsive Navbar Logics

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = function () {
  navBar.classList.toggle('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
    
}

//  One time toggle Logics

window.onscroll = function () {

searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');
navBar.classList.remove('active');
}




var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay:{
    delay:3500,
    disableOnInteraction: false,
  },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});

// customer review Logics


var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay:{
    delay:2000,
    disableOnInteraction: false,
  },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});



// trying to do add to cart fuctions 
