/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and
returns the total sum of all numbers.
*/

function twoDimensionalSum(arr) {
  let totalSum = 0; //starting at empty sum. must be outisde the loops because if it were inside the loop it would reset to 0 every time the loop iterates. 
  
      for (i = 0; i < arr.length; i++) {
          let subArr = arr[i]; //this starts to increment each subarray within the main array, starting at index 0 all the way to the last index(arr.length)
          for (j = 0; j < subArr.length; j++) {
              let element = subArr[j]; //for each iteration, this picks each element in the subArray. NOTE: VERY IMPORTANT THAT IT IS NOT arr.length. because j is now picking the indices within the i arrays which we assigned as subArr.
              totalSum += element; //this is like saying totatlSum = totalSum + element; so every time these loops run, it is stored inside this totalSum variable which is one by one adding our indices within each subarray.
          }
  
      }
      return totalSum; //after all iterations complete, this return exists outside of the loops so that it can be reassigned to the final sum and return that number which is the purpose of the function.  
  }

// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalSum;
