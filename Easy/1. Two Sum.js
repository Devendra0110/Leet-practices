var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<=nums.length-1;i++){
        let expectedValue = target-nums[i]
        if(map.has(expectedValue)){
            return [i, map.get(expectedValue)]
        }
        map.set(nums[i],i)
    }
    return []
};

var twoSumV0E1 = function(nums, target) {
    for(let i=0;i<=nums.length-1;i++){
        let partialSum = nums[i]
       for(let j=0;j<nums.length;j++){
        if (i==j) continue
        if(partialSum + nums[j]==target){
          return [i,j]
        }
       }
    }
    return []
};

var twoSumV1E1 = function(nums, target){
    let lp =0, rp=nums.length-1
    while(lp<nums.length-1){
       if(nums[lp]+nums[rp]==target){
        return [lp,rp]
       }
       rp--
       if(lp==rp){
        lp++
        rp=nums.length-1
       }
    }
    return []
}

console.log(twoSumV0E1([3,2,4],6));
console.log(twoSumV0E1([2,7,11,15],9));
console.log(twoSumV0E1([2,5,5,11],10));

console.log(twoSumV1E1([3,2,4],6));
console.log(twoSumV1E1([2,7,11,15],9));
