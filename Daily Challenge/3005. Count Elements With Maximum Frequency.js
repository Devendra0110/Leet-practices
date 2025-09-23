/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let arr = [], maxFreq = 0 , freqSum = 0
    for(let i=0;i<nums.length;i++){
        const num = nums[i]
        arr[num] = (arr[num] || 0)  + 1
        let freq = arr[num]

        if(freq == maxFreq){
            freqSum += freq
        }

        if(freq > maxFreq){
            maxFreq = freq
            freqSum = freq
        }
    }
    return freqSum
};
