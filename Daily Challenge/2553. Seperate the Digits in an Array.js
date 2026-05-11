/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result = [], n=nums.length
    for(let i=n-1;i>=0;i--){
        let value = nums[i]
        while(value>0){
            result.unshift(value%10)
            value = Math.floor(value/10)
        }
    }
    return result


};
