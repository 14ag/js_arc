// this is an equivalent to echo 
export function println(x){
    console.log(x);
}

export function binar_search(array, targetValue){
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count=0;
    
    while(min<=max){
        guess = min+ Math.floor((max-min)*0.5);
        count++;
        println(guess);
        
        if(array[guess]===targetValue){
            println(count);
            return guess;
        } 
        else if (array[guess]<targetValue){
           min=guess+1;
        }
        else if (array[guess]>targetValue){
            max=guess-1;
        }
    }
    println(count);
    return -1;
}

export function to_binary(value){
    let b_inary="";
    let x=0;
    while (value>0){
        x=value%2;
        value=Math.floor(value/2);
        b_inary=x+b_inary;
    }
    return b_inary;
}

export function row_entry(x="noll"){
    x=x.toString()
    let place_holder="            ";
    if (x.length>place_holder.length){return x;}
    let entry=place_holder.slice(0,place_holder.length-x.length)+x;
    return entry;
}
