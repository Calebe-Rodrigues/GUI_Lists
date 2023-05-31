import { Link } from "react-router-dom";
import { Ball, CommandBox } from "../../globalStyles/styles";

function Home(){
  return(
    <CommandBox>
      <Link to="/sequential">
        <Ball>Lista Sequencial</Ball>
      </Link>
      <Link to="/linked">
        <Ball>Lista Simplesmente Encadeada</Ball>
      </Link>
      <Link to="/doubly">
        <Ball>Lista Duplamente Encadeada</Ball>
      </Link>
      <Link to="/stack">
        <Ball>Pilha</Ball>
      </Link>
      <Link to="/queue">
        <Ball>Fila</Ball>
      </Link>
      <Link to="/tree">
        <Ball>Árvore Binária de Pesquisa</Ball>
      </Link>
    </CommandBox>
  )
}

export default Home;
