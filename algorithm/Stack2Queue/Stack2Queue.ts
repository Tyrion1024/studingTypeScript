class Stack {
  private list: any[] = []

  push = (el: any): any => {
    return this.list.push(el)
  }

  pop = (): any => {
    return this.list.pop()
  }

  peek = (): any => {
    return this.list.length ? this.list[this.list.length - 1] : undefined
  }

  isEmpty = (): boolean => {
    return !Boolean(this.list.length)
  }

  clear = () => {
    this.list = []
  }

  size = (): number => {
    return this.list.length
  }
}



export default class Queue {

  private inStack: Stack
  private outStack: Stack

  constructor() {
    this.inStack = new Stack()
    this.outStack = new Stack()
  }

  enqueue = (el: any): any => {
    return this.inStack.push(el)
  }

  dequeue = (): any => {
    if (this.inStack.isEmpty()) {
      return null
    }
    while(!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop())
    }
    const res = this.outStack.pop()

    while(!this.outStack.isEmpty()) {
      this.inStack.push(this.outStack.pop())
    }
    return res
  }

  front = (): any => {
    while(!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop())
    }
    const res = this.outStack.peek()

    while(!this.outStack.isEmpty()) {
      this.inStack.push(this.outStack.pop())
    }
    return res
  }

  isEmpty = (): boolean => {
    return this.inStack.isEmpty()
  }

  size = (): number => {
    return this.inStack.size()
  }
}


const loopQueuePassflower = (list: string[]): void => {
  let q: Queue = new Queue()
  list.forEach(e => q.enqueue(e))
  let count = 0
  while(q.size() !== 1) {
    const num = Math.round(Math.random() * 99) + 1
    for(let i = 0; i < num - 1; i++) {
      q.enqueue(q.dequeue())
    }
    console.log(`第${++count}轮游戏中，击鼓${num}次,最终${q.dequeue()}被淘汰！`)
  }
  console.log(`游戏结束，${q.front()}坚持到了最后！！！`)
}



// loopQueuePassflower(['a','b','c','d','e','f'])