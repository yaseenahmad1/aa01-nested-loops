/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

// just like the previous example except this time we will be multiplying. 
function twoDimensionalProduct(array) {
    let totalProduct = 1; //my logic is, unlike the let totalSum = 0; example from the previous problem, if we multiply our elements with 0 we will get zero and not the total of the product so we will start at 1 to ensure the numbers exceed zero.

    for (i = 0; i < array.length; i++) {//here we use i++ because we are trying to figure out how many subarrays we have within our array. We are not multiplying them because we have to mulitply the elements within them first. 
        let subArr = array[i]; // we have assigned each subarray index to the variable 'subArr'
        for (j = 0; j < subArr.length; j++) { //not sure what dictation to use to multiply my j indices together.
            let element = subArr[j]; //store the product of j within the element variable. 
            totalProduct *= element; //this should start to multiply each element within each subarray together. 
        }

    }
    return totalProduct; //this should return the final product of the argument given. 
}

let arr1 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [[11, 4], [2]];
// console.log(twoDimensionalProduct(arr2)); // 88

// let arr3 = [
//   [-9, 8, 4],
//   [8, 2],
// ];
// console.log(twoDimensionalProduct(arr3)); // -4608

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
