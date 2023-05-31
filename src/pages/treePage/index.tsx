import React, { FormEvent } from "react";
import { CommandBox, Ball, TextBox, MenuBox, PageBox} from "../../globalStyles/styles"
import { Tree } from "../../components/searchTree";
import { useState } from "react";
import { BinarySearchTree } from "../../classes/SearchTree";


export function TreePage({arvore}: {arvore: BinarySearchTree}) {
  const [l, setL] = useState(arvore);
  const [add, setAdd] = useState('');
  const [remove, setRemove] = useState('');
  const [got, setGot] = useState('');
  const [newItem, setNewItem] = useState(0);

  function Add(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    let numero = parseInt(add);

    if(Number.isNaN(numero)){
      console.log("Número Invalido");
    }
    else{
      arvore.insert(numero);
      setL(arvore);
      setNewItem(newItem+1);
    }
  }

  function Remove(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    let numero = parseInt(remove);

    if(Number.isNaN(numero)){
      console.log("Número Invalido");
    }
    else{
      arvore.remove(numero);
      setL(arvore);
      setNewItem(newItem+1);
    }
  }

  function Find(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    setGot(arvore.findMinNode(arvore.getRootNode()).data.toString());
  }

  function PreOrder(){
    arvore.preorder(arvore.getRootNode());
  }

  function InOrder(){
    arvore.inorder(arvore.getRootNode());
  }

  function PostOrder(){
    arvore.postorder(arvore.getRootNode());
  }

  return (
    <PageBox> 
      <h1>Árvore Binária de Pesquisa</h1>
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
            <TextBox
              type="text"
              value = {remove}
              onChange = {(e) => setRemove(e.target.value)}
            />
            <Ball>
              Remove
            </Ball>
          </form>
        </CommandBox>

        <CommandBox>
          <h2>Consultar</h2>
          <form >
            <Ball onClick={InOrder}>Pre</Ball>
            <Ball onClick={PreOrder}>In</Ball>
            <Ball onClick={PostOrder}>Post</Ball>
          </form>
          
        </CommandBox>

      </MenuBox>
      <div>
        <Tree arvore={l}/>
      </div>
    </PageBox>
  )
}