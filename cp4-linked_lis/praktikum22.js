// Membuat struktur node
class Node {
    constructor(value) { 
        this.value = value; // Data disimpan
        this.next = null; // Link ke node berikutnya
        this.prev = null; // Link ke node sebelumnya
    }
}

// Membuat kelas Doubly Linked List
class DoublyLinkedList {
    constructor(value) {
        this.head = null; // Data disimpan
        this.tail = null; // Link ke node berikutnya
        this.length = 0; // Jumlah elemen
    }
}

// Menambahkan elemen (append)
append(value) {
    let newNode = new Node(value);

    if(!this.head) { // Jika list kosong
        this.head = newNode;
        this.tail = newNode;
    } else { // Jika sudah ada elemen
        this.tail.naxt = newNode;
        newNode.prev =  this.tail;
        this.tail = newNode;
    }
    this.length++;
}

// Mencetak list maju
printForwand() {
    let current = this.head;
    let result = "";
    while(current) {
        result += current.value + " <-> ";
        current = current.naxt;
    }
    console.log(result + "null");
}

// Mencetak list mundur
printBackward() {
    let current = this.tail;
    let result = "";
    while(current) {
        result += current.value + " <-> ";
        current = current.prev;
    }
    console.log(result + "null");
}

// Uji progam
let dll = new DoublyLinkedList();

    dll.append("ARI");
    dll.append("BAGUS");
    dll.append("CANTIKA");

    console.log("Cetak maju");
    dll.printForward();

    console.log("Cetak mundur");
    dll.printBackward();