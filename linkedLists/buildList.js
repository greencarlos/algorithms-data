function fromArray(array) {
  const nodes = array.map(value => new LinkedList(value));
  nodes.forEach((node, i) => (node.next = nodes[i + 1] || null));
  return nodes[0];
}

function LinkedList(value) {
  this.value = value;
  this.next = null;
}

const list = fromArray([1, 2, 3, 4]);

console.log(list, 'list')

console.log(JSON.stringify(list, null, 2));
/*
{
  "value": 1,
  "next": {
    "value": 2,
    "next": {
      "value": 3,
      "next": {
        "value": 4,
        "next": null
      }
    }
  }
}
*/
