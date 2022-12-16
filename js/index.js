import tipCalculator from "./modules/tipCalculator.js";
import totalFinal from "./modules/totalFinal.js";
import updateTip from "./modules/updateTip.js";
import updateTotal from "./modules/updateTotal.js";

//Crear constantes de los elementos de HTML
const main = document.getElementById("main");
const form = document.getElementById("main-form");

const tipResult = document.getElementById('result-tip');
const totalResult = document.getElementById('result-total');

// Custom box
const customTip = document.getElementById('custom-tip');

//Guardar valores de variables
let subtotal = document.getElementById("total-bill");
let porcentDiv = document.getElementById("form-btns");
let personas = document.getElementById("total-people");

// Metodo para seleccionar todos los botones
const btns = document.querySelectorAll('.form__box__container');
const resetBtn = document.getElementById('reset-btn');

//Variable para almacenar el valor porcentual seleccionado
let porcentTip;
let custom;

//Evento para escuchar a qué botón le damos click

porcentDiv.addEventListener("click", (e) => {
  for(let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('active');
  }

  porcentTip = e.target;
  porcentTip.classList.add('active');

  console.log(porcentTip);

  if (e.target.id === "custom-tip") {
    custom = e.target;
    custom.classList.remove('active');
  }
});

/*
const resultadoTip = tipCalculator(subtotal, porcentTip, personas);

console.dir(resultadoTip.toFixed(2));

const resultadoFinal = totalFinal(subtotal, personas, resultadoTip);

console.log(resultadoFinal.toFixed(2)); */

//Crear un evento de submit para la forma
form.addEventListener("submit", (e) => {
  //Evitar la acción por defecto
  e.preventDefault();

  const formulario = {
    subtotalF: subtotal.value,
    porcentTipF: porcentTip.value,
    personasF: personas.value,
  };

  console.log(formulario);

  const { subtotalF, porcentTipF, personasF } = formulario;

  const tipFinal = tipCalculator(subtotalF, porcentTipF, personasF);

  const totalF = totalFinal(subtotalF, personasF, tipFinal);
  
  // Llamar a las funciones que actualizan el DOM
  updateTip(tipFinal.toFixed(2), tipResult);
  updateTotal(totalF.toFixed(2), totalResult);
});



// Boton para reiniciar la tip calculator
resetBtn.addEventListener('click', (e) => {
subtotal.value = '';
customTip.value = '';
personas.value = '';

for(let i = 0; i < btns.length; i++) {
  btns[i].classList.remove('active');
}

tipResult.innerText = '$0.00';
totalResult.innerText = '$0.00';
});
