document.querySelector('#send-button').onclick = function () {
    const inputAge = Number(document.querySelector('#user-age').value) || '';
    const dogAgeHuman = dogAge(inputAge)
    const halfAge = halfAgeFunc(inputAge)
    const monthsInput = monthsFunc(inputAge)
    const weeksInput = weeksFunc(inputAge)
    const daysInput = daysFunc(inputAge)
    const hoursInput = hoursFunc(inputAge)
    const minutesInput = minutesFunc(inputAge)
    const secondsInput = secondsFunc(inputAge)
    if (inputAge === '') {
        alert('Ingresa tu edad por favor!')
    }
    document.querySelector('#dogAgeHuman').innerText = dogAgeHuman;
    document.querySelector('#halfAge').innerText = halfAge;
    document.querySelector('#months').innerText = monthsInput;
    document.querySelector('#weeks').innerText = weeksInput;
    document.querySelector('#days').innerText = daysInput;
    document.querySelector('#hours').innerText = hoursInput;
    document.querySelector('#minutes').innerText = minutesInput
    document.querySelector('#seconds').innerText = secondsInput
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