class Node {
  constructor(value){
    this.value = value, 
    this.next = null
  }
}
class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    //since this is the first node.
    this.tail = this.head;
    this.length = 1
  }
  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value){
   const newNode = new Node(value)
    newNode.next = this.head;
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
      next: null
    }
    //grabs the node previous to index so it changes the pointer value.
    const leader = this.traverseToIndex(index - 1)
    //This holds onto the value of the leader of the next node
    const holdingPointer = leader.next
    //the next of the leader is changed to the value of the new node
    leader.next = newNode;
    //this assigns the next, or pointer, of the new node to the value of the node value in holdingPointer.
    newNode.next = holdingPointer
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
    this.length--;
    return this.printList()
  }
  reverse(){
    if(!this.head.next){
      return this.head
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while(second){
      const temp = second.next;
      second.next = first
      first = second;
      second= temp
    }
    this.head.next = null
    this.head = first
    return this
  }
}