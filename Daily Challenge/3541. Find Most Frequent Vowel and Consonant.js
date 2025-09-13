/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = 'aeiou', chars = {}

    for(let i=0;i<s.length;i++){
        let c = s[i]
        chars[c] = chars[c] ? chars[c] + 1 : 1
    }

    let maxVows=0, maxCons=0
    for(let k in chars){
        if(vowels.includes(k)){
            maxVows = chars[k] > maxVows ? chars[k] : maxVows
        }else{
            maxCons = chars[k] > maxCons ? chars[k] : maxCons
        }
    }


    return maxVows + maxCons

};
