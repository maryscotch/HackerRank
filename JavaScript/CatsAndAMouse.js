// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    let distanceX = Math.abs(z - x);
    let distanceY = Math.abs(z - y);

    // 猫がねずみと同じ位置
    if (x === y && x === z) {
        return "Mouse C";
    }

    // 絶対値
    if (distanceX === distanceY) {
        return "Mouse C"
    }

    if (distanceX < distanceY) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}


// 1 2 3
// 1 3 2
let output = catAndMouse(1, 3, 2);
console.log(output);