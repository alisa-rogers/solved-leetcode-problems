/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (strs.length === 0) {
        return "";
    };
    if (strs.length === 1) {
        return strs[0];
    };
    
let order = strs.sort((a,b)=> a.length - b.length);
let short = order[0];
if (short.length === 0) {
        return "";
    };
    
        for (let w = 1, l = 0; w < order.length, l < short.length; w++) { 
            let substr;
            
            if (order[0][l] !== order[w][l]) {
                return "";   
            };
            
            while (order[0][l] === order[w][l]) {   /*letter change*/ 
                l++;
                let substr = order[0].substring (0, [l+1]);
                return substr;
            };
        };
};
