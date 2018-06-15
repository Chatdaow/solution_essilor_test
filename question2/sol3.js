function range(begin,end) {
    var arr = [];
    while(begin<=end) {
        arr.push(begin);
        begin += 1;
    }
    return arr;
}
function sum(arr) {
    var count = 0;
    for(var i = 0;i < arr.length;i++) {
        count += arr[i];
    }
    return count;
}
console.log(range(1,10))
console.log(sum(range(1,10)))