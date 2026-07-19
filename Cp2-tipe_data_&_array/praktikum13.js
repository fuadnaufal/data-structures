var nums = [1,2,3,7,8,9];
nums.splice(3,0,5,6);
console.log(nums);

var warna = ["merah", "kuning", "hijau"];
warna.splice(1, 1, "biru");
console.log(warna);

var itDiv =
["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept); // Raymond,Cynthia,Danny
console.log(cisDept); // Mike,Clayton,Terrill,Jennifer