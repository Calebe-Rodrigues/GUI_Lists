import React, { FormEvent } from "react";
import { CommandBox, Ball, TextBox, MenuBox, PageBox} from "../../globalStyles/styles"
import { Stack } from "../../components/stack/index";
import { useState } from "react";


export function StackPage({lista}: {lista: Array<number>}) {
  const [l, setL] = useState(lista);
  const [t, setT] = useState(lista.length);
  const [add, setAdd] = useState('');
  const [got, setGot] = useState('');
  const [newItem, setNewItem] = useState(NaN);

  function Add(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    let numero = parseInt(add);

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

  function Remove(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    lista.pop();
    setL(lista);
    setT(t-1);
  }

  function Find(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    setGot(lista[t-1].toString());
  }


  return (
    <PageBox> 
      <h1>Pilha</h1>
      <MenuBox>

        <CommandBox>
          <h2>Adicionar</h2>
          <form onSubmit={Add}>
            <TextBox 
              type="text"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
            <Ball>
              Add
            </Ball>
          </form>
        </CommandBox>

        <CommandBox>
          <h2>Remover</h2>
          <form onSubmit={Remove}>
            <Ball>
              Remove
            </Ball>
          </form>
        </CommandBox>

        <CommandBox>
          <h2>Consultar topo</h2>
          <form onSubmit={Find}>
            <Ball>Find</Ball>
            <TextBox type="text" value={got} readOnly/>
          </form>
        </CommandBox>

      </MenuBox>
      <div>
        <Stack lista={l} tam={t} newItem={newItem}/>
      </div>
    </PageBox>
  )
}