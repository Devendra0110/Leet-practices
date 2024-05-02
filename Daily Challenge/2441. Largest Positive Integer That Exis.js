// 2441. Largest Positive Integer That Exists With Its Negative

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const sortedNums = nums.sort((a,b ) => b-a)
    let k = -1
    for(let i of sortedNums){
        if(i < 0){
            break;
        }
        if(sortedNums.includes(-i)){
            k = i
            break;
        }
    }
    return k
};