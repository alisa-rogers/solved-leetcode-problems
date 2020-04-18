/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
     let left = 0, right = s.length - 1;   //0, 2
        
         while (left < right) { // 0, 2 \\\ 1 1
        
            let temp = s[left];
            s[left] = s[right];
            s[right]= temp;
            
            left++;
            right--;
         };
