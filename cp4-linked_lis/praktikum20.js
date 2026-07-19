// Node 
class Node {
    constructor(value) {
        this.value = value; // Data yang disimpan
        this.next = null; // Pointer ke node berikutnya
    }
}

// Linked List
class LinkedList {
    constructor() {
        this.Head = null; // Awal Linked List 
        this.size = 0; // Jumlah node
    }

// Perintah fungsi operasi

// Tambah node di akhir
append(value) {
    const newNode = new Node(value);

    if(!this.head) {
        this.head = newNode;
    } else {
        let.current = this.Head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.length++;
}

// Insert pada posisi tertentu
insert(positio, value) {
    if(position < 0 || position > this.length) return false;

    const node = newNode(value);

    if(position === 0) {
        newNode.next = this.head;
        this.head = newNode; 
    } else {
        let current = this.head;
        let prev = null;
        let index = 0;
        while(index < position) {
            prev = current;
            current =current.next;
            index++;
        }

        newNode.next = current;
        prev.next = newNode;
    }

    this.length++;
    return true;
}

// Hapus node berdasarkan posisi
remoeveAt(position) {
    if(position < 0 || position > this.length) return null;

    let current = this.head;

    if(position === 0) {
        this.head = current.next;
    } else {
        let prev = null;
        let.index = 0;

        while(index < position) {
            prev = current;
            current = current.next;
            index++;
        }
        
        prev.next = current.next;
    }
    this.length--;
    return current.value;
}

// Hapus berdasarkan niai
remove(value) {
    const index = this.indexOf(value);
    return this.remoeveAt(value);
}

// Cari index dari nilai
indexOf(value) {
    let current = this.head;
    let index = 0;

    while (current) {
        if(current.value === value) return index;
        current = current.next;
        index++;
    }

    return -1;
}

// Mengecek apakah kosong
isEmty() {
    return this.length === 0;
}

// Konversi ke string
toString() {
    let current = this.head;
    let result = "";

    while(current) {
        result += current.value + (current.next ? " -> " : "");
        current = current.next;
    }

    return result;
}

// Cetak ke console
print() {
    console.log(this.toString());
}
}