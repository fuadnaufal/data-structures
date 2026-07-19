const prompt = require(`prompt-sync`)();

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Menambahakan elemen dengan prioritas
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
    
        // Sisipkan berdasarkan priortas (angka lebih kecil = prioritas lebih tinggi)
        for(let i = 0; i < this.items.length; i++) {
            if(queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Menghapus elemen prioritas tertinggi (antrian paling depan)
    dequeue() {
        if (this.isEmpty()) {
            console.log(" Antrian kosong!");
            return null;
        }
        const removed = this.items.shift();
        console.log(`➡ Pasien "${removed.element}" (Prioritas ${removed.priority}) sedang dilayani...`);
        return removed;
    }

    // Menampilkan daftar antrian
    printQueue() {
        console.log("\n=== DAFTAR ANTRIAN IGD ===");
        if (this.isEmpty()) {
            console.log("Tidak ada pasien dalam antrian.");
        } else {
            this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item.element} (Prioritas: ${item.priority})`);
            });
        }
    }
    
    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// ===============================
// Simulasi Interaktif Antrian IGD
// ===============================
const queue = new PriorityQueue();
let pilihan;

do {
    console.log("\n=== SISTEM ANTRIAN PRIORITAS IGD ===");
    console.log("1. Tambah Pasien");
    console.log("2. Layani Pasien (Dequeue)");
    console.log("3. Lihat Antrian");
    console.log("4. Keluar");
    pilihan = prompt("Pilih menu (1-4): ");
    
    switch (pilihan) {
        case "1":
            const nama = prompt("Masukkan nama pasien: ");
            const prioritas = parseInt(prompt("Masukkan prioritas (1 = darurat, 2 = sedang, 3 = ringan): "));
            queue.enqueue(nama, prioritas);
            console.log(`✅ Pasien "${nama}" ditambahkan dengan prioritas ${prioritas}.`);
            break;

        case "2":
            queue.dequeue();
            break;
            
        case "3":
            queue.printQueue();
            break;
            
        case "4":
            console.log(" Program selesai. Semoga pasien cepat sembuh!");
            break;
            
        default:
            console.log("✅ Pilihan tidak valid!");
    }

} while(pilihan !== "4");