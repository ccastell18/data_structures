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

//Factorial Recursion
function findFactorialRecursive(number){
  //BaseCase
  if(number === 2){
    return 2
  }//O(n)
  //Recursive Case
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number){
  //Base Case
  let answer = 1;
  if(number === 2){
    return 2
  }
  //Recursive Case
  for (let i = 2; i <= number; i++){
    answer = answer * i
  }
  return answer
}//O(n)

function fibonacciIterative(n){
  let array = [0,1]
  for (let i = 2; i < n + 1; i++){
    array.push(array[i-2] + array[i - 1])
  }
  return array[n]
}//O(n)

function fibonacciRecursive(n){
  if(n < 2){
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}//O(2^n)does a large binary tree. takes more calculations.