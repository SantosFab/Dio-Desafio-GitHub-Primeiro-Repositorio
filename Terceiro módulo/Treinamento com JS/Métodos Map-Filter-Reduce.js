/* Map - Sem o método this */
/* function semThis(array) {
    return fab.map((number => number *2))
}
let fab = [2, 3, 4, 5, 6, 7];
console.log(fab)
console.log(semThis(fab))  */

/* Map - Com o método this */
/* function metodoThis(array, obj) {
    return array.map(function(array){ 
       return array * this.age}, obj);
}
const user1 = {
    firstName: "Fabrício",
    lastName: "Santos",
    age: 25,
    sex: "masculino",
};
const array = [1, 2]
console.log(metodoThis(array, user1)) */

/* Duvidas do exercício: porque a função não foi chamada com .call?
Porque quando tentei chamar com .call o resultado aparece NaN, o this é global?
Exemplo:
function metodoThis(array) {
    return array.map(function(number){ 
       return number * this.age});
}
console.log(metodoThis.call(user1, array))*/

/* Método Filter */
/* function filter(array) {
    return array.filter(par => par % 2 === 0);
 }
 let array = [30, 30, 40, 5, 223, 2049, 3034, 5, 5, 7, 9];
 console.log(filter(array)); */

/* Método reduce */
/* function reduce(x) {
    return x.reduce(function (prev, current) {
        console.log({prev})
        console.log({current})
        return prev + current;
    }, 100)
}
let array = [30, 30, 40, 5, 5, 5,];
console.log(reduce(array)); */

/* Arrow function */
/*  function reduce(x) {
    return x.reduce((prev, current) => prev + current, 100)
}
let array = [30, 30, 40, 5, 5, 5];
console.log(reduce(array)); */

const lista = [
    {
        produto: "manteiga",
        valor: 5,

    },
    {
        produto: "pipoca",
        valor: 5,
    },
    {
        produto: "biscoite",
        valor: 5,
    },
    {
        produto: "leite",
        valor: 4.5,
    },
];

function troco(array) {
    return array.reduce((prev, current) => prev - current.valor, 50);
}
console.log(troco(lista));
