//Functional programing usando el metodo map([arrys elements], condition)
//una funcion es pura si siempre al recibir los mismos parametros se obtienen las mismas salidas

//por ejemplo una funcion inpura seria el Math.random(), 
//nunca produce la misma salida

//map es una funcion pura, crea un array con el resultado
//dado al llamar la funcion dada, o sea transforma los elementos
//del array en otros de acuerdo a la funcion dada

//un array con objetos
var forecast = [
    {day : 'Monday', sun: true, humidity: 10},
    {day : 'Thuesday', sun : false, humidity: 100},
    {day : 'Wednesday', sun : false, humidity: 100},
    {day : 'Thursday', sun : true, humidity: 25},
    {day : 'Friday', sun : false, humidity: 100},
    {day : 'Saturday', sun : true, humidity: 15},
    {day : 'Sunday', sun : true, humidity: 100}
];

//si queremos obtener todas los valores de humidity
//con for
var humid = [];

for (var i = 0; i < forecast.length; i++) {
    humid.push( forecast[i].humidity );
};

//con map parecido a filter, mas bonito!
var humid1 = forecast.map( function( wetness ) {
    //return wetness.humidity === 100; este retornaria trues and falses
    return wetness.humidity;
} );

//ES6, aun ams simplicado y simple con arrow functions!
const humid2 = forecast.map( wetness => wetness.humidity );

//ahora usando alguna condiciones y ES6
var numbers = [ 5, 10, 15, 20, 25 ];
//sopongamos queremos multiplicar cada elemento * 3
var triples = numbers.map( num => num * 3 ); //->[15, 30, 45, 60, 75]

//map 2 veces (chaining map)
var nums = [ 2, 4, 6, 8, 10, 12 ];

//entonces con ES6 arrow functions y el doble map
var double = nums.map( mult => mult * 2 ).map( mult => mult + 1 );
//el resultado final del array corresponde al resultado del segundo map, despues de ejecutarse

//otro con cadenas strings
//salvando la primera palabra en una variable
//cambiando todas las palabras a mayusculas
var greeting = ['hi', 'hello', 'hey', 'thanks'];

//ES6
var shout = greeting.map(salutation => salutation.toUpperCase());
