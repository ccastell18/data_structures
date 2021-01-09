let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function() {
    console.log('aaahhhh!');
  }
}

user.age //O(1)
user.name //O(1)

const a = new Map() //can save any datatype as key
const b = new Set() //only stores keys, no values