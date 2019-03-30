// 非递归实现的js代码
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;

    while(low <= high) {
        var mid = parseInt((high + low) /2);
        // console.log(mid+'h'+high+'l'+low);
        if(key == arr[mid]) {
            return mid;
        } else if(key > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return -1
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr, 10);
console.log(result);   // 9
var resultNone = binary_search(arr, 100);
console.log(resultNone);  // -1
