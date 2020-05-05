/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 0 || nums.length === 1) {
        return false;
    };
let sorted = nums.sort((a, b) => a - b);
    let n = 1;
    let p = n - 1;
    while (n < sorted.length) {
      if (sorted[n] === sorted[p])  {
          return true;
      }
        else {
         n++;  
        };
    };
    return false;
};
