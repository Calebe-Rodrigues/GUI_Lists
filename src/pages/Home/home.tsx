import { Link } from "react-router-dom";
function Home(){
  return(
    <ul>
      <li>
        <Link to="/sequential">Lista Sequencial</Link>
      </li>
      <li>
        <Link to="/linked">Lista Simplesmente Encadeada</Link>
      </li>
      <li>
        <Link to="/doubly">Lista Duplamente Encadeada</Link>
      </li>
      <li>
        <Link to="/stack">Pilha</Link>
      </li>
      <li>
        <Link to="/queue">Fila</Link>
      </li>
      <li>
        <Link to="/tree">Árvore Binária de Pesquisa</Link>
      </li>
    </ul>
  )
}

export default Home;
