/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade! */
function calculaIdade(ano) {
    return `Seu nome é ${this.firstName} e você têm ${this.age} anos. Daqui há ${ano} terá ${this.age + ano} anos`
};
const user1 = {
    firstName: "Fabrício",
    lastName: "Santos",
    age: 25,
    sex: "masculino",
};
const user2 = {
    firstName: "Lucas",
    lastName: "Aragão",
    age: 27,
    sex: "masculino",
};
const user3 = {
    firstName: "Nathalia",
    lastName: "Canuto",
    age: 22,
    sex: "masculino",
};

console.log(calculaIdade.call(user3, 7))