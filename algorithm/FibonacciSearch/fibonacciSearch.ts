/*
有序数组斐波那契查找

传入数组，在[low, high)中查找target
*/


class Fib {
  public value: number
  public num: number
  private s: number = 1
  private l: number = 2


  constructor (num: number) {
    this.num = num
    this.value = this.getFib(num)
  }

  getFib = (num: number): number => {
    if (num < 3) {
      return num
    }
    for(let i = 3; i <= num; i++) {
      if (this.s > this.l) {
        this.l+=this.s
      } else {
        this.s+=this.l
      }
    }

    return this.s > this.l ? this.s : this.l
  }

  next = (): number => {
    if (this.num < 3) {
      return this.num + 1
    }
    return this.s + this.l
  }

  prev = (): number => {
    this.num--
    if (this.num < 3) {
      return this.num
    }
    if (this.s > this.l) {
      this.s-=this.l
    } else {
      this.l-=this.s
    }
    this.value = this.s > this.l ? this.s : this.l
    return this.value
  }
}

const fibonacciSearch = (arr: number[],target: number, low: number, high: number): number => {
  const fib: Fib = new Fib(high - low)

  while (low < high) {
    while (high - low < fib.next()) fib.prev()
    console.log('fib', fib.value, fib.num)
    const mid = low + fib.next() - 1
    if (arr[mid] < target) {
      low = mid + 1
    } else if (target < arr[mid]) {
      high = mid
    } else {
      return mid
    }
  }
  return -1
}




const testArr: number[] = [1,2,5,8,9,10,50,800]
console.log(fibonacciSearch(testArr, 800, 0, testArr.length))