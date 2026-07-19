var buah = ["Apel", "Mangga", "Pisang", "Jeruk"];

// MENCARI ELEMEN
console.log("Index Pisang:", buah.indexOf("Pisang")); // 2
console.log("Apakah ada Mangga?", buah.includes("Mangga")); // true

// MENCARI ELEMEN DENGAN 2 VARIBEL
var names = ["David", "Mike", "Cynthia", "Raymond",
"Clayton", "Mike",
"Jennifer"];
var search = "Mike";
var firstPos = names.indexOf(search);
console.log("First found " + search + " at position " +
firstPos);
var lastPos = names.lastIndexOf(search);
console.log("Last found " + search + " at position " + lastPos);