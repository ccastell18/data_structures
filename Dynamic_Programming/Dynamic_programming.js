//Dynamic Programming

function addTo80(){
  return n + 80
}
addTo80(5)
addTo80(5)
addTo80(5)

//the computer would rerun this entire function over and over.

//memoizedAddTo80(n) is now cached and easy access to answer
let cache = {5: 85}
function memoizedAddTo80(){
  if(n in cache){
    return cache[n]
  }else{
    //caches memoizedAddTo80(n) 
    cache[n] = n + 80
    return cache[n]
  }
}