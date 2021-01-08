class MyArray {
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index]
  }

  push(item){
    //using this.length because the length is zero. The this.length++ moves the length to one, so next time something is pushed it will go at this.data[1]
    this.data[this.length] = item;
    this.length++
    return this.length
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index)
  }
  shiftItems(index){
    //reassigns the remaining items in the array but leaves the length the same.  The last item needs to be deleted to make the array smaller.
    for(let i = index; i <this.length -1; i++ ){
      this.data[i] = this.data[i+1]    
    }
      //this deletes the last item in the array.
      delete this.data[this.length - 1];
      this.length
  }

}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('you')
newArray.push('!')
newArray.delete(2)
newArray.push('are')
newArray.push('nice')
console.log(newArray)