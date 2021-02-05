var MyNode = /** @class */ (function () {
    function MyNode(element, prev, next) {
        var _this = this;
        this.pred = function () {
            return _this.prev;
        };
        this.succ = function () {
            return _this.next;
        };
        this.data = function () {
            return _this.element;
        };
        this.element = element;
        if (prev) {
            this.prev = prev;
        }
        if (next) {
            this.next = next;
        }
    }
    MyNode.prototype.insertAsPred = function (el) {
        var node = new MyNode(el, this.pred(), this);
        this.prev.next = node;
        this.prev = node;
        return node;
    };
    MyNode.prototype.insertAsSucc = function (el) {
        var node = new MyNode(el, this, this.succ());
        this.next.prev = node;
        this.next = node;
        return node;
    };
    return MyNode;
}());
var MyNodeList = /** @class */ (function () {
    function MyNodeList() {
        var _this = this;
        this.size = function () {
            return _this.length;
        };
        this.find = function (el) {
            if (!_this.size()) {
                return null;
            }
            var res = _this.first();
            var i = 0;
            while (!(res.data() === el || i === _this.size())) {
                res = res.next;
                i++;
            }
            return i === _this.size() ? null : res;
        };
        this.first = function () {
            if (!_this.size()) {
                return null;
            }
            return _this.header.next;
        };
        this.last = function () {
            if (!_this.size()) {
                return null;
            }
            return _this.trailer.prev;
        };
        this.insertAsFirst = function (el) {
            _this.header.insertAsSucc(el);
            _this.length++;
        };
        this.insertAsLast = function (el) {
            _this.trailer.insertAsPred(el);
            _this.length++;
        };
        this.insertBefore = function (node, el) {
            node.insertAsPred(el);
            _this.length++;
        };
        this.insertAfter = function (node, el) {
            node.insertAsSucc(el);
            _this.length++;
        };
        this.remove = function (node) {
            var element = node.data();
            var prev = node.pred();
            var next = node.succ();
            prev.next = next;
            next.prev = prev;
            _this.length--;
            return element;
        };
        this.uniquify = function () {
            var node = _this.first();
            if (!node) {
                return;
            }
            while (node.data() !== _this.trailer.data()) {
                var temp = node.succ();
                if (node.data() === temp.data()) {
                    _this.remove(temp);
                }
                else {
                    node = temp;
                }
            }
        };
        this.search = function (el, p) {
            if (!_this.size()) {
                return null;
            }
            while (p.data() !== _this.header.data()) {
                if (p.data() <= el)
                    break;
                p = p.pred();
            }
            if (p.data() === _this.header.data())
                return null;
            return p;
        };
        this.selectionSort = function () {
            if (_this.size() < 2) {
                return;
            }
            var i = 0;
            var last = _this.trailer;
            while (i !== _this.size()) {
                var max = _this.first();
                var temp = max.succ();
                for (var j = 0; j < _this.size() - i - 1; j++) {
                    if (max.data() <= temp.data()) {
                        max = temp;
                    }
                    temp = temp.succ();
                }
                if (max.data() !== last.prev.data()) {
                    _this.insertBefore(last, _this.remove(max));
                }
                last = last.pred();
                i++;
            }
        };
        this.insetSort = function () {
            if (_this.size() < 2) {
                return;
            }
            var now = _this.first().succ();
            while (now.data() !== _this.trailer.data()) {
                var op = now;
                now = now.succ();
                var temp = _this.search(op.data(), op.pred());
                console.log(op.data(), '的search result', temp ? temp.data() : temp);
                if (temp) {
                    _this.insertAfter(temp, _this.remove(op));
                }
                else {
                    _this.insertAsFirst(_this.remove(op));
                }
            }
        };
        this.disordered = function () {
            return true;
        };
        this.deduplicate = function () {
        };
        this.traverse = function () {
            var node = _this.first();
            for (var i = 0; i < _this.size(); i++) {
                console.log(node.data());
                node = node.succ();
            }
        };
        this.header = new MyNode('header');
        this.trailer = new MyNode('trailer', this.header, this.header);
        this.header.prev = this.trailer;
        this.header.next = this.trailer;
        this.length = 0;
    }
    return MyNodeList;
}());
var linkList = new MyNodeList();
linkList.insertAsFirst(4);
linkList.insertAsFirst(3);
linkList.insertAsFirst(8);
linkList.insertAsLast(10);
linkList.insertAsLast(9);
linkList.insertAsLast(6);
linkList.insertAsLast(1);
linkList.insertAsFirst(6);
// linkList.uniquify()
console.log('linkList````````````');
console.log('linkList.length', linkList.size());
console.log('first````````````');
console.log('data:', linkList.first().data());
console.log('prev:', linkList.first().pred().data());
console.log('next:', linkList.first().succ().data());
console.log('last````````````');
console.log('data:', linkList.last().data());
console.log('prev:', linkList.last().pred().data());
console.log('next:', linkList.last().succ().data());
console.log('header````````````');
console.log('data:', linkList.header.data());
console.log('prev:', linkList.header.pred().data());
console.log('next:', linkList.header.succ().data());
console.log('trailer````````````');
console.log('data:', linkList.trailer.data());
console.log('prev:', linkList.trailer.pred().data());
console.log('next:', linkList.trailer.succ().data());
console.log('链表sort排序``````');
linkList.insetSort();
linkList.traverse();
