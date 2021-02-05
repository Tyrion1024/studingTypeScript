/*
有序数组斐波那契查找

传入数组，在[low, high)中查找target
*/
var Fib = /** @class */ (function () {
    function Fib(num) {
        var _this = this;
        this.count = 0;
        this.s = 1;
        this.l = 2;
        this.getFib = function (num) {
            _this.count++;
            if (num < 3) {
                return num;
            }
            for (var i = 3; i <= num; i++) {
                if (_this.s > _this.l) {
                    _this.l += _this.s;
                }
                else {
                    _this.s += _this.l;
                }
            }
            return _this.s > _this.l ? _this.s : _this.l;
        };
        this.next = function () {
            _this.count++;
            if (_this.num < 3) {
                return _this.num + 1;
            }
            return _this.s + _this.l;
        };
        this.prev = function () {
            _this.count++;
            _this.num--;
            if (_this.num < 3) {
                return _this.num;
            }
            if (_this.s > _this.l) {
                _this.s -= _this.l;
            }
            else {
                _this.l -= _this.s;
            }
            _this.value = _this.s > _this.l ? _this.s : _this.l;
            return _this.value;
        };
        this.num = num;
        this.value = this.getFib(num);
    }
    return Fib;
}());
var fibonacciSearch = function (arr, target, low, high) {
    var fib = new Fib(high - low);
    while (low < high) {
        while (high - low < fib.next())
            fib.prev();
        console.log('fib', fib.value, fib.num);
        var mid = low + fib.next() - 1;
        if (arr[mid] < target) {
            low = mid + 1;
        }
        else if (target < arr[mid]) {
            high = mid;
        }
        else {
            return mid;
        }
    }
    return -1;
};
var testArr = [1, 2, 5, 8, 9, 10, 50, 800];
console.log(fibonacciSearch(testArr, 800, 0, testArr.length));
