import React, { FormEvent } from "react";
import { CommandBox, Ball, TextBox, MenuBox, PageBox, OptionBox } from "../../globalStyles/styles"
import { Sequential, MAX_SIZE } from "../../components/sequential/index";
import { useState } from "react";


export function SequentialPage({lista}: {lista: Array<number>}) {
  const [l, setL] = useState(lista);
  const [t, setT] = useState(lista.length);
  const [add, setAdd] = useState('');
  const [at, setAt] = useState('');
  const [remove, setRemove] = useState('');
  const [select, setSelect] = useState('number');
  const [select2, setSelect2] = useState('number');
  const [find, setFind] = useState('');
  const [got, setGot] = useState('');
  const [label, setLabel] = useState('Index: ');
  const [newItem, setNewItem] = useState(NaN);

  function Add(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    let numero = parseInt(add);
    let index = parseInt(at);

    if(t >= MAX_SIZE){
      console.log("Tamanho máximo atingido");
      return;
    }

    if(index > t){
      console.log("Indice Invalido");
      return;
    }

    if(Number.isNaN(index)){
      if(Number.isNaN(numero)){
        console.log("Número Invalido");
      }
      else{
        setNewItem(lista.length);
        lista.push(numero);
        setL(lista);
        setT(t+1);
      }
    }
    else{
      if(Number.isNaN(numero)){
        console.log("Número Invalido");
      }
      else{ 
        setNewItem(index);
        setAt('');
        lista.splice(index, 0, numero);
        setL(lista);
        setT(t+1);
      }
    }
  }

  function Remove(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    let numero = parseInt(remove);

    if(Number.isNaN(numero)){
      console.log("Numero inválido")
      return
    }

    if(select==='index'){
      if(numero>=t){
        console.log("Indice Invalido");
        return
      }

      lista.splice(numero, 1);
      setL(lista);
      setT(t-1);
    }

    if(select==='number'){
      if(lista.includes(numero)){
        lista.splice(lista.indexOf(numero), 1);
        setL(lista);
      setT(t-1);
      }
    }

  }

  function Find(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    let numero = parseInt(find);

    if (select2 === 'number'){
      setLabel('Index: ');
      if(lista.includes(numero))
      setGot(lista.indexOf(numero).toString());
      else{
        console.log("Numero inválido");
        setGot('');
      }
    }
    else{
      setLabel('Number: ');

      if(numero>=lista.length || Number.isNaN(numero)){
        console.log("Indice Inválido");
        setGot('');
      }
      else
        setGot(lista[numero].toString());
    }

  }


  return (
    <PageBox> 
      <h1>Sequencial</h1>
      <MenuBox>

        <CommandBox>
          <h2>Adicionar</h2>
          <form onSubmit={Add}>
            <label>Add: </label>
            <TextBox 
              type="text"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
            
            <label>At: </label>
            <TextBox 
              type="text"
              value={at}
              onChange={(e) => setAt(e.target.value)}
            />
            
            <Ball>
              Add
            </Ball>
          </form>
        </CommandBox>

        <CommandBox>
          <h2>Remover</h2>
          <form onSubmit={Remove}>
            <OptionBox value={select} onChange={(e) => setSelect(e.target.value)}>
              <option value="number">Number</option>
              <option value="index">Index</option>
            </OptionBox>
            <TextBox 
              type="text"
              value={remove}
              onChange={(e) => setRemove(e.target.value)}
            />
            <Ball>
              Remove
            </Ball>
          </form>
        </CommandBox>
        <CommandBox>
          <h2>Consultar</h2>
          <form onSubmit={Find}>
            <OptionBox value={select2} onChange={(e) => setSelect2(e.target.value)}>
              <option value="number">Number</option>
              <option value="index">Index</option>
            </OptionBox>
            <TextBox
              type="text"
              value={find}
              onChange={(e) => setFind(e.target.value)}
            />
            <Ball>Find</Ball>
            
            <label>{label}</label>
            <TextBox type="text" value={got} readOnly/>
          </form>
        </CommandBox>

      </MenuBox>
      <div>
        <Sequential lista={l} tam={t} newItem={newItem}/>
      </div>
    </PageBox>
  )
}