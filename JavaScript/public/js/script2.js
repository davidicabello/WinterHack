let edad = 32

console.log(`Si fueras un perrite tendrias: ${edad * 7}`);
console.log(`La mitad de mi vida es: ${edad / 2}`);
console.log(`La cantidad de meses que vivi son: ${edad * 12}`);
console.log(`La cantidad de semanadas que vivi son: ${Math.round(edad * 365 / 7)}`);
console.log(`La cantidad de dias que vivi son: ${edad * 365}`);
console.log(`La cantidad de horas que vivi son: ${(edad * 365) * 24}`);
console.log(`La cantidad de minutos que vivi son: ${((edad * 365) * 24) * 60}`);
console.log(`La cantidad de segundos que vivi son: ${((((edad * 365) * 24) * 60) * 60)}`)




let toby = 7;
let mart = 4;
let peshito = 2;

function calcularEdad(edad, nombre) {
    let calculo = edad * 7;
    // return `La edad de ${nombre} en años humanos es: ${calculo}`
    return calculo
}


//console.log(calcularEdad(toby, 'toby'));

console.log('La edad de toby es: ', calcularEdad(toby));

let edadTotal = calcularEdad(toby) + calcularEdad(mart) + calcularEdad(peshito)

console.log(edadTotal)

//

//RETO 03 JS EJEMPLO


// Pantalla de creado
let createScreen = document.getElementById('create-screen');

// Pantalla de lista
let productWindow = document.getElementById('product-window');
let emptyScreen = document.getElementById('empty');
let listScreen = document.getElementById('list');
let infoScreen = document.getElementById('info');


//Boton add(pantallaVacia)

let btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', function(){
    productWindow.style.display = 'none';
    createScreen.style.display = 'flex';

})

//Boton add(lista)

let listAdd = document.getElementById('list-add');

listAdd.addEventListener('click', function(){
    productWindow.style.display = 'none';
    createScreen.style.display = 'flex';

})

// Input Create

let nombreProducto = document.getElementById('nombre');
let iconoProducto = document.getElementById('icono');
let descripcionProducto = document.getElementById('description');

// Boton guardar
let btnSave = document.getElementById('btn-save');
btnSave.addEventListener('click', guardarCard)


// Function guardar info de values

function guardarCard(e){
    e.preventDefault();
    
    let nombre = nombreProducto.value;
    let icono = iconoProducto.value;
    let descripcion = descripcionProducto.value;

    if(nombre != '' && icono != '0'){

        productWindow.style.display = 'flex';
        emptyScreen.style.display = 'none';
        listScreen.style.display = 'flex';
        createScreen.style.display = 'none';

        addCard(nombre, icono, descripcion);

        resetValues();
    } else {
        alert('El nombre y la categoria son obligatorios')
    }

}

function addCard(nombreCard, imgIcono, descripcionCard){

    let card = `<li class="card">
                    <div class="info-product">
                        <img src="${imgIcono}" alt="${nombreCard}">
                        <h3>${nombreCard}</h3>
                        <p class="none">${descripcionCard}</p>
                    </div>
                    <button onclick="detailItem('${nombreCard}', '${imgIcono}', '${descripcionCard}')" class="btn-info-product">></button>
                </li>`

    

    let lista = document.getElementById('lista');

    lista.innerHTML += card;

    let hola = document.getElementsByClassName('hola');

}

const detailItem = (nombreCard, imgIcono, descripcionCard) =>{
    
    listScreen.style.display = 'none';
    infoScreen.style.display = 'flex';


    let item = `<div class="salir">    
                    <a href="#" id="salir">x</a>
                </div>
                <div class="mas-info-product">
                    <img src="${imgIcono}" alt="${nombreCard}">
                    <h3>${nombreCard}</h3>
                    <p>${descripcionCard}</p>
                </div>`;

    infoScreen.innerHTML = item;

    let salir = document.getElementById('salir');
    salir.addEventListener('click', function(){
        listScreen.style.display = 'flex';
        infoScreen.style.display = 'none';
    })
}


function resetValues(){
    nombreProducto.value = '';
    iconoProducto.value = '0';
    descripcionProducto.value = '';
}