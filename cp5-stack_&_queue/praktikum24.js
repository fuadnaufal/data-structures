// Stack dengan class
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) { // Tambah elemen ke stack
        this.items.push(element);
    }

    pop() { // Hapus elemen teratas
        if(this.isEmpty()) {
            return "Stack kosong";
        }
        return this.items.pop();
    }

    peek() { // Lihat elemen teratas
        if(this.isEmpty()) {
            return "Stuck kosong";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() { // Cek apakah stack kosong
        return this.items.length === 0;
    }

    size() { // Ukuran stack
        return this.items.length;
    }

    clear() { // Menghapus semua elemen
        this.items = [];
    }

    print() { // Tempilka isi stack
        return this.items.join(" -> ");
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.pop();
console.log(stack);
console.log(stack.pop());