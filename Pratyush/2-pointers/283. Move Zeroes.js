
/**
 *
 * Two Pointer approach
 *
 *  put two pointer at the start of arr : nzp and zp
 *
 *  ITETRATION:
 *  check if element at nzp is zero or not,
 *     if zero then swap the element with zp element
 *      and move zp to right
 *
 *   also keep moving nzp to the right also
 *  while nzp reaches at the end of loop
 *
 *
 */

var moveZeroes = function(nums) {
    let zp = 0, nzp =0, n=nums.length
    while(nzp<n){
        if(nums[nzp] !=0){
            let temp = nums[zp]
            nums[zp] = nums[nzp]
            nums[nzp] = temp
            zp++
        }
        nzp++
    }
};
