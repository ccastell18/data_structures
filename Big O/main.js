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
//O(n) --> Linear Time
//number of number of operations increases with input #.

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes){
  console.log(boxes[0])//O(1)
  console.log(boxes[1])//O(1)
}
logFirstTwoBoxes(boxes)//O(2)
//O(1) --> Constant time 
//runs at the same time. Predictable.