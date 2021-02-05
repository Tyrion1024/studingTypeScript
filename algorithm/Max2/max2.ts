/*
  二分查找

  传入数组 及两个有效下标
  找出数组中两个有效下标之间的最大值和次大值
*/

const max2 = (a: number[], low: number, high: number) => {
  let v_max: number
  let v_min: number


  if (a[low] >= a[high]) {
    v_max = a[low]
    v_min = a[high]
  } else {
    v_min = a[low]
    v_max = a[high]
  }

  if (low >= high - 1) {
    return {v_max: v_max, v_min: v_min}
  }
  let mid = (low + high) >> 1
  const res1 = max2(a, low, mid)
  const res2 = max2(a, mid + 1, high)
  if ( res1.v_max >= res2.v_max ) {
    v_max = res1.v_max
    v_min = res1.v_min >= res2.v_max ? res1.v_min : res2.v_max
  } else {
    v_max = res2.v_max
    v_min = res2.v_min >= res1.v_max ? res2.v_min : res1.v_max
  }
  return {v_max, v_min}
}


const arr = [1,2,300,4,5,8,7,400,1,1,5,50,5,1,18,1,0,5,0,5,3,189,500]
console.log(max2(arr, 0, arr.length - 1))