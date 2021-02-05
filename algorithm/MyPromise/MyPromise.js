var MyPromise = /** @class */ (function () {
    function MyPromise(main) {
        var _this = this;
        this.resolve = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.status = 'success';
            _this.res = args;
            _this.successCbArray.forEach(function (fn) { return fn.apply(void 0, args); });
        };
        this.reject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.status = 'error';
            _this.res = args;
            console.log(_this.status);
            _this.errCbArray.forEach(function (fn) { return fn.apply(void 0, args); });
        };
        this.then = function (successCb, errCb) {
            var p = new MyPromise(function (resolve, reject) {
                if (_this.status === 'success') {
                    var res = successCb.apply(void 0, _this.res);
                    resolve(res);
                }
                else if (_this.status === 'error') {
                    var res = errCb.apply(void 0, _this.res);
                    reject(res);
                }
                else {
                    _this.successCbArray.push(successCb);
                    if (errCb) {
                        _this.errCbArray.push(errCb);
                    }
                }
            });
            return p;
        };
        this["catch"] = function (errCb) {
            var p = new MyPromise(function (resolve, reject) {
                if (_this.status === 'error') {
                    var res = errCb.apply(void 0, _this.res);
                    reject(res);
                }
                else if (_this.status === 'pendding') {
                    _this.errCbArray.push(errCb);
                    console.log(_this.status, _this.errCbArray);
                }
            });
            return p;
        };
        this.all = function (mainArray) {
            var hasFail = false;
            var result = new Array(mainArray.length);
            try {
                var _loop_1 = function (index) {
                    mainArray[index].then(function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args.length > 1)
                            result[index] = args;
                        else
                            result[index] = args[0] || null;
                        if (index === mainArray.length - 1) {
                            if (hasFail)
                                _this.reject(result);
                            else
                                _this.resolve(result);
                        }
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args.length > 1)
                            result[index] = args;
                        else
                            result[index] = args[0] || null;
                        if (index === mainArray.length - 1)
                            _this.reject(result);
                    });
                };
                for (var index = 0; index < mainArray.length; index++) {
                    _loop_1(index);
                }
            }
            catch (err) {
                throw new Error(err);
            }
            return _this;
        };
        console.log(this.errCbArray);
        this.status = 'pendding';
        this.successCbArray = [];
        this.errCbArray = [];
        if (!main) {
            this.status = 'success';
            return this;
        }
        try {
            main(this.resolve, this.reject);
        }
        catch (err) {
            throw Error(err);
        }
    }
    return MyPromise;
}());
new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        reject('已经过了5秒！！！！');
    }, 5000);
}).then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
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
