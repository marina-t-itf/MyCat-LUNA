
let musicPlay = function() {
    document.getElementById('audioID').play();
}   


// crearea unei harti in JS
let map = L
    .map('map')
    .setView(
        [44.42, 26.10],
         10
    )
;

L
    .tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
            maxZoom: 12,
            minZoom: 3,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    )
    .addTo(map)
;

// creare marcator in functie de coordonate
let marker = L
    .marker(
        [44.42, 26.10]
    )
    .addTo(map)
;