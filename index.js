function isPalindrome(word) {
  //make an array
  let lettersArry = word.split('')

  //reverse the array
  lettersArry.reverse()

  //combine the array into a word
  let newWord = lettersArry.join('')

  //check if the words match
  if(word === newWord){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here

  -split the letters of the word into an arry

  -reverse the array(array.reverse())

  -combine the letters from the array into the new word

  -return true if the words match

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
