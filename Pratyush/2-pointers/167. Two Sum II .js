
/**
 * Two Pointer Approach
 * in this approach we set two pointers at the edge of array
 * and check the sum of the elements at those positions
 * if sum == target we return those indicies with +1 since the index start as mentioned
 *  sum < target we trying to increase the sum by moving the small element pointer i.e.  left pointer to the right
 *  sum > target we trying to decrease the sum by moving the bigger element pointer i.e.  right pointer to the left
 *
 * we do this itetrations until pointers come to the same positions or crosses each other
 */

var twoSum = function(numbers, target) {
    let lp =0 , rp =numbers.length-1
    while(lp<rp){
        let sum = numbers[lp] + numbers[rp]
        if(sum==target) return [lp+1, rp+1]
        if(sum > target) rp--
        if(sum < target) lp++
     }
     return []
};
