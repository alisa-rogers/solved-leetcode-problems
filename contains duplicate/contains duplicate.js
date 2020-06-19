/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let norepeatarray = [];
  let duplicatesarray = [];
  for (let i = 0; i < nums.length; i++) {
    if (norepeatarray.indexOf(nums[i]) === -1) { 
         norepeatarray.push(nums[i]);
  }
    else {
            duplicatesarray.push(nums[i]);
    };

  };
  return (duplicatesarray.length !== 0);
};
