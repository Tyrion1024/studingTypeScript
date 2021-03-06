/*
传入有序数组，
求解去重操作会去掉的元素个数


*/


const unique = (arr: number[]): number => {
  let i: number = 0
  let j: number = 0
  while(i < arr.length) {
    if (arr[i] !== arr[j]) {
      j++
      arr[j] = arr[i]
    }
    i++
  }
  j++
  arr.splice(j)
  return i - j
}

unique([1,2,2,2,2,2,2,2,3,3,3,3,3,5,800,900])