const togglebtn = document.querySelector('.toggle-btn')
const togglebtni = document.querySelector('.toggle-btn i')
const menu = document.querySelector('.menu')
const divClick = document.querySelector('.div-click')

//recuperer l'id des links menu bar a clicker
const apropos=document.getElementById('apropos')
const service=document.getElementById('service')
const contacter=document.getElementById('contacter')






togglebtn.onclick =()=> {
    menu.classList.toggle('menu-active')
    divClick.classList.toggle('div-active')
    menuIsActive = menu.classList.contains('menu-active')
    togglebtni.classList = menuIsActive? "fa-solid fa-xmark" :
    "fa-solid fa-bars" ;

}
divClick.onclick =()=> {
    menu.classList.toggle('menu-active')
    divClick.classList.toggle('div-active')
    menuIsActive = menu.classList.contains('menu-active')
    togglebtni.classList = menuIsActive? "fa-solid fa-xmark" :
    "fa-solid fa-bars" ;
  }
  apropos.onclick =()=> {
    menu.classList.toggle('menu-active')
    divClick.classList.toggle('div-active')
    menuIsActive = menu.classList.contains('menu-active')
    togglebtni.classList = menuIsActive? "fa-solid fa-xmark" :
    "fa-solid fa-bars" ;
  }
  service.onclick =()=> {
    menu.classList.toggle('menu-active')
    divClick.classList.toggle('div-active')
    menuIsActive = menu.classList.contains('menu-active')
    togglebtni.classList = menuIsActive? "fa-solid fa-xmark" :
    "fa-solid fa-bars" ;
  }
  contacter.onclick =()=> {
    menu.classList.toggle('menu-active')
    divClick.classList.toggle('div-active')
    menuIsActive = menu.classList.contains('menu-active')
    togglebtni.classList = menuIsActive? "fa-solid fa-xmark" :
    "fa-solid fa-bars" ;
  }

