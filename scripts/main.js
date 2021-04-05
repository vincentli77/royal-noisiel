let menuMobile = document.querySelector('.menu_responsive_hidden')
let buttonHamburger = document.querySelector('#logo_hamburger')
let info = document.querySelector('.info')
let button_top = document.querySelector('.scroll_top')


buttonHamburger.addEventListener('click',function(){

if (menuMobile.classList.contains("menu_responsive_visible")) {
    menuMobile.classList.remove('menu_responsive_visible')
    menuMobile.classList.remove('display')

    info.classList.add('info')
    console.log("ok");
  }
else {
  menuMobile.classList.add('menu_responsive_visible')
  menuMobile.classList.add("display")
  info.classList.remove('info')
}
})


button_top.addEventListener('click',()=>{
  window.scrollTo(0, 0);
})