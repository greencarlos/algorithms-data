// https://dev.to/emmawedekind/creating-graphs-with-javascript-4efm
//

// Directed Graph:

// contains edges which function 
// similar to a one-way street
// edge flows from one node to another
//

// graph of people and ice cream flavors


// 3 classes:

// - PersonNode
// - IceCreamFlavorNode
// - Graph

// person's name serves as its identifier
class PersonNode {
  constructor(name) {
    this.name = name;
    this.favoriteFlavors = [];
  }
  addFlavor(flavor) {
    this.favoriteFlavors.push(flavor);
  }
}

// name: unique identifier
// flavorFlavors: array of IceCreamFlavorNodes

// flavor serves as it identifier
class IceCreamFlavorNode {
  constructor(flavor) {
  this.flavor = flavor;
  }
}

// Graph class has 3 properties

// peopleNodes: array of PersonNodes
// iceCreamFlavorNodes: array of IceCreamFlavorNodes
// edges: array containing edges between PersonNodes 
// and IceCreamFlavorNodes

// Graph class had 6 methods

// addPersonNode(name): takes in one argument, a person's
// name, creates a new PersonNode with this name, and
// pushes it to the peopleNodes array

// addIceCreamFlavorNode(flavor): Takes in one argument,
// an ice cream flavor, create a new IceCreamFlavorNode
// with this flavor, and pushes it to the 
// iceCreamFlavorNodes array

// getPerson(name): Takes in one agrument, an ice cream flavor
// and returns the node for that flavor

// addEdge(personName, flavorName): Takes in two arguments,
// a person's name and ice cream flavor, retrieves both
// nodes, adds the flavor to the person's favoriteFlavors
// array and pushes the ede to the edges array

// print(): Simply prints our each of the people in the 
// peopleNodes array and their favorite ice cream
// flavors

class Graph{
  constructor() {
    this.peopleNodes = [];
    this.iceCreamFlavorNodes = [];
    this.edges = [];
  }

  addPersonNode(name) {
    this.peopleNodes.push(new PersonNode(name));
  }

  addIceCreamFlavorNode(flavor) {
    this.iceCreamFlavorNodes.push(new IceCreamFlavorNode(flavor));
  }

  getPerson(name) {
    return this.peopleNodes.find(person => person.name == name);
  }

  getFlavor(flavor) {
    return this.iceCreamFlavorNodes.find(flavor => flavor == flavor);
  }

  addEdge(personName, flavorName) {
    const person = this.getPerson(personName);
    const flavor = this.getFlavor(flavorName);
    person.addFlavor(flavor);
    this.edges.push(`${personName} - ${flavorName}`);
  }

  print() {
    return this.peopleNodes.map(({ name, favoriteFlavors }) => {
      return `${name} => ${favoriteFlavors.map(flavor => `${flavor.flavor}`).join(' ')}`;
    }).join('\n')
  }
}

const graph = new Graph(true);
graph.addPersonNode('Emma')
graph.addPersonNode('Kai')
graph.addPersonNode('Sarah')
graph.addPersonNode('Maranda')
graph.addIceCreamFlavorNode('Chocolate Chip');
graph.addIceCreamFlavorNode('Strawberry');
graph.addIceCreamFlavorNode('Cookie Dough');
graph.addIceCreamFlavorNode('Vanilla');
graph.addIceCreamFlavorNode('Pistachio');

graph.addEdge('Emma', 'Chocolate Chip')
graph.addEdge('Emma', 'Cookie Dough')
graph.addEdge('Emma', 'Vanilla')
graph.addEdge('Kai', 'Vanilla')
graph.addEdge('Kai', 'Strawberry')
graph.addEdge('Kai', 'Cookie Dough')
graph.addEdge('Kai', 'Chocolate Chip')
graph.addEdge('Kai', 'Pistachio')
graph.addEdge('Maranda', 'Vanilla')
graph.addEdge('Maranda', 'Cookie Dough')
graph.addEdge('Sarah', 'Strawberry')

console.log(graph.print())
