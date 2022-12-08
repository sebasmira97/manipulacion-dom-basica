const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.getElementById("btnCalcular");
const pResult = document.getElementById("result");

form.addEventListener("submit", sumar);

function sumar(event) {
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInput;
}
