// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
    let count = 0;
    a.forEach(val => {
        if (val <= 0) {
            count++;
        }
    });

    if (count >= k) {
        return "NO";
    } else if (count < k) {
        return "YES";
    }
}

// let k = 3;
// let a = [-1, -3, 4, 2];
let k = 2;
let a = [0, -1, 2, 1];

let output = angryProfessor(k, a);
console.log(output);
