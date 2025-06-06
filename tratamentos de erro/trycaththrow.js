function tratarErro(error){
    //throw new Error('Erro NÃO IDENTIFICADO:');
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date().getDate()
    }
}

function caixaAlta(obj){
    try{
        return `Meu nome é ${obj.name.toUpperCase()}, e tenho ${obj.idade} anos de idade.`;
    }catch(e){
        console.log('Executando o Catch:');
        tratarErro(e);        
    }finally{
        console.log('executando finally...');
    }
}

const obj = {
    name: 'Rebeca',
    idade: 25
}

console.log(caixaAlta(obj));