import { SequentialPage } from "./pages/sequentialPage";
import { LinkedPage } from "./pages/linkedPage";
import { DoublyLinkedPage } from "./pages/doublyLinkedPage";
import { Linked } from "./classes/linked";
import { DoublyLinked } from "./classes/doublyLinked";


function App() {
  document.title = "Listas - Estruturas de Dados";
  let lista = new Linked();
  let listaD = new DoublyLinked();
  return (
    <>
      <div>
        <SequentialPage lista = {[]}/>
        <hr />
        <LinkedPage lista = {lista}/>
        <hr />
        <DoublyLinkedPage lista = {listaD}/>
      </div>
    </>
  );
}

export default App;
