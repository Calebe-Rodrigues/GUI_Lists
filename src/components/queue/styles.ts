import styled, {keyframes} from "styled-components";

export const Indice = styled.div`
  padding: 3px;
  margin-bottom: 3px;
  font-family: sans-serif;
  
  color: white;
  background-color: black;
  font-size: 12px;
  
  border-radius: 0px 0px 8px 8px ;

`

const animate = keyframes`
  0% {filter: blur(15px); transform: translate(-40px, 0px)};
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
  flex-direction: column;

  
  animation-name: ${({isNew}) => isNew? animate : "none"};
  animation-duration: 0.5s;
  animation-iteration-count: 1;

`

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 0px;
  flex-wrap: wrap;
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

