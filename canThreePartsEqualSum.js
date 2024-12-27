/**
 * @param {number[]} arr
 * @return {boolean}
 */
 
var canThreePartsEqualSum = function(arr) {
     let arrSum = arr.reduce((acc, val) => acc + val)
    if(arrSum%3!=0) return false
    let partitionValue = arrSum/3
    let sum =0,paritions=1
   for(let j =0;j<arr.length;j++){
            sum+=arr[j]
            if(sum==partitionValue){
                paritions++
                if(paritions==4) break
                sum =0
                continue;
            }
            if(sum>partitionValue && j==arr.length-1){
                return false
            }
    }
return paritions==4

};

/**
basic rule to equalize in three parts it should be divisble to 3
if not return false
else 
    get the 1/3
    run loop 3 times to create 3 parts if possible
        run loop until it became equal to the partion value
        3 possible cases
           loop 1 > 1/3
           loop 2 > 1/3
           loop 3 > 1/3
critical cases
    [12,-4,16,-5,9,-3,3,8,0], [1,-1,1,-1] , [0,0,0,0]
 */
