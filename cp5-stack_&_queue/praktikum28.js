// Jalankan perintah berikut di terminal sebelum eksekusi progam:
// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

// ======== CLASS QUEUE ========
class Queue {
    constructor() {
        this.items - [];
    }

    enqueue(element) { // Tambahkan mahasiswa ke antrian
        console.log(`✅ ${element} telah masuk ke dalam antrian seminar.`);
    }

    dequeue() { // Mahasiswa maju seminar
        if(this.isEmpty()) {
            console.log(" Tidak ada mahasiswa dalam antrian.");
            return null;
        }
        const removed = this.items.shift();
        console.log(` ${removed} sedang maju untuk seminar.`);
        return removed;
    }

    front() { // Menampilkan mahasiswa di dalam antrian
        if(this.isEmpty()) {
            console.log(" Tidak ada mahasiswa yang menunggu.");
            return null;
        }
        console.log(` Mahasiswa berikutnya: ${this.items[0]}`);
        return this.items[0];
    }

    isEmpty() { // Cek apakah antrian kosong
        return this.items.length === 0;
    }

    size() { // Jumlah antrian
        console.log(`Jumalah mahasiswa dalam antrian: ${this.items.length}`);
        return this.items.length;
    }

    printQueue() { // Tampilkan semua antrian
        if(this.isEmpty()) {
            console.log(" Antrian kosong.");
        } else {
            console.log(" Daftar Antrian Seminar:");
            this.items.forEach((mhs, index) => {
                console.log(`${index = 1}. ${mhs}`);
            });
        }
    }
}

// ======= PROGRAM UTAMA ========
const queue = new Queue();
let running = true;

while(running) {
    console.log("\n=== SISTEM ANTRIAN SEMINAR MAHASISWA IT ===");
    console.log("1. Tambah Mahasiswa ke Antrian");
    console.log("2. Mahasiswa Maju Seminar");
    console.log("3. Lihat Mahasiswa di Depan");
    console.log("4. Lihat Semua Atribut");
    console.log("5. Lihat Jumlah Antrian");
    console.log("6. Keluar");

    const choice = prompt("Pilih menu (1-6): ");

    switch(choice) {
        case "1":
            const name = prompt("Masuskan nama mahasiswa: ");
            queue.enqueue(name);
            break;
        case "2":
            queue.dequeue();
            break;
        case "3":
            queue.front();
            break;
        case "4":
            queue.printQueue();
            break;
        case "5":
            queue.size();
            break;
        case "6":
            console.log("Terima kasih! Sistem antrian seminar ditutup.");
            running = false;
            break;
        default:
            console.log("✅ Pilihan tidak valid. Silakan pilih 1-6.");
    }
}