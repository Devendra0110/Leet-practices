function threeSum(nums){
    let n = nums.length;
    nums.sort((a,b) => a-b)
    let result = []
    for(let i=0;i<n-2;i++){
        let j=i+1, k=n-1
        if(nums[i]==nums[i-1]) continue
        while(j<k){
            let sum = nums[j]+nums[k]-nums[i]
            if(sum>0){
                k--
                continue
            }else if(sum<0){
                j++
                continue
            }else{
               while(j<k && nums[j]==nums[j+1])  j++;

               while(j<k && nums[k]==nums[k-1])  k--

                result.push([nums[i],nums[j],nums[k]])
                j++
                k--
            }
        }

    }
    return result
}
