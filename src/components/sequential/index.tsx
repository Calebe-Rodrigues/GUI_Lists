import React from "react";
import { Cell, Container, Indice, CellBox } from "./styles";


export function Sequential({lista, tam}: {lista: Array<number>, tam:number}) {
  let cells = []
  for (let i=0; i<tam; i++){
    cells.push(
      <CellBox>
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