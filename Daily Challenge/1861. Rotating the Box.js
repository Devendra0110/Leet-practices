var rotateTheBox = function(boxGrid) {
    let n = boxGrid.length,m = boxGrid[0].length
    for(let i=0;i<n;i++){
        let sp =0 , arr = boxGrid[i]

        for(let dp=0;dp<m;dp++){
             if(arr[dp] == '*'){
                sp = dp+1
                continue
            }
            if(arr[dp] == '.'){
                let temp = arr[dp]
                arr[dp] = arr[sp]
                arr[sp] = temp
                sp++
            }
        }
    }

    let b = []

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!b[j]) b[j] = []
            b[j][n-1-i] = boxGrid[i][j]
        }
    }
    return b
}
