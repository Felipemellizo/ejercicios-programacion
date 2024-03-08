/*
function sumar (num1,num2) {
    return num1 + num2 ;
}

console.log (sumar(4, 30));

// crear una funcion llamada saludar que recibe por 
// parametro la variable nombre
// llamar la funcion con su nombre por parametro

function saludar (nombre) {
    return "hola"+ nombre + "como estas";
}

console.log( saludar(" felipe"));
console.log( saludar(" duvan"));
console.log( saludar(" eduar"));
console.log( saludar(" daniel"));

function calculararea( base, altura) {
    return (base * altura) / 2 ; 
}
console.log (calculararea (10,5));

*/
// crear una funcion que calcule el IVA (19%) de un producto

function calcularIVA (precioproducto) {
    return (19 * precioproducto) / 100
 }
 
 let resultado = calcularIVA(500000)
 console.log(resultado)
 

 // escribe una funcion llamada esfindesemana () que tome un parametro dia (del 1 al 7 , donde 1 representa el lunes y asi hasta el 7 domingo) y devuelva un mensaje si el dia es sabado o es domingo 
 
 let dia = 5 
 function esfindesemana (dia) {
    if ( dia == 6 || dia == 7 ){
    console.log("es fin de semana");

    }
    else {
        console.log ("no es fin de semana");
    }
 
   } 
    
esfindesemana (5)