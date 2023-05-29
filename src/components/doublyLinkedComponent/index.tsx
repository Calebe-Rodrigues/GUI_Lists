import React from "react";
import { Cell, Container, Indice, CellBox, Arrow, CellCell} from "./styles";
import { DoublyLinked } from "../../classes/doublyLinked";


export function DoublyLinkedComponent({lista, tam, newItem}: {lista: DoublyLinked, tam:number, newItem:number}) {
  let cells = []
  let isNew = false;
  let HoT = true;
  for (let i=0; i<tam; i++){
    (newItem == i)? isNew = true: isNew = false;
    (i == 0 || i == tam-1)? HoT = true: HoT = false;

    cells.push(
      <>
        <CellBox isNew={isNew}>
          <CellCell>
            <Cell HeadOrTail={HoT}>
              {"<"}
            </Cell>
            <Cell isContent={true} HeadOrTail={HoT}>
              {lista.getElement(i)}
            </Cell>
            <Cell HeadOrTail={HoT}>
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