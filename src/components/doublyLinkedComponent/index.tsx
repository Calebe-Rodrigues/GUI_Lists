import React from "react";
import { Cell, Container, Indice, CellBox, Arrow, CellCell} from "./styles";
import { DoublyLinked } from "../../classes/doublyLinked";


export function DoublyLinkedComponent({lista, tam}: {lista: DoublyLinked, tam:number}) {
  let cells = []
  for (let i=0; i<tam; i++){
    cells.push(
      <>
        <CellBox>
          <CellCell>
            <Cell>
              {"<"}
            </Cell>
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
        <CellBox>
          <Arrow rot="90deg" disable = {i+1 == tam}>
            <span/>
            <span/>
            <span/>
          </Arrow>
          <Arrow rot="270deg" disable = {i+1 == tam}>
            <span/>
            <span/>
            <span/>
          </Arrow>
        </CellBox>
      </>
    )
  }
  return (
    <Container>
      {cells}
    </Container>
  )
}