import styled from "styled-components";

export const Indice = styled.div`
  padding: 3px;
  margin-bottom: 3px;
  font-family: sans-serif;
  
  color: white;
  background-color: black;
  font-size: 12px;
  
  border-radius: 0px 0px 8px 8px ;

`
export const CellBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0px;
  flex-wrap: wrap
`

export const Cell = styled.div`
  padding: 12px;
  font-family: sans-serif;
  font-weight:bold;
  

  border-radius: 8px 8px 0px 0px ;


  background: #96f360;


  &:hover{
    box-shadow: inset 5px 4px 5px 3px rgba(0, 0, 0, 0.151);
  }
`

