//Stack Array

class Stack {
  constructor(){
    this.array = [];
  }
  peek(){
    return this.array[this.array.length - 1]
  }
  push(value){
    this.array.push(value)
    return this
  }
  pop(value){
    this.array.pop()
    return this
  }
}