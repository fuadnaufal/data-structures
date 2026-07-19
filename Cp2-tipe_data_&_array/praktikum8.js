// ==========================
// LATIHAN TIPE DATA PRIMITIVE
// ==========================

// 1. String
let nama = "Andi";
console.log("String:", nama);
// 2. Number
let umur = 20;
console.log("Number:", umur);
// 3. Boolean
let isActive = true;
console.log("Boolean:", isActive);
// 4. Null
let kosong = null;
console.log("Null:", kosong);
// 5. Undefined
let belumDiisi;
console.log("Undefined:", belumDiisi);
// 6. Symbol
let id = Symbol("id");
console.log("Symbol:", id);
// 7. BigInt
let big = 123456789012345678901234567890n;
console.log("BigInt:", big);

// ==========================
// LATIHAN TIPE DATA NON-PRIMITIVE
// ==========================

// 1. Object
let mahasiswa = {
nama: "Budi",
umur: 21,
jurusan: "Informatika"
};
console.log("Object:", mahasiswa);
// 2. Array
let angka = [1, 2, 3, 4, 5];
console.log("Array:", angka);
// 3. Function
function sapa(nama) {
return "Halo, " + nama + "!";
}
console.log("Function:", sapa("Citra"));
// 4. Date
let sekarang = new Date();
console.log("Date:", sekarang);
// 6. Map
let map = new Map();
map.set("nama", "Dewi");
map.set("umur", 22);
console.log("Map:", map);
// 7. Set
let set = new Set([1, 2, 3, 3, 4]);
console.log("Set:", set);