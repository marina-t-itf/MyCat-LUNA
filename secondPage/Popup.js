
let popupCloseButton = document.querySelector('.closeButton>span');
let showPopup = document.querySelector('.fotoGalley');
let popupBody = document.querySelector('.popup');
let counterNext = 0;
// let counterPrev = 4;

let popupClose = function() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
};

popupCloseButton.addEventListener('click', popupClose);

let popupOpen = function() {
    
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
    // for (let i=0; i<6; i++) {
        popupBody.style.backgroundImage = `url(./3rd-party/image/foto1.JPG)`;
        // popupBody.style.backgroundImage = `url(fotoGallery[i])`;
        popupBody.style.backgroundSize = "cover";
        popupBody.style.backgroundPosition = "center center";

    // }
}

showPopup.addEventListener('click', popupOpen);


let onNextClick = function() {
    let next = document.querySelector('.popup');
    if( counterNext < 5) {
        popupBody.style.backgroundImage = 'url(' +'./3rd-party/image/foto' + (counterNext+1) +'.JPG' + ')';
        counterNext++;
    }
}

let onPreviewClick = function() {
    let prev = document.querySelector('.popup');
        if(counterNext > 1) {
            popupBody.style.backgroundImage = 'url(' +'./3rd-party/image/foto' + (counterNext-1) +'.JPG' + ')';
            counterNext--;
        }

}