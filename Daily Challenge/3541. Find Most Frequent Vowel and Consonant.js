/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = 'aeiou', chars = []
    let maxVows =0 , maxCons=0
    for(let i =0 ;i < s.length;i++){
        let charCode = s[i].charCodeAt(0) - 97
        chars[charCode] = (chars[charCode] || 0 ) + 1
        let charCodeCount = chars[charCode]
        if(vowels.includes(s[i])){
            maxVows = charCodeCount > maxVows ? charCodeCount : maxVows
        }else{
            maxCons = charCodeCount > maxCons ? charCodeCount : maxCons
        }
    }

    return maxVows + maxCons

};
