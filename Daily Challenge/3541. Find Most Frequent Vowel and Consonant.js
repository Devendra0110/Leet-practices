/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = 'aeiou', vows = {} ,cons ={}

    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(vowels.includes(c)){
             vows[c] = vows[c] ? vows[c] + 1 : 1
        }else {
            cons[c] = cons[c] ? cons[c] + 1 : 1
        }
    }

    let maxVows=0, maxCons=0
    for(let k in vows){
        maxVows = vows[k] > maxVows ? vows[k] : maxVows
    }

    for(let k in cons){
        maxCons = cons[k] > maxCons ? cons[k] : maxCons
    }

    return maxVows + maxCons

};
