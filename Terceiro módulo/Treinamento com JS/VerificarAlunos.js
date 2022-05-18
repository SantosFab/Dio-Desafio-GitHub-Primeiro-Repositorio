const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];
function verificaAlunos(array, media) {
    let novoArray= [];
    for (let i = 0; i < array.length; i++) {

		const {nome, nota} = array[i];

        if (nota >= media) {
            novoArray.push(nome);
        }        
    }
    return novoArray;
}
console.log(verificaAlunos(alunos));
/* sem o object destrututing
 function verificaAlunos(array) {
    let novoArray= [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].nota >= 5) {
            novoArray.push(array[i].nome);
        }        
    }
    return novoArray;
}
console.log(verificaAlunos(alunos, 5)) */