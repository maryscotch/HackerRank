// https://www.hackerrank.com/challenges/beautiful-triplets/problem

function beautifulTriplets(d, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const num1 = arr[i] + d;
        const num2 = num1 + d;
        if (arr.includes(num1) && arr.includes(num2)) {
            result += 1;
        }
    }
    return result;
}

let d = 3,
	arr = [1, 2, 4, 5, 7, 8, 10];

let output = beautifulTriplets(d, arr);
console.log(output);
