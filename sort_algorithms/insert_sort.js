import { println } from "../utils";

/* Implement the insert function to correctly integrate a given value into a sorted array.
The insert function receives three inputs: an array,
a rightIndex indicating the end of the sorted portion, and a value to be inserted.
Precondition: Elements at indices 0 to rightIndex within the array are sorted in ascending order.
Postcondition: The value and the original elements from indices 0 to rightIndex
should be sorted in ascending order and stored in the array from indices 0 to rightIndex + 1.
To achieve this, the insert function must shift elements greater than value to the right,
starting at rightIndex and proceeding until an element less than or equal to value is encountered 
or the beginning of the array is reached. Once sufficient space is created, the value can be inserted into its correct position.
Adhere to the style and structure of the provided hint code when implementing the function. */

var insert = function (array, rightIndex, value) {
    for (var j = rightIndex; j >= 0 && value < array[j]; j--) {
        array[j + 1] = array[j];
    }

    array[j + 1] = value;
    return array;
};

var insertionSort = function (array) {
    for (var i = 1; i < array.length; i++) {
        insert(array,i-1,array[i]);
    }
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

// insert(array, 4, 2);
// println("Array after inserting 2:  " + array);
// println(" ")

// insert(array, 5, 9);
// println("Array after inserting 9:  " + array);
// println(" ")

// insert(array, 6, 6);
// println("Array after inserting 6:  " + array);

var array2 = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array2);
println("Array after sorting:  " + array2);

console.log(array2);
//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


