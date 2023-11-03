let pepsi = document.querySelector('#peps');
let imgOme = document.querySelector('#one');
let imgTwo = document.querySelector('#two');
let imgThree = document.querySelector('#three');

function imgSlider(anything) {
    pepsi.src = anything;
}

imgOme.onclick = function() {
    imgSlider('img/pepsi001.png');
    document.body.style.background = '#0062b2';
}

imgTwo.onclick = function() {
    imgSlider('img/pepsi002.png');
    document.body.style.background = '#e60c2c';   
}

imgThree.onclick = function() {
    imgSlider('img/pepsi003.png');
    document.body.style.background = '#1e1e1e'; 
}