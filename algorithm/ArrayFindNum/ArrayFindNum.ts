/*
给出一个二维数组，是由递增的固定长度的一维数组构成，其每一列也是从上往下递增的。
再给出一个数，判断它是否存在于二维数组中


  arr = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
    [1000, 2000, 3000, 4000, 5000]
  ]

  target = 300



  1. 两个for循环遍历这个二维数组的话，时间复杂度是n(二维数组长度) * m(一维数组的长度)
  2. 先比较每一行的最后一列，如果初次遇到某值大于target则在这一行内查找。这样可以将时间复杂度降到 m + n - 1
*/



const ArrayFindNum = (arr: number[][], target: number): boolean => {

  first:
  for(let i: number = 0; i < arr.length; i++) {
    if (arr[i][arr[i].length - 1] >= target) {
      second:
      for(let j: number = 0; j< arr[i].length; j++) {
        if (arr[i][j] === target) {
          return true
          break first;
          break second;
        }
      }
    }
  }
  return false

}


console.log(ArrayFindNum([
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50],
  [100, 200, 300, 400, 500],
  [1000, 2000, 3000, 4000, 5000]
], 3))