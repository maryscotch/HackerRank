// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy

    let count = 0;
    while(s >= 0) {
        // 購入後の残金
        s = s - p;
        // 購入カウント
        if (s >= 0) {
            count++;
        }

        if ((p - d) < m) {
            p = m;
        } else {
            p = p - d;
        }
    }
    return count;
}


let p = 20,
	d = 3,
	m = 6,
	s = 80;

let output = howManyGames(p, d, m, s);
console.log(output);