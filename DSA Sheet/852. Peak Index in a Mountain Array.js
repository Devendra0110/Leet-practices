/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low = 0, high = arr.length-1, mid = Math.floor((low+high)/2)

    while(high>= low){
       mid = Math.floor((low+high)/2)
       const prev = arr[mid-1] || 0, next = arr[mid+1] || 0
        if(arr[mid] > prev && arr[mid] > next){
            return mid
        }

        if(arr[mid] > prev){
            low = mid +1
        }

        if(arr[mid] > next){
            high = mid-1
        }


    }

    return mid

};
