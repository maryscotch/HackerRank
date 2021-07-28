// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = ar.reduce((prev, current, i, arr) => {
                return prev + current
                });
    return sum;
}

let array = [1, 2, 3, 4, 10, 11]
let output = simpleArraySum(array)
console.log(output)
