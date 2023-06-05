import { Container, Camada, Node, GalhoContainer, Galho} from "./styles";
import { BinarySearchTree } from "../../classes/SearchTree";


export function Tree({arvore, consultar}: {arvore: BinarySearchTree, consultar: Number}) {
  let camada0: any = []
  let camada1: any = []
  let camada2: any = []
  let camada3: any = []
  let camada = 0;

  let camadas = [camada0, camada1, camada2, camada3]

  let isNew = false;
  let fila = [arvore.root, "x"];
  let temEsquerda = false;
  let temDireita = false;
  let rota = "30";
  let isConsultar = false;

  while(fila.length > 1){
    if(camada >= 4) {
      fila.shift();
      continue;
    }

    temEsquerda = false;
    temDireita = false;
    switch(camada){
      case 0:
        rota = "45";
        break;
      case 1:
        rota = "30";
        break;
      case 2:
        rota = "20";
        break;

    }

    if (fila[0] === "empty"){
      camadas[camada].push(
        <Container>
          <Node disabled = {true}>
            x
          </Node>
          <GalhoContainer>
            <Galho tem = {false} rota = {rota}/>
            <Galho tem = {false} rota = {rota}/>
          </GalhoContainer>
        </Container>      
      )
      
      if (camada < 3){
        fila.push("empty") 
        fila.push("empty") 
      }
      fila.shift();
      continue;
    }

    if (fila[0] === "x"){
      camada += 1;
      fila.push("x");
    }
    else{

      if(fila[0] === null) {
        fila.shift();
        continue;
      }


      if (fila[0].left !== null) {
        fila.push(fila[0].left);
        temEsquerda = true;
      }else{
        if (camada < 3)
        fila.push("empty") 
      }

      if (fila[0].right !== null) {
        fila.push(fila[0].right);
        temDireita = true;
      }else{
        if (camada < 3)
        fila.push("empty") 
      }

      (fila[0].data === consultar)? isConsultar = true: isConsultar = false;

      camadas[camada].push(
        <Container>
          <Node isConsultar={isConsultar}>
            {fila[0].data}
          </Node>
          <GalhoContainer>
            <Galho tem = {temEsquerda} esquerda={temEsquerda} rota = {rota}/>
            <Galho tem = {temDireita} esquerda={!temDireita} rota = {rota}/>
          </GalhoContainer>
        </Container>      
      )
    }

    fila.shift();
  }

  return (
    <Container>
      <Camada>
        {camadas[0]}
      </Camada>
      <Camada>
        {camadas[1]}
      </Camada>
      <Camada>
        {camadas[2]}
      </Camada>
      <Camada>
        {camadas[3]}
      </Camada>
    </Container>
  )
}