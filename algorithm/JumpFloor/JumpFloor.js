/*
青蛙跳台阶，青蛙可以跳1层台阶，也可以跳两层。n层台阶共有多少种跳法可以跳上去？


n = 1   num = 1
n = 2   num = 2
n = 3   num = 3
n = 4   num = 5
n = 5   num = 8


类似于斐波那契数列
*/
var JumpFloor = function (n) {
    if (n > 2) {
        var num0 = 1, num1 = 2, i = 2;
        while (i !== n - 1) {
            if (num1 > num0) {
                num0 += num1;
            }
            else {
                num1 += num0;
            }
            i++;
        }
        return num0 + num1;
    }
    else {
        return n;
    }
};
console.log(JumpFloor(38));
