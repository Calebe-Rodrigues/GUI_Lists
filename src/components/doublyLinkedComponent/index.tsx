import React from "react";
import { Cell, Container, Indice, CellBox, Arrow, CellCell} from "./styles";
import { DoublyLinked } from "../../classes/doublyLinked";


export function DoublyLinkedComponent({lista, tam, newItem}: {lista: DoublyLinked, tam:number, newItem:number}) {
  let cells = []
  let isNew = false;
  for (let i=0; i<tam; i++){
    (newItem == i)? isNew = true: isNew = false;

    cells.push(
      <>
        <CellBox isNew={isNew}>
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