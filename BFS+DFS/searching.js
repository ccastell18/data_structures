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