/*

归并排序
*/
var count = 0;
var mergeSort = function (arr, low, high) {
    var merge = function (low, mid, high) {
        if (high - low === 1) {
            if (arr[low] > arr[high]) {
                count++;
                var temp = arr[low] + arr[high];
                arr[low] = temp - arr[low];
                arr[high] = temp - arr[low];
            }
        }
        else {
            var lowArr = JSON.parse(JSON.stringify(arr.slice(low, mid + 1)));
            var highArr = JSON.parse(JSON.stringify(arr.slice(mid + 1, high + 1)));
            for (var i = 0, j = 0; low <= high;) {
                count++;
                if (typeof lowArr[i] === 'number' && typeof highArr[j] === 'number') {
                    if (lowArr[i] < highArr[j]) {
                        arr[low++] = lowArr[i++];
                    }
                    else {
                        arr[low++] = highArr[j++];
                    }
                }
                else if (typeof lowArr[i] === 'number' && typeof highArr[j] !== 'number') {
                    arr[low++] = lowArr[i++];
                }
                else {
                    arr[low++] = highArr[j++];
                }
            }
        }
        return arr;
    };
    if (!low)
        low = 0;
    if (!high)
        high = arr.length - 1;
    var mid = (low + high) >> 1;
    if (low < high - 1) {
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
    }
    return merge(low, mid, high);
};
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 12, 13, 15, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 12, 13, 15, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 12, 13, 15]));
console.log(count);
