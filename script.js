// console.log('estou aqui')
let btnMenu = document.getElementsByClassName('btn-menu')[0].addEventListener('click',exibirMenu)
let menu = document.getElementsByClassName('menu')[0]

function exibirMenu(){
    if(menu.classList.contains('menu-aberto')){
        menu.classList.remove('menu-aberto')
        menu.classList.add('menu-fechado')
    }else{
        menu.classList.remove('menu-fechado')
        menu.classList.add('menu-aberto')
    }
}