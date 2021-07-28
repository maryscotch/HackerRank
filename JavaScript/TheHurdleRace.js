// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
	let highestNum = height.reduce((a, b) => Math.max(a, b));
	if (highestNum <= k) {
	    return 0;
	} else {
	    return highestNum - k;
	}
}

// let k = 4;
// let height = [1, 6, 3, 5, 2];
let k = 7;
let height = [2, 5, 4, 5, 2];

let output = hurdleRace(k, height);
console.log(output);