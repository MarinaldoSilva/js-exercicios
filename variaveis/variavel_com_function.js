const nome = "João";  // Não pode ser alterado
let idade = 25;       // Pode ser atualizado

idade += 1; // idade agora é 26

function mostrarNome() {
  console.log(nome); // Ok, pois "nome" está no escopo global
}
