class Node {

  constructor(data){
    this.element = data;
    this.next = null;
    this.prev = null;
  }


}

export class DoublyLinked {
  constructor(head = null) {
      this.head = head;
      this.tail = head;
      this.size = 0;
  }
   add(element) {
    
    //cria o novo nó
    var node = new Node(element);

    //Se não tem head então o novo Nó se torna a head
    if (this.head === null){
      this.head = node;
      this.tail = this.head;
    }    
    else {
      this.tail.next = node;
      node.prev = this.tail;

      this.tail = node;
      
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

      if (index === this.size)
        this.add(element);
      
      else{
        if (index === 0){
          node.next = this.head;
          this.head.prev = node
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
          node.prev = prev;
          prev.next = node;
          curr.prev = node;
        }
        this.size++;
      }
    }
  }

  removeFrom(index){
    if (index < 0 || index > this.size)
      return console.log("Índice INVÁLIDO")

    if (this.size === 1){
      let element = this.head.element;
      this.head = this.tail = null;
      this.size--;
      return element;
    }

    else {
      if(index === this.size-1){
        let element = this.tail.element;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return element;
      }
      else{
        var curr, prev, i = 0;
        curr = this.head;
        prev = curr;

        if(index === 0) {
          this.head = this.head.next;
          this.head.prev = null;
        }
        else {
          while(i < index){
            i++;
            prev = curr;
            curr = curr.next;
          }

          prev.next = curr.next;
          curr.next.prev = prev;
        }
        this.size--;
        return curr.element;
      }
      
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
        if (prev === null) {
          if(this.size <= 1){
            let element = this.head.element;
            this.head = this.tail = null;
            this.size--;
            return element;
          }
          this.head = current.next;
          this.head.prev = null;
        }
        else {
          if (current.next === null){
            this.tail = current.prev;
            this.tail.next = null;
            this.size--;
            return element;
          }
          current.next.prev = prev;
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
    return this.size === 0;
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
    if (this.head === null)
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
