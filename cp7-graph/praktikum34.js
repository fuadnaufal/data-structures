const prompt = require("prompt-sync")({sigint: true});

class Graph {
    constructor() {
        this.adjacencyList = {} // Menyiapkan vertex dan daftar tetangganya
    }

    // Menambahkan vertex baru
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Menambahakan edge (sisi) antara dua vertex
    addEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2); // Graph berarah
        } else {
            console.log("Vertex tidak ditemukan. Tambahakan vertex terlebih dahulu");
        }            
    }

    // Menampilkan graph
    printGraph() {
        console.log("\n=== Adjacency List ===");
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

// ===========================
// Bagian Interakasi Program
// ===========================

// Membuat objek graph
let g = new Graph();

// Input jumlah vertex
let numVertex = parseInt(prompt("Masukan jumlah vertex: "));
for(let i = 0; i < numVertices; i++) {
    let vertex = prompt(`Masukan nama vertex ke-${i + 1}: `);
    g.addVertex(vertex);
}

// Input jumlah graph
let numEdges = perseInt(prompt("Masukan jumlah edge (sisi berarah): "));
for(let i = 0; i < numEdges; i++) {
    let v1 = prompt(`Edge ${i + 1} - Masukan vertex asal: `);
    let v2 = prompt(`Edge ${i + 1} - Masukan vertex tujuan: `);
    g.addEdge(v1, v2);
}

g.printGraph();



