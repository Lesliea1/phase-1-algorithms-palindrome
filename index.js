/*
const newArray = [2]
const string = "leslie"
const tArray = string.split("")

//identify each charater
//push those characters into a new array
// push those characters into a new array


tArray.reverse()
//reverse is O(n)
//loop through array starting at the end
// replace values based on that loop 

for (i=0; i<newArray.length; i++){

}

const myCallback = (item) =>{ 
  return item +1
}

const mappedArray = newArray.map(myCallback);

let dog = "laundry"
console.log(dog.split("").reverse())

const stringReverser = (string) => {
//O(n)

  const newString = string
  //O(n)
  .split("")
  //O(n)
  .reverse();
  //O(n)

  return newString;
}
*/

//make sure to grab last number in array

const myArray = [2,3,4,5,6]
  myArray[myArray.length-1]

//when referring to last item in array, we refer to
//array.length-1
//second to last is array.length-1-2

function isPalindromeFirst(word){
  //O(n)
  //O(n) + O(n) + O(n) + 1
  //O(3n+1)
  //O(n)

  if(word.split("").reverse().join("")=== word) return true
  return false
}

function isPalindrome(word) {

  for (i=0; i<word.length/2; i++){
    const j = word.length-1-i

    if (word[i] !== word[j]){
      return false
    }
    return true
  }
  
}

let response = isPalindromeFirst("racecar")


/* 
 function takes a string
 inspect each character
 split the string into an array of characters
 return array of characters that have been reversed--
 iteratae throught the characters--
 verify the strings match or dont
 return true or false

 racecar should return true 
 ninja should return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
