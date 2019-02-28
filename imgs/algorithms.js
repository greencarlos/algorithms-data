console.log(" ");
console.log(" ----- OBJECTS ----- ");

// https: //www.youtube.com/results?search_query=javascript+objects
// Javascript Objects

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;

console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"]);

myCar["Do I like?"] = "I love my car.";
console.log(myCar["Do I like?"]);
console.log(myCar);

console.log(" ");

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties 
    // from the object's prototype chain

    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}

console.log(showProps(myCar, "myCar"));

// Creation: object initializer

var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};


// Creation: constructor function

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
console.log(mycar);
console.log(mycar.model);

var anothercar = new Car("Mazda", "Miata", 1990);
console.log(anothercar);
mycar.color = "black";
console.log(mycar.color);


// Creation: Object.create

var Animal = {
  type: "invertebrates",
  displayType : function() {
    console.log(this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();

console.log(" ");
console.log(fish);
console.log(" ");


// Javascript Linked Lists
// https://www.youtube.com/watch?v=9YddVVsdG5A

console.log(" ---- LINKED LISTS ----- ")
console.log(" ");



// Binary Search Tree
// https://www.youtube.com/watch?v=5cU1ILGy6dM

// Node class
// class Node {
//   constructor(data, left = null, right = null) {
//     // points to the left or right node
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }
//   add(data) {
//     const node = this.root;
//     if (node === null) {
//       this.root = new Node(data);
//       return;
//     } else {
//       const searchTree = function(node) {
//         if (data < node.data) {
//           if (node.left === null) {
//             node.left = new Node(data);
//             return;
//           } else if (node.left !== null) {
//             return searchTree(node.left);
//           }
//         } else if (data > node.data) {
//           if (node.right === null) {
//             node.right = new Node(data);
//             return;
//           } else if (node.right !== null) {
//             return searchTree(node.right);
//           }
//         } else {
//           return null;
//         }
//       };
//       return searchTree(node);
//     }
//   }
//   findMin() {
//     let current = this.root;
//     while (current.left !== null) {
//       current = current.left;
//     }
//     return current.data;
//   }
//   findMax() {
//     let current = this.root;
//     while (current.right !== null) {
//       current = current.right;
//     }
//     return current.data;
//   }
//   find(data) {
//     let current = this.root;
//     while (current.data !== data) {
//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//       if (current === null) {
//         return null;
//       }
//     }
//     return current;
//   }
//   isPresent(data) {
//     let current = this.root;
//     while (current) {
//       if (data === current.data) {
//         return true;
//       }
//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }
//     return false;
//   }
//   remove(data) {
//     const removeNode = function(node, data) {
//       if (node === null) {
//         return null;
//       }
//       if (data === node.data) {
//         // node has no children
//         if (node.left === null && node.right === null) {
//           return null;
//         }
//         // node has no left child
//         if (node.left === null) {
//           return node.right;
//         }
//         // node has no right child
//         if (node.right === null) {
//           return node.left;
//         }
//         // node has two children
//         var tempNode = node.right;
//         while (tempNode.left !== null) {
//           tempNode = tempNode.left;
//         }
//         node.data = tempNode.data;
//         node.right = remove(node.right, tempNode.data);
//         return node;
//       } else if (data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//       } else {
//         node.right = removeNode(node.right, data);
//         return node;
//       }
//     }
//     this.root = removeNode(this.root,data);
//   }
// }

// const bst = new BST();

// bst.add(4)
// bst.add(2)
// bst.add(6)
// bst.add(1)
// bst.add(3)
// bst.add(5)
// bst.add(7)
// bst.remove(4)
// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.remove(7));
// console.log(bst.findMax());
// console.log(bst.isPresent(4));


// console.log(bst);

// Trie Data Structure
// https: //www.youtube.com/watch?v=7XmS8McW_1U


//Learning JavaScript Data Structures and Algorithms: Introduction to Binary Trees | packtpub.com
// https://www.youtube.com/watch?v=RH0FSurvXQ8



// Make a Tree data structure in Javascript 
// https://www.youtube.com/watch?v=tlfnKFa0-p4