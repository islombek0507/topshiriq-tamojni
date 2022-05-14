const BurgerTogler = document.querySelector(".header__burger");
const Nav = document.querySelector(".header__nav")

BurgerTogler.addEventListener("click", function () {
    if (!BurgerTogler.classList.contains("header__burger--close")) {
        BurgerTogler.classList.add("header__burger--close");
        Nav.classList.add("header__nav--open");
        
    }else{
        BurgerTogler.classList.remove("header__burger--close")
        Nav.classList.remove("header__nav--open")
        Nav.classList.add("header__nav--close")
    }
});
Nav.addEventListener("animationend", function(evt){
    if(evt.animationName==="open"){
        
        Navigatsion.classList.remove("header__nav--open");
        Navigatsion.classList.remove("header__nav--close");
    }
});