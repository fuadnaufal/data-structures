// Import library prompt-sync untuk input pengguna
const prompt = require("prompt-sync")({ sigint: true });

// =====================
// Kelas Node untuk Tree
// =====================
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// ===========================
// Kelas Binary Search Tree
// ===========================
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Menambahkan data baru ke BST
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // Mencari data dalam BST
    search(node, data) {
        if (node === null) return null;
        else if (data < node.data) return this.search(node.left, data);
        else if (data > node.data) return this.search(node.right, data);
        else return node;
    }

    // Traversal in-order (kiri - akar - kanan)
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            process.stdout.write(node.data + " ");
            this.inOrder(node.right);
        }
    }

    // Traversal pre-order (akar - kiri - kanan)
    preOrder(node) {
        if (node !== null) {
            process.stdout.write(node.data + " ");
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Traversal post-order (kiri - kanan - akar)
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            process.stdout.write(node.data + " ");
        }
    }

    // Menghapus node dari BST
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) return null;

        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
        // Node ditemukan
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }
        // Node dengan dua anak
        const aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
}

findMinNode(node) {
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
    }
}

// ======================
// Bagian Utama Program
// ======================
const bst = new BinarySearchTree();

console.log("=== PROGRAM BINARY SEARCH TREE (BST) ===");

// Input jumlah data
const n = parseInt(prompt("Masukkan jumlah data yang ingin dimasukkan: "));

// Input nilai-nilai node
for (let i = 0; i < n; i++) {
    let value = parseInt(prompt(`Masukkan nilai data ke-${i + 1}: `));
    bst.insert(value);
}

// Menampilkan hasil traversal
console.log("\n--- HASIL TRAVERSAL ---");
process.stdout.write("In-order: ");
bst.inOrder(bst.root);
console.log();

process.stdout.write("Pre-order: ");
bst.preOrder(bst.root);
console.log();

process.stdout.write("Post-order: ");
bst.postOrder(bst.root);
console.log();

// Pencarian data
let cari = parseInt(prompt("\nMasukkan nilai yang ingin dicari: "));
let hasil = bst.search(bst.root, cari);
console.log(hasil ? "✅ Data ditemukan di dalam tree." : "✅ Data tidak ditemukan.");

// Penghapusan node
let hapus = parseInt(prompt("\nMasukkan nilai yang ingin dihapus dari tree: "));
bst.remove(hapus);

console.log("\n--- TREE SETELAH PENGHAPUSAN ---");
process.stdout.write("In-order: ");
bst.inOrder(bst.root);
console.log();