

class HashTable{
  constructor(size){
    this.data = new Array(size)
  }
  //example of how a key is turned into a hash
  _hash(key){
    let hash = 0;
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash
  }//O(1)

    set(key, value){
      let address = this._hash(key)
      if(!this.data[address]){
        this.data[address] = [];
        this.data[address].push([key, value])
      }
      //if already exists, will add an array of indexes to the index
      this.data[address].push([key, value])
      return this.data
    }//O(1)

    get(key){
      let address = this._hash(key);
      const currentBucket = this.data[address];
      if(currentBucket){
        for(let i =0; i < currentBucket.length;i++){
          if(currentBucket[i][0] === key){
            return currentBucket[i][1]
          }
        }
      }
      return undefined
    }//O(1)

    keys(){
      const keysArray = []
      for(let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          //use 2 [0] because it creates and array of arrays. [i][0][0] gets just the keys.
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray
    }
}

//Recurring Character
//array = [2,5,1,2,3,5,1,2,4]
//return  2

//With Array
function firstRecurringCharacter(input){
  for(let i=0; i < input.length; i++){
    for(let j=i + 1; j < input.length; j++){
      if(input[i] === input[j]){
        return input[i]
      }
    }
  }
  return undefined
} //O(n^2)

//with Hash Table
function firstRecurringCharacter2(input){
  let map = {}
  for(let i = 0; i < input.length; i++){
    if(map[input[i]] !== undefined){
      return input[i]
    }else{
      map[input[i]] = [i]
    }
    console.log(map)
    //creates a map
    //{"2": 0}
    //{"2": 0, "5": 1}
    //{"1": 2, "2", 0, "5", 1}
    //then stops on 2 because it matches key

  }
  return undefined
}//O(n), but takes up more memory because it creates an object.


firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])

//array = [2,1,1,2,3,5,1,2,4]
//return 1

//array = [2,3,4,5]
//return undefined
