/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(input) {
   let pointer =0;
   for(let i=0;i<input.length;i++){
    if(input[i]!=0){
        let temp = input[i]
        input[i] = input[pointer]
        input[pointer] = temp
        pointer++
    }
   }
   return input
};
