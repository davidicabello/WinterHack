let edad = 32

console.log(`Si fueras un perrite tendrias: ${edad * 7}`);
console.log(`La mitad de mi vida es: ${edad / 2}`);
console.log(`La cantidad de meses que vivi son: ${edad * 12}`);
console.log(`La cantidad de semanadas que vivi son: ${Math.round(edad * 365 / 7)}`);
console.log(`La cantidad de dias que vivi son: ${edad * 365}`);
console.log(`La cantidad de horas que vivi son: ${(edad * 365) * 24}`);
console.log(`La cantidad de minutos que vivi son: ${((edad * 365) * 24) * 60}`);
console.log(`La cantidad de segundos que vivi son: ${((((edad * 365) * 24) * 60) * 60)}`)




if (check === false) {
    numbers.push(n);
} else {
    while (check === true) {
        n = Math.floor(Math.random() * max) + min;
        check = numbers.includes(n);
        if (check === false) {
            numbers.push(n);
        }
    }
}
