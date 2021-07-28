// https://www.hackerrank.com/challenges/fair-rations/problem

function fairRations(B) {
    let sum = B.reduce((prev, current) => prev + current);
    if (sum%2 !== 0) {
        return 'NO';
    }
   
    let distribution = 0;
    for (let i = 0; i < B.length ; i++) {
        if(B[i]%2 !== 0) {
            B[i] += 1;
            B[i + 1] += 1;
            distribution += 2;
        }
    }
    return distribution;
}


let B = [2, 3, 4, 5, 6];
// let B = [2, 4, 5, 5, 6];
// let B =[1, 2];

let output = fairRations(B);
console.log(output);