// https://www.hackerrank.com/challenges/cavity-map/problem

function cavityMap(grid) {
    let gridMap = [];
    let n = grid.length;
    let depth = null;

    for(let i = 0; i < n; i++) {
        gridMap[i] = '';
        for (let j = 0; j < n; j++) {
            let border = i === 0 || j === 0 || i === n - 1 || j === n - 1;
            if (!border && grid[i][j] > Math.max(grid[i - 1][j], grid[i][j - 1], grid[i][j + 1], grid[i + 1][j])) {
                depth = 'X';
            } else {
                depth = grid[i][j];
            }
			
            gridMap[i] += depth;
        }
    }
    return gridMap;
}


let grid = ['1112', '1912', '1892', '1234'];
let output = cavityMap(grid);
console.log(output);