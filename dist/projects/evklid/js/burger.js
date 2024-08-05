var burgerLink = document.querySelector(".header__burger");
var burgerPopup = document.querySelector(".header__burger__nav");
var burgerClose = document.querySelector(".header__burger__close");

burgerLink.addEventListener("click", function(evt){
  evt.preventDefault();
  burgerPopup.classList.add("header__burger__show");
});

burgerClose.addEventListener("click", function(evt){
  evt.preventDefault();
  burgerPopup.classList.remove("header__burger__show");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if (burgerPopup.classList.contains("header__burger__show")){
      evt.preventDefault();
      burgerPopup.classList.remove("header__burger__show");
    }
  }
});
