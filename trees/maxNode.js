const a = {val:1}
const b = {val:2}
const c = {val:3}

a.left = b;
a.right = c;

const maxValue = node => {
  if (!node) return -Infinity;
  return Math.max(maxValue(node.left), node.val, maxValue(node.right));
}

console.log(maxValue(a))
