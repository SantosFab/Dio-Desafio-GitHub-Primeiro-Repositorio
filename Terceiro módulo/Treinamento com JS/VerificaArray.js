function verifica(array) {
    if (!array) return "Por favor, coloque um array";
    if(!array.length) return -1;
    var arraytwo = [];    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            arraytwo.push(0);
        }
        else {
            arraytwo.push(array[i]);
        }        
    }
    return arraytwo
}
var teste = [2, 3, 4, 5, 6, 7, 20, 21]
console.log(verifica(teste))
