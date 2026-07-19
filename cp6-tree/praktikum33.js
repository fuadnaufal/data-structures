const prompt = require('prompt-sync')({sigint: true});

// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
    this.right = null;
    }
}

// Binary Tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Menambahkan data teks ke dalam tree (urut alfabet)
    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            console.log(`"${data}" menjadi root tree.`);
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    
    insertNode(node, newNode) {
        // Perbandingan berdasarkan urutan alfabet (caseinsensitive)
        if (newNode.data.toLowerCase() < node.data.toLowerCase()) {
            if (node.left === null) {
                node.left = newNode;
                console.log(`"${newNode.data}" ditambahkan ke kiri dari "${node.data}"`);
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                console.log(`"${newNode.data}" ditambahkan ke kanan dari "${node.data}"`);
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Traversal InOrder
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            process.stdout.write(node.data + " ");
            this.inOrder(node.right);
        } 
    }

    // Traversal PreOrder
    preOrder(node) {
        if (node !== null) {
            process.stdout.write(node.data + " ");
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Traversal PostOrder
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            process.stdout.write(node.data + " ");
        }
    }
}

// ==============================
// Program utama
// ==============================
const tree = new BinaryTree();

console.log("=== PROGRAM BINARY TREE (DATA TEKS) ===");

while (true) {
    console.log("\nMenu:");
    console.log("1. Tambah data teks");
    console.log("2. Tampilkan traversal InOrder");
    console.log("3. Tampilkan traversal PreOrder");
    console.log("4. Tampilkan traversal PostOrder");
    console.log("5. Keluar");

    const choice = prompt("Pilih menu (1-5): ");

    if (choice === "1") {
        const text = prompt("Masukkan teks (contoh: nama atau kata): ");
        tree.insert(text);
    }
    else if (choice === "2") {
        console.log("\nTraversal InOrder:");
        tree.inOrder(tree.root);
        console.log();
    }
    else if (choice === "3") {
        console.log("\nTraversal PreOrder:");
        tree.preOrder(tree.root);
        console.log();
    }
    else if (choice === "4") {
        console.log("\nTraversal PostOrder:");
        tree.postOrder(tree.root);
        console.log();
    }
    else if (choice === "5") {
        console.log("Program selesai.");
        break;
    }
    else {
        console.log("Pilihan tidak valid!");
    }
}

