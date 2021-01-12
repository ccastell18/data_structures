//Doubly Linked List

class Node {
  constructor(value){
    this.value = value, 
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value){
    //head points to null for prev
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    //since this is the first node.
    this.tail = this.head;
    this.length = 1
  }
  append(value){
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value){
   const newNode = new Node(value)
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }
  printList(){
    const array = []
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  insert(index, value){
    if(index >= this.length){
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    //grabs the node previous to index so it changes the pointer value.
    const leader = this.traverseToIndex(index - 1)
    //This holds onto the value of the following node
    const follower = leader.next
    //the next of the leader is changed to the value of the new node
    leader.next = newNode;
    //now we reference the value of the previous node(leader)
    newNode.prev = leader
    //this assigns the next, or pointer, of the new node to the value of the node value in holdingPointer.
    newNode.next = follower
    //now the follower needs reference to the value of the new node
    follower.prev = newNode;
    //now increase the length of the list
    this.length++;
    this.printList()
  }
  traverseToIndex(index){
    //check params
    let counter = 0;
    let currentNode = this.head;
    //this traverses the array until the counter equals the index the leader needs 
    while(counter !== index){
      //keeps moving by one.
      currentNode = currentNode.next;
      counter++
    }
    return currentNode
  }
  remove(index){
    //check params
    // Again, finds the index before the one being remove.
    const leader = this.traverseToIndex(index - 1)
    //The node to be removed. leader.next is pointing to its value.
    const unwantedNode = leader.next
    //changes the pointer of the leader to the value of the index following the node to be removed
    leader.next = unwantedNode.next
    the.length--;
    return this.printList()
  }
}