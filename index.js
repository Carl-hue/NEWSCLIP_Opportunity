const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

let counterVal = document.getElementById("Polo Vivo Hatch");

function valInc () {
  counterVal.value = parseInt(counterVal.value) + 1;
}

function valDec () {
  counterVal.value = parseInt(counterVal.value) - 1;
}

// let counterVal2 = document.getElementById("Polo Sedan");

// function valInc () {
//   counterVal2.value = parseInt(counterVal2.value) + 1;
// }

// function valDec () {
//   counterVal2.value = parseInt(counterVal2.value) - 1;
// }
