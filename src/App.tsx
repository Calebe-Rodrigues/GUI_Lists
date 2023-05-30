import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SequentialPage } from "./pages/sequentialPage";
import { LinkedPage } from "./pages/linkedPage";
import { DoublyLinkedPage } from "./pages/doublyLinkedPage";
import { Linked } from "./classes/linked";
import { DoublyLinked } from "./classes/doublyLinked";
import { StackPage } from "./pages/stackPage";
import { QueuePage } from "./pages/queuePage";
import Home from "./pages/Home/home";


function App() {
  document.title = "Estruturas de Dados";
  let lista = new Linked();
  let listaD = new DoublyLinked();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sequential" element={<SequentialPage lista = {[]}/>}/>
        <Route path="/linked" element={<LinkedPage lista = {lista}/>}/>
        <Route path="/doubly" element={<DoublyLinkedPage lista = {listaD}/>} />
        <Route path="/stack" element={<StackPage lista = {[]}/>} />
        <Route path="/queue" element={<QueuePage lista = {[]}/>} />
      </Routes>
    </Router>
  );
}

export default App;
