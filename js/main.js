var burgerBtn = document.querySelector(".header__button")
var header = document.querySelector(".header")

burgerBtn.addEventListener("click", (evt) => {

    header.classList.toggle("header--open")
}     )