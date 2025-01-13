/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let rp=nums.length-1, lp=0, k=nums.length-1
    let result = []
    while(k>=0){
        let rpv = nums[rp]*nums[rp]
        let lpv = nums[lp]*nums[lp]

        if(rpv>lpv){
            result[k] =rpv
            rp--;
        }else{
            result[k] =lpv
            lp++
        }
        k--
    }
    return result
};
