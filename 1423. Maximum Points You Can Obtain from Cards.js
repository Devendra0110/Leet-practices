var maxScore = function(cp, k) {
    let sum =0, n=cp.length-1;
    for(let i =0;i<k;i++){
      sum += cp[i]
    }
    let tempSum = sum;
    for(let i =0;i<k;i++){
        tempSum -= cp[k-1-i]
        tempSum += cp[n-i]
        sum = Math.max(sum, tempSum)
    }
    return sum;
  };
