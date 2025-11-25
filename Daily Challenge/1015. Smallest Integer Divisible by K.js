/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let answer = 1,count=1

    // since the number ending with 0,2,4,5,6,8 would not be able to completely divide 11111111 or similar
    let lastDigit = k % 10
    if(lastDigit != 1 && lastDigit !=3 && lastDigit != 7 && lastDigit != 9) return -1

    while(answer%k!=0){
        answer = ((answer*10)+1)%k
        count++
    }
    return count
};
