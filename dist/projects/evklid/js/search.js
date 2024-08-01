var searchLink = document.querySelector(".header__search__btn");
var searchPopup = document.querySelector(".header__search");
var searchClose = document.querySelector(".header__search__close");

searchLink.addEventListener("click", function(evt){
  evt.preventDefault();
  searchPopup.classList.add("header__search__show");
});

searchClose.addEventListener("click", function(evt){
  evt.preventDefault();
  searchPopup.classList.remove("header__search__show");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if (searchPopup.classList.contains("header__search__show")){
      evt.preventDefault();
      searchPopup.classList.remove("header__search__show");
    }
  }
});
