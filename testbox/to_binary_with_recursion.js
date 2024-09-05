import { to_binary, println, assertEqual } from "../utils";

function bin(n) {
    if (n === 0) {
        
        return 0;
    }
    function b2(n) {
        if (!(n > 0)) {
            return ""
        }
        return b2(Math.floor(n / 2)) + (n % 2).toString();

    }
    return b2(n) 
}
let x = 0;
println(" ")
println("expected : " + to_binary(x));
println("meanwhile: " + bin(x));