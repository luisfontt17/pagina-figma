/*--------------SHOW MENU--------*/
const navmenu = document.getElementById('nav-menu'),
navtoggle = document.getElementById('nav-toggle'),
navclose = document.getElementById('nav-close'),

/*--------------MENU SHOW--------*/

/*--------------validar si la constante existe--------*/

if(navtoggle){

    navtoggle.addEventListener('click', () =>{
navmenu.classList.add('show-menu')

})
}

/*--------------MENU HIDDEN--------*/
/*--------------validar si la constante existe--------*/

if(navclose){

    navclose.addEventListener('click', () =>{
        navmenu.classList.remove('show-menu')

    })
}