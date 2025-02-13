var maxSubarraySumCircular = function(nums) {
    let totalSum=nums[0]
    let currMinSum = nums[0], minSum = nums[0]
    let currMaxSum = nums[0], maxSum = nums[0]
    for(let i=1;i<nums.length;i++){
        totalSum +=nums[i]
        currMinSum = Math.min(currMinSum+nums[i], nums[i])
        minSum = Math.min(currMinSum, minSum)

        currMaxSum = Math.max(currMaxSum+nums[i], nums[i])
        maxSum = Math.max(currMaxSum, maxSum)
    }
    let circularSum = totalSum-minSum
    
    return maxSum>0 ? Math.max(circularSum, maxSum) : maxSum
};
