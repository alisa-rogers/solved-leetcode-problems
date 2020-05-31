
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length === 1 || s.length === 0) {
    return false;
    };
    let length = s.length/2;
    let result;
    for (let i = 1; i <= length; i++) {
        let substring = s.substring(0, i);
        let array = s.split(substring);
        let filtered = array.filter(function(value, index, arr) {return value !== ""});
        if (filtered.length === 0) {
            result = true;
            break;
        }
        else {
            result = false;
        }
    };
     return result;
};
