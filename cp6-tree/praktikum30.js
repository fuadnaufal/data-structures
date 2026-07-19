// Node structure for tree
class Node {
    constructor(x) {
        this.data = x;
        this.children = [];
    }
}

// Function to add a child to a node
function addChild(parent, child) {
    parent.children.push(child);
}

// Function to print parents of each node
function printParents(node, parent) {
    if (parent === null)
        console.log(node.data + " -> root");
    else
        console.log(node.data + " -> " + parent.data);

    for (let child of node.children)
        printParents(child, node);
}

// Function to print children of each node
function printChildren(node) {
    let str = node.data + " -> ";
    for (let child of node.children)
        str += child.data + " ";
    console.log(str);

    for (let child of node.children)
        printChildren(child);
}

// Function to print leaf nodes
function printLeafNodes(node) {
    if (node.children.length === 0) {
        process.stdout.write(node.data + " ");
        return;
    }
    for (let child of node.children)
        printLeafNodes(child);
}

// Function to print degrees of each node
function printDegrees(node, parent) {
    let degree = node.children.length;
    if (parent !== null)
        degree++;
    console.log(node.data + " -> " + degree);

    for (let child of node.children)
        printDegrees(child, node);
}

// Driver code
let root = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

// Constructing tree
addChild(root, n2);
addChild(root, n3);
addChild(n2, n4);
addChild(n2, n5);

console.log("Parents of each node:");
printParents(root, null);

console.log("Children of each node:");
printChildren(root);

process.stdout.write("Leaf nodes: ");
printLeafNodes(root);
console.log();

console.log("Degrees of nodes:");
printDegrees(root, null);