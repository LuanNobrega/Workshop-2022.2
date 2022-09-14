import { useEffect, useState } from "react";
import ButtonLimpar from "./components/ButtonLimpar";
import ListaMonstro from "./components/ListaMonstro";

function App() {
  const [dados, setDados] = useState([]);

  const apagarDados = () => {
    setDados([]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI.slice(0, 5)));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>{dados.length} monstros</h1>

        <ListaMonstro dados={dados} />

        <ButtonLimpar apagarDados={apagarDados} />
      </section>
    </main>
  );
}

export default App;