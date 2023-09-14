const btnMenu = document.getElementById('menu');
const mostrarMenu = document.getElementById('mostrar-menu');
let lojaAberta = document.querySelector('.loja-aberta');
let mudarAviso;
/*
lojaAberta.addEventListener('click', function(){
    mudarAviso = prompt("Digite o Aviso do dia: ");
    lojaAberta.textContent = mudarAviso;
});
*/
btnMenu.addEventListener('click', function(){
    if (mostrarMenu.classList.contains("hidden")) {
        mostrarMenu.classList.remove("hidden");
    } else {
        mostrarMenu.classList.add("hidden");
    }
});


 