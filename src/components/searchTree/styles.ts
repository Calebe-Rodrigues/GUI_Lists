import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
`
export const Camada = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;


  min-width: 500px;
  background-color: aliceblue;

`

type NodeProp = {
  disabled?: boolean;
}

export const Node = styled.div<NodeProp>`
  padding: 12px;
  font-family: sans-serif;
  font-weight:bold;
  text-align: center;
  min-width: 18px;

  border-radius: 50px;
  background: #96f360;


  opacity: ${({disabled}) => disabled? "0" : "1"};

  &:hover{
    box-shadow: inset 5px 4px 5px 3px rgba(0, 0, 0, 0.151);
  }
`
export const GalhoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
type GalhoProp = {
  tem?: boolean;
  esquerda?: boolean;
  rota: string;
}

export const Galho = styled.div<GalhoProp>`
  width: 4px;
  background-color: black;
  border-radius: 25px;

  height: ${({rota}) => (rota === "45")? "80px": "50px"};

  rotate: ${({esquerda, rota}) => esquerda? rota+"deg" : "-"+rota+"deg"};
  
  transform: translate(${({esquerda, rota}) => esquerda? "-"+rota+"px" : rota+"px"}, ${({rota}) =>  
  (rota === "45")? rota+"px" : 
  (rota === "30")? "15px": "5px"});
  

  opacity: ${({tem}) => tem? "1" : "0"};
`
