const buscarDados = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await response.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados!", erro);
  }
};

buscarDados();
