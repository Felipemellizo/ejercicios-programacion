// este es el archivo de arreglos
let nombres = ["felipe","danilo","laura"]; 
console.log(nombres);
console.log(nombres[2]);
console.log(nombres[1]);
console.log(nombres[0]);

// Agregar elementos al arreglo de nombres
nombres.push("andres","jimena");
console.log(nombres);

// este es el archivo de equipos
let equipos = ["cali","america","nacional","medellin","millonarios"];
console.log(equipos[1]);

// averiguar el total de elementos
let motos = ["yamaha","kawasaki","honda","susuki","ducati"];

// motos.length
console.log(motos.length);

// sumar los numeros de un arreglo
let numeros = [2,700,5,3,2];
let suma = numeros.reduce((acumulador,valoractual)=> acumulador + valoractual,0);
console.log(suma);

// encontrar el numero mayor de un arreglo
let numeromayor = Math.max(...numeros);
console.log(numeromayor);

// invertir los textos de un arreglo
let frutas = ["manzana","pera","guayaba","lulo","mango"];
let frutasinvertidas = frutas.slice().reverse();
console.log(frutasinvertidas);

// agrupar arreglos
let mujeres = ["laura","sofia","valentina","daniela"];
let hombres = ["felipe","danilo","stywart","brayan"];
let personas =[...mujeres, ...hombres];
console.log(personas);

// poner en mayusculas los nombres
let mayusculas = mujeres [3]. toUpperCase();
console.log(mayusculas);