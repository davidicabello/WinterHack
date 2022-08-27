document.querySelector('#send-button').onclick = function () {
    const inputAge = Number(document.querySelector('#user-age').value) || '';
    document.querySelector('#dogAgeHuman').innerText = dogAge(inputAge)
    document.querySelector('#halfAge').innerText = halfAgeFunc(inputAge)
    document.querySelector('#months').innerText = monthsFunc(inputAge)
    document.querySelector('#weeks').innerText = weeksFunc(inputAge)
    document.querySelector('#days').innerText = daysFunc(inputAge)
    document.querySelector('#hours').innerText = hoursFunc(inputAge)
    document.querySelector('#minutes').innerText = minutesFunc(inputAge)
    document.querySelector('#seconds').innerText = secondsFunc(inputAge)
    if (inputAge === '') {
        alert('Ingresa tu edad por favor!')
    }

    return false;
};


function dogAge(number) {
    return number * 7;
};

function halfAgeFunc(number) {
    return number / 2;
};

function monthsFunc(number) {
    return number * 12;
};

function weeksFunc(number) {
    return Math.round(number * 365 / 7);
};

function daysFunc(number) {
    return number * 365;
};

function hoursFunc(number) {
    return (number * 365) * 24;
};

function minutesFunc(number) {
    return ((number * 365) * 24) * 60;
};

function secondsFunc(number) {
    return ((((number * 365) * 24) * 60) * 60);
};