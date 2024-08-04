// this is an equivalent to echo 
export function println(x){
    console.log(x);
}

export function binar_search(array, targetValue) {
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
    let x;
    for (let i = 0; i < array.length; i++) {
        
        binary+=x
    }
    return binary;
}