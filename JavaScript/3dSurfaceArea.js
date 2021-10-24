function surfaceArea(A) {
	// Write your code here
	let width = A.length;
	let height = A[0].length;
	let totalPrice = 0;
	totalPrice += width * height * 2;

	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < A[i].length; j++) {
			if (j == 0) {
				totalPrice += A[i][j];
			}
			if (j > 0) {
				let num = Math.abs(A[i][j] - A[i][j - 1]);
				totalPrice += num;
			}
			if (i == 0 || i == A.length - 1) {
				totalPrice += A[i][j];
				if (A.length == 1) {
					totalPrice += A[i][j];
				}
			}
			if (j == A[i].length - 1) {
				totalPrice += A[i][j];
			}
			if (i > 0) {
				let num = Math.abs(A[i][j] - A[i - 1][j]);
				totalPrice += num;
			}
		}
	}

	return totalPrice;
}


let test = [[1, 3, 4], [2, 2, 3], [1, 2, 4]];
let test2 = [[1]];
let test3 = [[51], [32], [28], [49], [28], [21], [98], [56], [99], [77]];
let test4 = [[91, 80, 7, 41, 36, 11, 48, 57, 40, 43]];
console.log(surfaceArea(test4));