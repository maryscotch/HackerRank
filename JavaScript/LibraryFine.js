// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) {
        return 10000;
    } else if (y1 === y2 && m1 > m2) {
        return 500*(m1 - m2);
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
        return 15*(d1 - d2);
    } else {
        return 0;
    }
}

let d1 = 9,
	m1 = 6,
	y1 = 2015,
	d2 = 6,
	m2 = 6,
	y2 = 2015;

let output = libraryFine(d1, m1, y1, d2, m2, y2);
console.log(output);