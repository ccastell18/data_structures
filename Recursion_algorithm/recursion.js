//Recursion

//basic example of recursion
function inception(){
  inception()
}

//Base Case
//the counter should stop the function from stack overflow
let counter = 0
function inception(){
  if(counter > 3){
    return 'Done'
  }
  counter++;
  //the function doesn't return anything. it will be undefined. 
  //  inception();
  return inception()
}
inception()
//it looks like inception(inception(inception(inception('Done")))). The done needs to bubble up so return inception within the function so each function will return the data from the next function.