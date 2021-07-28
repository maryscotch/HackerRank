// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
	let heights = 1;
	for (let i = 1; i <= n; i++) {
	    if (i%2 !== 0) {
		heights *= 2;
	    }
	    if (i%2 === 0) {
		heights += 1;
	    }
	}

	return heights;
}


let n1 = 0,
	n2 = 1,
	n3 = 4;
let output = utopianTree(n3);
console.log(output);