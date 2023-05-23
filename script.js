


/*
var width = 0;

window.addEventListener('load', function () {

    var loader = document.getElementById('loader');
    var progress = document.getElementById('progress');

    width = 0;
    var interval = setInterval(function () {
        width += 0.25;
        progress.style.width = width + '%';

       
    }, 5);
});





window.addEventListener('load', function () {

    var loader = document.getElementById('loader');
    var progress = document.getElementById('progress');


    setTimeout(function () {

        loader.classList.add('hidden');
        progress.classList.add('hidden');

        clearInterval(interval);
        loader.style.display = 'none';
        progress.style.display = 'none';


    }, 7000);
});





window.addEventListener('load', function () {
    var gifImage = document.getElementById('meinBild');
    var otherImage = document.getElementById('infografik');

    setTimeout(function () {
        gifImage.style.display = 'none';
        otherImage.style.display = 'block';

    }, 7000);
});






window.addEventListener('load', function () {
    var bild = document.getElementById('meinBild');
    bild.classList.add('hidden');
});

*/



document.addEventListener('DOMContentLoaded', function () {


    WZoom.create('.full-height-container img', {

        maxScale: 8,
        minScale: 0.95,
        speed: 5,
        smoothExtinction: true,
        dragScrollable: true,
        smoothTime: 0.0,

    });
});
