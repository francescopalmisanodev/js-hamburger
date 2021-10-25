const menuToggle = document.querySelector(".header-right > a");
const hamburgermenu = document.querySelector(".hamburger-menu");
const closebutton = document.querySelector(".close")
menuToggle.addEventListener("click", function () {
        hamburgermenu.classList.add("active");
    });
closebutton.addEventListener("click", function(){
    hamburgermenu.classList.remove("active");
});