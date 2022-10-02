let popupCloseButton = document.querySelector('.closeButton>span');
let showPopup = document.querySelector('.fotoGalley');

let popupClose = function() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
};

popupCloseButton.addEventListener('click', popupClose);

let popupOpen = function() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
}

showPopup.addEventListener('click', popupOpen);

