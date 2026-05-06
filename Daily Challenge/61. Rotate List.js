/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head

    const arr = getArr(head), n=arr.length

    while(k>n){
        k = k%n
    }

    arr.splice(0, 0 , ...arr.splice(n-k, k))
    const listNodes = createListNodes(arr)
    return listNodes

};

function getArr(listNode){
    let values =[], node = listNode
    while(node) {
        values.push(node.val)
        node  = node.next

    }
    return values
}

function createListNodes(arr){
    let n=arr.length-1, listNode = new ListNode(arr[n]) , i=n-1
    while(i>=0){
        listNode = new ListNode(arr[i--],listNode)
    }
    return listNode
}
