function verificaErro(array, num) { 
    try {
        if(!array && !num) throw new ReferenceError("Envie parâmetros");

        if(typeof array !== "object") throw new TypeError ("Array precisa ser do tipo object");
    
        if(typeof num !== "number") throw new TypeError ("num precisa ser do tipo number");
    
        if (array.length !== num) throw new RangeError ("Tamanho inválido");

        return array;
    } 
    catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um typeError!");
            console.log(e.message)
        }
        else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
            console.log(e)
        }
        else {
            console.log("Tipo de erro não esperado: " + e);
        };
    };
};
let fab = null
console.log(verificaErro([2], 2))
/* function verificaPalindromo(string) {
    if (!string) {
        return "Por favor, digite uma palavra";
    }
    return string.split("").reverse().join("") === string;
}
function tryCatchExemplo(string) {
    try {
       verificaPalindromo(string)
   }
    catch(e) {
       throw e;
   } 
    finally {
        console.log("A string enviada foi: " + string); 
   }
}
tryCatchExemplo([2]); */
