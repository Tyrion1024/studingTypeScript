var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        this.list = [];
        this.push = function (el) {
            return _this.list.push(el);
        };
        this.pop = function () {
            return _this.list.pop();
        };
        this.peek = function () {
            return _this.list.length ? _this.list[_this.list.length - 1] : undefined;
        };
        this.isEmpty = function () {
            return !Boolean(_this.list.length);
        };
        this.clear = function () {
            _this.list = [];
        };
        this.size = function () {
            return _this.list.length;
        };
    }
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.enqueue = function (el) {
            return _this.inStack.push(el);
        };
        this.dequeue = function () {
            if (_this.inStack.isEmpty()) {
                return null;
            }
            while (!_this.inStack.isEmpty()) {
                _this.outStack.push(_this.inStack.pop());
            }
            var res = _this.outStack.pop();
            while (!_this.outStack.isEmpty()) {
                _this.inStack.push(_this.outStack.pop());
            }
            return res;
        };
        this.front = function () {
            while (!_this.inStack.isEmpty()) {
                _this.outStack.push(_this.inStack.pop());
            }
            var res = _this.outStack.peek();
            while (!_this.outStack.isEmpty()) {
                _this.inStack.push(_this.outStack.pop());
            }
            return res;
        };
        this.isEmpty = function () {
            return _this.inStack.isEmpty();
        };
        this.size = function () {
            return _this.inStack.size();
        };
        this.inStack = new Stack();
        this.outStack = new Stack();
    }
    return Queue;
}());
var loopQueuePassflower = function (list) {
    var q = new Queue();
    list.forEach(function (e) { return q.enqueue(e); });
    var count = 0;
    while (q.size() !== 1) {
        var num = Math.round(Math.random() * 99) + 1;
        for (var i = 0; i < num - 1; i++) {
            q.enqueue(q.dequeue());
        }
        console.log("\u7B2C" + ++count + "\u8F6E\u6E38\u620F\u4E2D\uFF0C\u51FB\u9F13" + num + "\u6B21,\u6700\u7EC8" + q.dequeue() + "\u88AB\u6DD8\u6C70\uFF01");
    }
    console.log("\u6E38\u620F\u7ED3\u675F\uFF0C" + q.front() + "\u575A\u6301\u5230\u4E86\u6700\u540E\uFF01\uFF01\uFF01");
};
loopQueuePassflower(['a', 'b', 'c', 'd', 'e', 'f']);
