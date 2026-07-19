class Graph {
    constructor() {
        this.adjList = new Map();
    }

    // Menambahakan vertex
    addVertex(v) {
        if(!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
    }

    // Menambahkan edge (graf tidak berarah)
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    // BFS Traversal
    bfs(start) {
        // Menandai semua vertex sebagai belum dikunjungi
        let visited = {};
        for(let vertex of this.adjList.keys()) {
            visited[vertex] = false;
        }

        let queue = [];
        visited[start] = true;
        queue.push(start);

        console.log("Hasil BFS mulai dari vertex: ", start);

        while(queue.length !== 0) {
            let current = queue.shift();
            console.log(current);

            for(let neighbor of this.adjList.get(current)) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// ===================
// Bagian input prog
// ===================
let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "G")

g.bfs("A");