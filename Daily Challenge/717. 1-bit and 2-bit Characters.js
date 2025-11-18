/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let result = true
    for(let i=0;i<bits.length;i++){
        if(bits[i]==0){
            result = true
        }else{
            result = false
            i++
        }
    }
    return result
};
