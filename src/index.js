module.exports = function reverse (n) {
    let arr = [];
    if (n > 0) {
       arr = String(n).split('');
    }else {
        arr = String(n).split('');
        arr.shift();
    }
    return Number(arr.reverse().join(''));
}
