import React from "react";
import { Cell, Container, Indice, CellBox } from "./styles";

export const MAX_SIZE = 10;


export function Sequential({lista, tam, newItem}: {lista: Array<number>, tam:number, newItem:number}) {
  let cells = []
  let isNew = false;
  for (let i=0; i<MAX_SIZE; i++){
    (newItem === i)? isNew = true: isNew = false;
    
    cells.push(
      <CellBox isNew={isNew}>
        <Cell>
          {(i < tam)? lista[i]: "-"}
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