https://github.com/14ag/js_arc

Run proj_1.js is the main file. It uses util.js.
It takes input:
Start_range=the array size and minimum value of the array size
Stop_range=maximum array size and maximum value of the array 

Function:
Calculates number of binary search cycles on an array in the worst case scenario

output:
A table with columns :Array size, Binary representation, Number of bits, Cycle  count



Test_box.js contains sample code for testing the new row_entry function in utils_v2.js

Please help with the utils_v2.js
The idea is to make the values in the proj_1 table align to the right side of the column. 

Issue:
The return value is always an array (of size 1) when the expected return value is a string because i used reduce method on the second arguments of the function.


I have tried different type conversation like:
return entry.toString
using for...of loop on the entry[]
foreach method
to no avail


using strings.toString before the line with reduce method breaks the throws error on this line