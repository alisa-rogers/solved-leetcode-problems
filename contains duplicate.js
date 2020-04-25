/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            for (let d = 0; d < nums.length - i; d++){
                if (num === nums[d]) {
                    return true;
                }
                else {
                        for (let dd = i + 1; dd<nums.length; dd++) {
                          if (num === nums[d]) {
                    return true;
                }
                            else {
                                return false;
                            };
                        };
                    
                };
            };
        };
};
