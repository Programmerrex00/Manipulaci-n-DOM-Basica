const h1 = document.querySelector('h1');

const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
// //    console.log({event});
//    event.preventDefault();
//    const sumaInputs = parseInt(input1.value) + Number(input2.value);   
//    pResult.innerText = "Resultado: " + sumaInputs;
// }


btnCalcular.addEventListener('click', sumarInputValues);

function sumarInputValues() {
   const sumaInputs = parseInt(input1.value) + Number(input2.value);   
   pResult.innerText = "Resultado: " + sumaInputs;
}






/*const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');


console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerText = 'Las bolas del toro negro <br> jajajajj';
h1.innerHTML = 'Las bolas del toro negro <br> jajajajj';

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

//h1.classList.toggle('rojo');
//h1.classList.contains('rojo');

input.value = "911";

const img = document.createElement('img');
img.setAttribute('src', 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg');

console.log(img);

pid.innerHTML = "";
pid.append(img); */



