const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO
//falar agora é uma função independente. ✅ Como não foi chamada dentro do objeto pessoa,
//  this.saudacao não consegue acessar pessoa. ✅ O contexto de this não está vinculado ao objeto.


//solução para o conflito entre paradigmas: funcional e OO
const falarComBind = pessoa.falar.bind(pessoa); 
falarComBind(); //bind() cria uma nova função onde this estará sempre ligado ao objeto que passamos como argumento.
// Isso garante que o contexto de this seja o objeto pessoa, mesmo quando a função é chamada fora do objeto.
// Isso é útil quando queremos passar a função como callback ou usá-la em outros contextos,
// garantindo que o contexto de this permaneça correto. 
// O bind() é uma maneira de garantir que o contexto de execução da função seja o esperado,
// especialmente em situações onde a função pode ser passada como argumento ou usada de forma independente. 
// É uma prática comum em JavaScript para evitar problemas de contexto, especialmente ao trabalhar com eventos ou callbacks.


