// this is an equivalent to echo 
export function println(x){ //alias for console.log
    console.log(`${x}`); //using backticks it can accept exxpressions
}

export function binar_search(array, targetValue){ //returns number of cycles ina binary search
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count=0;
    
    while(min<=max){
        guess = min+ Math.floor((max-min)*0.5);
        count++;
        // println(guess);
        
        if(array[guess]===targetValue){
            return count;
            // return guess;
        } 
        else if (array[guess]<targetValue){
           min=guess+1;
        }
        else if (array[guess]>targetValue){
            max=guess-1;
        }
    }
    return count;
    // return -1;
}


export function to_binary(value){ //converts value to binary
    if (value === 0) {
        return 0;
    }
    function b(value) {
        if (!(value > 0)) {
            return ""
        }
        return b(Math.floor(value / 2)) + (value % 2).toString();
    }
    return b(value) 
}




export function row_entry(x="noll"){
    x=x.toString()
    let place_holder="            ";
    if (x.length>place_holder.length){return x;}
    let entry=place_holder.slice(0,place_holder.length-x.length)+x;
    return entry;
}

export function s_wap(array,x,y){ //swaps x and y items in an array
    let tmp=array[x];
    array[x]=array[y];
    array[y]=tmp;
}

export function assertEqual(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Expected ${expected}, but got ${actual}`);
    }
  }

export function row_entry_v2(s_pace = " ", ...strings) {
    s_pace = s_pace.toString();
    
    if (strings.length === 0) {
        return "noll"; // Handle empty array
    }

    // Find the longest string using forEach
    let longest_string = "";
    strings.forEach(string => {
        if (string.length > longest_string.length) {
            longest_string = string;
        }
    });

    // Create a placeholder based on the longest string
    let place_holder = s_pace.repeat(longest_string.length);

    // Initialize the entry string
    let entry = "";

    // Loop through the strings, format them, and add them to the entry
    strings.forEach(string => {
        let padding = place_holder.slice(0, place_holder.length - string.length);
        entry += padding + string + " "; // Adding padding and string with a space
    });

    // Trim the trailing space and return the entry
    return entry;
}

// export 