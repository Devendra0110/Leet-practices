/* var longestNiceSubarray = function(nums) {
let  bit_mask=nums[0], total_sum_count=1, sum_count=1;
    for(let i=1;i<nums.length;i++){
       let b=nums[i]
        if((bit_mask&b) !== 0){
            console.log("inside if", nums[i-1], b,);
            total_sum_count = Math.max(total_sum_count, sum_count)
            sum_count = 1
            bit_mask = b // re-initializing bit mask
        }else{
            console.log("inside else", nums[i-1], b,);

            bit_mask |= b //updating bit mask
            sum_count++;
        }
    }
    total_sum_count  = Math.max(sum_count, total_sum_count)
    return total_sum_count
}; */
var longestNiceSubarray = function(nums) {
    let  total_sum_count=1
        for(let j=0;j<nums.length;j++){
            let bit_mask=nums[j], sum_count =1
            for(let i=j+1;i<nums.length;i++){
                let b=nums[i]
                 if((bit_mask&b) !== 0){
                     break;
                 }else{
                     bit_mask |= b //updating bit mask
                     sum_count++;
                 }
             }
             console.log(sum_count, total_sum_count);
            total_sum_count  = Math.max(sum_count, total_sum_count)
        }
        return total_sum_count
    };

let nums =[8,4096,524288,16777216,2097152,1024,4194304,32768,1048576,65536,4,536870912,1,134217728,128,256,8388608,2,8192,2048,16384,16,64,33554432,131072,512,262144,32,67108864]
console.log(longestNiceSubarray(nums));
nums =[135745088,609245787,16,2048,2097152]
console.log(longestNiceSubarray(nums));
 nums = [84139415,693324769,614626365,497710833,615598711,264,65552,50331652,1,1048576,16384,544,270532608,151813349,221976871,678178917,845710321,751376227,331656525,739558112,267703680]
console.log(longestNiceSubarray(nums));
 nums = [178830999,19325904,844110858,806734874,280746028,64,256,33554432,882197187,104359873,453049214,820924081,624788281,710612132,839991691];
console.log(longestNiceSubarray(nums));
 nums = [744437702,379056602,145555074,392756761,560864007,934981918,113312475,1090,16384,33,217313281,117883195,978927664];
console.log(longestNiceSubarray(nums));
nums = [1,3,8,48,10]
console.log(longestNiceSubarray(nums));
