class MyPromise {

  private successCbArray: Function[]
  private errCbArray: Function[]
  private status: string
  private res: any



  public resolve: Function = (...args: any[]) => {
    this.status = 'success'
    this.res = args
    this.successCbArray.forEach(fn => fn(...args))
  }

  public reject: Function = (...args: any[]) => {
    this.status = 'error'
    this.res = args
    console.log(this.status)
    this.errCbArray.forEach(fn => fn(...args))
  }

  constructor (main?: Function) {
    console.log(this.errCbArray)
    this.status = 'pendding'
    this.successCbArray = []
    this.errCbArray = []
  if (!main) {
      this.status = 'success'
      return this
    }
    try {
      main(this.resolve, this.reject)
    } catch(err) {
      throw Error(err)
    }
  }

  public then = (successCb: Function, errCb?: Function) => {
    const p = new MyPromise((resolve: Function, reject: Function) => {
      if (this.status === 'success') {
        let res = successCb(...this.res)
        resolve(res)
      } else if (this.status === 'error') {
        let res = errCb(...this.res)
        reject(res)
      } else {
        this.successCbArray.push(successCb)
        if (errCb) {
          this.errCbArray.push(errCb)
        }
      }
    })
    return p
  }

  public catch = (errCb: Function) => {
    const p = new MyPromise((resolve: Function, reject: Function) => {
      if (this.status === 'error') {
        let res = errCb(...this.res)
        reject(res)
      } else if (this.status === 'pendding'){
        this.errCbArray.push(errCb)
        console.log(this.status, this.errCbArray)
      }
    })
    return p
  }

  public all = (mainArray: MyPromise[]) => {
    let hasFail: boolean = false
    let result = new Array(mainArray.length)
    try {
      for(let index = 0; index < mainArray.length; index++) {
        mainArray[index].then((...args: any[]) => {
          if (args.length > 1) result[index] = args
          else result[index] = args[0] || null
          if (index === mainArray.length - 1) {
            if (hasFail) this.reject(result)
            else this.resolve(result)
          }
        }, (...args: any[]) => {
          if (args.length > 1) result[index] = args
          else result[index] = args[0] || null
          if (index === mainArray.length - 1) this.reject(result)
        })
      }
    } catch(err) {
      throw new Error(err)
    }
    return this
  }
}

new MyPromise((resolve: Function, reject: Function) => {
  setTimeout(() => {
    reject('已经过了5秒！！！！')
  }, 5000)
}).then((res: any) => {
  console.log(res)
}).catch((err: any) => {
  console.log(err)
})

// new MyPromise().all([
//   new MyPromise((resolve: Function) => {
//     setTimeout(() => {
//       resolve('已经过了2秒！！！！')
//     }, 2000)
//   }),
//   new MyPromise((resolve: Function) => {
//     setTimeout(() => {
//       resolve('已经过了3秒！！！！')
//     }, 3000)
//   }),
//   new MyPromise((resolve: Function) => {
//     setTimeout(() => {
//       resolve('已经过了1秒！！！！')
//     }, 1000)
//   }),
//   new MyPromise((resolve: Function) => {
//     setTimeout(() => {
//       resolve('已经过了4秒！！！！')
//     }, 4000)
//   })  
// ]).then((res: any) => {
//   console.log(res)
// })