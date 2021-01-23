//Dynamic Programming

function addTo80(){
  return n + 80
}
addTo80(5)
addTo80(5)
addTo80(5)

//the computer would rerun this entire function over and over.

//memoizedAddTo80(n) is now cached and easy access to answer
//let cache = {}
function memoizedAddTo80(){
  let cache = {}
  //this is a closure
  return function(n){
    if(n in cache){
      return cache[n]
    }else{
      //caches memoizedAddTo80(n) 
      cache[n] = n + 80
      return cache[n]
    }
  }
  
}

//very inefficient O(2^n)
function fibonacci(n){
  if(n < 2){
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

//Fibonnaci O(n)
function fibonacci(){
  let cache = {}
  return function fib(n){
    if(n in cache){
      return cache[n]
    }else{
      if(n < 2){
        return n;
      } else{
        cache[n]=fib(n-1) + fib(n-2)
        return cache[n];
      }
    }
    }
  }
