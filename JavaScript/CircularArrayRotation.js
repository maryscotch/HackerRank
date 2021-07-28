// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
    // a をローテーション
    for(let i = 1; i <= k; i++) {
        a.unshift(a.pop());

    }

    let result = [];
    for(let j = 0; j <= queries.length - 1; j++) {
        result.push(a[queries[j]]);
    }
    return result;
}


let a = [1, 2, 3],
	k = 2,
	queries = [0, 1, 2];

let output = circularArrayRotation(a, k, queries);
console.log(output);