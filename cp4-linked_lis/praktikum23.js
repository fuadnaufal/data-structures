// Node circular Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Circular Linked List
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
}

// Tambahkan node di akhir
append(value) {
    const newNode = new Node(value);
    if(!this.head) {
        this.head = newNode;
        newNode.next =this.head // Membentuk lingkaran
    } else {
        let current = this.head;
        while(current.next !== this.head) {
            current = current.next;
        }
        current.next = newNodel;
        newNode.next = this.head;
    }
    this.length++;
}

// Tambahkan node di posisi tertentu
insert(position, value) {
    if(position < 0 || position > this.length) return false;
    const newNode = new Node(value);

    if(position === 0) {
        if(!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            let current = this.head;
            while(current.next !== this.head) {
                current = current.next;
            }
        }
    } else {
        let index = 0;
        let current = this.head;
        let previous = null;
        while(index++ < position) {
            previous = current;
            current = current.next;
        }
        previous.next = newNode;
        newNode.next = current;
    }
    this.length++;
    return true;
}

// Hapus node di posisi tertentu
removeAt(position) {
    if(position < 0 || position >= this.length) return null;
    let current = this.head;
    let remoeveValue;

    if(position === 0) {
        removedValue = current.value;
        if (this.length === 1) {
        this.head= null;
        } else {
            let last = this.head;
            while(last.next !== this.head) {
                last = last.next;
            }
            this.head = current.next;
            last.next = this.head;
        }
    } else {
        let index = 0;
        let previous = null;
        while(index++ < position) {
            previous = current;
            current = current.next;
        }
        removedValue = current.value;
        previous.next = current.next;
    }
    this.length--;
    return removedValue;
}

// Cari elemen berdasarkan value
search(value) {
    if(!this.head) return -1;
        let current = this.head;
        let index = 0;
    do {
        if (current.value === value) return index;
        current = current.next;
        index++;
    } while(current !== this.head);
    return -1;
}

// Cek kosong
isEmpty() {
    return this.length = 0;
}

// Panjang list
size() {
    return this.length;
}

// Cetak isi list
print() {
    if(!this.head) {
        console.log("List kosong");
        return;
    }
    let result = "";
    let current = this.head;
    do {
        result += current.value + " -> ";
        current = current.next;
    } while(current !== this.head);
    console.log(result + "(back to head)");
}

// ----------
// UJICOBA
// ----------

let cll = new CircularLinkedList();

// 1. Tambah data pemain ke dalam lingkaran
console.log("=== Tambah pemain ke lingkaran ===");
cll.append("Andra");
cll.append("Bagas");
cll.append("Cinta");
cll.append("Luthfi");
cll.print();

// 2. Sisipkan pemain baru di posisi tertentu
console.log("\n=== Sisip pemain baru di posisi 2 ===");
cll.insert(2, "Eko");
cll.print();

// 3. Hapus pemain pada posisi tertentu
console.log("\n=== Hapus pemain di posisi 3 ===");
console.log("Terhapus:", cll.removeAt(3));
cll.print();