/*
动态规划
求解最长公共子序列的长度
*/


const lcs = (a: string, b: string): number => {
  let arr: number[][] = []
  let row: number = b.length
  let col: number = a.length
  for(let i = 0; i < col; i++) {
    arr.push([])
    for(let j = 0; j < row; j++) {
      let rowNum: number = j > 0 ? arr[i][j - 1] : 0
      let colNum: number = i > 0 ? arr[i - 1][j] : 0
      let num = rowNum > colNum ? rowNum : colNum
      if (b[j] === a[i]) {
        if (j !== 0 && i !== 0) {
          num = arr[i - 1][j - 1] + 1
        } else {
          num = 1
        }
      }
      arr[i].push(num)
    }
  }
  return arr[col - 1][row - 1]
}

console.log(lcs('advantage', 'didactical'))