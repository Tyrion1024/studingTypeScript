/*
用ts模拟一个栈
通过栈结构完成解决一些问题
*/

export default class Stack<T> {
  private list: T[] = []

  push = (el: T): void => {
    this.list.push(el)
  }

  pop = (): T => {
    return this.list.pop()
  }

  top = (): T => {
    return this.size() ? this.list[this.size() - 1] : undefined
  }

  isEmpty = (): boolean => {
    return !Boolean(this.size())
  }

  clear = () => {
    this.list = []
  }

  size = (): number => {
    return this.list.length
  }
}


// 十进制转换2进制
const ten2bin = (num: number): number[] => {
  const s = new Stack<number>()

  while(num !== 0) {
    s.push(num % 2)
    num = num >> 1
  }
  const r: number[] = []

  while(!s.isEmpty()) {
    r.push(s.pop())
  }

  return r
}

// 匹配字符串中的括号是否有结余
const bracketTest = (str: string): boolean => {
  const bracketArray: string[] = ['<', '[', '(',  '{', '}', ')', ']', '>']
  const stack = new Stack<string>()
  for(let i: number = 0; i < str.length; i++) {
    let num: number = bracketArray.indexOf(str[i])
    if (num === -1) continue
    if (num >= (bracketArray.length / 2) && stack.isEmpty()) {
      return false
    }
    if (num + bracketArray.indexOf(stack.top()) === bracketArray.length - 1) {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.isEmpty()
}

// 检测a是否为b的栈混洗
const stackTest = (a: Stack<number | string>, b: Stack<number | string>): boolean => {

  const s: Stack<number | string> = new Stack<number | string>()
  const rb: Stack<number | string> = new Stack<number | string>()
	while (b.size()) {
		rb.push(b.pop())
	}
	while (a.size()) {
		s.push(a.pop())
		if (s.top() == rb.top()) {  //看底部元素是否可以完成操作
			s.pop()
			rb.pop()
			while (s.size() && s.top() == rb.top()) {   //将s中累计的元素清算
				s.pop()
				rb.pop()
			}
		}
	}
	return s.isEmpty()
}

// evaluation函数是用来计算字符串表达式的
const calculateString = (str: string): number => {
  let numStack: Stack<number> = new Stack<number>()
  let signalStack: Stack<string> = new Stack<string>()
  signalStack.push('(')
  let i: number = 0
  let strArr: string[] = (str+=')').split('').filter(v => v !== ' ')

  const signalMap = {
    '(': 1,
    ')': 1,
    '+': 2,
    '-': 2,
    '*': 3,
    '/': 3,
    '%': 3,
    '^': 3,
    '!': 4
  }




  while (i < strArr.length) {
    let signalIndex: number | undefined = signalMap[strArr[i]] 
    if (signalIndex) {
      if (strArr[i] === '(' || !strArr[i - 1] || !signalStack.top()) {
        signalStack.push(strArr[i])
        i++
        continue
      }
      while(signalIndex < signalMap[signalStack.top()]) {
        let lastSignal: string = signalStack.pop()
        let back: number
        let front: number
        let res = 1
        switch (lastSignal) {
          case '!':
            back = numStack.pop()
            for(let j = 1; j <= back; j++) {
              res *= j
            }
            break
          case '^':
            back = numStack.pop()
            front = numStack.pop()
            for(let j = 1; j <= back; j++) {
              res *= front
            }
            break
          case '+':
            back = numStack.pop()
            front = numStack.pop()
            res = front + back
            break
          case '-':
            back = numStack.pop()
            front = numStack.pop()
            res = front - back
            break
          case '*':
            back = numStack.pop()
            front = numStack.pop()
            res = front * back
            break
          case '/':
            back = numStack.pop()
            front = numStack.pop()
            res = front / back
            break
          case '%':
            back = numStack.pop()
            front = numStack.pop()
            res = front % back
            break
        }
        numStack.push(res)
      }

      if (strArr[i] === ')') signalStack.pop()
      else signalStack.push(strArr[i])
    } else {
      if (strArr[i - 1] && !isNaN(parseInt(strArr[i - 1]))) {
        numStack.push(numStack.pop() * 10 + parseInt(strArr[i]))
      } else {
        numStack.push(parseInt(strArr[i]))
      }
    }
    i++
  }
  return numStack.pop()
}

// console.log(calculateString('(1 + 2 ^ 3! - 4) * (5! - (6 - (7 - (89 - 0! ))))'))