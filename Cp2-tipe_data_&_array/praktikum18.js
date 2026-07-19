// Menambahkan elemen stack
class Stack {
    constructor() {
        this.items = []; // Array untuk menyimpan elemen stack
    }

    // Menambahkan elemen ke stack
    push(element) {
        this.items.push(element);
    }

    // Menghapus elemen teratas
    pop() {
        if(this.isEmpty()) {
            return "Stack kosong!";
        }
        return this.items.pop();
    }

    //Melihat elemen teratas
    peek() {
        if(this.isEmpty()) {
            return "Stack kosong!";
        }
        return this.items[this.items.length - 1];
    }

    // Mengecek apakah stack kosong
    isEmpty() {
        return this.items.length === 0;
    } 

    // Menampilkan seluruh isi stack
    printStack() {
        console.log(this.items.join(" <- "));
    }
}

// Contoh penggunaan
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack(); // Output: 10 <- 20 <- 30

console.log("Teratas:", stack.peek()); // Output: teratas: 30
console.log("Pop:", stack.pop()); // Output: Pop: 30
stack.printStack(); // Output: 1- <- 20