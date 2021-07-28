// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

function kaprekarNumbers(p, q) {
    // 正の整数を2乗し、それが偶数桁 2n 桁である場合は先頭 n 桁と末尾 n 桁に分け、奇数  
    // 桁 2n + 1 桁である場合は先頭 n 桁と末尾 n + 1 桁に分けて和を取る
    // この操作によって 元の値に等しくなる数がカプレカ数

    let result = '';
    for(let i = p; i <= q; i++) {
        let square = String(i*i);
        let num1 = square.slice(0, square.length/2);
        let num2 = square.slice(square.length/2);
        if (Number(num1) + Number(num2) === i) {
             result += i + ' ';
        }
    }

    if (result === '') {
        result += 'INVALID RANGE';
    }
    console.log(result);
}

let p = 1,
	q = 100;

let output = kaprekarNumbers(p, q);