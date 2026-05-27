/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // start a new dummy listNode and point tail to it
        let dummy = new ListNode();
        let tail = dummy;

        // loop thru both lists while they're not null
        while (list1 !== null && list2 !== null) {
            // compare node values
            // build tail along, and move pointers to lists along
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        // handle last tail node
        tail.next = list1 || list2;
        return dummy.next;
    }
}
