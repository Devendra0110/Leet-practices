/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let k =arr.length, queue = [start], visited = new Array(k).fill(false)
    visited[start] = true
    while(queue.length){
        let n = queue.length
        while(n--){
            const i =queue.shift()

            if(arr[i]==0) return true

            if((i+arr[i]) < k && !visited[i+arr[i]]){
                visited[i+arr[i]] = true
                queue.push(i+arr[i])
            }

            if((i-arr[i]) >= 0 && !visited[i-arr[i]]){
                visited[i-arr[i]] = true
                queue.push(i-arr[i])
            }
        }
    }
    return false
};
