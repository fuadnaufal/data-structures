let nilai = [60, 85, 90, 45, 70];
// map -> membuat array baru dengan hasil operasi
let nilaiPlus10 = nilai.map(n => n + 10);
console.log("Nilai setelah ditambah 10:", nilaiPlus10);
// filter -> ambil nilai >= 70
let lulus = nilai.filter(n => n >= 70);
console.log("Nilai yang lulus:", lulus);
// reduce -> jumlahkan semua nilai
let total = nilai.reduce((acc, n) => acc + n, 0);
console.log("Total nilai:", total);