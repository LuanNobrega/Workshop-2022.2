import Monstro from "./Monstro";

const ListaMonstro = (props) => {
  const dados = props.dados;

  return (
    <>
      {dados.map((objeto) => {
        return <Monstro key={objeto.id} monstroUnico={objeto} />;
      })}
    </>
  );
};

export default ListaMonstro;