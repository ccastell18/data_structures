//Linear Search
let beasts = ['centaur', 'godzilla', 'mosura', 'minotaur', 'hydra', 'nessie']

beasts.indexOf('godzilla')

beasts.findIndex(function(item ) { 
  return item === 'godzilla'
})

  beasts.find(function(item){
    return item === 'godzilla'
  })

  beasts.includes('godzilla')

// BFS
//inside a binary tree function
function breadthFirstSearch(){
  let currentNode = this.ShadowRoot;
  let list = []
  //queue to access the children to go back within the level
  let queue = [];
  queue.push(currentNode);
   
  while(queue.length > 0 ){
    //shift will return and remove first item in the queue.
    currentNode = queue.shift();
    list.push(currentNode.value)
    if(currentNode.left){
      queue.push(currentNode.left)
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
  }
  //will return the full BFS
  return list
}


//BFS Recursive
//queue and list need to be added as parameters
function breadthFirstSearchR(queue, list){
  if(!queue.length){
    return list
  }
  const currentNode = queue.shift();
  if(currentNode.left){
    queue.push(currentNode.left)
  }
  if(currentNode.right){
    queue.push(currentNode.right);
  }
  return this.breadthFirstSearchR(queue, list)
}
//breadthFirstSearchR([this.root], [])


//DFS
//      9
//  4      20
//1   6  15  170

//inOrder - bottom up [1, 4, 6, 9, 15, 20, 170]
//preOrder - parent, left child, right child[9, 4, 1, 6, 20, 15, 170]
//postOrder -lower level up, root is last.[1,6,4,15,170,20,9]

function DFS(){
  traverseInOrder(){
    //traverse in order
    return traverseInOrder(this.root, [])
  };

  traversePreOrder(){
    return traversePreOrder(this.root, [])

  }

  traversePostOrder(){
    return traversePostOrder(this.root, [])

  }

}

function traverseInOrder(node, list){
  if(node.left){
    traverseInOrder(node.left, list);
    //keeps going left until it hits the bottom level
  }
  list.push(node.value)
  if(node.right){
    traverseInOrder(node.right, list)
  }
  return list
}

function traversePreOrder(node, list){
  list.push(node.value)
  if(node.left){
    traversePreOrder(node.left, list);
  }
  if(node.right){
    traversePreOrder(node.right, list)
  }
  return list
}

function traversePostOrder(node, list){
  list.push(node.value)
  if(node.left){
    traversePostOrder(node.left, list);
  }
  if(node.right){
    traversePostOrder(node.right, list)
  }
  list.push(node.value)
  return list
}
