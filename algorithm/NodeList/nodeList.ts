type Elem = string | number 


class MyNode {

  private element: Elem
  public prev: MyNode
  public next: MyNode

  constructor(element: Elem, prev?: MyNode, next?: MyNode) {
    this.element = element
    if (prev) {
      this.prev = prev
    }
    if (next) {
      this.next = next
    }
  }


  public pred = (): MyNode => {
    return this.prev
  }

  public succ = (): MyNode => {
    return this.next
  }

  public data = (): Elem => {
    return this.element
  }

  public insertAsPred (el: Elem): MyNode {
    let node: MyNode = new MyNode(el, this.pred(), this)
    this.prev.next = node
    this.prev = node
    return node
  }

  public insertAsSucc (el: Elem): MyNode {
    let node: MyNode = new MyNode(el, this, this.succ())
    this.next.prev = node
    this.next = node
    return node
  }
}



class MyNodeList {
  private length: number
  public header: MyNode
  public trailer: MyNode


  constructor () {
    this.header = new MyNode('header')
    this.trailer = new MyNode('trailer', this.header, this.header)
    this.header.prev = this.trailer
    this.header.next = this.trailer
    this.length = 0
  }

  size = (): number => {
    return this.length
  }

  find = (el: Elem): MyNode | null => {
    if (!this.size()) {
      return null
    }
    let res: MyNode = this.first()
    let i = 0
    while(!(res.data() === el || i === this.size())) {
      res = res.next
      i++
    }
    return i === this.size() ? null : res
  }

  first = (): MyNode | null => {
    if (!this.size()) {
      return null
    }
    return this.header.next
  }

  last = (): MyNode | null => {
    if (!this.size()) {
      return null
    }
    return this.trailer.prev
  }

  insertAsFirst = (el: Elem): void => {
    this.header.insertAsSucc(el)
    this.length++
  }

  insertAsLast = (el: Elem): void => {
    this.trailer.insertAsPred(el)
    this.length++
  }

  insertBefore = (node: MyNode, el: Elem): void => {
    node.insertAsPred(el)
    this.length++
  }

  insertAfter = (node: MyNode, el: Elem): void => {
    node.insertAsSucc(el)
    this.length++
  }

  remove = (node: MyNode) => {
    let element: Elem = node.data()
    let prev = node.pred()
    let next = node.succ()
    prev.next = next
    next.prev = prev
    this.length--
    return element
  }

  uniquify = () => { // 有序链表去重
    let node = this.first()
    if (!node) {
      return
    }
    while(node.data() !== this.trailer.data()) {
      let temp: MyNode = node.succ()
      if (node.data() === temp.data()) {
        this.remove(temp)
      } else {
        node = temp
      }
    }
  }

  search = (el: Elem, p: MyNode): MyNode | null => { // 有序列表   倒序查找前p结点前   第一个小于等于的el的结点
    if (!this.size()) {
      return null
    }
    while(p.data() !== this.header.data()) {
      if (p.data() <= el) break;
      p = p.pred()
    }
    if (p.data() === this.header.data()) return null
    return p
  }


  selectionSort = () => {
    if (this.size() < 2) {
      return
    }
    let i: number = 0
    let last: MyNode = this.trailer
    while(i !== this.size()) {
      let max: MyNode = this.first()
      let temp: MyNode = max.succ()
      for(let j: number = 0; j < this.size() - i - 1; j++) {
        if (max.data() <= temp.data()) {
          max = temp
        }
        temp = temp.succ()
      }
      if (max.data() !== last.prev.data()) {
        this.insertBefore(last, this.remove(max))
      }
      last = last.pred()
      i++
    }
  }

  insetSort = () => {
    if (this.size() < 2) {
      return
    }
    let now: MyNode = this.first().succ()
    while(now.data() !== this.trailer.data()) {
      let op: MyNode = now
      now = now.succ()
      let temp: MyNode | null = this.search(op.data(), op.pred())
      if (temp) {
        this.insertAfter(temp, this.remove(op))
      } else {
        this.insertAsFirst(this.remove(op))
      }
    }
  }

  traverse = () => {
    let node: MyNode = this.first()
    for (let i: number = 0; i < this.size(); i++) {
      console.log(node.data())
      node = node.succ()
    }
  }
}


let linkList = new MyNodeList()
linkList.insertAsFirst(4)
linkList.insertAsFirst(3)
linkList.insertAsFirst(8)
linkList.insertAsLast(10)
linkList.insertAsLast(9)
linkList.insertAsLast(6)
linkList.insertAsLast(1)
linkList.insertAsFirst(6)

// linkList.uniquify()
console.log('linkList````````````')
console.log('linkList.length', linkList.size())



console.log('first````````````')
console.log('data:', linkList.first().data())
console.log('prev:', linkList.first().pred().data())
console.log('next:', linkList.first().succ().data())


console.log('last````````````')
console.log('data:', linkList.last().data())
console.log('prev:', linkList.last().pred().data())
console.log('next:', linkList.last().succ().data())



console.log('header````````````')
console.log('data:', linkList.header.data())
console.log('prev:', linkList.header.pred().data())
console.log('next:', linkList.header.succ().data())


console.log('trailer````````````')
console.log('data:', linkList.trailer.data())
console.log('prev:', linkList.trailer.pred().data())
console.log('next:', linkList.trailer.succ().data())




console.log('链表sort排序``````')
linkList.insetSort()
linkList.traverse()