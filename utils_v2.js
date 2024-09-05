export function row_entry(s_pace=" ",...strings) {
    s_pace=s_pace.toString()
    if (strings.length === 0) {
        return "noll"; // Or handle empty array differently
    }
    var longest_string=strings.reduce((istring,nstring)=>istring.length>nstring.length?istring:nstring,'');   
    
    let place_holder=s_pace.repeat(longest_string.length);
    // strings=strings.toString()
    console.log(strings.toString());
    var entry="";
    entry=entry.toString();
    // strings=strings.toString()
    console.log(strings)
    // let entry="";

    let x=strings
    for (let string of strings){
        // console.log(string)
        // entry=en" "+string)
        entry=entry+" "+place_holder.slice(0,place_holder.length-string.length)+string;
    }
       let entrys=entry.join();
       console.log("l  "+entrys)
    //    return entrys;

        
    // }
}