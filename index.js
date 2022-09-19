function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(let i = 0; i< array.length; i++) {
    const complement = target - array[i]
    if (seenNumbers[complement]) return true
    seenNumbers[array[i]] = true
  }
  return false
}

// function hasTargetSum(array, target) {
//     for(let i = 0;i < array.length; i++) {
//       //n steps
//     const complement = target - array[i]
//     for(j = i + 1; j < array.length; j++) {
//       // n * n steps
//     if (array[j] === complement) return true
//   }
//   }
//   return false
// }

/* 
  Write the Big O time complexity of your function here
  rutime: 0(n^2)
  space: 0(n)
*/

/* 
  Add your pseudocode here
  create an obj to keep track of numbers we've already seen 
  iterate through each number in the array. 
  on the current number, find the accompanying number the equals to target
  iterate through the rest of the array 
  check if the key on our obj  is our compliment 
  if so, return true. 
  otherwise, add that number to the obj


  if I reach the end of the array, return false




  write a function that will check if the sum of two numbers in a array equal the target some 
  for example: expecting an array with[1,2,3,4,5] to have to numbers that equal 9 
  array will return true because of the numbers 4 and 5 
  To check for each giving number in the array, I must 
  iterate through each number. 
  upon iteration, find result that returns true
  otherwise  everything else that doesn't have a sum of numbers equal the target.
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
