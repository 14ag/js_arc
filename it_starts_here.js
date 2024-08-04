import { println } from "./utils.js";

// //nested if practice
// var lat=37.5;
// var lng=-131.2;
// var direction;

// if (lat > 38 && lng < -134) { 
//     direction = "NW";
// } else {
//     if (lat > 38 && lng > -134) {
//         direction = "NE";
//     } else {
//         if (lat < 38 && lng < -134) {
//            direction = "SW";
//         } else {
//             if (lat < 38 && lng > -134) {
//                 direction = "SE";
//             }
//        }
//     }
// }
// console.log(direction);



//==================================================================================

// nested loop pracrice
// The program below plants a 5 x 5 field of snowmen.
//  Change it to 5 rows of 10 snowmen, 
//   then 10 rows of 5 snowmen.

var rows=5;
var snowmenCount=10; //snowmen per row or columns
for (var i = 0; i < rows; i++) {
    var snowmen = "";
    for (var j = 0; j < snowmenCount; j++) {
        snowmen += " ☃ ";
    }
    println(snowmen);
}
// A visual artist is programming a 7x7 LED display:
// 7x7 grid of squares.
// This is their program so far:
// rowNum ← 1
// numPixels ← 1
// REPEAT 3 TIMES
// {
//    colNum ← 5 - rowNum
//    REPEAT (numPixels) TIMES
//    {
//      fillPixel(rowNum, colNum, "green")
//      colNum ← colNum + 1
//     }
//     numPixels ← numPixels + 2
//     rowNum ← rowNum + 1
// }
// The code relies on this procedure:
// fillPixel(row, column, color) : Lights up the pixel at the given row and column with the given color (specified as a string). The top row is row 1 and the left-most column is column 1.
// What will the output of their program look like?



// 750, 77, 737, 714, 672, 668, 655, 634, 629, 618, 615, 610