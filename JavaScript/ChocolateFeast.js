// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
    let choco = Math.floor(n/c);
    let wrappers = choco;

    // 包みをチョコと交換できない
    if (wrappers/m < 1) {
        return choco;
    }

    // 交換できる
    while(wrappers/m >= 1) {
        // 交換して新たに食べたチョコの個数
        let newChoco = Math.floor(wrappers/m);
        choco = choco + newChoco;
        
        // 残りの包み（元々あった包み + 新しい包み）
        wrappers = wrappers%m + newChoco;

        if (wrappers/m < 1) {
            return choco;
        }
    }
}

// let n = 10
// 	c = 2,
// 	m = 5;

// let n = 12,
// 	c = 4,
// 	m = 4;

let n = 6,
	c = 2,
	m = 2;

let output = chocolateFeast(n, c, m);
console.log(output);