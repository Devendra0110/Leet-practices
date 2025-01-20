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



// with multiple solutions 
function twoSumMultiSol(nums,target){
    // duplicate issue
    let result = []
    nums.sort((a,b ) => a-b)
    let lp =0, n=nums.length, rp=n-1
    while(lp<n-1){
        if(nums[lp]+nums[rp]===target){
            result.push([nums[lp], nums[rp]])
        }
        rp--
        if(lp==rp){
            lp++
            rp=n-1
        }
    }
    return result
}


// console.log(twoSumMultiSol([-1,0,0,1,2,2,7],1));



function twoSumMultiSolWithoutDuplicate(nums,target){
    let result = []
    nums.sort((a,b ) => a-b)
    let lp =0, n=nums.length, rp=n-1
    while(lp<n-1){
        if(nums[lp]==nums[lp+1]){
            // console.log(nums[lp]);
            lp++
            continue
        }

        if(nums[rp]==nums[rp-1]){
            // console.log(nums[lp]);
            rp--
            continue
        }

        // console.log(nums[lp]);
        if(nums[lp]+nums[rp]===target){
            result.push([nums[lp], nums[rp]])
        }

        rp--
        if(lp==rp){
            lp++
            rp=n-1
        }
    }
    return result
}

console.log(twoSumMultiSolWithoutDuplicate([-1,0,0,1,2,2,7],1));



function twoSumMultiSolWithoutDuplicateV2(nums,target){
    let result = []
    nums.sort((a,b ) => a-b)
    let lp =0, n=nums.length, rp=n-1
    while(lp<n-1){

        if(nums[lp]==nums[lp+1]){
            lp++
            continue
        }

        if(nums[rp]==nums[rp-1]){
            rp--
            continue
        }
        let sum = nums[lp]+nums[rp]


        // console.log(nums[lp]);
        if(sum ===target){
            result.push([nums[lp], nums[rp]])
            lp++
            rp=n-1
            continue
        } 
        if(sum > target){
            rp--
        }

        if(lp==rp){
            lp++
            rp = n-1
        }
    }   
    return result
}

console.log(twoSumMultiSolWithoutDuplicateV2([-1,0,0,1,2,2,7],1));

