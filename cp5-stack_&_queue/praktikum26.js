const prompt = require("prompt-sync")();

// Representasi maze
let maze = [
    ['S', '0', '1', '0'],
    ['1', '0', '1', '0'],
    ['0', '0', '0', '0'],
    ['1', '1', '0', 'E']
];

// Posisi awal (S)
let position = { x: 0, y: 0 };

// Stack untuk menyimpan jejak langkah
let stack = [];
stack.push([position.x, position.y]);

// Fungsi menampilkan maze
function printMaze() {
    console.clear();
    for(let i = 0; i < maze.length; i++) {
        let row = "";
        for(let j = 0; j < maze[0].length; j++) {
            if(i === position.x && j === position.y) {
                row += " P "; // Player
            } else {
                row += " " + maze[i][j] + " ";
            }
        }
        console.log(row);
    }   
}
console.log("\nGunakan Perintah: W = Atas, A = Kiri, S = Bawah, D = Kanan, Q = Keluar");

// Fungsi cek langkah valid
function isValid(x, y) {
    return(
        x >= 0 &&
        y >= 0 &&
        x < maze.length &&
        y < maze[0].length &&
        maze[x][y] !== '1'
    );
}

// Geme Loop
let running = true;
while(running) {
    printMaze();

    if(maze[position.x][position.y] === 'E') {
        console.log("Selamat! Kamu menemukan EXIT!");
        console.log("Jejak langkan (stack):", stack);
    }

    let move = prompt("Gerakanmu (W/A/S/D): ").toUpperCase();

    let newX = position.x;
    let newY = position.y;

    if(move === "W") newX--;
    else if(move === "S") newX++;
    else if(move === "A") newY--;
    else if(move === "D") newY++;
    else if(move === "Q") {
        console.log("Keluar dari permainan.");
        break;
    } else {
        console.log(" Input tidak valid! Gunakan W/A/S/D.");
        continue
    }

    if(isValid(newX, newY)) {
        position.x = newX;
        position.y = newY;
        stack.push([position.x, position.y]); // Simpan jalur
    } else {
        console.log("Tidak bisa ke sana, ada tembok");
    }
}