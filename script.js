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


let itemMenu1 = document.getElementsByClassName('item-menu')[0].addEventListener('click',fecharMenu1)
function fecharMenu1(){
   exibirMenu()
}

let itemMenu2 = document.getElementsByClassName('item-menu')[1].addEventListener('click',fecharMenu2)
function fecharMenu2(){
    exibirMenu()
}

let itemMenu3 = document.getElementsByClassName('item-menu')[2].addEventListener('click',fecharMenu3)
function fecharMenu3(){
    exibirMenu()
}

let itemMenu4 = document.getElementsByClassName('item-menu')[3].addEventListener('click',fecharMenu4)
function fecharMenu4(){
    exibirMenu()
}

let itemMenu5 = document.getElementsByClassName('item-menu')[4].addEventListener('click',fecharMenu5)
function fecharMenu5(){
    exibirMenu()
}



