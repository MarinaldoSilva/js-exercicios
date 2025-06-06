const [n1,  , n3, n5, n6] = [15, 14, 78, 69];
console.log();
const [,[, nota]] = [[68,25,3],[,25,3]];
console.log(nota);

function rand({min =0, max = 100}){
    valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {
    min: 40, max:50
}
console.log(rand(obj))