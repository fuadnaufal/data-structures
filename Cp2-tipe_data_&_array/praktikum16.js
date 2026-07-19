var angkaAcak = [40, 10, 5, 80, 20];
console.log("Sebelum sort:", angkaAcak);
angkaAcak.sort((a, b) => a - b); // ascending
console.log("Setelah sort ascending:", angkaAcak);
angkaAcak.sort((a, b) => b - a); // descending
console.log("Setelah sort descending:", angkaAcak);
var nums = [1,2,3,4,5];
nums.reverse(); //pembalikan
console.log(nums); // 5,4,3,2,1