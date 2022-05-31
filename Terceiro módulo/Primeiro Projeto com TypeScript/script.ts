/* // Tratando a tag e input
const input = document.getElementById("input") as HTMLInputElement; // informar ao ts que estou pegando um HTMLInput 
// Não pode ser utilizando a seguinte forma "const input: HTMLInputElement", porque a const ainda não foi declarada, logo seu valor é undefinid 
input.addEventListener("input", (event) => {
    const i = event.currentTarget as HTMLInputElement; // Evento ocorrendo em um elemento de inpurt, com isso é possível observar os métodos 
    console.log(i.value);
});  */

/* generic type
// Por padrão o diamante é um T, e quando ele é atribuído em paramentros diferentes,elas não podem apresentar valores diferentes 
function exemploOne<T>(array: any[], valor: T) { // O diamanta faz com que o valor declarado seja aferido de acordo com o chamado da função 
    return array.map(item => item + valor)
}
exemploOne([1, 2, 3], 2);
exemploOne([1, 2, 3], "fab") */


/* //Desenvolmendo condições a partir de parâmentros 
interface IUsuario {
    id: string;
    email: string;
};

interface IAdmin extends IUsuario {
    cargo: "Gerente" | "Coordenado" | "Supervisor";
};

function redirecione(usuario: IUsuario | IAdmin) {
    if ("cargo" in usuario) {
        // redecionar para a área de administração
    }
    // redecionar para a área do usuário
};

// não posso referenciar assim:
function redirecione(usuario: IUsuario | IAdmin) {
    if (usuario.cargo) {
        // redecionar para a área de administração
    }
    // redecionar para a área do usuário
};

// Tornando item opcional
interface IUsuario2 {
    id: string;
    email: string;
    cargo2?: "Gerente" | "Coordenado" | "Supervisor" | "funcionário" // O item é um dado opcional
};

function exemploTwo(usuario: IUsuario2) {
if (usuario.cargo2) {
    // redirecionar para a área de gerencia (usuario.cargo2)
}
// redirecionar para área de recepção 
} */

// Método Omit - caso queira excluir um método da interface

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
};

interface brasileiro extends Omit<Pessoa, "nacionalidade"> {

};

const fabricio: brasileiro = {
    idade: 2,
    nome: "fabrício"
};