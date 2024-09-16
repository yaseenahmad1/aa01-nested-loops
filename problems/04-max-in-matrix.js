/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
    let max = (matrix[0][0]);//this sets up the first bracket as the first subarray and the second bracket as the first index within that array. 

    for (i = 0; i < matrix.length; i++) { //this loop goes through the subarrays within our 2d array.
        let subArr = matrix[i];
        for (j = 0; j < subArr.length; j++) { //this loop goes through each element within each subarray. 
            if (matrix[i][j] > max) { //after each iteration, this 'if' statement ensures that if the subarray [i] and the element existing within that subarray [j] is greater than the very first element within the very first subarray...
                max = matrix[i][j]; //then to replace that variable 'max' with the greater matrix[i][j] and to continue this process until the largest value is found. 
            }
        }
    }
    return max; //this will return the largest value out of all subarray and indices within those subarrays. 
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
