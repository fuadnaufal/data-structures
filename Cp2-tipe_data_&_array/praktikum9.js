// Membuat array dengan cara literal
var buah = ["Apel", "Mangga", "Pisang", "Jeruk"];
console.log("Daftar Buah:", buah);

// Membuat array dengan constructor
var angka = new Array(10, 20, 30, 40, 50);
console.log("Daftar Angka:", angka);

//membuat array dari string
var sentence = "the quick brown fox jumped over the lazydog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
console.log("word " + i + ": " + words[i]);
}