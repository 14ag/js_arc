import {println,s_wap } from "../utils";
/*
Complete the indexOfMinimum function. This function should:

Take an array of numbers and a starting index.
Find the smallest number in the array from the starting index onwards.
Return the index of the first occurrence of this smallest number in the specified range.

Selection sort iterates through an array. For each position,
 it finds the smallest value from that position to the end of the array.
  It then swaps the current value with the smallest found value.
 Implement the selection sort algorithm using the provided swap and indexOfMinimum functions.

Once you've finished the function, run the provided test to check if it works correctly.

*/

// function s_wap(array,x,y){ //swaps x and y items in an array
//     let tmp=array[x];
//     array[x]=array[y];
//     array[y]=tmp;
// }
var indexOfMinimum = function(arr, startIndex) {
    // Set initial values for minValue and minIndex, based on the leftmost entry in the subarray
    var minValue = arr[startIndex]; 
    var minIndex = startIndex;
    // Loop over items starting with startIndex, updating minValue and minIndex as needed:
    for (let i = minIndex+1; i < arr.length; i++) {
        if (arr[i]<minValue) {
            minIndex=i;
            minValue=arr[i]
        }
    }
    return minIndex;
}; 

function selectionSort(arr) {
    //compare all elements to current index and find the smallest one
    for (let i = 0; i < arr.length; i++) {
        s_wap(arr,i,indexOfMinimum(arr,i));
    }
}


var test = [22, 11, 99, 88, 9, 7, 42];
selectionSort(test);
println("Array after sorting:  " + test);

//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

// var array = [18, 6, 66, 44, 9, 22, 14];   
// var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
// println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );