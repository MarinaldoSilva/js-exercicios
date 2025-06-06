import { useState, useEffect } from "react";

function DadosApi() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div>
      <h2>Dados da API:</h2>
      {dados.map(item => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
