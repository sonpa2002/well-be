const burger = document.querySelector('.header__navbar--burger');
const navbar = document.querySelector('.header__navbar--content');

burger.addEventListener('click', function(){
    navbar.classList.add('active');
})

const closeBtn = document.querySelector('.close__btn')
closeBtn.addEventListener('click', function(){
    navbar.classList.remove('active');
})