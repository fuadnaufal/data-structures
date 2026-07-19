// Membuat record untuk data mehasiswa
var mahasiswa = {
    nama: "Indra Kurniawan",
    npm: "06110111",
    jurusan: "Teknologi Informasi",
    angkatan: 2020
};

// Mengakses field dalam record
console.log("Nama: " + mahasiswa.nama);
console.log("NPM: " + mahasiswa.npm);

// Membuat field baru
mahasiswa.email = "indra.k@example.com";

// Mengubah nilai field
mahasiswa.angkatan = 2021;

// Menampilkan record
console.log(mahasiswa);