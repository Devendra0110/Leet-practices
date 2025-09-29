/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

    let nums = Array(grid.length * grid.length)
    for(let i=0;i<grid.length;i++){
        let row = grid[i]
        for(let j=0;j<row.length;j++){
            const num = row[j]
            nums[num-1] = nums[num-1] ? 2 : 1
        }
    }
    let repeatitive, missing

    for(let i =0;i<nums.length;i++){
        if(nums[i]==2){
            repeatitive = i+1
        }
        if(!nums[i]){
            missing = i+1
        }
    }
    return [repeatitive, missing]
};
