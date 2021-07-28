// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let distanceApples = apples.map(apple => a + apple);
    let distanceOranges = oranges.map(orange => b + orange);

    function fruitCount(fruitArray) {
        let count = 0;
        for (let i = 0; i <= fruitArray.length - 1; i++) {
            if (fruitArray[i] >= s && fruitArray[i] <= t) {
                count++;
            }
        }
        return count;
    }

    let applesNum = fruitCount(distanceApples);
    let orangesNum = fruitCount(distanceOranges);
  
    console.log(applesNum + "\n" + orangesNum);
}

let s = 7;
let t = 10;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];
let output = countApplesAndOranges(s, t, a, b, apples, oranges);
console.log(output);