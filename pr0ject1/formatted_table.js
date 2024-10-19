import { println } from "../utils";
export function f_table(cols, values) {
    // function divideArrayValues(cols, ...values) {
    // it should receive table dimentions then data
    let arrays = [];
    for (let i = 0; i < cols; i++) {
        arrays.push([]);
    }
    // use dimentions to divide the data into cols such that each array holds a row
    // 3d arrays??
    for (let i = 0; i < values.length; i++) {
        //use modulo to make cols
        arrays[i % cols].push(values[i])
            ;
    }
    
    // Step 1: Find the maximum number of rows in any column (to handle columns with different lengths)
    const numRows = Math.max(...arrays.map(array => array.length));
  
    // Step 2: Find the longest string in each column (for formatting purposes)
    const columnWidths = arrays.map(array => {
      return Math.max(...array.map(item => item.toString().length));
    });
  
    // Step 3: Function to print a single row
    function printRow(row) {
      return row
        .map((item, index) => item.toString().padEnd(columnWidths[index])) // Pad the items to the width of the column
        .join(" | ");
    }
  
    // Step 4: Print the header (first row of each column)
    const headers = arrays.map(array => array[0] || "");
    console.log(printRow(headers));
  
    // Step 5: Print a separator line
    const separator = columnWidths.map(width => "-".repeat(width)).join("-+-");
    console.log(separator);
  
    // Step 6: Print the rest of the rows
    for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
      const row = arrays.map(array => array[rowIndex] || ""); // Fills in missing items with empty strings
      console.log(printRow(row));
    }
  }
  































// find the longest value in each column
function findLongestStringInEachArray(arrays) {
    // Iterate through each array to find the longest string
    let longestStrings = arrays.map(array => {
        let longest = "";
        array.forEach(item => {
            // Check if the item is a string and if it's longer than the current longest
            if (typeof item === 'string' && item.length > longest.length) {
                longest = item;
                }
                });
                return longest;
                });
                
                // Return the array of longest strings
                return longestStrings;
                }
                
                
                
                


// let words = "apple", "banana", "cherry", "date";
// println(f_table(1, "apple", "banana", "cherry", "date"));

