// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
	// 1
    return (m-1 + s)%n || n;
    
	// 2
    // if((n - s) + 1 >= m) {
    //     return (s + m) - 1;
    // } else if((n - s) + 1 <= m) {
    //     m = m - ((n - s) + 1);
    //     if((n - s) + 1 < 1) {
    //         return m;
    //     }
    //     if(m%n === 0) {
    //         return n;
    //     }
    //     if (m%n !== 0) {
    //         return m%n;
    //     }
    // }
}


// let n = 5,
// 	m = 2,
// 	s = 1;

let n = 5,
	m = 2,
	s = 2;

let output = saveThePrisoner(n, m, s);
console.log(output);