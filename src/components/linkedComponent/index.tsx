import React from "react";
import { Cell, Container, Indice, CellBox, Arrow, CellCell} from "./styles";
import { Linked } from "../../classes/linked";


export function LinkedComponent({lista, tam, newItem}: {lista: Linked, tam:number, newItem:number}) {
  let cells = []
  let isNew = false;
  let isHead = true;
  for (let i=0; i<tam; i++){
    (newItem === i)? isNew = true: isNew = false;

    cells.push(
      <>
        <CellBox isNew={isNew}>
          <CellCell>
            <Cell isContent={true} isHead={isHead}>
              {lista.getElement(i)}
            </Cell>
            <Cell isHead={isHead}>
              {">"}
            </Cell>
          </CellCell>
        <Indice>
          {i}
        </Indice>
        </CellBox>
        <Arrow disable = {i+1 === tam}>
          <span/>
          <span/>
          <span/>
        </Arrow>
      </>
    )

    isHead = false;
  }
  return (
    <Container>
      {cells}
    </Container>
  )
}