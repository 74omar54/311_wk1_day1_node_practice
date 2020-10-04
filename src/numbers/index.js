const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0){// when looking for even numbers the modulus is the best way to go, because there will be a remainder of 0 with all even numbers when divided by 2
    return true;
  }//this test was looking for a boolean so I had to return either true or false depending on the number
  return false;

}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;//using reduce() I was able to make all the numbers in an array add up to eachother in order to have one number left = sum
  }, 0);//the zero ensures me that it will start from index at 0
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let theArray = arr.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;//same thing as the sum function, except with the if statement I can see if the array and the sum are equal to eachother. 
  }, 0);
  if (theArray == sum){
    return true;
  } else{
    return false;
  }// once again the test are looking for a boolean so it has to return either true, or false

}

module.exports = {
  isEven,
  sum,
  comboSum
}