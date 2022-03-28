//functional programing using reduce([array elements], acumulador)
//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
const array1 = [1, 2, 3, 4];
//ES6
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));// expected output: 10

//otro
var numbers = [1, 2, 3, 4];
numbers.reduce(function ( acc, curr, idx, arr) {
    return acc + curr
}, 5);

//un pelo mas complicado con array nested
var multiArr = [ [0,1], [2,3], [4,5]];

multiArr.reduce( function ( acc, curr, idx, arr ) {
    return acc.concat(curr);
}, [-2,-1])//->[-2,-1,0,1,2,3,4,5]

//practica
var homeRuns = [ 
    {batter : 12},
    {batter : 21},
    {batter : 28},
    {batter : 42},
    {batter : 31},
    {batter : 22},
    {batter : 17},
    {batter : 16},
    {batter : 10},
    {batter : 5},
];

//var totalHomers = homeRuns.reduce( (acc, curr) => acc + curr.batter);
var totalHomers = homeRuns.reduce( function (a, b) {
    console.log( 'accumulative ', a, 'currente', b)
    return a + b.batter;
},0);

//desafio: crear un array de 5 numeros, sumarlos, multiplicarlos y encontrar el de mayo valor
var arrNum = [ 2, 4, 6, 8, 10];

//suma

console.log(arrNum.reduce( (acc, curr) => acc + curr));//->30

//multiplicacion
console.log(arrNum.reduce( (acc, curr) => acc * curr));//->3840

//mayor valor
console.log(arrNum.reduce( function (acc, curr) {
        if ( acc > curr) {
            return acc;
        } else {
            return curr;
        }
    } ) 
);
//con metodos anidados
//console.log(arrNum.reduce( (acc, curr).filter( acc > curr)));
console.log(arrNum.map( number => number * 3).reduce( (a, b) => a + b));