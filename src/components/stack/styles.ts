import styled, {keyframes} from "styled-components";

export const Indice = styled.div`
  padding: 3px;
  padding-top: 8px;
  width: 15px;
  font-family: sans-serif;
  
  color: white;
  background-color: black;
  font-size: 12px;
  
  border-radius: 0px 6px 6px 0px ;

`
const animate = keyframes`
  0% {filter: blur(20px); transform: translate(0px, -40px)};
  50% {filter: blur(0px)};
  100% {transform: translate(0px, 0px)};
`

type CBProp = {
  isNew?: boolean;
  isRight?: boolean;
  delay?: number;
}

export const CellBox = styled.div<CBProp>`
  display: flex;
  flex-direction: row;
  
  animation-name: ${({isNew}) => isNew? animate : "none"};
  animation-duration: 0.5s;
  animation-iteration-count: 1;

`

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  gap: 0px;
  flex-wrap: wrap;
  height:500px;

  
`

export const Cell = styled.div`
  padding: 5px;
  font-family: sans-serif;
  font-weight:bold;
  text-align: center;
  width: 100px;

  

  border-radius: 6px 0px 0px 6px;


  background: #96f360;


  &:hover{
    box-shadow: inset 5px 4px 5px 3px rgba(0, 0, 0, 0.151);
  }
`

