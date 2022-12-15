import tipCalculator from './modules/tipCalculator.js';
import totalFinal from './modules/totalFinal.js';

//Crear constantes de los elementos de HTML 
const main = document.getElementById("main");
const form = document.getElementById("main-form");


//Guardar valores de variables
let subtotal = document.getElementById("total-bill");
let porcentDiv = document.getElementById("form-btns");
let personas = document.getElementById("total-people");

//Variable para almacenar el valor porcentual seleccionado
let porcentTip; 

//Evento para escuchar a qué botón le damos click

porcentDiv.addEventListener('click', (e) => {
  porcentTip = e.target;
  console.log(porcentTip);

  if(e.target.id === "custom-tip") {
    console.log("Sí soy custom");
  }
});


/*
const resultadoTip = tipCalculator(subtotal, porcentTip, personas);

console.dir(resultadoTip.toFixed(2));

const resultadoFinal = totalFinal(subtotal, personas, resultadoTip);

console.log(resultadoFinal.toFixed(2)); */


//Crear un evento de submit para la forma
form.addEventListener('submit', (e) => {
  //Evitar la acción por defecto
  e.preventDefault();

  const formulario = {
    subtotalF: subtotal.value,
    porcentTipF: porcentTip.value,
    personasF: personas.value,
  }

  console.log(formulario);

  const {subtotalF, porcentTipF, personasF} = formulario;

  const tipFinal = tipCalculator (subtotalF, porcentTipF, personasF);

  console.log(tipFinal);

  const totalF = totalFinal(subtotalF, personasF, tipFinal);

  console.log(totalF);
    
});