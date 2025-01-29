const btPlus = document.querySelector('.js-plus');

const colTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', fouvreferme);

function fouvreferme(){
    colTransport.classList.toggle('col-transport-invisible');
}