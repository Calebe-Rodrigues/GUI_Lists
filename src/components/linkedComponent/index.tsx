import React from "react";
import { Cell, Container, Indice, CellBox, Arrow, CellCell} from "./styles";
import { Linked } from "../../classes/linked";


export function LinkedComponent({lista, tam}: {lista: Linked, tam:number}) {
  let cells = []
  for (let i=0; i<tam; i++){
    cells.push(
      <>
        <CellBox>
          <CellCell>
            <Cell isContent={true}>
              {lista.getElement(i)}
            </Cell>
            <Cell>
              {">"}
            </Cell>
          </CellCell>
        <Indice>
          {i}
        </Indice>
        </CellBox>
        <Arrow disable = {i+1 == tam}>
          <span/>
          <span/>
          <span/>
        </Arrow>
      </>
    )
  }
  return (
    <Container>
      {cells}
    </Container>
  )
}