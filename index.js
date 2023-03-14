const togglebtn = document.querySelector('.toggle-btn')
const togglebtni = document.querySelector('.toggle-btn i')
const menu = document.querySelector('.menu')
const divClick = document.querySelector('.div-click')




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



/*
const creerDiv = ()=>{
    const div = document.createElement('div')
    div.id = 'divid'
    div.classList.add('div-click')

    document.body.appendChild(div)
} 
togglebtn.onclick =()=> {
    menu.classList.toggle('menu-active')
    menuIsActive = menu.classList.contains('menu-active')
    if (menuIsActive ) {
        togglebtni.classList = "fa-solid fa-xmark" ;
        creerDiv() 
    } else{
        togglebtni.classList =  "fa-solid fa-bars" ;
       
       
       
    }  */
    /*
    menu.classList.toggle('menu-active')
    menuIsActive = menu.classList.contains('menu-active')
    togglebtni.classList = menuIsActive ?  "fa-solid fa-xmark" :
    "fa-solid fa-bars" ;
    creerDiv()  
    */




/* const nouvellelDiv = ()=>{
    togglebtni.classList= "fa-solid fa-xmark" 
 const div = document.createElement('div') ;
 div.id = 'iddiv'
 div.className='nouvelle-div' ;
 document.body.appendChild(div)


}
const removeNouvelleDiv =()=>{
    togglebtni.classList= "fa-solid fa-bars" ;
  div.remove()
}

togglebtn.onclick=()=>{
    menu.classList.toggle('menu-active')
    btnActive=menu.classList.contains('menu-active')
    if (btnActive) {
        nouvellelDiv();
        
    } else{
        removeNouvelleDiv()
    }
   
}

document.addEventListener('click',( (e)=>{
   if (e.target.nodeName=='DIV') {
    console.log('target name div ');
   }
}

)) */
