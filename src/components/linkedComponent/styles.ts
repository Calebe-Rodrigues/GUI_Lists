import styled, { keyframes } from "styled-components";

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
  0% {filter: blur(100px)}
  100% {filter: blur(0px)}
`

type CBProp = {
  isNew?: boolean;
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
  flex-direction: row;
  justify-content: center;
  gap: 0px;
  flex-wrap: wrap;
`

export const CellCell = styled.div`
  display: flex;
  flex-direction: row;

`
type cellProp = {
  isContent?: boolean;
  isHead?: boolean;
}

export const Cell = styled.div<cellProp>`
  padding: 12px;
  font-family: sans-serif;
  font-weight:bold;
  

  border-radius: 4px 4px 0px 0px ;

  background: ${({isContent, isHead}) => 
    isContent? 
      (isHead? "#f0b051": "#96f360"): 
      (isHead? "#fae2bf" : "#d5fabf")};

  &:hover{
    box-shadow: inset 5px 4px 5px 3px rgba(0, 0, 0, 0.151);
  }
`

const animateArrow = keyframes`
  0% {opacity: 0; transform: rotate(45deg) translate(-20px, -20px);}
  50% {opacity: 1;}
  100% {opacity: 0; transform: rotate(45deg) translate(20px, 20px);}
`
interface arrowProp{
  disable: boolean
}

export const Arrow = styled.div<arrowProp>`

  ${({disable}) => disable? "display: none": ""};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: rotate(270deg);
  
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 25px;
  

  span{
    display: block;
    width: auto;
    aspect-ratio: 1/1;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation-name: ${animateArrow};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    
    border-color: black;
  }
  span:nth-child(2) {
    animation-delay: -0.2s;
  }

  span:nth-child(3) {
    animation-delay: -0.4s;
  }

`

