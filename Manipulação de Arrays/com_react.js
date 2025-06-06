const lista = ["Maçã", "Banana", "Uva"];

return (
  <ul>
    {lista.map((fruta, index) => <li key={index}>{fruta}</li>)}
  </ul>
);
