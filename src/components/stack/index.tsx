import { Cell, Container, Indice, CellBox } from "./styles";


export function Stack({lista, tam, newItem}: {lista: Array<number>, tam:number, newItem:number}) {
  let cells: JSX.Element[] = []
  let isNew = false;
  for (let i=0; i<tam; i++){
    (newItem === i)? isNew = true: isNew = false;
    
    cells.push(
      <CellBox isNew={isNew}>
        <Cell>
          {lista[i]}
        </Cell>
        <Indice>
          {i}
        </Indice>
      </CellBox>
    )
  }
  return (
    <Container>
      {cells}
    </Container>
  )
}