const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo')
const findNemo = (array) =>{
  for (let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log("found Nemo")
    }
  }
  console.log('Call took ' + (t1 - t0) + ' ms')
}

findNemo(large); 
// O(n) --> Linear Time
//number of number of operations increases with input #.

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes){
  console.log(boxes[0])//O(1)
  console.log(boxes[1])//O(1)
}
logFirstTwoBoxes(boxes)//O(2)
//O(1) --> //Constant time 
//runs at the same time. Predictable.

const boxes = [1,2,3,4,5];
//log all pairs of array
function logAllPairsOfArray(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j<array.length; j++){
      console.log(array[i],array[j])
    }
  }
}
logAllPairsOfArray(boxes)
//nested loops
//O(n) * O(n) = O(n^2)
//Quadratic time --> number of each elements multiplied by the number of operations leading to a steep curve upwards.
//2 elements take 4 operations. 3 elements take 9 operations.

function printAllNumbersThenAllPairSums(numbers){
  console.log('these are the numbers: ')
  numbers.forEach(function(number) {
    console.log(number)
  })

  console.log('and these are their sums: ')
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber)
    })
  })
}
//the first loop is O(n)
//the second loop is O(n^2)
//technically the function is considered O(n + n^2)
//but we call it O(n^2) because as the input increases, n^2 is more important the n.
//Scale is the most important part of simplification.

//O(n!)
//probably never use. adds a nested loop for every input. 


//Space Complexity
function boooo(n){
  for(let i = 0; i < n.length; i++){
    console.log('boooo!')
  }
}

boooo([1,2,3,4,5])
//We are not adding much space complexity.  Just assigning the iterable a variable. So this would be O(1)

function arrayOfHiNTimes(n){
  let hiArray = []
  for(i=0; i<n; i++){
    hiArray[i] = 'hi'
  }
  return hiArray
}
let hi = arrayOfHiNTimes(6)
console.log(hi)//O(n) because we are adding data structure and adding memory