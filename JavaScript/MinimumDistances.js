// https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
    let num = null;
    let abs = null;
    for (let i = 0; i <= a.length - 1; i++) {
        for (let j = 0; j <= a.length -1; j++) {
            if (a[i] === a[j] && i !== j) {
                abs = Math.abs(j - i);
                if(num > abs || num === null) {
                    num = abs;
                }
            }
        }
    }

    if (num === null) {
        return -1;
    }
    return num;
}

let a = [7, 1, 3, 4, 1, 7];
// let a = [1, 2, 3, 4, 10];
let output = minimumDistances(a);
console.log(output);
