function Node(val) {
  this.val = val ? val : 0
  this.next = null
  this.prev = null
}

/*
null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
*/

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)

const four = new Node(4)
const five = new Node(5)

one.next = two
two.next = four
four.next = five

five.prev = four
four.prev = three
three.prev = two
two.prev = one

const travNext = node => {
  if (!node) return
  console.log(node.val)
  travNext(node.next)
}

const travPrev = node => {
  if (!node) return
  console.log(node.val)
  travPrev(node.prev)
}

travNext(one)
console.log(" ")
travPrev(five)

const delNode = (node, target) => {
  if (!node) return
  if (node.next && node.next.val == target) {
    const temp = node.next.next 
    node.next.next = null
    node.next.prev = null
    node.next = temp
  }
  delNode(node.next)
}

delNode(one, 3)
console.log(" ")
travNext(one)


