const split = (str, delim) => {
  // write code for strings.split
  let newString = str.split(delim);//this makes a new variable that will split the string at the input given by the user
  return newString;

}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = str.match(/.{1,2}/g);//the g is a global flag and will return all items that match. however if it is not used only the first instance that matches is returned
  return arr;
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitWord = str.split('');//this makes the string into an array
  let reversedWord = splitWord.reverse('');//this makes the array switch its order backwards
  let newArray = reversedWord.join('');//this then takes the reversed array and turns it back into a string!
  return newArray;
}

module.exports = {
  split,
  pairs,
  reverse
}