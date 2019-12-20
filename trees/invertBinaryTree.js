// Original Tree
//       4
//     /  \
//    2     7
//   / \   / \
//  1   3 6   9

// Simple Binary Tree (depth = 3)

var tree = {
    left: {
        left: {
            value: 1
        },
        right: {
            value: 3
        },
        value: 2
    },
    right: {
        left: {
            value: 6
        },
        value: 7
    },
    value: 4
}

// Recusion

function invertTree(node) {
    if (!node) return;

    var right = invertTree(node.right);
    var left = invertTree(node.left);
    if (left) node.right = right;
    if (right) node.right = left;
    return node;
}


// Javascript swap

function swap(x, y) {
    return [y, x];
}

console.log("Swap = ", swap(2, 3));

