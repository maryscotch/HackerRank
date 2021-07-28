// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let jump = 0;

    // ジャンプ１回
    if (c.length === 1 || c.length === 2) {
        return 1;
    }

    for (let i = 0; i <= c.length -1; i++) {
        if (i !== 0) {
            jump += 1;
        }
        // 最後のジャンプ
        if (c[i + 2] === undefined && i + 1 === c.length - 1) {
            jump += 1;
            return jump;
        }
        // 2つ先が０だったら
        if (c[i + 2] === 0) {
            i += 1;
        }
    }
    return jump;
}


let c = [0, 0, 1, 0, 0, 1, 0];
let output = jumpingOnClouds(c);
console.log(output);