/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`?~() ]/g,"");
    let finalS = newS.toLowerCase();
    
    let left = 0, right = finalS.length - 1;
    
     while (left < right) {
        let l = finalS[left];
        let r = finalS[right];
        left++, right--
        if (left >= right || l !== r) {
            return (l === r);
            break;
        };
     };
};
