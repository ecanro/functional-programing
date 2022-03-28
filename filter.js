//basicamente se trata de funciones de alto orden
//higher order functions som aquellas que toman otras funciones como argumento
//o devuelven otra funciona como resultado


//otra definicion segun el Eric Elliott:
/**
 * LA escencia de la PF es realmente muy simple, son funciones construidas com 
 * muy poco codigo, reusable y predecible
 */

 //functional programing using array.filter(function (currentValue){ return some;})
 //este metodo retorna otro array de valores verdaderos encontrados en el array original
//ordenados en el orden en que han sido encontrados
 //tenemos este codigo
var testScores = [ 92, 87, 54, 63, 75, 69 ];
var passingTest = function (test) {
    return test > 60;
}

//2 posibles soluciones
//dentro de la variable graduation1 guardaremos el resultado de usar filter que
//llama a la funcion validadora 
var graduation1 = testScores.filter(passingTest);
//ó
var graduation = testScores.filter( function(test) {
    return test > 60
} );//->[92, 87, 63, 75, 69]

//ES6 arrow functions
var graduation = testScores.filter( test => test > 60 );

//si fuera con un ciclo for
//ya tenemos nuestro array encima
var graduation3 = [];
for ( i = 0; i < testScores.length; i++ ) {
    if(testScores[i] > 60) {
        graduation3.push(testScores[i]);
    }
}

//otro ejemplo
//tenemos este array llamado weather
var weather = [ 72, 84, 34, 56, 92, 24, 47, 85, 72, 54 ];

//ciclo for comunmente usado
var goOutside = [];//el cual almacenara los elementos que concuerden con la condicion dada
//ciclo for
for ( var i = 0; i < weather.length; i++ ) {
    if ( weather[i] > 70 ) {
        goOutside.push(weather[i]);
    }
}
goOutside;//->[72, 84, 92, 85, 72] not bad!!

//pero con programacion funcional seria mucho mas simple y menos codigo
//creamos una funcion validadora

var niceWeather = function (temp) {
    return temp > 70;
}
//creamos la variable que almacenara el resultado de filter que invocamos aqui mismo!
var goOutside1 = weather.filter(niceWeather);

//ó de una manera aun mas simplificada, ya con la funcion dentro
var goOutside2 = weather.filter(function (temp) {
    return temp > 70;
});

//ES6 !!!!*****woa!!!!
var goOutSide3 = weather.filter(temp => temp > 70);

//ahora un poquito mas compleja con arrays y objetos!
var forecast = [
    {day : 'Monday', sun: true},
    {day : 'Thuesday', sun : false},
    {day : 'Wednesday', sun : false},
    {day : 'Thursday', sun : true},
    {day : 'Friday', sun : false},
    {day : 'Saturday', sun : true},
    {day : 'Sunday', sun : true}
];
//ciclo for comun
var sunnyDays = [];

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
};

//con filter
var sunnyDays1 = forecast.filter( function (weather) {
    return weather.sun;
});

//con ES6 arrow functions
var sunnyDays1 = forecast.filter(weather=>weather.sun);

//