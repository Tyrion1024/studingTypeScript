import Stack from '../Stack/stack'
import BinNode from './binNode'
import Queue from '../Stack2Queue/Stack2Queue'

class binTree<T> {
  protected _root: BinNode<T>
  protected _size: number

  public size = (): number => this._size

  public empty = (): boolean => !this._root
  
  public root = (): BinNode<T> => this._root



  public getHeightByNode = (node: BinNode<T>): number => node ? node.height : -1

  protected updateHeight = (node: BinNode<T>) => {
    // 更新传入节点node的高度
    node.height = 1 + Math.max(this.getHeightByNode(node.getLeftChild()), this.getHeightByNode(node.getLeftChild()))
    return node.height
  }


  protected updateHeightAbove = (node: BinNode<T>) => {
    // 更新传入节点及其祖先的高度
    while(node) {
      this.updateHeight(node)
      node = node.getParent()
    }
  }


  public insertAsLC = (node: BinNode<T>, data: T): BinNode<T>=> {
    this._size++
    const res = node.insertAsLC(data)
    this.updateHeightAbove(node)
    return res
  }

  public insertAsRC = (node: BinNode<T>, data: T): BinNode<T> => {
    this._size++
    const res = node.insertAsRC(data)
    this.updateHeightAbove(node)
    return res
  }
  


  public preOrder = (cb: Function): void => {
    let s: Stack<BinNode<T>> = new Stack()

    const traverse = (node: BinNode<T>) => {
      while(node) {
        cb(node.getData())
        if (node.getRightChild()) s.push(node.getRightChild())
        node = node.getLeftChild()
      }

      while(s.size()) {
        traverse(s.pop())
      }
    }


    traverse(this._root)
  }


  public inOrder = (cb: Function): void => {
    let s: Stack<BinNode<T>> = new Stack()

    const traverse = (node: BinNode<T>) => {
      while(node) s.push(node)

      while(s.size()) {
        const tempNode = s.pop()
        cb(tempNode.getData())
        if (tempNode.getRightChild()) traverse(tempNode.getRightChild())
      }
    }


    traverse(this._root)
  }


  public postOrder = (cb: Function): void => {
    let q: Queue = new Queue()
    q.enqueue(this._root)

    while(q.size()) {
      let node: BinNode<T> = q.dequeue()
      cb(node.getData())
      if (node.getLeftChild()) q.enqueue(node.getLeftChild())
      if (node.getRightChild()) q.enqueue(node.getRightChild())
    }
  }
}