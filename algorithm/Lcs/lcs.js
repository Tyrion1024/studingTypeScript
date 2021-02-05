/*
求解最长公共子序列的长度
*/
var lcs = function (a, b) {
    var arr = [];
    var row = b.length;
    var col = a.length;
    for (var i = 0; i < col; i++) {
        arr.push([]);
        for (var j = 0; j < row; j++) {
            var rowNum = j > 0 ? arr[i][j - 1] : 0;
            var colNum = i > 0 ? arr[i - 1][j] : 0;
            var num = rowNum > colNum ? rowNum : colNum;
            if (b[j] === a[i]) {
                if (j !== 0 && i !== 0) {
                    num = arr[i - 1][j - 1] + 1;
                }
                else {
                    num = 1;
                }
            }
            arr[i].push(num);
        }
    }
    return arr[col - 1][row - 1];
};
console.log(lcs('advantage', 'didactical'));
