//1
const Nombre = prompt ("Ingrese su nombre")
const Fecha = promt ("Ingrese su fecha de nacimiento")
const FechaDeNacimiento = new Date(fecha);
const FechaAhora = new Date();
let Edad = FechaAhora.getFullYear().FechaDeNacimiento.getFullYear();
if (FechaAhora.getMonth() < FechaDeNacimiento.getMonth() || (FechaAhora.getMonth() == FechaDeNacimiento.getMonth() && FechaAhora.getDate() < FechaDeNacimiento.getDate())){
    Edad--;
}
const Resultado = document.getElementById('Resultado1')
Resultado.innerHTML = "Hola " + Nombre + " tienes " + Edad + " años"

//2
const frutas = ("Banana", "Mandarina", "Sandia", "Uva", "Kiwi", "Manzana", "Naranja", "Pera", "Melon", "Frutilla");
console.log (`Frutas disponibles: ${frutas}`);
let frutaElegida = prompt("Ingrese la fruta que quiere ver");
const mayus = prompt = capitalizeFirstLetter(frutaElegida);
const buscar = frutas.includes(frutaElegida);
if(buscar==true){
    Resultado.innerHTML = "Tenemos la fruta que estabas buscando"
}
else Resultado.innerHTML = "No tenemos esa fruta"

//3
console.log(num1 = '10'==10);
Resultado.innerHTML = num1

console.log(num2 = '10'===10);
Resultado.innerHTML = num2

const num3 = '10.6'
console.log(typeof num3);
Resultado.innerHTML = num3

console.log(true == 1);
if(true == 1){
    Resultado.innerHTML = "True es igual a 1"
}
else Resultado.innerHTML = "True no es igual a 1"

//4
const Ciudad = {
    Nombre: "BS AS",
    FechaFundacion: new Date (1678, 4, 8),
    Poblacion: 48495998,
    Extensión: 203
}
for(const caracteristica in Ciudad){
    console.log(`${caracteristica}: ${Ciudad[caracteristica]}`)
}