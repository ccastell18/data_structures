//Sorting

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
//Bubble sorting
function bubbleSort(array){
  const length = array.length
  for (let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(array[j] > array[j + 1]){
        //swap numbers
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] =  temp
        //this repeats until all numbers are compared. Then the loop moves to the second number i=1 and does the same with for j loop.
      }
    }
  }
}

bubbleSort(numbers)
console.log(numbers)