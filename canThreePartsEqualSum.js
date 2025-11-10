/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    if(sum%3 !=0) return false

    let target = sum/3, count = 0, sumP = 0
    for(let i=0;i<arr.length;i++){
        sumP += arr[i]
        if(sumP == target){
            if (count == 3) return true
            count++
            sumP = 0
        }
    }
    return false
};

/**
 * line 15 it tells that we have encounter the a point where summation gets equal to 1/3 of total sum of array
 * now reset the sum  and increase the counter
 *
 * if the counter reaches 3 means we've encountered the 3 parts whose equal sum is 1/ of array total sum
 *
 * Now I minor optimization
            if (count =2) return true
            count++
            sumP = 0
 * we can check the counter on 2 because we know after the it's gonna increment to 3 so we check condition before that and return true
 */
