function criSet(array) {        
    const set = new Set(array);
    return [...set];
    
}
var array = [30, 30, 40, 5, 223, 2049, 3034, 5, 5];
console.log(criSet(array))
