/* 
Qual escolher?
🚀 Se estiver usando ES6+ (moderno), prefira Arrow Functions (()=>{}) e this. 🔥 Se precisar manter contexto em funções normais (function()) sem Arrow Functions, self pode ser útil!
*/
function pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade ++;
        console.log(this.idade);
    }.bind(this),1000)
}
new pessoa();


function pessoa2(){
    this.idade = 0;

    const self = this;
    setInterval(function(){
        self.idade ++;
        console.log(this.self);
    }.bind(this),1000)
}
new pessoa2();


function pessoa3() {
    this.idade = 0;
//com arrow function o this é o mesmo do contexto onde foi criada a função
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new pessoa3();
