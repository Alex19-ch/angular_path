
//asignar tipo de variable const - let
const name = 'Alex';

//asignar 2 tipos de datos a una variable con el caracter | o un texto
let hpPoints: number | string = 95;
let hpPointsFull: number | 'Full Points';
let isAlive: boolean = true;

hpPoints = 'Full';
hpPointsFull = 5;

//imprimir en consola todas las variables
console.log(name, hpPoints, hpPointsFull, isAlive);

export{};