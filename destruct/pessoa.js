const pessoa = {
    nome: 'João',
    idade: 30,
    endereco:{
        logradouro: 'Rua A',
        numero: 123,
        cidade: 'São Paulo'
    }
}

//tire de dentro do objeto pessoa as variaveis nome, idade e endereco
// e atribua a variaveis com o mesmo nome
const{nome, idade, endereco} = pessoa;

// as variaveis nome, idade vão ter seus valores guardadaas nas variavies 'i' e 'n'
const{nome: n, idade: i} = pessoa

console.log("Nome: %s \nIdade: %d", n, i);