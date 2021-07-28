// https://www.hackerrank.com/challenges/service-lane/problem

function serviceLane(n, width, cases) {
    let min = [];
    for (let i = 0; i < cases.length; i++) {
        let subArray = [];
        for (let j = cases[i][0]; j <= cases[i][1]; j++) {
            subArray.push(width[j]);
        }
        min.push(Math.min.apply(null, subArray));
    }
    return min;
}

let n = 8,
	width = [2, 3, 1, 2, 3, 2, 3, 3],
	cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

let output = serviceLane(n, width, cases);
console.log(output);