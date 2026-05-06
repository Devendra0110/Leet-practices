function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val); // Value of the node
    this.next = (next === undefined ? null : next); // Reference to the next node
}


const node1 = new ListNode(2); // Node with value 2 and next pointing to null
const node2 = new ListNode(4); // Node with value 4 and next pointing to null
const node3 = new ListNode(3);

const node0 = new ListNode(0,node3)

node1.next = node2


function addSum(listNode){

    let sum =0, node = listNode
    while(node) {
        sum += node.val
        node  = node.next

    }
    return sum
}

function createListNodes(arr){
    let n=arr.length-1, listNode = new ListNode(arr[n]) , i=n-1
    while(i>=0){
        listNode = new ListNode(arr[i--],listNode)
    }
    return listNode
}


const nodeList = createListNodes([1,2,3,4,5])
console.log(nodeList);

console.log(addSum(nodeList));

console.log(getArr(nodeList));


function getArr(listNode){

    let values =[], node = listNode
    while(node) {
        values.push(node.val)
        node  = node.next

    }
    return values
}
