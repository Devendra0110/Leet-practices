var deleteDuplicates = function(head) {
    if(!head) return head
    const uniqueNodes = new ListNode(head.val)
    let node = head.next, unode= uniqueNodes
    while(node){
        if(node.val != unode.val){
            unode.next =  new ListNode(node.val)
            unode = unode.next
        }
        node = node.next
    }
    return uniqueNodes
};


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
