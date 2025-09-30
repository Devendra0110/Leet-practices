var triangularSum = function(nums) {
    if(nums.length == 1){
        return nums[0]
    }
    else {
        const newNums = []
        for(let i=0;i<nums.length-1;i++){
            newNums.push((nums[i]+nums[i+1])%10)
        }
        const result = triangularSum(newNums)
        return result
    }
};
