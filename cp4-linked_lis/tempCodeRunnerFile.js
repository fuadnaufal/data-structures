function DoublyLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

// ----------------------
// Metode yang digunakan
// ----------------------

// Tambah node di posisi tertentu
this.insert = function(position, element) {
    if(position >= 0 && position <= length) {
        let node = new Node(element),
        current = head,
        previous,
        index = 0;

        if(position == 0) { // Posisi pertama
            if(!head) { // List kosong
                head = node;
                tail = node;
            } else {
                node.next = current;
                current.prev = node;
                head = node;
            }
        } else if(position === length) { // Posisi terakhir
            current = tail;
            current.next = node;
            node.prev = current;
            tail = node;
        } else { // Posisi tengah
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            node.prev = previous
            previous.next = node;
            current.prev = node;
        }
        length++;
        return true;
    } else {
        return false;
    }
};

// Hapus node di posisi tertentu
this.removeAt = function(position) {
    if(position > -1 && position < length) {
        let current = head,
        previous,
        index = 0;

        if(position === 0) { // Hapus posisi pertama
            head = current.next;
            if(length === 1) {
                tail = null;
            } else {
                head.prev = null;
            }
        } else if(position === length -1) { // Hapus posisi terakhir
            current = tail;
            tail = current.prev;
            tail.next = null;
        } else { // Hapus posisi tengah
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        length--;
        return current.element;
    } else {
        return null;
    }
};

// Cetak maju
this.printForward = function() {
    let current = head;
    let result = "";
    while(current) {
        result += current.element + " <-> ";
        current = current.next;
    }
    console.log(result + "null");
};

// Cetak mundur
this.printBackward = function() {
    let current = tail;
    let result = "";
    while(current) {
        result += current.element + " <-> ";
        current = current.prev;
    }
    console.log(result + "null");
};

// Info tambahan
this.size = function() {
    return length;
};

this.isEmpty = function() {
   return length === 0;
};
} 

// ----------
// Uji coba
// ----------
let dll = new DoublyLinkedList();
dll.insert(0, "Andi");
dll.insert(1, "Budi");
dll.insert(2, "Citra");
dll.insert(1, "Dewi"); // Sisipkan di tangah

console.log("Cetak maju");
dll.printForward();

console.log("Cetak mundur");
dll.printBackward();

console.log("Hapus posisi 2:", dll.removeAt(2));
dll.printForward();