/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let array = s.split (" ");
    let actualarray = array.filter(function(value, index, arr) {return value !== ""});
    let num = actualarray.length;
    return num;
};
