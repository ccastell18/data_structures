//Sorting

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
//Bubble sorting
// function bubbleSort(array){
//   const length = array.length
//   for (let i = 0; i < length; i++){
//     for(let j = 0; j < length; j++){
//       if(array[j] > array[j + 1]){
//         //swap numbers
//         let temp = array[j]
//         array[j] = array[j+1]
//         array[j+1] =  temp
//         //this repeats until all numbers are compared. Then the loop moves to the second number i=1 and does the same with for j loop.
//       }
//     }
//   }
// }

// bubbleSort(numbers)
// console.log(numbers)

//Selection Sort
function selectionSort(array){
  const length = array.length
  for(let i = 0; i <  length; i++){
    //set current index as min
    let min = i;
    let temp = array[i];
    for(let j = i + 1; j < length; j++){
      if(array[j] < array[min]){
        //update min if current is lower than what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp
  }
  return array
}

selectionSort(numbers)
console.log(numbers)


//insert sorting
function insertionSort(array){
  const length = array.length
  for(let i = 0; i < length; i ++){
    if(array[i] < array[0]){
      //move number to the first position
      array.unshift(array.splice(i,1)[0])
    }else{
      //find where the number should go
      for(let j = 0; j < i; i++){
        if(array[i] > array[j-1] && array[i] < array[j]){
          //move the number to the right spot
          array.splice(j,0,array.splice(i,1)[0])
        }
      }
    }
  }
}

//Merge Sort
function mergeSort(array){
  if(array.length === 1){
    return array
  }
  //split array into left and right
  const length = array.length
  const middle = Math.floor(length/2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex =0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers)