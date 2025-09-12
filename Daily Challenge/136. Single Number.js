/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = 0
    for(let i=0;i<nums.length;i++){
        n = n ^ nums[i]
    }
    return n

};
