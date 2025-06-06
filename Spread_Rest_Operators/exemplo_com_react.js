const [usuario, setUsuario] = useState({ nome: "Pedro", idade: 25 });

const atualizarIdade = () => {
  setUsuario({ ...usuario, idade: usuario.idade + 1 });
};
// Neste exemplo, usamos o operador spread para criar um novo objeto
// que contém todas as propriedades do objeto usuario, mas com a idade incrementada em 1.   