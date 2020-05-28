/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 0) {
        return -1;
    };
    let result;
    for (let i = 0; i < s.length; i++) {
        let substring = s.substring (0, i) + s.substring (i+1);
        if (substring.includes(s[i]) === true) {
            result = -1;
        }
        else {
            result = i;
            break;
        };
    };
    return result;
};
