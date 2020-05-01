/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     let newS = s.replace(/[.,\'/#!$%\^"&\*;@:{}=\-_`?~()]/g,"");
    let array = newS.split (" ");
    let filtered = array.filter (function (e) {
        return e.length !== 0;
    });
    if (filtered.length === 0) {
        return 0;
    }
    else {
        let last = filtered[filtered.length - 1];
        return last.length;
    };
};
