function ListNode(val) {
  this.val = val
  this.next = null 
}

const one = new ListNode(1)
const two = new ListNode(2)
const three = new ListNode(3)
const four = new ListNode(4)
const five = new ListNode(5)

one.next = two
two.next = three
three.next = four
four.next = five

const one2 = new ListNode(1)
const two2 = new ListNode(2)
const three2 = new ListNode(3)
const four2 = new ListNode(4)
const five2 = new ListNode(5)
const six2 = new ListNode(6)

one2.next = two2
two2.next = three2
three2.next = four2
four2.next = five2
five2.next = six2

module.exports  = {
  ListNode: ListNode,
  one: one,
  one2: one2
}
