document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".header__burger");
    var burgerWrapper = document.querySelector(".header__burger-wrapper");
  
    burger.addEventListener("click", function () {
      burgerWrapper.classList.toggle("header__burger-wrapper--active");
      burger.classList.toggle("header__burger--active");
    });
  });