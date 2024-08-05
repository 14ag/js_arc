// this is an equivalent to echo 
export function println(...x){
    console.log(x);
}

export function binar_search(array, targetValue){
	let min = 0;
	let max = array.length - 1;
    let guess;
    let count=0;
    
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

export function to_binary(value){
    let b_inary="";
    while (value>0){
        b_inary=Number(value%2)+b_inary;
        value=Math.floor(value/2);
    }
    return b_inary;
}

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

    let g=strings
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