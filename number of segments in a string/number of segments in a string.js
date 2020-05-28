/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr = s.split (" ");
    let actarr = arr.filter(function(value, index, arr) {return value !== ""});
    let num = actarr.length;
    return num;
};
