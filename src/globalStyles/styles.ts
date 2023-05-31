import styled from "styled-components";

export const PageBox = styled.div`
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 18px;

  min-height: 270px;

  h1{
    margin: 12px;
  }
  h2{
    margin: 12px;
  }

`

export const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  margin-bottom: 50px;

`

export const CommandBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #b8b8b89c;
  padding: 5px;
  gap: 15px;
  flex-grow: 10;  

  border-radius: 10px;

  border-color: #c5eec7a2;
  border-style: groove;

  &:hover {
    border-style: inset;
  }
`;

export const Ball = styled.button`

  &:hover {
    background: #bdff9f85;
    cursor: pointer;
  }
  font-size: 20px;

  &:active {
    background: #bdff9ff8;
    //filter: blur(100px);
  }

  margin: auto;
  margin-right: 12px;
  padding: 8px;
  //margin: 50%;

  border: none;
  border-radius: 25px;
  background: #bdff9ff8;
  box-shadow: inset 5px 4px 5px 3px rgba(120, 241, 191, 0.76);
`


export const TextBox = styled.input`
  border-radius: 8px;
  text-align: center;
  padding: 8px;
  font-size: 20px;
  margin: 8px;
  margin-right: 24px;
  width: 50px;

  border-style: hidden;
`
export const OptionBox = styled.select`
  border-radius: 8px;
  text-align: center;

  border-style: hidden;
`