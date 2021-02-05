/*
bubbleSort
冒泡排序
*/

// count = 196   老老实实的冒泡排序
const bubbleSort1 = (arr: number[]): number[] => {
  let count: number = 0
  for (let i = 0;i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      count++
      if (arr[i] < arr[j]) {
        const temp = arr[i] + arr[j]
        arr[i] = temp - arr[i]
        arr[j] = temp - arr[i]
      }
    }
  }
  console.log('count', count)
  return arr
}

// count = 91  逐步锁定最小值的位置。
const bubbleSort2 = (arr: number[]): number[] => {
  let count: number = 0
  let i: number = 0

  while(i < arr.length) {
    let j: number = i + 1
    while (j < arr.length) {
      count++
      if (arr[i] > arr[j]) {
        const temp = arr[i] + arr[j]
        arr[i] = temp - arr[i]
        arr[j] = temp - arr[i]
      }
      j++
    }
    i++
  }
  console.log('count', count)
  return arr
}



// count = 85   逐步锁定最大值的位置，并在内循环里判断每两个相邻的数字是否为均为有序的
const bubbleSort3 = (arr: number[]): number[] => {
  let count = 0
  const bubble = (low: number, high: number): boolean => {
    let sorted: boolean = true
    while (++low < high) {
      count++
      if (arr[low - 1] > arr[low]) {
        const temp = arr[low - 1] + arr[low]
        arr[low - 1] = temp - arr[low - 1]
        arr[low] = temp - arr[low - 1]
        sorted = false
      }
    }
    return sorted
  }


  let high = arr.length 
  while(!bubble(0, high--));
  console.log('count', count)
  return arr
}


// count = 49   在内循环中last的最后一次赋值将作为新的上限继续参与内循环。
const bubbleSort4 = (arr: number[]): number[] => {
  let count = 0
  const bubble = (low: number, last: number): number => {
    let high = last
    while (++low < high) {
      count++
      if (arr[low - 1] > arr[low]) {
        const temp = arr[low - 1] + arr[low]
        arr[low - 1] = temp - arr[low - 1]
        arr[low] = temp - arr[low - 1]
        last = low
      }
    }
    return last
  }


  let last: number = arr.length
  while(last !== 1) {
    let res = bubble(0, last)
    last = last === res ? 1 : res
  }
  console.log('count', count)
  return arr
}

console.log(bubbleSort4([9,8,7,6,5,4,3,2,1,0,10,12,13,15]))