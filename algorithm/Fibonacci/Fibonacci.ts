/* 斐波那契数列 0 1 1 2 3 5 8 13 21 ....
输入一个正整数n，返回第n项的值
n = 0, num = 0
n = 1, num = 1
n = 2, num = 1
n = 3, num = 2
n = 4, num = 3
*/


// 1. 递归法 如果按照递归来写的话，时间复杂度是2^n
const fun1 = (n: number): number => {
  return n > 1 ? fun1(n - 1) + fun1(n - 2) : n === 1 ? 1 : 0
}

// 2. 利用循环的方法计算，可以把时间复杂度控制到n - 1
const fun2 = (n: number): number => {
  if (n > 1) {
    let num0: number = 0, num1: number = 1, i: number = 2

    while (i !== n) {
      if (num1 > num0) {
        num0+=num1
      } else {
        num1+=num0
      }
      i++
    }
  
    return num0 + num1
  } else {
    return n
  }
}