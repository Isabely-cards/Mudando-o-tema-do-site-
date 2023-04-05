'use strict'
const switcher = document.querySelector('.btn');

let words = {
    "light" : "Modo claro",
    "dark" : "Modo escuro"
 }


switcher.addEventListener('click', function(){
    var className = document.body.className

    if(className == "dark-theme"){
        document.body.classList.replace('dark-theme','light-theme')
        switcher.replaceChildren(words.dark)
    } else {
        document.body.classList.replace('light-theme','dark-theme')
        switcher.replaceChildren(words.light)
    }
})