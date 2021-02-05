export default class BinNode<T> {
  private data: T
  private parent: BinNode<T>
  private leftChild: BinNode<T> | null
  private rightChild: BinNode<T> | null

  public height: number

  constructor (data: T, parent: BinNode<T>, leftChild?: BinNode<T> | null, rightChild?: BinNode<T> | null) {
    this.data = data
    this.parent = parent
    this.leftChild = leftChild ? leftChild : null
    this.rightChild = rightChild ? rightChild : null
  }


  public getData = () => this.data

  public size = (): number => {
    let count = 1
    if (this.leftChild) count+=this.leftChild.size()
    if (this.rightChild) count+=this.rightChild.size()
    return count
  }


  public getParent = () => this.parent

  public getLeftChild = () => this.leftChild

  public getRightChild = () => this.rightChild

  public insertAsLC = (nodeData: T): BinNode<T> => {
    this.leftChild = new BinNode(nodeData, this)
    return this.leftChild
  }

  public insertAsRC = (nodeData: T): BinNode<T> => {
    this.rightChild = new BinNode(nodeData, this)
    return this.rightChild
  }
}