window.onload = () => {
 iniciaEfeitomenu()

 controlaSubmenu()
}

function iniciaEfeitomenu() {
    let menu = document.querySelector(".menu")

    window.onscroll = manipulaMenu

    function manipulaMenu() {
        let posicaoScroll = Window.pageYOffset

        if(posicaoScroll > 60) {
            menu.classList.add("menu-escuro")
        } else {
          menu.classList.remove("menu-escuro")
        }

        menu.style.backgroundColor = "rgba(255, 255, 255, " + window.pageYOffset / 100 + ")";
    }
}
function controlaSubmenu() {
    let menuItems = document.querySelectorAll(".menu-item")
    let submenus = document.querySelectorAll(".submenus")
    
    menuItems.forEach(elemento => {
        elemento.addEventListener('mouseover', mostraSubmenu)
        elemento.addEventListener('mouseout', esconderSubmenu)
    })
    submenus.forEach(elemento => {
        elemento.addEventListener('mouseover', mostraSubmenuViaSubmenu)
        elemento.addEventListener('mouseleave', esconderSubmenuViaSubmenu)
    })

    function mostraSubmenu(e) {
        let submenu = e.target.parentElement.nextElementSibling
        submenu.classList.add('mostra')
        
     
    }
    function esconderSubmenu(e) {
        let submenu = e.target.parentElement.nextElementSibling
        submenu.classList.remove('mostra')
       
    }

    function mostraSubmenuViaSubmenu(e) {
      e.target.classList.add('mostra')
    }

    function esconderSubmenuViaSubmenu() {
        e.target.classList.remove('mostra')
    }
}