var chess = prompt("Enter your chessboard size")
var number = Number(chess)
for(i = 0; i < number; i++) {
if (i % 2 == 0){
console.log("# " + "# " + "# " + "#")
}
else {
console.log(" # " + "# " + "#" + " #")
}
}