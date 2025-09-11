/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementCounts = {}
   let freq = 0, majority
    for(let i=0;i<nums.length;i++){
        let n = nums[i]
        if(freq==0){
            majority = n
        }

        if(majority == n) freq++
        if( majority != n) freq--
    }
    return majority
};
