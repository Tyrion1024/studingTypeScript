/*
用ts模拟一个栈
通过栈结构完成解决一些问题
*/
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        this.list = [];
        this.push = function (el) {
            _this.list.push(el);
        };
        this.pop = function () {
            return _this.list.pop();
        };
        this.top = function () {
            return _this.size() ? _this.list[_this.size() - 1] : undefined;
        };
        this.isEmpty = function () {
            return !Boolean(_this.size());
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
// 十进制转换2进制
var ten2bin = function (num) {
    var s = new Stack();
    while (num !== 0) {
        s.push(num % 2);
        num = num >> 1;
    }
    var r = [];
    while (!s.isEmpty()) {
        r.push(s.pop());
    }
    return r;
};
// 匹配字符串中的括号是否有结余
var bracketTest = function (str) {
    var bracketArray = ['<', '[', '(', '{', '}', ')', ']', '>'];
    var stack = new Stack();
    for (var i = 0; i < str.length; i++) {
        var num = bracketArray.indexOf(str[i]);
        if (num === -1)
            continue;
        if (num >= (bracketArray.length / 2) && stack.isEmpty()) {
            return false;
        }
        if (num + bracketArray.indexOf(stack.top()) === bracketArray.length - 1) {
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }
    return stack.isEmpty();
};
// 检测a是否为b的栈混洗
var stackTest = function (a, b) {
    var s = new Stack();
    var rb = new Stack();
    while (b.size()) {
        rb.push(b.pop());
    }
    while (a.size()) {
        s.push(a.pop());
        if (s.top() == rb.top()) { //看底部元素是否可以完成操作
            s.pop();
            rb.pop();
            while (s.size() && s.top() == rb.top()) { //将s中累计的元素清算
                s.pop();
                rb.pop();
            }
        }
    }
    return s.isEmpty();
};
// evaluation函数是用来计算字符串表达式的
var calculateString = function (str) {
    var numStack = new Stack();
    var signalStack = new Stack();
    signalStack.push('(');
    var i = 0;
    var strArr = (str += ')').split('').filter(function (v) { return v !== ' '; });
    var signalMap = {
        '(': 1,
        ')': 1,
        '+': 2,
        '-': 2,
        '*': 3,
        '/': 3,
        '%': 3,
        '^': 3,
        '!': 4
    };
    while (i < strArr.length) {
        var signalIndex = signalMap[strArr[i]];
        if (signalIndex) {
            if (strArr[i] === '(' || !strArr[i - 1] || !signalStack.top()) {
                signalStack.push(strArr[i]);
                i++;
                continue;
            }
            while (signalIndex < signalMap[signalStack.top()]) {
                var lastSignal = signalStack.pop();
                var back = void 0;
                var front = void 0;
                var res = 1;
                switch (lastSignal) {
                    case '!':
                        back = numStack.pop();
                        for (var j = 1; j <= back; j++) {
                            res *= j;
                        }
                        break;
                    case '^':
                        back = numStack.pop();
                        front = numStack.pop();
                        for (var j = 1; j <= back; j++) {
                            res *= front;
                        }
                        break;
                    case '+':
                        back = numStack.pop();
                        front = numStack.pop();
                        res = front + back;
                        break;
                    case '-':
                        back = numStack.pop();
                        front = numStack.pop();
                        res = front - back;
                        break;
                    case '*':
                        back = numStack.pop();
                        front = numStack.pop();
                        res = front * back;
                        break;
                    case '/':
                        back = numStack.pop();
                        front = numStack.pop();
                        res = front / back;
                        break;
                    case '%':
                        back = numStack.pop();
                        front = numStack.pop();
                        res = front % back;
                        break;
                }
                numStack.push(res);
            }
            if (strArr[i] === ')')
                signalStack.pop();
            else
                signalStack.push(strArr[i]);
        }
        else {
            if (strArr[i - 1] && !isNaN(parseInt(strArr[i - 1]))) {
                numStack.push(numStack.pop() * 10 + parseInt(strArr[i]));
            }
            else {
                numStack.push(parseInt(strArr[i]));
            }
        }
        i++;
    }
    return numStack.pop();
};
console.log(calculateString('(1 + 2 ^ 3! - 4) * (5! - (6 - (7 - (89 - 0! ))))'));
