const array = [function (a, b) {return a + b}];
console.log(); // 3

const objeto ={}

objeto.falar = ()=> {
    return `A ${array[0]} resulta em = ${array[0](1, 2)}`
}

//console.log(objeto.falar()); 

let dobro = (a)=>{return a*2}
console.log(dobro(Math.PI)); 

let dobro2 = a => a * 2;
console.log(dobro2(Math.PI));


function soma(a,b){
   return function(e){
         return a + b + e;
   }
}


function run(fun){
    return fun();
}

console.log(run(objeto.falar))
console.log(soma(1, 2)(3));


