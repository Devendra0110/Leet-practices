/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum =0, n = mat.length
    for(let i=0;i<n;i++){
        sum += mat[i][i]+mat[i][n-1-i]
    }
        if(mat.length%2!=0){
        let index = Math.ceil(mat.length/2)
        sum-= mat[index-1][index-1]
    }
    return sum
};
