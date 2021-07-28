// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
    /*
     * Write your code here.
     */
  
    // ページの半分（小数点切り捨て）
    let pageHarf = Math.floor(n/2);
    
    //例外　総ページが３の時
    if (n === 3) {
        return 0;
    }
    
    // 偶数の場合
    if (p <= pageHarf) {
        let turnNum = Math.floor(p / 2);
        return turnNum;
    } else if (p >= pageHarf) {
        let pageDiff = n - p;
        // 最後のページが奇数の時
        if (n%2 !== 0 && p === n) {
            return 0;
        } else if (n%2 !== 0) {
            let turnNum = Math.floor((n -p)/2);
            return turnNum;
        } else if (n%2 === 0) {
            // ページ差分 
            let turnNum = Math.ceil(pageDiff / 2);
            return turnNum;
        }
    }
}

let output = pageCount(6, 2);
console.log(output);