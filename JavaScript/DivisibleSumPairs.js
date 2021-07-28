// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i <= ar.length - 1; i++) {
        ar.forEach((val, index) => {
            if (index > i && index <= n) {
                let sum = ar[i] + val;
                if (sum%k === 0) {
                    count++;
                }
            }
        });

        // 最後から２つ目で終わる
        if (1 === n - i) {
            return count;
        }
    }
}


let n = 6;
let k = 3;
let array = [1,3,2,6,1,2];
let output = divisibleSumPairs(n, k, array);
console.log(output);