class Node {
  constructor(data){
    this.element = data;
    this.next = null;
  }


}

export class Linked {
  constructor(head = null) {
      this.head = head;
      this.size = 0;
  }

   add(element) {
    
    //cria o novo nó
    var node = new Node(element);

    //variável auxiliar
    var current;

    //Se não tem head então o novo Nó se torna a head
    if (this.head===null)
      this.head = node;
    else {
      current = this.head;

      while(current.next){
        current = current.next;
      }
      
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index){
    if (index < 0 || index > this.size)
      return console.log("Índice INVÁLIDO")

    else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      if (index===0){
        node.next = this.head;
        this.head = node;
      }
      else{
        curr = this.head;
        var i = 0;

        while( i<index ) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index){
    if (index < 0 || index > this.size)
      return console.log("Índice INVÁLIDO")

    else {
      var curr, prev, i = 0;
      curr = this.head;
      prev = curr;

      if(index===0) {
        this.head = this.head.next;
      }
      else {
        while(i < index){
          i++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      
      this.size--;
      return curr.element;
    }
  }

  removeElement(element){
    var current = this.head;
    var prev = null;
  
    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev===null) {
          this.head = current.next;
        } 
        else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // finds the index of element
  indexOf(element)
  {
    var count = 0;
    var current = this.head;
  
    // iterate over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element)
        return count;
        count++;
        current = current.next;
      }
  
    // not found
    return -1;
  }

  isEmpty()
  {
    return this.size===0;
  }

  getElement(index){
    if (index < 0 || index > this.size)
      return -1;

    var curr = this.head;
    for (var i=0; i<index; i++){
      curr = curr.next;
    }

    return curr.element;

  }

  printList(){
    if (this.head===null)
      console.log("Ta vazia a lista animal")

    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

}