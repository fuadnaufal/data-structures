// Memby=uat class Queue
class Queue {
    constructor() {
        this.items = []; // Array untuk menyimpan elemen Queue
    }

    enqueue(elemen) { // Menambahakan elemen ke antrian (enqueue)
        this.items.push(elemen);
        console.log(`${elemen} telah ditambahakan ke antrian.`);
    }

    dequeue() { // Menghapus elemen ke antrian (dequeue)
        if(this.isEmpty()) {
            console.log("Antrian kosong! Tidak ada elemen yang bisa dihapus");
            return null;
        }
        const removed = this.items.shift();
        console.log(`${removed} telah dihabus dari antrian`);
        return removed;
    }

    front() { // Melihat elemen terdepan tanpa menghapusnya
        if(this.isEmpty()) {
            console.log("Antrian kosong!");
            return null;
        }
        console.log(`Elemen terdepan adalah: ${this.items[0]}`);
        return this.items[0];
    }

    isEmpty() { // Mengecek apakah antrian kosong
        return this.items.length === 0;
    }

    size() { // Menampilkan ukuran antrian
        console.log(`Ukuran antrian saat ini: ${this.items.length}`);
        return this.items.length;
    }

    printQueue() { // Menampilan semua elemen dalam anrtian
        console.log("Isi antrian:", this.items.join(" ← "));
    }
}

// --- Uji Coba ---
const queue = new Queue();

queue.enqueue("Mahasiswa A");
queue.enqueue("Mahasiswa B");
queue.enqueue("Mahasiswa C");

queue.printQueue();
queue.front();
queue.dequeue();
queue.printQueue();
queue.size();