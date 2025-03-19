
//3191. Minimum Operations to Make Binary Array Elements Equal to One I
var minOperations = function(nums) {
    let count = 0, window = []

    if(nums[i] == 0){
        for(let i =0;i<3;i++){
            window.push(nums[i]^1)
        }
        nums[0]  = window[0]
    }else{
        for(let i =0;i<3;i++){
            window.push(nums[i])
        }
    }

    for (let i = 1; i <= nums.length-window.length; i++) {
        if(nums[i]==0){

        }

    }
    nums[nums.length-2] = window[0]
    nums[nums.length-1] = window[1]
    const isOne = nums.every((bit) => bit ==1)
    return isOne ? count : -1
};

let nums = [0,1,1,1,0,0]
console.log(minOperations(nums));
nums = [0,1,1,1]
console.log(minOperations(nums));
