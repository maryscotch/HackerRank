// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    // Write your code here
   let count = 0;
   let subarray = 0;
   for (let i = 0; i <= a.length - 1; i++) {
       for (let j = 0; j <= a.length - 1; j++) {
           if (a[j] === a[i] || a[j] === (a[i] + 1)) {
               count++;
           }
       }
  
       if (count > subarray) {
           subarray = count;
       }
       count= 0;
   }
   return subarray;
}


// let a = [4, 6, 5, 3, 3, 1];
let a = [1, 2, 2, 3, 1, 2];
let output = pickingNumbers(a);
console.log(output);
