const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
