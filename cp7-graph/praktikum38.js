const prompt = require("prompt-sync")({ sigint: true });

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(from, to) {
        this.adjacencyList[from].push(to);
    }

    topSort() {
        let visited = {};
        let stack = [];
        
        for (let vertex in this.adjacencyList) {
            visited[vertex] = false;
        }

        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                this.topSortHelper(vertex, visited, stack);
            }
        }

        console.log("\n=== HASIL TOPOLOGICAL SORT ===");
        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }

    topSortHelper(vertex, visited, stack) {
        visited[vertex] = true;

        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                this.topSortHelper(neighbor, visited, stack);
            }
        }

        stack.push(vertex);
    }
}

// =============================
// Interaksi dengan Pengguna
// =============================
let g = new Graph();

console.log("=== PROGRAM TOPOLOGICAL SORT KURIKULUM ===\n");

let n = parseInt(prompt("Masukkan jumlah mata kuliah: "));

for (let i = 1; i <= n; i++) {
    let course = prompt(`Masukkan nama mata kuliah ke-${i}: `);
    g.addVertex(course);
}

let e = parseInt(prompt("\nMasukkan jumlah hubungan prasyarat: "));

console.log("Format input: MataKuliahA MataKuliahB (A harus diambil sebelum B)");

for (let i = 1; i <= e; i++) {
    let input = prompt(`Prasyarat ke-${i}: `).split(" ");
    let from = input[0];
    let to = input[1];
    g.addEdge(from, to);
}

console.log("\nMenghitung Topological Sort...");
g.topSort();