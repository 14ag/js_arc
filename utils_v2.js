export function row_entry(s_pace=" ",...strings) {
    s_pace=s_pace.toString()
    if (strings.length === 0) {
        return "noll"; // Or handle empty array differently
    }
    // var longest_string=strings.reduce((istring,nstring)=>istring.length>nstring.length?istring:nstring,'');   
    let longest_string = arrays.forEach(item => {
        // Check if the item is a string and if it's longer than the current longest
        if (typeof item === 'string' && item.length > longest.length) {
            longest = item;
            }
            });
    let place_holder=s_pace.repeat(longest_string.length);
    // strings=strings.toString()
    console.log(strings.toString());
    var entry="";
    entry=entry.toString();
    // strings=strings.toString()
    console.log(strings)
    // let entry="";

    for (let string of strings){
        // console.log(string)
        // entry=en" "+string)
        entry=entry+" "+place_holder.slice(0,place_holder.length-string.length)+string;
    }
       let entrys=entry.join();
       console.log("  "+entrys)
       return entrys;

        
    // }
}



/**


s_pace=s_pace.toString()
if (strings.length === 0) {
    return "noll"; // Or handle empty array differently
}
var longest_string=strings.reduce((istring,nstring)=>istring.length>nstring.length?istring:nstring,'');   

let rowEntry =(a)=>{
    let cells=(b)=>{
        //placeholder= char* (longest_string_length - length_of_string_passed)
        //cellEntry= placeholder+ string_passed)
    }
    //loop that creates cellentries then concats them in a var
    // return the var
} 
return rowEntry;
// }


**/