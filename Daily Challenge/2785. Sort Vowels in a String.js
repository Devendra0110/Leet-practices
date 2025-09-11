/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = ['a','i','e','o','u']
    let indices = []
    let chars = []
    for(let i = 0;i<s.length;i++){
        if(vowels.includes(s[i].toLowerCase())){
            indices.push(i)
            chars.push(s[i])
        }
    }
    chars.sort()
    if(indices.length){
        let ns = '', ptr=0
        for(let i=0;i<s.length;i++){
            if(i==indices[ptr]){
                ns += chars[ptr++]
            }else{
                ns += s[i]
            }
        }
        return ns

    } else {
        return s
    }
};
