/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementCounts = {}
    let maxCount = 0, majority = nums[0]
    for(let i=0;i<nums.length;i++){
        if(elementCounts[nums[i]]){
            elementCounts[nums[i]] = elementCounts[nums[i]] + 1
            if(elementCounts[nums[i]] > maxCount){
                majority = nums[i]
                maxCount = elementCounts[nums[i]]
            }

        }else {
            elementCounts[nums[i]] = 1
        }
    }
    return majority
};
