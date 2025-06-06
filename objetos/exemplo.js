const produto = {}
produto.nome = 'Caneta Bic';
produto.preco = 1.90;
produto['Desconto Legal'] = 0.05; 
//console.log(produto.nome, produto.preco, "Desconto =",produto['Desconto Legal']);


const carro = {
    modelo: "Amarok",
    preco: 200000,
    proprietario: {
        nome: "Mario",
        idade: 27
    },
    endereco:{
        rua: "M.R",
        numero: 68,
        cep: "12345-678"
    }

}

console.log(carro.endereco.rua);