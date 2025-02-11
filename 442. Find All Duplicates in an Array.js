var findDuplicates = function(nums) {
    let numCountMap = new Map(), result = []
    for(let i=0;i<nums.length;i++){
        if(numCountMap.has(nums[i])){
            result.push(nums[i])
        }else{
            numCountMap.set(nums[i],0)
        }
    }
return result
};
/* 
Solution but falls out following constraint
- You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output
because we are taking one more data structure(Map) to store the frequency
*/
