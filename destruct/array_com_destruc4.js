function rand([min=0, max=100]){
    if (min > max) {
        [min, max] = [max, min];
    }
    const valor = Math.random() * (min - max) + min;
    return Math.floor(valor);
}

const arr = [40.8, 50.9];
console.log(rand(arr));