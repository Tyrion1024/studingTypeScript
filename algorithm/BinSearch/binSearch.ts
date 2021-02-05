/*
用2分查找
有序数组arr中的[low, high)区间中 查询target的下标
查找不到返回-1
*/
const binSearch = (arr: number[], target: number, low: number, high: number) => {
  while (low < high) {
    const mid = (low + high) >> 1
    if (target < arr[mid]) {
      high = mid
    } else if (arr[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}


/*
优化2分查找
有序数组arr中的[low, high)区间中 查询target的下标
查找不到返回-1
*/
const binSearchS = (arr: number[], target: number, low: number, high: number) => {
  while (low < high - 1) {
    const mid = (low + high) >> 1
    target < arr[mid] ? high = mid : low = mid
  }
  return arr[low] === target ? low : -1
}


const arr = [1,2,5,8,9,10,50,800]
console.log(binSearchS(arr, 800, 0, arr.length))

/*

二分法
有序数组arr中的[low, high)之间查找target，如果找到返回其下标，如果没有则返回小于target的最大者的下标，如果查找到多个目标则返回最后一个目标的下标
*/

const binSearchM = (arr: number[], target: number, low: number, high: number): number => {

  while (low < high) {
    const mid = (low + high) >> 1
    if (arr[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }


  return --low
}