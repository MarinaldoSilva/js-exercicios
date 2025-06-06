function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

export default function App() {
  return <Saudacao nome="Pedro" />;
}
// Neste exemplo, a função Saudacao recebe um objeto com a propriedade nome
// e utiliza a desestruturação para extrair o valor de nome diretamente.

