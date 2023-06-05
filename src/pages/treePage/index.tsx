import React, { FormEvent } from "react";
import { CommandBox, Ball, TextBox, MenuBox, PageBox, TextResultBox} from "../../globalStyles/styles"
import { Tree } from "../../components/searchTree";
import { useState } from "react";
import { BinarySearchTree } from "../../classes/SearchTree";


export function TreePage({arvore}: {arvore: BinarySearchTree}) {
  const [l, setL] = useState(arvore);
  const [add, setAdd] = useState('');
  const [remove, setRemove] = useState('');
  const [got, setGot] = useState(NaN);
  const [newItem, setNewItem] = useState(0);
  const [result, setResult] = useState([]);
  const [find, setFind] = useState('');

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

    let numero = parseInt(find);

    if(Number.isNaN(numero)){
      console.log("Número Invalido");
    }
    else{
      let folha = arvore.search(numero);
      if(folha === null){
        console.log("Número não existe na árvore.")
      }
      else{
        setGot(numero);
        setNewItem(newItem+1);
      }
    }
  }

  function PreOrder(){
    setResult(arvore.preorder(arvore.getRootNode(), []));    
  }

  function InOrder(){
    setResult(arvore.inorder(arvore.getRootNode(), []));
  }

  function PostOrder(){
    setResult(arvore.postorder(arvore.getRootNode(), []));
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
          
          <form onSubmit={Find}>
            <TextBox
              type="text"
              value = {find}
              onChange = {(e) => setFind(e.target.value)}
            />
            <Ball>
              Find
            </Ball>
          </form>

          <div >
            <Ball onClick={InOrder}>In</Ball>
            <Ball onClick={PreOrder}>Pre</Ball>
            <Ball onClick={PostOrder}>Post</Ball>
          </div>
          <div>
            <TextResultBox
              type="text"
              value={result}
              readOnly
            />
          </div>
          
        </CommandBox>

      </MenuBox>
      <div>
        <Tree arvore={l} consultar = {got}/>
      </div>
    </PageBox>
  )
}
