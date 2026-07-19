// Install duluu: npm isntall prompt-sync
const prompt = require("prompt-sync")();

class promtStack {
    constructor(size) {
        this.size = size;
        this.stack = new Array(size);
        this.top = -1;
        this.count = 0 // Jumah data dalam stack
    }

    push(item) {
        this.top = (this.top + 1) % this.size;
        this.stack[this.top] = item;
        if(this.count < this.size) {
            this.count++;
        }
        console.log(`✔ Push: ${item}`);
    }

    pop() {
        if(this.count === 0) {
            console.log(" Stack kosong");
            return null;
        }
        let item = this.stack[this.top];
        this.stack[this.top] = undefined;
        this.top = (this.top - 1 + this.size) & this.size;
        this.count--;
        console.log(`✅ Pop: ${item}`);
        return item;
    }

    printStack() {
        console.log("\n=== Isi Promt Stack ===");
        for(let i = 0; i < this.size; i++) {
            console.log(`${i}: ${this.stack[i] !== undefined ? this.stack[i] : "-"}`);
        }
        console.log("=================================\n");
    }
}

// ---------------------
// Progam utama (menu)
// ---------------------
const Kapasitas = parseInt(prompt("Masukan kapasitas stack"));

while(true) {
    console.log("Menu");
    console.log("1. Push data");
    console.log("2. Pop data");
    console.log("3. Lihat isi stack");
    console.log("4 Keluar");

    let pilihan = prompt("Pilih menu (1-4): ");

    if(pilihan === "1") {
        let data = prompt("Masukan data yang ingin di-push: ");
        CS.push(data);
    } else if(pilihan === "2") {
        cs.pop();
    } else if(pilihan === "3") {
        cs.printStack();
    } else if(pilihan === "4") {
        console.log("Terima kasih! Progam selesai.");
    } else {
        console.log(" Pilihan tidak valid.");
    }
}