//Array notes

const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of memory

//push adds to end of array
strings.push('e'); //O(1)

//pop removes last iterable in array
strings.pop();
strings.pop();//O(1)
//time complexity is low because we are not looping. Just locating the item in memory.

//unshift inserts item at the beginning of array
strings.unshift('x'); //O(n)
//unshift adds at the beginning and has to loop over the array to reassign values.

//splice
strings.splice(2,0,'alien')//O(n/2) simplified to O(n)
// moves to strings[2] and puts 'alien' in. Then it iterates over the rest of the array and reassigns each item.

console.log(strings)

