/*
用2分查找
有序数组中查询某数字的下标
查找不到返回-1
*/
var search2 = function (arr, target, low, high) {
    if (low === high) {
        return -1;
    }
    var mid = (low + high) >> 1;
    if (target < arr[mid]) {
        return search2(arr, target, low, mid);
    }
    else if (arr[mid] < target) {
        return search2(arr, target, mid + 1, high);
    }
    else {
        return arr[mid] === target ? mid : -1;
    }
};
var arr = [1, 2, 5, 8, 9, 10, 50, 800];
console.log(search2(arr, 1, 0, arr.length - 1));
