//import println using es6
import { println } from "./utils.js";

// // function showing closures in js
// function outer(){
//     let foo=0;
//     return function inner(){
//         foo++;
//         return foo;
//     };
// }
// const blt=outer();
// println(blt());
// println(foo)
// println(blt());
//==========================================================================================================

// //arrow functions. 7 is the default value
// const arrow=(x=7)=>x+2;
// println(arrow(8))

//==========================================================================================================
let numbes=[1,2,3,4,5];
numbes.push("thisItem");
println("pushed'thisitem': "+numbes);
numbes.pop() // removes the last item in the array
println("mapped: "+numbes.map(x=>x*2));
numbes.forEach((x)=>println(x));
println("even numbers: "+numbes.filter(x=>x%2===0));
numbes.shift(); //removes the first item in the array

