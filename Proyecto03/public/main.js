let firstSection = document.querySelector('#firstsection')
let itemName = document.querySelector('#name')
let itemDescription = document.querySelector('#description')
let itemImage = document.querySelector('#icon')
let itemDivContainer = document.querySelector('#items')


//BOTONES

let addButton = document.querySelector('#additem').addEventListener('click', function () {
  document.querySelector('#titulo-main').style.display = 'none'
  document.querySelector('#firstsection').style.display = 'none'
  document.querySelector('#menu').style.display = 'block'

})

let backButton = document.querySelector('#back').addEventListener('click', function () {
  document.querySelector('#menu').style.display = 'none'
  document.querySelector('#firstsection').style.display = 'block'
})

let addToListButton = document.querySelector('#add').addEventListener('click', function () {

  addCardToMainScreen()
  document.querySelector('#menu').style.display = 'none'
  document.querySelector('#firstsection').style.display = 'block'
})

let resetButton = document.querySelector('#reset').addEventListener('click', function () {
  console.log('anda')
})

//FUNCIONES

function addCardToMainScreen() {
  let name = itemName.value;
  let icon = itemImage.value;
  let description = itemDescription.value;

  if (name != '' && icon != '0') {
    addCard(name, icon, description)
  } else {
    alert('Tenes campos vacios!')
  }
}


function addCard(nameList, iconList, descriptionList) {

  let itemFinal = `<div class="card mb-3" style="max-width: 540px; justify-content: center; display: inline-block;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${iconList}" class="img-fluid rounded-start img" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${nameList}</h5>
      <p class="card-text">${descriptionList}</p>
    </div>
  </div>
</div>
</div>`

  items.innerHTML += itemFinal

}

