const usuario = { nome: "Carlos", idade: 30 };
const { nome, idade } = usuario;

const funcionario = {nome: "Ana", cargo: "Desenvolvedora"};
//const {nome, cargo} = funcionario;
funcionario.nome = "João"; // Modificando a propriedade nome do objeto funcionario


console.log(nome); // Carlos
console.log(idade); // 30
