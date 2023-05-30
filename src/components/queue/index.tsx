import { Cell, Container, Indice, CellBox } from "./styles";


export function Queue({lista, tam, newItem}: {lista: Array<number>, tam:number, newItem:number}) {
  let cells = []
  let isNew = false;
  let j = tam-1;
  for (let i=0; i<tam; i++){
    (newItem === i)? isNew = true: isNew = false;
    
    cells.push(
      <CellBox isNew={isNew}>
        <Cell>
          {lista[i]}
        </Cell>
        <Indice>
          {j}
        </Indice>
      </CellBox>
    )
    j--;
  }
  return (
    <Container>
      {cells}
    </Container>
  )
}