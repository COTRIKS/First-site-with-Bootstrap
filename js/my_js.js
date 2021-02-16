/* Прелоадер */
window.onload = function () {
    let preloader = document.getElementById('preloader');
     setTimeout(() => {
        preloader.style.display = "none";
    }, 4000);
}

/* Модальное окно */
let popUp = document.getElementsByClassName('popup')[0];
let teleButton = document.getElementsByClassName('view-send')[0]
let closeW = document.getElementsByClassName('close')[0]

teleButton.onclick = function(){
    popUp.style.display = "block";
}

closeW.onclick = function(){
    popUp.style.display = "none";
}
