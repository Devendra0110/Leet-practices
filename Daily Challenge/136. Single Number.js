/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {}
    for(let i=0;i<nums.length;i++){
        const n = nums[i]
        if(map[n]){
            map[n] = map[n] + 1
        }else{
            map[n] = 1
        }
    }
    for(let k in map){
        if(map[k] == 1){
            return Number(k)
        }
    }

};
