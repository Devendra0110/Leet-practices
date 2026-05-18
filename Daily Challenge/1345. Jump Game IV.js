var minJumps = function(arr) {
    let n = arr.length,map = {}
    if (n <= 1) return 0;

    for (let i = 0; i < n; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = []
        }
        map[arr[i]].push(i);
    }

    let queue = [0],
    visited = new Uint8Array(n),
     steps=0, seen = new Set()

    while(queue.length){
        let size = queue.length, nextQueue = []

        // while(size--){
        for(let j =0;j<size;j++){

            let i = queue[j]

            if(i == n-1) return steps;

            if(i+1 < n && !visited[i+1]){
                visited[i+1] = 1
                nextQueue.push(i+1)
            }

            if(i-1 >= 0 && !visited[i-1]){
                visited[i-1] = 1
                nextQueue.push(i-1)
            }

            if(seen.has(arr[i])) continue;

            if(map[arr[i]].length){
                const canJump = map[arr[i]]
                for(let k=0;k<canJump.length;k++){
                    let index = canJump[k]
                    if(!visited[index]){
                        visited[index] = 1
                        nextQueue.push(index)
                    }
                }
            }

            seen.add(arr[i])

        }
        queue = nextQueue
        steps++
    }
    return steps
};
