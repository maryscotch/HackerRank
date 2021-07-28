// https://www.hackerrank.com/challenges/sherlock-and-squares/problem

function squares(a, b) {
    let square = 0, i = 1, count = 0;
    while(square <= b) {
        square = i*i;
        if(square >= a && square <= b) {
            count++;
        }
        i++;
    }
    return count;
}


// let a = 3,
// 	b = 9;
let a = 17,
	b = 24;

let output = squares(a, b);
console.log(output);