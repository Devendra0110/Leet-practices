/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    tasks.sort((x,y) => {
        let a = x[1]-x[0]
        let b = y[1] - y[0]
        return a-b
    })
    let n = tasks.length,
    energy = tasks[n-1][1],
    remaining = tasks[n-1][1]
    for(let i=n-1;i>=0;i--){
        if(remaining<tasks[i][1]){
            const required = tasks[i][1] - remaining
            energy += required
            remaining += required
        }
        remaining = remaining - tasks[i][0]
    }
    return energy
};
