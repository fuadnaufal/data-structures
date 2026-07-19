// Import prompt-sync untuk input
const prompt = require("prompt-sync")({ sigint: true });

// Struktur Node untuk Tree
class Node {
    constructor(x) {
        this.data = x;
        this.children = [];
    }
}

// Fungsi untuk menambah anak ke node
function addChild(parent, child) {
    parent.children.push(child);
}

// Fungsi untuk mencetak parent dari tiap node
function printParents(node, parent) {
    if (parent === null)
        console.log(node.data + " -> root");
    else
        console.log(node.data + " -> " + parent.data);
    for (let child of node.children)
        printParents(child, node);
}

// Fungsi untuk mencetak anak dari tiap node
function printChildren(node) {
    let str = node.data + " -> ";
    for (let child of node.children)
        str += child.data + " ";
    console.log(str);

    for (let child of node.children)
        printChildren(child);
}

// Fungsi untuk mencetak leaf node
function printLeafNodes(node) {
    if (node.children.length === 0) {
        process.stdout.write(node.data + " ");
        return;
    }
    for (let child of node.children)
        printLeafNodes(child);
}

// Fungsi untuk mencetak derajat tiap node
function printDegrees(node, parent) {
    let degree = node.children.length;
    if (parent !== null)
        degree++;
    console.log(node.data + " -> " + degree);

    for (let child of node.children)
        printDegrees(child, node);
}

// ======================
// Bagian utama (driver)
// ======================

console.log("=== PROGRAM TREE DENGAN INPUT PROMPT-SYNC ===");

// Input jumlah node
const totalNodes = parseInt(prompt("Masukkan jumlah node: "));
let nodes = [];

// Membuat node berdasarkan input
for (let i = 0; i < totalNodes; i++) {
    let value = prompt(`Masukkan nilai untuk node ke-${i + 1}: `);
    nodes.push(new Node(value));
}

// Input relasi antar node
console.log("\nMasukkan hubungan parent-child:");
console.log("Ketik 'done' jika sudah selesai.\n");

while (true) {
    let parentVal = prompt("Parent: ");
    if (parentVal.toLowerCase() === "done") break;
    let childVal = prompt("Child: ");
    let parentNode = nodes.find(n => n.data === parentVal);
    let childNode = nodes.find(n => n.data === childVal);

    if (parentNode && childNode) {
        addChild(parentNode, childNode);
    } else {
        console.log("✅ Node tidak ditemukan. Pastikan nama sesuai.");
    }
}

// Asumsikan node pertama adalah root
let root = nodes[0];

console.log("\n=== HASIL TREE ===");
console.log("\nParents of each node:");
printParents(root, null);

console.log("\nChildren of each node:");
printChildren(root);

process.stdout.write("\nLeaf nodes: ");
printLeafNodes(root);
console.log();

console.log("\nDegrees of nodes:");
printDegrees(root, null);