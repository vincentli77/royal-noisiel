let menu = document.querySelectorAll('.menu')
let contenu_menu= document.querySelectorAll('.contenu_menu')


for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click',()=>{
      for (let j = 0; j < contenu_menu.length; j++) {
      contenu_menu[j].style.display="none"  
      menu[j].style.color='black'      
      contenu_menu[i].style.display='block'
      menu[i].style.color='red'

    }
    

  })
  
}