export function row_entry(s_pace = " ", ...strings) {
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
