const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo')
const findNemo = (array) =>{
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log("found Nemo")
    }
  }
  let t1 = performance.now()
  console.log('Call took ' + (t1 - t0) + ' ms')
}
findNemo(nemo)
findNemo(everyone)
findNemo(large)