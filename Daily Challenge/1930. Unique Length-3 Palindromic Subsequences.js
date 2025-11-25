/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const head = new Set(), n = s.length
    let sum =0
    for(let i=0;i<s.length;i++){
        if(head.has(s[i])) continue

        for(let j=n-1;j>i+1;j--){
            if(s[i]==s[j]){
                let elements = new Set(s.substring(i+1,j))
                sum += elements.size
                break
            }
        }
        head.add(s[i])
    }
    return sum
};
